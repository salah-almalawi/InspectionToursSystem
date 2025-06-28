'use client'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useCreateRoundMutation, useGetManagersQuery } from '@/services/api'
import useRequireAuth from '@/utils/requireAuth'

export default function NewRoundPage() {
    const router = useRouter()
    const [createRound, { isLoading, error }] = useCreateRoundMutation()
    const { data: managers = [] } = useGetManagersQuery()
    const [formData, setFormData] = useState({ managerId: '', location: '', day: '' })
    useRequireAuth()

    useEffect(() => {
        if (managers.length > 0 && !formData.managerId) {
            setFormData((f) => ({ ...f, managerId: managers[0]._id }))
        }
    }, [managers])

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            await createRound(formData).unwrap()
            router.push('/rounds')
        } catch (err) {
            console.error(err)
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>إضافة جولة جديدة</h1>
            <select name="managerId" value={formData.managerId} onChange={handleChange}>
                {managers.map((m) => (
                    <option key={m._id} value={m._id}>{m.name}</option>
                ))}
            </select>
            <input name="location" value={formData.location} onChange={handleChange} placeholder="Location" />
            <input name="day" value={formData.day} onChange={handleChange} placeholder="Day" />
            <button type="button" onClick={() => router.push('/rounds')}>Cancel</button>
            <button type="submit" disabled={isLoading}>Save</button>
            {error && <p>{error.data?.message || 'Error'}</p>}
        </form>
    )
}