'use client'
export default function Reports() {
    return (
        <section id="reports" className="page">
            <div className="container">
                <div className="report-selection">
                    <div className="page-header">
                        <div className="header-content">
                            <h1>نظام التقارير</h1>
                            <p>إنشاء وعرض التقارير التفصيلية للمعقبين والجولات</p>
                        </div>
                    </div>
                    <div className="report-card">
                        <div className="report-header">
                            <div className="report-icon">📊</div>
                            <h2>تقرير المعقب التفصيلي</h2>
                            <p>عرض تفصيلي لبيانات المعقب وجولاته</p>
                        </div>
                        <div className="report-form">
                            <div className="form-group">
                                <label htmlFor="muaqqibSelect">اختر المعقب</label>
                                <input id="muaqqibSelect" className="form-input" placeholder="ابحث عن المعقب..." />
                            </div>
                            <button className="btn-primary view-details-btn" disabled>
                                <span className="btn-icon">👁️</span>
                                <span>عرض التفاصيل</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}