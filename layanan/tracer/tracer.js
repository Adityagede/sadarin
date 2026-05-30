// =========================================
// PREMIUM MOBILE MENU
// =========================================

const hamburger =
document.getElementById("hamburger");

const mobileMenu =
document.getElementById("mobileMenu");

const menuOverlay =
document.getElementById("menuOverlay");

// TOGGLE MENU
hamburger.addEventListener("click", () => {

    hamburger.classList.toggle("active");

    mobileMenu.classList.toggle("active");

    menuOverlay.classList.toggle("active");
});

// CLOSE SAAT KLIK OVERLAY
menuOverlay.addEventListener("click", () => {

    hamburger.classList.remove("active");

    mobileMenu.classList.remove("active");

    menuOverlay.classList.remove("active");
});

//active dropdown
const mobileDropdown = document.querySelector(".mobile-dropdown");
const dropdownBtn = document.querySelector(".mobile-dropdown-btn");

dropdownBtn.addEventListener("click", () => {
    mobileDropdown.classList.toggle("active");
});

// =========================================
// CLOSE BUTTON
// =========================================

const menuClose =
document.getElementById("menuClose");

// CLOSE MENU
menuClose.addEventListener("click", () => {

    hamburger.classList.remove("active");

    mobileMenu.classList.remove("active");

    menuOverlay.classList.remove("active");
});






/* ===============================
   SADARPOINT CONNECTED TO JEJAKHIJAU
   localStorage key: sadarinActivities
================================ */

const activities = JSON.parse(localStorage.getItem('sadarinActivities')) || [];

const pointPerKg = 10;

const levelData = [
    {
        min:0,
        max:99,
        title:'Eco Starter',
        icon:'🌱',
        next:'Green Learner'
    },
    {
        min:100,
        max:249,
        title:'Green Learner',
        icon:'🌿',
        next:'Waste Warrior'
    },
    {
        min:250,
        max:499,
        title:'Waste Warrior',
        icon:'♻️',
        next:'Earth Guardian'
    },
    {
        min:500,
        max:899,
        title:'Earth Guardian',
        icon:'🌍',
        next:'Eco Hero'
    },
    {
        min:900,
        max:1499,
        title:'Eco Hero',
        icon:'🏆',
        next:'Legend Hijau'
    },
    {
        min:1500,
        max:999999,
        title:'Legend Hijau',
        icon:'👑',
        next:'Level Maksimal'
    }
];

const badgeData = [
    {
        icon:'🌱',
        title:'Langkah Pertama',
        desc:'Mencatat aktivitas pertama di JejakHijau.',
        condition:function(stats){ return stats.activityCount >= 1; }
    },
    {
        icon:'♻️',
        title:'Pemilah Sampah',
        desc:'Mencatat minimal 5 aktivitas ramah lingkungan.',
        condition:function(stats){ return stats.activityCount >= 5; }
    },
    {
        icon:'🔥',
        title:'Eco Streak',
        desc:'Memiliki minimal 3 hari aktivitas tercatat.',
        condition:function(stats){ return stats.streak >= 3; }
    },
    {
        icon:'🏆',
        title:'Point Collector',
        desc:'Mengumpulkan minimal 300 SadarPoint.',
        condition:function(stats){ return stats.totalPoint >= 300; }
    },
    {
        icon:'🌍',
        title:'Earth Guardian',
        desc:'Mengelola minimal 50kg sampah tercatat.',
        condition:function(stats){ return stats.totalKg >= 50; }
    },
    {
        icon:'👑',
        title:'Legend Hijau',
        desc:'Mengumpulkan minimal 1500 SadarPoint.',
        condition:function(stats){ return stats.totalPoint >= 1500; }
    }
];

function safeNumber(value){
    const numberValue = Number(value);

    if(isNaN(numberValue)){
        return 0;
    }

    return numberValue;
}

function getActivityDate(activity){
    if(activity.date){
        return activity.date;
    }

    if(activity.createdAt){
        return activity.createdAt;
    }

    return new Date().toISOString();
}

function calculateStats(){
    let totalKg = 0;
    let totalPoint = 0;

    const category = {
        Plastik:0,
        Organik:0,
        Kertas:0,
        Elektronik:0
    };

    const dateSet = new Set();

    activities.forEach(function(activity){
        const amount = safeNumber(activity.amount);
        const point = Math.floor(amount * pointPerKg);

        totalKg += amount;
        totalPoint += point;

        if(category[activity.type] !== undefined){
            category[activity.type] += amount;
        }

        const activityDate = getActivityDate(activity).slice(0,10);
        dateSet.add(activityDate);
    });

    return {
        totalKg:totalKg,
        totalPoint:totalPoint,
        activityCount:activities.length,
        co2Saved:Number((totalKg * 0.5).toFixed(1)),
        streak:dateSet.size,
        category:category
    };
}

