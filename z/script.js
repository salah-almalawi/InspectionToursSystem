// Sample data for reports
const muaqqibsData = {
    1: {
        id: 1,
        name: "أحمد محمد السالم",
        rank: "نقيب",
        department: "قسم الأمن",
        phone: "0501234567",
        email: "ahmed@example.com",
        employeeId: "EMP001",
        joinDate: "2020-01-15",
        status: "نشط",
        rounds: [
            {
                id: 1,
                location: "مبنى الإدارة الرئيسي",
                date: "2024-01-15",
                time: "09:30 صباحاً",
                day: "الأحد",
                type: "تفتيش أمني",
                status: "مكتملة",
                outcome: "لا توجد مخالفات",
                notes: "تم فحص جميع المداخل والمخارج"
            },
            {
                id: 2,
                location: "موقف السيارات الرئيسي",
                date: "2024-01-12",
                time: "02:15 مساءً",
                day: "الخميس",
                type: "تفتيش عام",
                status: "مكتملة",
                outcome: "مخالفة بسيطة",
                notes: "وجود سيارات في أماكن غير مخصصة"
            },
            {
                id: 3,
                location: "قسم الاستقبال",
                date: "2024-01-10",
                time: "11:00 صباحاً",
                day: "الثلاثاء",
                type: "تفتيش أمني",
                status: "مكتملة",
                outcome: "ممتاز",
                notes: "جميع الإجراءات الأمنية مطبقة بشكل صحيح"
            },
            {
                id: 4,
                location: "المطعم الرئيسي",
                date: "2024-01-08",
                time: "01:30 مساءً",
                day: "الأحد",
                type: "تفتيش صحي",
                status: "مكتملة",
                outcome: "جيد",
                notes: "تم التأكد من معايير النظافة والسلامة"
            },
            {
                id: 5,
                location: "قسم تقنية المعلومات",
                date: "2024-01-05",
                time: "10:45 صباحاً",
                day: "الخميس",
                type: "تفتيش تقني",
                status: "مكتملة",
                outcome: "يحتاج متابعة",
                notes: "بعض الأجهزة تحتاج صيانة"
            },
            {
                id: 6,
                location: "المكتبة العامة",
                date: "2024-01-03",
                time: "03:00 مساءً",
                day: "الثلاثاء",
                type: "تفتيش عام",
                status: "مكتملة",
                outcome: "ممتاز",
                notes: "بيئة مناسبة للدراسة والقراءة"
            }
        ]
    },
    2: {
        id: 2,
        name: "خالد عبدالله النصر",
        rank: "رائد",
        department: "قسم الإدارة",
        phone: "0507654321",
        email: "khalid@example.com",
        employeeId: "EMP002",
        joinDate: "2019-03-20",
        status: "نشط",
        rounds: [
            {
                id: 7,
                location: "قسم الموارد البشرية",
                date: "2024-01-14",
                time: "10:00 صباحاً",
                day: "السبت",
                type: "تفتيش إداري",
                status: "مكتملة",
                outcome: "جيد",
                notes: "تنظيم الملفات والوثائق بشكل مناسب"
            },
            {
                id: 8,
                location: "قسم المحاسبة",
                date: "2024-01-11",
                time: "02:30 مساءً",
                day: "الخميس",
                type: "تفتيش مالي",
                status: "مكتملة",
                outcome: "ممتاز",
                notes: "جميع السجلات المالية منظمة ومحدثة"
            },
            {
                id: 9,
                location: "قاعة الاجتماعات الكبرى",
                date: "2024-01-09",
                time: "09:15 صباحاً",
                day: "الثلاثاء",
                type: "تفتيش عام",
                status: "مكتملة",
                outcome: "جيد",
                notes: "الأجهزة السمعية والبصرية تعمل بكفاءة"
            }
        ]
    },
    3: {
        id: 3,
        name: "محمد سعد الغامدي",
        rank: "مقدم",
        department: "قسم المستودعات",
        phone: "0509876543",
        email: "mohammed@example.com",
        employeeId: "EMP003",
        joinDate: "2018-07-10",
        status: "نشط",
        rounds: [
            {
                id: 10,
                location: "المستودع الرئيسي",
                date: "2024-01-13",
                time: "08:00 صباحاً",
                day: "الجمعة",
                type: "تفتيش مخزون",
                status: "مكتملة",
                outcome: "يحتاج متابعة",
                notes: "بعض المواد تحتاج إعادة ترتيب"
            },
            {
                id: 11,
                location: "مستودع المواد الغذائية",
                date: "2024-01-10",
                time: "11:30 صباحاً",
                day: "الثلاثاء",
                type: "تفتيش صحي",
                status: "مكتملة",
                outcome: "ممتاز",
                notes: "جميع المواد مخزنة وفق المعايير الصحية"
            },
            {
                id: 12,
                location: "مستودع المعدات التقنية",
                date: "2024-01-07",
                time: "01:00 مساءً",
                day: "السبت",
                type: "تفتيش تقني",
                status: "مكتملة",
                outcome: "جيد",
                notes: "المعدات محفوظة في بيئة مناسبة"
            }
        ]
    },
    4: {
        id: 4,
        name: "عبدالرحمن أحمد الزهراني",
        rank: "عقيد",
        department: "قسم العمليات",
        phone: "0502345678",
        email: "abdulrahman@example.com",
        employeeId: "EMP004",
        joinDate: "2017-11-05",
        status: "نشط",
        rounds: [
            {
                id: 13,
                location: "مركز العمليات الرئيسي",
                date: "2024-01-12",
                time: "07:00 صباحاً",
                day: "الخميس",
                type: "تفتيش عمليات",
                status: "مكتملة",
                outcome: "ممتاز",
                notes: "جميع الأنظمة تعمل بكفاءة عالية"
            },
            {
                id: 14,
                location: "غرفة التحكم المركزية",
                date: "2024-01-09",
                time: "06:30 صباحاً",
                day: "الثلاثاء",
                type: "تفتيش تقني",
                status: "مكتملة",
                outcome: "جيد",
                notes: "بعض الشاشات تحتاج معايرة"
            }
        ]
    },
    5: {
        id: 5,
        name: "فهد سليمان القحطاني",
        rank: "ملازم أول",
        department: "قسم التدريب",
        phone: "0508765432",
        email: "fahad@example.com",
        employeeId: "EMP005",
        joinDate: "2021-02-28",
        status: "نشط",
        rounds: [
            {
                id: 15,
                location: "قاعة التدريب الرئيسية",
                date: "2024-01-11",
                time: "09:00 صباحاً",
                day: "الخميس",
                type: "تفتيش تدريبي",
                status: "مكتملة",
                outcome: "ممتاز",
                notes: "المعدات التدريبية في حالة ممتازة"
            },
            {
                id: 16,
                location: "مختبر المحاكاة",
                date: "2024-01-08",
                time: "02:00 مساءً",
                day: "الأحد",
                type: "تفتيش تقني",
                status: "مكتملة",
                outcome: "جيد",
                notes: "أجهزة المحاكاة تعمل بشكل طبيعي"
            }
        ]
    }
};

