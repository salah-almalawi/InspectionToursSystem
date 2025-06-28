'use client'
export default function Rounds() {
    return (
        <section id="rounds" className="page">
            <div className="container">
                <div className="page-header">
                    <div className="header-content">
                        <h1>إدارة الجولات التفتيشية</h1>
                        <p>تتبع وإدارة جميع الجولات التفتيشية</p>
                    </div>
                    <button className="btn-primary">
                        <span>+</span> إضافة جولة جديدة
                    </button>
                </div>
                <div className="rounds-grid">
                    <div className="round-card">
                        <div className="round-header">
                            <div className="round-location">
                                <span className="location-icon">📍</span>
                                <div>
                                    <h3>مبنى الإدارة الرئيسي</h3>
                                    <p>الأحد</p>
                                </div>
                            </div>
                        </div>
                        <div className="round-details">
                            <div className="detail-item">
                                <span className="detail-icon">👤</span>
                                <span>أحمد محمد السالم</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-icon">📅</span>
                                <span>15/5/1446 هـ</span>
                            </div>
                            <div className="detail-item">
                                <span className="detail-icon">🕐</span>
                                <span>09:30 صباحاً</span>
                            </div>
                        </div>
                        <div className="round-status">
                            <span className="status-badge completed">مكتملة</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}