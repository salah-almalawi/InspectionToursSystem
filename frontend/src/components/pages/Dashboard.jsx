'use client'
export default function Dashboard() {
    return (
        <section id="dashboard" className="page">
            <div className="container">
                <div className="page-header">
                    <h1>لوحة التحكم الرئيسية</h1>
                    <p>نظرة عامة على نشاط الجولات التفتيشية والمعقبين</p>
                </div>
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon blue">👥</div>
                        <div className="stat-info">
                            <h3>إجمالي المعقبين</h3>
                            <p className="stat-number">12</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon green">📅</div>
                        <div className="stat-info">
                            <h3>إجمالي الجولات</h3>
                            <p className="stat-number">45</p>
                        </div>
                    </div>
                    <div className="stat-card">
                        <div className="stat-icon purple">📈</div>
                        <div className="stat-info">
                            <h3>الجولات هذا الشهر</h3>
                            <p className="stat-number">8</p>
                        </div>
                    </div>
                </div>
                <div className="dashboard-grid">
                    <div className="card">
                        <h2>آخر الجولات</h2>
                        <div className="recent-rounds">
                            <div className="round-item">
                                <div className="round-info">
                                    <h4>مبنى الإدارة الرئيسي</h4>
                                    <p>أحمد محمد السالم</p>
                                </div>
                                <div className="round-date">
                                    <span>الأحد</span>
                                    <small>2024/01/15</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <h2>إجراءات سريعة</h2>
                        <div className="quick-actions">
                            <button className="action-btn">
                                <span className="action-icon">👥</span>
                                <span>إضافة معقب جديد</span>
                            </button>
                            <button className="action-btn">
                                <span className="action-icon">📅</span>
                                <span>إضافة جولة جديدة</span>
                            </button>
                            <button className="action-btn">
                                <span className="action-icon">🖨️</span>
                                <span>طباعة تقرير</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}