// Get all rounds for comprehensive table
function getAllRounds() {
    const allRounds = [];
    Object.values(muaqqibsData).forEach(muaqqib => {
        muaqqib.rounds.forEach(round => {
            allRounds.push({
                ...round,
                muaqqibName: muaqqib.name,
                muaqqibRank: muaqqib.rank,
                muaqqibDepartment: muaqqib.department
            });
        });
    });
    
    // Sort by date (newest first)
    return allRounds.sort((a, b) => new Date(b.date) - new Date(a.date));
}

// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation
    initNavigation();
    
    // Initialize search functionality
    initSearch();
    
    // Initialize forms
    initForms();
    
    // Initialize reports
    initReports();
    
    // Show dashboard by default
    showPage('dashboard');
});

// Navigation
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');
    
    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const page = this.getAttribute('data-page');
            if (page) {
                showPage(page);
                setActiveNavLink(this);
            }
        });
    });
    
    // Mobile menu toggle
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
        });
    }
}

function showPage(pageId) {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });
    
    // Show selected page
    const targetPage = document.getElementById(pageId);
    if (targetPage) {
        targetPage.classList.add('active');
    }
    
    // Update URL hash
    window.location.hash = pageId;
}

function setActiveNavLink(activeLink) {
    // Remove active class from all nav links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.classList.remove('active');
    });
    
    // Add active class to clicked link
    activeLink.classList.add('active');
}

