'use client'
export default function Login() {
    return (
        <section id="login" className="page">
            <div className="login-container">
                <div className="login-card">
                    <div className="login-header">
                        <div className="login-icon">🔐</div>
                        <h2>تسجيل الدخول</h2>
                        <p>ادخل إلى نظام إدارة الجولات التفتيشية</p>
                    </div>
                    <form className="login-form">
                        <div className="form-group">
                            <label>اسم المستخدم</label>
                            <input type="text" className="form-input" placeholder="أدخل اسم المستخدم" />
                        </div>
                        <div className="form-group">
                            <label>كلمة المرور</label>
                            <input type="password" className="form-input" placeholder="أدخل كلمة المرور" />
                        </div>
                        <button type="submit" className="btn-primary full-width">تسجيل الدخول</button>
                    </form>
                </div>
            </div>
        </section>
    );
}