function getCurrentLevel(totalPoint){
    for(let i = 0; i < levelData.length; i++){
        const level = levelData[i];

        if(totalPoint >= level.min && totalPoint <= level.max){
            return level;
        }
    }

    return levelData[0];
}

function getLevelProgress(totalPoint, level){
    if(level.title === 'Legend Hijau'){
        return 100;
    }

    const range = level.max - level.min + 1;
    const current = totalPoint - level.min;

    return Math.min(Math.max((current / range) * 100, 0), 100);
}

function getPointNeed(totalPoint, level){
    if(level.title === 'Legend Hijau'){
        return 'Level maksimal';
    }

    const need = level.max + 1 - totalPoint;
    return need + ' poin lagi';
}

function formatKg(value){
    if(value % 1 === 0){
        return value + 'kg';
    }

    return value.toFixed(1) + 'kg';
}

function renderHero(stats){
    const currentLevel = getCurrentLevel(stats.totalPoint);
    const levelProgress = getLevelProgress(stats.totalPoint, currentLevel);
    const ringDegree = Math.round((levelProgress / 100) * 360);

    document.getElementById('levelTitle').innerText = currentLevel.title;
    document.getElementById('levelIcon').innerText = currentLevel.icon;
    document.getElementById('totalPoint').innerText = stats.totalPoint;
    document.getElementById('nextLevelText').innerText = 'Menuju ' + currentLevel.next;
    document.getElementById('pointNeed').innerText = getPointNeed(stats.totalPoint, currentLevel);

    document.getElementById('levelFill').style.width = levelProgress + '%';
    document.getElementById('progressRing').style.background =
    'conic-gradient(#22c55e 0deg, #22c55e ' + ringDegree + 'deg, #e2e8f0 ' + ringDegree + 'deg)';
}

function renderStats(stats){
    document.getElementById('totalKg').innerText = formatKg(stats.totalKg);
    document.getElementById('co2Saved').innerText = stats.co2Saved + 'kg';
    document.getElementById('streakDay').innerText = stats.streak;
    document.getElementById('activityCount').innerText = stats.activityCount;
}

function renderBadges(stats){
    const badgeGrid = document.getElementById('badgeGrid');
    badgeGrid.innerHTML = '';

    badgeData.forEach(function(badge){
        const unlocked = badge.condition(stats);

        const card = document.createElement('div');
        card.className = unlocked ? 'achievement-card' : 'achievement-card locked';

        card.innerHTML = `
            <div class="achievement-icon">${badge.icon}</div>

            <div class="achievement-text">
                <h3>${badge.title}</h3>
                <p>${badge.desc}</p>
            </div>

            <div class="achievement-status">
                ${unlocked ? 'Terbuka' : 'Terkunci'}
            </div>
        `;

        badgeGrid.appendChild(card);
    });
}

function renderCategory(stats){
    const categoryList = document.getElementById('categoryList');
    categoryList.innerHTML = '';

    const categoryIcons = {
        Plastik:`<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#2ECC71" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M7 21h10a2 2 0 0 0 2-2V10l-3-4V3a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v3L5 10v9a2 2 0 0 0 2 2z"></path>
                                    <line x1="9" y1="2" x2="15" y2="2"></line>
                                    <line x1="5" y1="10" x2="19" y2="10"></line>
                                    <path d="M12 10v11"></path>
                                </svg>`,
        Organik:`<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#D3BA29" stroke-width="2">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8h-5a7 7 0 0 0-5 10Z"/>
                    <path d="M3 21c3-2 3-5 5-8"/>
                </svg>`,

        Kertas:`<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#4A90E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <line x1="16" y1="13" x2="8" y2="13"></line>
                                    <line x1="16" y1="17" x2="8" y2="17"></line>
                                    <polyline points="10 9 9 9 8 9"></polyline>
                                </svg>`,
        Elektronik:`<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#F1C40F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                                                    <rect x="9" y="9" width="6" height="6"></rect>
                                                    <line x1="9" y1="1" x2="9" y2="4"></line>
                                                    <line x1="15" y1="1" x2="15" y2="4"></line>
                                                    <line x1="9" y1="20" x2="9" y2="23"></line>
                                                    <line x1="15" y1="20" x2="15" y2="23"></line>
                                                    <line x1="20" y1="9" x2="23" y2="9"></line>
                                                    <line x1="20" y1="15" x2="23" y2="15"></line>
                                                    <line x1="1" y1="9" x2="4" y2="9"></line>
                                                    <line x1="1" y1="15" x2="4" y2="15"></line>
                                                </svg>`,
    };

    const fillClass = {
        Plastik:'fill-plastik',
        Organik:'fill-organik',
        Kertas:'fill-kertas',
        Elektronik:'fill-elektronik'
    };

    Object.keys(stats.category).forEach(function(type){
        const amount = stats.category[type];
        const percent = stats.totalKg === 0 ? 0 : Math.round((amount / stats.totalKg) * 100);

        const row = document.createElement('div');
        row.className = 'category-row';

        row.innerHTML = `
            <div class="category-top">
                <div class="category-name">
                    <span>${categoryIcons[type]}</span>
                    <span>${type}</span>
                </div>
                <span>${formatKg(amount)} • ${percent}%</span>
            </div>

            <div class="category-bar">
                <div class="category-fill ${fillClass[type]}" style="width:${percent}%;"></div>
            </div>
        `;

        categoryList.appendChild(row);
    });
}