// Reports functionality
function initReports() {
    const searchInput = document.getElementById('muaqqibSearch');
    const dropdown = document.getElementById('muaqqibDropdown');
    const viewBtn = document.getElementById('viewDetailsBtn');
    
    if (!searchInput || !dropdown || !viewBtn) return;
    
    let selectedMuaqqib = null;
    
    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const items = dropdown.querySelectorAll('.dropdown-item');
        let hasVisibleItems = false;
        
        items.forEach(item => {
            const name = item.getAttribute('data-name').toLowerCase();
            const rank = item.getAttribute('data-rank').toLowerCase();
            const department = item.getAttribute('data-department').toLowerCase();
            
            if (name.includes(searchTerm) || rank.includes(searchTerm) || department.includes(searchTerm)) {
                item.style.display = 'block';
                hasVisibleItems = true;
            } else {
                item.style.display = 'none';
            }
        });
        
        if (searchTerm && hasVisibleItems) {
            dropdown.classList.add('show');
        } else {
            dropdown.classList.remove('show');
        }
    });
    
    // Focus/blur events
    searchInput.addEventListener('focus', function() {
        if (this.value) {
            dropdown.classList.add('show');
        }
    });
    
    searchInput.addEventListener('blur', function() {
        // Delay hiding to allow item selection
        setTimeout(() => {
            dropdown.classList.remove('show');
        }, 200);
    });
    
    // Item selection
    dropdown.addEventListener('click', function(e) {
        const item = e.target.closest('.dropdown-item');
        if (item) {
            const id = item.getAttribute('data-id');
            const name = item.getAttribute('data-name');
            
            searchInput.value = name;
            selectedMuaqqib = id;
            dropdown.classList.remove('show');
            viewBtn.disabled = false;
        }
    });
}

function generateReport() {
    const selectedId = getSelectedMuaqqibId();
    if (!selectedId) return;
    
    const muaqqib = muaqqibsData[selectedId];
    if (!muaqqib) return;
    
    // Hide selection view and show report details
    document.getElementById('reportSelection').style.display = 'none';
    document.getElementById('reportDetails').style.display = 'block';
    
    // Generate report content
    const reportContent = document.getElementById('reportContent');
    reportContent.innerHTML = generateReportHTML(muaqqib);
    
    // Initialize filters
    initReportFilters();
}

function getSelectedMuaqqibId() {
    const searchInput = document.getElementById('muaqqibSearch');
    const selectedName = searchInput.value;
    
    for (const [id, muaqqib] of Object.entries(muaqqibsData)) {
        if (muaqqib.name === selectedName) {
            return id;
        }
    }
    return null;
}

function generateReportHTML(muaqqib) {
    const currentDate = new Date().toLocaleDateString('ar-SA');
    const lastSixRounds = muaqqib.rounds.slice(0, 6);
    const allRounds = getAllRounds();
    
    return `
        <div class="report-title">
            <h1>تقرير المعقب التفصيلي</h1>
            <p class="report-date">تاريخ التقرير: ${currentDate}</p>
        </div>
        
        <div class="profile-section">
            <div class="profile-header">
                <div class="profile-avatar">
                    ${muaqqib.name.charAt(0)}
                </div>
                <div class="profile-info">
                    <h2>${muaqqib.name}</h2>
                    <p>${muaqqib.rank} - ${muaqqib.department}</p>
                </div>
            </div>
            
            <div class="profile-details">
                <div class="detail-row">
                    <span class="detail-label">الرتبة:</span>
                    <span class="detail-value">${muaqqib.rank}</span>
                </div>
                <div class="detail-row">
                    <span class="detail-label">القسم:</span>
                    <span class="detail-value">${muaqqib.department}</span>
                </div>
            </div>
        </div>
        
        <div class="recent-rounds-section">
            <h3 class="section-title">
                <span>📅</span>
                آخر 6 جولات
            </h3>
            <div class="rounds-summary">
                ${lastSixRounds.map(round => `
                    <div class="round-summary-card">
                        <div class="round-summary-header">
                            <span class="round-summary-title">${round.location}</span>
                            <span class="round-summary-date">${round.date}</span>
                        </div>
                        <div class="round-summary-details">
                            <div class="round-summary-item">
                                <span>📅</span>
                                <span>${round.day} - ${round.time}</span>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
        
        <div class="all-rounds-section">
            <h3 class="section-title">
                <span>📊</span>
                جدول شامل لجميع الجولات (جميع المعقبين)
            </h3>
            
            
            <div class="table-container">
                <table class="rounds-table" id="allRoundsTable">
                    <thead>
                        <tr>
                            <th>التاريخ</th>
                            <th>المعقب</th>
                            <th>الرتبة</th>
                            <th>الموقع</th>
                            <th>الوقت</th>
                  
                        </tr>
                    </thead>
                    <tbody>
                        ${allRounds.map(round => `
                            <tr data-date="${round.date}" data-status="${round.status}" data-muaqqib="${round.muaqqibName}">
                                <td>${round.date}</td>
                                <td>${round.muaqqibName}</td>
                                <td>${round.muaqqibRank}</td>
                                <td>${round.location}</td>
                                <td>${round.time}</td>
                            </tr>
                        `).join('')}
                    </tbody>
                </table>
            </div>
        </div>
    `;
}

function initReportFilters() {
    const dateFrom = document.getElementById('dateFrom');
    const dateTo = document.getElementById('dateTo');
    const statusFilter = document.getElementById('statusFilter');
    const muaqqibFilter = document.getElementById('muaqqibFilter');
    
    if (!dateFrom || !dateTo || !statusFilter || !muaqqibFilter) return;
    
    const filterTable = () => {
        const table = document.getElementById('allRoundsTable');
        const rows = table.querySelectorAll('tbody tr');
        
        rows.forEach(row => {
            const date = row.getAttribute('data-date');
            const status = row.getAttribute('data-status');
            const muaqqib = row.getAttribute('data-muaqqib');
            
            let show = true;
            
            // Date filter
            if (dateFrom.value && date < dateFrom.value) show = false;
            if (dateTo.value && date > dateTo.value) show = false;
            
            // Status filter
            if (statusFilter.value && status !== statusFilter.value) show = false;
            
            // Muaqqib filter
            if (muaqqibFilter.value && muaqqib !== muaqqibFilter.value) show = false;
            
            row.style.display = show ? '' : 'none';
        });
    };
    
    dateFrom.addEventListener('change', filterTable);
    dateTo.addEventListener('change', filterTable);
    statusFilter.addEventListener('change', filterTable);
    muaqqibFilter.addEventListener('change', filterTable);
}

function backToSelection() {
    document.getElementById('reportSelection').style.display = 'block';
    document.getElementById('reportDetails').style.display = 'none';
}

function printReport() {
    window.print();
}

function exportToPDF() {
    const reportContent = document.getElementById('reportContent');
    
    // Show loading
    showNotification('جاري إنشاء ملف PDF...', 'info');
    
    // Use html2canvas and jsPDF
    html2canvas(reportContent, {
        scale: 2,
        useCORS: true,
        allowTaint: true
    }).then(canvas => {
        const imgData = canvas.toDataURL('image/png');
        const pdf = new jsPDF('p', 'mm', 'a4');
        
        const imgWidth = 210;
        const pageHeight = 295;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        
        let position = 0;
        
        pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
        
        while (heightLeft >= 0) {
            position = heightLeft - imgHeight;
            pdf.addPage();
            pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
            heightLeft -= pageHeight;
        }
        
        const selectedName = document.getElementById('muaqqibSearch').value;
        const fileName = `تقرير_${selectedName}_${new Date().toISOString().split('T')[0]}.pdf`;
        
        pdf.save(fileName);
        showNotification('تم تصدير التقرير بنجاح!', 'success');
    }).catch(error => {
        console.error('Error generating PDF:', error);
        showNotification('خطأ في تصدير التقرير', 'error');
    });
}

// Search functionality
function initSearch() {
    const managerSearch = document.getElementById('managerSearch');
    
    if (managerSearch) {
        managerSearch.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            filterManagers(searchTerm);
        });
    }
}

function filterManagers(searchTerm) {
    const tableRows = document.querySelectorAll('#managersTableBody tr');
    
    tableRows.forEach(row => {
        const managerName = row.querySelector('.manager-link').textContent.toLowerCase();
        const department = row.cells[2].textContent.toLowerCase();
        
        if (managerName.includes(searchTerm) || department.includes(searchTerm)) {
            row.style.display = '';
        } else {
            row.style.display = 'none';
        }
    });
}

// Form functionality
function initForms() {
    // Handle form submissions
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmit(this);
        });
    });
    
    // Handle delete buttons
    const deleteButtons = document.querySelectorAll('.btn-icon.delete');
    deleteButtons.forEach(button => {
        button.addEventListener('click', function() {
            handleDelete(this);
        });
    });
    
    // Special handling for new round form
    const newRoundForm = document.getElementById('newRoundForm');
    if (newRoundForm) {
        newRoundForm.addEventListener('submit', function(e) {
            e.preventDefault();
            handleNewRoundSubmit(this);
        });
    }
}

function handleFormSubmit(form) {
    // Get form data
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    
    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'جاري الحفظ...';
    submitButton.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Show success message
        showNotification('تم الحفظ بنجاح!', 'success');
        
        // Reset form
        form.reset();
        
        // Hide modal if open
        const modal = form.closest('.modal');
        if (modal) {
            modal.style.display = 'none';
        }
        
        // Hide form if it's the add round form
        const formContainer = form.closest('.form-container');
        if (formContainer && formContainer.id === 'addRoundForm') {
            formContainer.style.display = 'none';
        }
    }, 1500);
}

function handleNewRoundSubmit(form) {
    // Get form data
    const formData = new FormData(form);
    const data = {
        managerId: formData.get('managerId'),
        location: formData.get('location'),
        day: formData.get('day'),
        year: parseInt(formData.get('year')),
        month: parseInt(formData.get('month')),
        dayNumber: parseInt(formData.get('dayNumber')),
        time: formData.get('time')
    };
    
    // Validate required fields
    if (!data.managerId || !data.location || !data.day || !data.year || !data.month || !data.dayNumber || !data.time) {
        showNotification('يرجى ملء جميع الحقول المطلوبة', 'error');
        return;
    }
    
    // Validate date ranges
    if (data.year < 1400 || data.year > 1500) {
        showNotification('السنة يجب أن تكون بين 1400 و 1500', 'error');
        return;
    }
    
    if (data.month < 1 || data.month > 12) {
        showNotification('الشهر يجب أن يكون بين 1 و 12', 'error');
        return;
    }
    
    if (data.dayNumber < 1 || data.dayNumber > 30) {
        showNotification('اليوم يجب أن يكون بين 1 و 30', 'error');
        return;
    }
    
    // Show loading state
    const submitButton = form.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    submitButton.textContent = 'جاري الحفظ...';
    submitButton.disabled = true;
    
    // Simulate API call with the structured data
    setTimeout(() => {
        // Reset button
        submitButton.textContent = originalText;
        submitButton.disabled = false;
        
        // Show success message with data structure
        console.log('Round data structure:', {
            managerId: data.managerId,
            location: data.location,
            day: data.day,
            Hijri: {
                year: data.year,
                month: data.month,
                day: data.dayNumber,
                time: data.time
            }
        });
        
        showNotification('تم إضافة الجولة بنجاح!', 'success');
        
        // Add new round to the grid
        addRoundToGrid(data);
        
        // Reset form
        form.reset();
        
        // Hide form
        hideAddRoundForm();
    }, 1500);
}

function addRoundToGrid(data) {
    const roundsGrid = document.querySelector('.rounds-grid');
    const managerNames = {
        '1': 'أحمد محمد السالم',
        '2': 'خالد عبدالله النصر',
        '3': 'محمد سعد الغامدي'
    };
    
    const managerName = managerNames[data.managerId] || 'معقب غير معروف';
    
    const roundCard = document.createElement('div');
    roundCard.className = 'round-card';
    roundCard.style.opacity = '0';
    roundCard.style.transform = 'translateY(20px)';
    
    roundCard.innerHTML = `
        <div class="round-header">
            <div class="round-location">
                <span class="location-icon">📍</span>
                <div>
                    <h3>${data.location}</h3>
                    <p>${data.day}</p>
                </div>
            </div>
        </div>
        <div class="round-details">
            <div class="detail-item">
                <span class="detail-icon">👤</span>
                <span>${managerName}</span>
            </div>
            <div class="detail-item">
                <span class="detail-icon">📅</span>
                <span>${data.dayNumber}/${data.month}/${data.year} هـ</span>
            </div>
            <div class="detail-item">
                <span class="detail-icon">🕐</span>
                <span>${data.time}</span>
            </div>
        </div>
        <div class="round-status">
            <span class="status-badge completed">مكتملة</span>
        </div>
    `;
    
    // Insert at the beginning of the grid
    roundsGrid.insertBefore(roundCard, roundsGrid.firstChild);
    
    // Animate in
    setTimeout(() => {
        roundCard.style.transition = 'all 0.3s ease';
        roundCard.style.opacity = '1';
        roundCard.style.transform = 'translateY(0)';
    }, 100);
}

function handleDelete(button) {
    if (confirm('هل أنت متأكد من الحذف؟')) {
        const row = button.closest('tr');
        if (row) {
            row.style.opacity = '0.5';
            
            setTimeout(() => {
                row.remove();
                showNotification('تم الحذف بنجاح!', 'success');
            }, 500);
        }
    }
}

// Modal functionality
function showAddManagerForm() {
    const modal = document.getElementById('addManagerModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

function hideAddManagerForm() {
    const modal = document.getElementById('addManagerModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

function showAddRoundForm() {
    const form = document.getElementById('addRoundForm');
    if (form) {
        form.style.display = 'block';
        form.scrollIntoView({ behavior: 'smooth' });
    }
}

function hideAddRoundForm() {
    const form = document.getElementById('addRoundForm');
    if (form) {
        form.style.display = 'none';
    }
}

// Notification system
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '1rem 1.5rem',
        borderRadius: '10px',
        color: 'white',
        fontWeight: '600',
        zIndex: '3000',
        transform: 'translateX(100%)',
        transition: 'transform 0.3s ease',
        maxWidth: '300px'
    });
    
    // Set background color based on type
    switch (type) {
        case 'success':
            notification.style.background = 'linear-gradient(135deg, #48bb78 0%, #38a169 100%)';
            break;
        case 'error':
            notification.style.background = 'linear-gradient(135deg, #f56565 0%, #e53e3e 100%)';
            break;
        default:
            notification.style.background = 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)';
    }
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after delay
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

// Handle browser back/forward
window.addEventListener('hashchange', function() {
    const hash = window.location.hash.substring(1);
    if (hash) {
        showPage(hash);
        
        // Update active nav link
        const navLink = document.querySelector(`[data-page="${hash}"]`);
        if (navLink) {
            setActiveNavLink(navLink);
        }
    }
});

// Close modal when clicking outside
window.addEventListener('click', function(e) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Keyboard shortcuts
document.addEventListener('keydown', function(e) {
    // ESC to close modals
    if (e.key === 'Escape') {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
            }
        });
        
        // Hide add round form
        const addRoundForm = document.getElementById('addRoundForm');
        if (addRoundForm && addRoundForm.style.display === 'block') {
            addRoundForm.style.display = 'none';
        }
        
        // Back to selection in reports
        const reportDetails = document.getElementById('reportDetails');
        if (reportDetails && reportDetails.style.display === 'block') {
            backToSelection();
        }
    }
});

// Simulate real-time updates
function simulateRealTimeUpdates() {
    // Update stats periodically
    setInterval(() => {
        const statNumbers = document.querySelectorAll('.stat-number');
        statNumbers.forEach(stat => {
            const currentValue = parseInt(stat.textContent);
            // Randomly increase or decrease by 1
            const change = Math.random() > 0.7 ? (Math.random() > 0.5 ? 1 : -1) : 0;
            const newValue = Math.max(0, currentValue + change);
            
            if (change !== 0) {
                stat.style.transform = 'scale(1.1)';
                stat.textContent = newValue;
                
                setTimeout(() => {
                    stat.style.transform = 'scale(1)';
                }, 200);
            }
        });
    }, 10000); // Update every 10 seconds
}

// Initialize real-time updates
simulateRealTimeUpdates();

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add loading animation for page transitions
function addLoadingAnimation() {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.addEventListener('transitionstart', function() {
            this.style.opacity = '0.5';
        });
        
        page.addEventListener('transitionend', function() {
            this.style.opacity = '1';
        });
    });
}

addLoadingAnimation();

// Initialize tooltips
function initTooltips() {
    const tooltipElements = document.querySelectorAll('[title]');
    
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip';
            tooltip.textContent = this.getAttribute('title');
            
            Object.assign(tooltip.style, {
                position: 'absolute',
                background: '#2d3748',
                color: 'white',
                padding: '0.5rem',
                borderRadius: '6px',
                fontSize: '0.8rem',
                zIndex: '4000',
                pointerEvents: 'none',
                whiteSpace: 'nowrap'
            });
            
            document.body.appendChild(tooltip);
            
            const rect = this.getBoundingClientRect();
            tooltip.style.top = (rect.top - tooltip.offsetHeight - 5) + 'px';
            tooltip.style.left = (rect.left + rect.width / 2 - tooltip.offsetWidth / 2) + 'px';
            
            this._tooltip = tooltip;
        });
        
        element.addEventListener('mouseleave', function() {
            if (this._tooltip) {
                this._tooltip.remove();
                this._tooltip = null;
            }
        });
    });
}

initTooltips();