function renderTimeline(){
    const timelineList = document.getElementById('timelineList');
    timelineList.innerHTML = '';

    if(activities.length === 0){
        timelineList.innerHTML = `
            <div class="timeline-empty">
                Belum ada aktivitas. Mulai tambahkan data di halaman JejakHijau agar SadarPoint kamu muncul di sini.
            </div>
        `;
        return;
    }

    const icons = {
         Plastik:`<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#2ECC71" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M7 21h10a2 2 0 0 0 2-2V10l-3-4V3a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v3L5 10v9a2 2 0 0 0 2 2z"></path>
                                    <line x1="9" y1="2" x2="15" y2="2"></line>
                                    <line x1="5" y1="10" x2="19" y2="10"></line>
                                    <path d="M12 10v11"></path>
                                </svg>`,
        Organik:`<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#D3BA29" stroke-width="2">
                    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8h-5a7 7 0 0 0-5 10Z"/>
                    <path d="M3 21c3-2 3-5 5-8"/>
                </svg>`,

        Kertas:`<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#4A90E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <line x1="16" y1="13" x2="8" y2="13"></line>
                                    <line x1="16" y1="17" x2="8" y2="17"></line>
                                    <polyline points="10 9 9 9 8 9"></polyline>
                                </svg>`,
        Elektronik:`<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#F1C40F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                    <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                                                    <rect x="9" y="9" width="6" height="6"></rect>
                                                    <line x1="9" y1="1" x2="9" y2="4"></line>
                                                    <line x1="15" y1="1" x2="15" y2="4"></line>
                                                    <line x1="9" y1="20" x2="9" y2="23"></line>
                                                    <line x1="15" y1="20" x2="15" y2="23"></line>
                                                    <line x1="20" y1="9" x2="23" y2="9"></line>
                                                    <line x1="20" y1="15" x2="23" y2="15"></line>
                                                    <line x1="1" y1="9" x2="4" y2="9"></line>
                                                    <line x1="1" y1="15" x2="4" y2="15"></line>
                                                </svg>`,
    };

    const recentActivities = activities.slice(-5).reverse();

    recentActivities.forEach(function(activity){
        const amount = safeNumber(activity.amount);
        const point = Math.floor(amount * pointPerKg);
        const note = activity.note || 'Aktivitas JejakHijau';

        const item = document.createElement('div');
        item.className = 'timeline-item';

        item.innerHTML = `
            <div class="timeline-left">
                <div class="timeline-icon">${icons[activity.type] || '🌱'}</div>
                <div class="timeline-text">
                    <h4>${activity.type} • ${formatKg(amount)}</h4>
                    <p>${note}</p>
                </div>
            </div>
            <div class="timeline-point">+${point}</div>
        `;

        timelineList.appendChild(item);
    });
}

function renderMission(stats){
    const activityProgress = Math.min((stats.activityCount / 5) * 100, 100);
    const pointProgress = Math.min((stats.totalPoint / 300) * 100, 100);

    document.getElementById('missionActivity').style.width = activityProgress + '%';
    document.getElementById('missionPoint').style.width = pointProgress + '%';
}

function renderDashboard(){
    const stats = calculateStats();

    renderHero(stats);
    renderStats(stats);
    renderBadges(stats);
    renderCategory(stats);
    renderTimeline();
    renderMission(stats);
}

const resetDataBtn = document.getElementById('resetDataBtn');

resetDataBtn.addEventListener('click', function(){
    const confirmReset = confirm('Yakin ingin menghapus semua data JejakHijau dan SadarPoint?');

    if(confirmReset){
        localStorage.removeItem('sadarinActivities');
        location.reload();
    }
});

renderDashboard();

