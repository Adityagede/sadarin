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
        min: 0,
        max: 99,
        title: 'Eco Starter',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="55" height="55">
            <rect width="90" height="90" x="5" y="5" rx="24" fill="#e8f8f0" />
            <defs>
                <linearGradient id="leafLeftGradStarter" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#1eb854" />
                    <stop offset="100%" stop-color="#62f28f" />
                </linearGradient>
                <linearGradient id="leafRightGradStarter" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stop-color="#16a34a" />
                    <stop offset="100%" stop-color="#4ade80" />
                </linearGradient>
                <linearGradient id="trunkGradStarter" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#a16207" />
                    <stop offset="100%" stop-color="#713f12" />
                </linearGradient>
            </defs>
            <g transform="translate(0, 4)">
                <path d="M 32 66 C 32 54, 68 54, 68 66 Z" fill="url(#trunkGradStarter)" />
                <rect x="48.5" y="32" width="3" height="34" rx="1.5" fill="url(#trunkGradStarter)" />
                <path d="M 48.5 54 C 35 52, 28 42, 31 36 C 39 34, 47 44, 48.5 54 Z" fill="url(#leafLeftGradStarter)" />
                <path d="M 51.5 54 C 65 52, 72 42, 69 36 C 61 34, 53 44, 51.5 54 Z" fill="url(#leafRightGradStarter)" />
            </g>
            </svg>`,
        next: 'Green Learner'
    },
    {
        min: 100,
        max: 249,
        title: 'Green Learner',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="55" height="55">
            <rect width="90" height="90" x="5" y="5" rx="24" fill="#e8f8f0" />
            <defs>
                <linearGradient id="leafLeftGradLearner" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stop-color="#1eb854" />
                    <stop offset="100%" stop-color="#62f28f" />
                </linearGradient>
                <linearGradient id="leafRightGradLearner" x1="100%" y1="100%" x2="0%" y2="0%">
                    <stop offset="0%" stop-color="#16a34a" />
                    <stop offset="100%" stop-color="#4ade80" />
                </linearGradient>
                <linearGradient id="trunkGradLearner" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#a16207" />
                    <stop offset="100%" stop-color="#713f12" />
                </linearGradient>
            </defs>
            <g transform="translate(0, 2)">
                <path d="M36 68 C36 62, 64 62, 64 68 Z" fill="url(#trunkGradLearner)" opacity="0.85" />
                <path d="M 32 70 C 40 64, 60 64, 68 70 Z" fill="url(#trunkGradLearner)" />
                <path d="M 48.5 32 C 48.5 32, 48 55, 46 66 L 54 66 C 52 55, 51.5 32, 51.5 32 Z" fill="url(#trunkGradLearner)" />
                <circle cx="50" cy="32" r="1.5" fill="#a16207" />
                <path d="M 47 54 C 36 54, 28 44, 30 38 C 36 36, 46 44, 47 54 Z" fill="url(#leafLeftGradLearner)" />
                <path d="M 47 54 C 42 47, 36 43, 31 39" fill="none" stroke="#e8f8f0" stroke-width="1.2" stroke-linecap="round" opacity="0.7" />
                <path d="M 53 54 C 64 54, 72 44, 70 38 C 64 36, 54 44, 53 54 Z" fill="url(#leafRightGradLearner)" />
                <path d="M 53 54 C 58 47, 64 43, 69 39" fill="none" stroke="#e8f8f0" stroke-width="1.2" stroke-linecap="round" opacity="0.7" />
            </g>
            </svg>`,
        next: 'Waste Warrior'
    },
    {
        min: 250,
        max: 499,
        title: 'Waste Warrior',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="55" height="55">
                <rect width="90" height="90" x="5" y="5" rx="24" fill="#e8f8f0" />
                <defs>
                    <linearGradient id="recycleLight" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#4ade80" />
                        <stop offset="100%" stop-color="#22c55e" />
                    </linearGradient>
                    <linearGradient id="recycleDark" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#15803d" />
                        <stop offset="100%" stop-color="#166534" />
                    </linearGradient>
                    <linearGradient id="recycleMuted" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#64748b" />
                        <stop offset="100%" stop-color="#334155" />
                    </linearGradient>
                </defs>
                <g transform="translate(50, 52)">
                    <g transform="rotate(0)">
                        <path d="M-6-22 C-2-22, 4-20, 7-16 C5-12, -2-10, -4-12 C-7-14, -8-19, -6-22 Z" fill="url(#recycleMuted)" />
                        <path d="M-20-15 C-12-25, 0-26, 6-22 C5-14, -2-4, -12,0 C-17,-2, -22,-8, -20,-15 Z" fill="url(#recycleLight)" />
                        <path d="M2-12 L14-7 C12-3, 9,2, 6,4 Z" fill="#22c55e" />
                    </g>
                    <g transform="rotate(120)">
                        <path d="M-6-22 C-2-22, 4-20, 7-16 C5-12, -2-10, -4-12 C-7-14, -8-19, -6-22 Z" fill="url(#recycleDark)" />
                        <path d="M-20-15 C-12-25, 0-26, 6-22 C5-14, -2-4, -12,0 C-17,-2, -22,-8, -20,-15 Z" fill="url(#recycleLight)" />
                        <path d="M2-12 L14-7 C12-3, 9,2, 6,4 Z" fill="#16a34a" />
                    </g>
                    <g transform="rotate(240)">
                        <path d="M-6-22 C-2-22, 4-20, 7-16 C5-12, -2-10, -4-12 C-7-14, -8-19, -6-22 Z" fill="url(#recycleDark)" />
                        <path d="M-20-15 C-12-25, 0-26, 6-22 C5-14, -2-4, -12,0 C-17,-2, -22,-8, -20,-15 Z" fill="#22c55e" />
                        <path d="M2-12 L14-7 C12-3, 9,2, 6,4 Z" fill="url(#recycleLight)" />
                    </g>
                </g>
                </svg>`,
        next: 'Earth Guardian'
    },
    {
        min: 500,
        max: 899,
        title: 'Earth Guardian',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="55" height="55">
                    <rect width="90" height="90" x="5" y="5" rx="24" fill="#eff6ff" />
                    <defs>
                        <linearGradient id="oceanBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stop-color="#4ba3fa" />
                            <stop offset="100%" stop-color="#1d63eb" />
                        </linearGradient>
                        <linearGradient id="landGreen" x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stop-color="#62f28f" />
                            <stop offset="100%" stop-color="#1eb854" />
                        </linearGradient>
                        <radialGradient id="globeGlow" cx="35%" cy="35%" r="65%">
                            <stop offset="0%" stop-color="#ffffff" stop-opacity="0.4" />
                            <stop offset="60%" stop-color="#000000" stop-opacity="0" />
                            <stop offset="100%" stop-color="#0b2866" stop-opacity="0.35" />
                        </radialGradient>
                    </defs>
                    <circle cx="50" cy="50" r="28" fill="url(#oceanBlue)" />
                    <g fill="url(#landGreen)">
                        <path d="M 32 36 C 31 40, 34 42, 38 40 C 41 38, 38 32, 34 32 C 32 32, 32 34, 32 36 Z" />
                        <path d="M 42 42 C 43 48, 48 46, 54 52 C 60 58, 68 50, 66 40 C 64 30, 56 26, 50 30 C 44 34, 40 36, 42 42 Z" />
                        <path d="M 58 58 C 56 63, 62 67, 66 64 C 70 61, 67 55, 62 54 C 59 53, 59 55, 58 58 Z" />
                        <path d="M 35 54 C 33 58, 37 64, 41 60 C 44 56, 38 52, 35 54 Z" />
                        <circle cx="48" cy="58" r="1.5" />
                    </g>
                    <circle cx="50" cy="50" r="28" fill="url(#globeGlow)" />
                </svg>`,
        next: 'Eco Hero'
    },
    {
        min: 900,
        max: 1499,
        title: 'Eco Hero',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="55" height="55">
            <rect width="90" height="90" x="5" y="5" rx="24" fill="#f0fdf4" />
            <defs>
                <linearGradient id="trophyGold" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#facc15" />
                    <stop offset="100%" stop-color="#ca8a04" />
                </linearGradient>
                <linearGradient id="handleGold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#ca8a04" />
                    <stop offset="100%" stop-color="#a16207" />
                </linearGradient>
                <linearGradient id="baseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#713f12" />
                    <stop offset="100%" stop-color="#422006" />
                </linearGradient>
                <radialGradient id="sphereShine" cx="30%" cy="30%" r="55%">
                    <stop offset="0%" stop-color="#ffffff" stop-opacity="0.3" />
                    <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
                </radialGradient>
            </defs>
            <g transform="translate(1, 4)">
                <g fill="none" stroke="url(#handleGold)" stroke-width="4" stroke-linecap="round">
                    <path d="M 33 42 C 26 42, 26 50, 33 50 Z" />
                    <path d="M 67 42 C 74 42, 74 50, 67 50 Z" />
                </g>
                <path d="M33 34 L67 34 C67 34, 66 54, 50 64 C34 54, 33 34, 33 34 Z" fill="url(#trophyGold)" />
                <path d="M48 64 C48 64, 48 72, 44 76 L56 76 C52 72, 52 64, 52 64 Z" fill="url(#baseGrad)" />
                <path d="M 36 78 C 40 75, 60 75, 64 78 Z" fill="url(#baseGrad)" />
                <circle cx="50" cy="46" r="16" fill="url(#sphereShine)" />
            </g>
            </svg>`,
        next: 'Legend Hijau'
    },
    {
        min: 1500,
        max: 999999,
        title: 'Legend Hijau',
        icon: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="55" height="55">
                <rect width="90" height="90" x="5" y="5" rx="24" fill="#fffbeb" />
                <defs>
                    <linearGradient id="goldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" stop-color="#fde047" />
                        <stop offset="100%" stop-color="#ca8a04" />
                    </linearGradient>
                    <linearGradient id="gemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#ef4444" />
                        <stop offset="100%" stop-color="#b91c1c" />
                    </linearGradient>
                </defs>
                <g transform="translate(0, 2)">
                    <path d="M 25 60 L 22 36 L 38 48 L 50 26 L 62 48 L 78 36 L 75 60 Z" fill="url(#goldGrad)" />
                    <path d="M 25 60 C 35 66, 65 66, 75 60" fill="none" stroke="#ca8a04" stroke-width="4" stroke-linecap="round" />
                    <path d="M 25 60 C 35 66, 65 66, 75 60" fill="none" stroke="#fef08a" stroke-width="1.5" stroke-linecap="round" />
                    <circle cx="22" cy="36" r="3" fill="url(#gemGrad)" />
                    <circle cx="50" cy="26" r="3.5" fill="url(#gemGrad)" />
                    <circle cx="78" cy="36" r="3" fill="url(#gemGrad)" />
                    <circle cx="50" cy="48" r="2.5" fill="url(#gemGrad)" />
                    <circle cx="38" cy="53" r="1.5" fill="url(#gemGrad)" />
                    <circle cx="62" cy="53" r="1.5" fill="url(#gemGrad)" />
                </g>
                </svg>`,
        next: 'Level Maksimal'
    }
];

const badgeData = [
    {
        icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="55" height="55">
            <rect width="90" height="90" x="5" y="5" rx="24" fill="#e8f8f0" />

            <defs>
                <linearGradient id="leafLeftGrad" x1="0%" y1="100%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#1eb854" />
                <stop offset="100%" stop-color="#62f28f" />
                </linearGradient>

                <linearGradient id="leafRightGrad" x1="100%" y1="100%" x2="0%" y2="0%">
                <stop offset="0%" stop-color="#16a34a" />
                <stop offset="100%" stop-color="#4ade80" />
                </linearGradient>

                <linearGradient id="trunkGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#a16207" />
                <stop offset="100%" stop-color="#713f12" />
                </linearGradient>
            </defs>

            <g transform="translate(0, 2)">
                <path d="M36 68 C36 62, 64 62, 64 68 Z" fill="url(#trunkGrad)" opacity="0.85" />
                <path d="M 32 70 C 40 64, 60 64, 68 70 Z" fill="url(#trunkGrad)" />

                <path d="M 48.5 32 C 48.5 32, 48 55, 46 66 L 54 66 C 52 55, 51.5 32, 51.5 32 Z" fill="url(#trunkGrad)" />
                <circle cx="50" cy="32" r="1.5" fill="#a16207" />

                <path d="M 47 54 C 36 54, 28 44, 30 38 C 36 36, 46 44, 47 54 Z" fill="url(#leafLeftGrad)" />
                <path d="M 47 54 C 42 47, 36 43, 31 39" fill="none" stroke="#e8f8f0" stroke-width="1.2" stroke-linecap="round" opacity="0.7" />

                <path d="M 53 54 C 64 54, 72 44, 70 38 C 64 36, 54 44, 53 54 Z" fill="url(#leafRightGrad)" />
                <path d="M 53 54 C 58 47, 64 43, 69 39" fill="none" stroke="#e8f8f0" stroke-width="1.2" stroke-linecap="round" opacity="0.7" />
            </g>
            </svg>`,
        title:'Langkah Pertama',
        desc:'Mencatat aktivitas pertama di JejakHijau.',
        condition:function(stats){ return stats.activityCount >= 1; }
    },
    {
        icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="55" height="55">
                <circle cx="50" cy="50" r="45" fill="#f0fdf4" />

                <g transform="translate(50, 52)">
                    
                    <g transform="rotate(0)">
                    <polygon points="-6,-24 8,-21 4,-14 -6,-17" fill="#15803d" />
                    <polygon points="-18,-18 4,-26 0,-6 -14,2" fill="#86efac" />
                    <polygon points="4,-11 14,-5 5,3" fill="#22c55e" />
                    </g>

                    <g transform="rotate(120)">
                    <polygon points="-6,-24 8,-21 4,-14 -6,-17" fill="#166534" />
                    <polygon points="-18,-18 4,-26 0,-6 -14,2" fill="#4ade80" />
                    <polygon points="4,-11 14,-5 5,3" fill="#22c55e" />
                    </g>

                    <g transform="rotate(240)">
                    <polygon points="-6,-24 8,-21 4,-14 -6,-17" fill="#334155" />
                    <polygon points="-18,-18 4,-26 0,-6 -14,2" fill="#22c55e" />
                    <polygon points="4,-11 14,-5 5,3" fill="#4ade80" />
                    </g>
                    
                </g>
                </svg>`,
        title:'Pemilah Sampah',
        desc:'Mencatat minimal 5 aktivitas ramah lingkungan.',
        condition:function(stats){ return stats.activityCount >= 5; }
    },
    {
        icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="45" height="45">
                    <defs>
                        <linearGradient id="fireGrad" x1="0%" y1="100%" x2="0%" y2="0%">
                        <stop offset="0%" stop-color="#ef4444" />
                        <stop offset="60%" stop-color="#f97316" />
                        <stop offset="100%" stop-color="#facc15" />
                        </linearGradient>
                    </defs>

                    <circle cx="50" cy="50" r="45" fill="#fff5f5" />
                    
                    <path d="M50 25c0 0 12 12 12 24 0 7-5 13-12 13s-12-6-12-13c0-4 2-9 5-13 1 3 3 5 5 5 0-4 1-10 2-13z" fill="url(#fireGrad)" />
                    <path d="M50 40c0 0 6 6 6 12 0 4-3 7-6 7s-6-3-6-7c0-2 1-4 3-6 0 1 1 2 2 2 0-2 1-5 1-6z" fill="#fef08a" opacity="0.9" />
                </svg>`,
        title:'Eco Streak',
        desc:'Memiliki minimal 3 hari aktivitas tercatat.',
        condition:function(stats){ return stats.streak >= 3; }
    },
    {
        icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="55" height="55">
                <rect width="90" height="90" x="5" y="5" rx="24" fill="#f0fdf4" />

                <defs>
                    <linearGradient id="trophyGold" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#facc15" />
                    <stop offset="100%" stop-color="#ca8a04" />
                    </linearGradient>
                    
                    <linearGradient id="handleGold" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stop-color="#ca8a04" />
                    <stop offset="100%" stop-color="#a16207" />
                    </linearGradient>
                    
                    <linearGradient id="baseGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stop-color="#713f12" />
                    <stop offset="100%" stop-color="#422006" />
                    </linearGradient>

                    <radialGradient id="sphereShine" cx="30%" cy="30%" r="55%">
                    <stop offset="0%" stop-color="#ffffff" stop-opacity="0.3" />
                    <stop offset="100%" stop-color="#ffffff" stop-opacity="0" />
                    </radialGradient>
                </defs>

                <g transform="translate(1, 4)">
                    <g fill="none" stroke="url(#handleGold)" stroke-width="4" stroke-linecap="round">
                    <path d="M 33 42 C 26 42, 26 50, 33 50 Z" />
                    <path d="M 67 42 C 74 42, 74 50, 67 50 Z" />
                    </g>
                    
                    <path d="M33 34 L67 34 C67 34, 66 54, 50 64 C34 54, 33 34, 33 34 Z" fill="url(#trophyGold)" />
                    
                    <path d="M48 64 C48 64, 48 72, 44 76 L56 76 C52 72, 52 64, 52 64 Z" fill="url(#baseGrad)" />
                    <path d="M 36 78 C 40 75, 60 75, 64 78 Z" fill="url(#baseGrad)" />
                    
                    <circle cx="50" cy="46" r="16" fill="url(#sphereShine)" />
                </g>
                </svg>`,
        title:'Point Collector',
        desc:'Mengumpulkan minimal 300 SadarPoint.',
        condition:function(stats){ return stats.totalPoint >= 300; }
    },
    {
        icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="55" height="55">
                    <circle cx="50" cy="50" r="45" fill="#f0fdf4" />

                    <defs>
                        <linearGradient id="seaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="#60a5fa" />   <stop offset="100%" stop-color="#2563eb" /> </linearGradient>
                        <radialGradient id="atmosphere" cx="50%" cy="50%" r="50%" fx="30%" fy="30%">
                        <stop offset="0%" stop-color="#ffffff" stop-opacity="0.4"/>
                        <stop offset="80%" stop-color="#1e3a8a" stop-opacity="0"/>
                        <stop offset="100%" stop-color="#1e3a8a" stop-opacity="0.3"/>
                        </radialGradient>
                    </defs>

                    <circle cx="50" cy="50" r="28" fill="url(#seaGrad)" />

                    <g fill="#4ade80">
                        <path d="M32 34 C31 38, 26 36, 28 42 C30 46, 36 44, 35 48 C34 51, 39 52, 42 46 C44 42, 40 38, 43 36 C45 34, 40 30, 36 31 C33 32, 33 34, 32 34 Z" />
                        
                        <path d="M48 28 C52 26, 56 30, 60 27 C64 24, 70 29, 72 34 C74 38, 68 40, 71 44 C73 47, 68 50, 64 47 C60 44, 62 40, 56 42 C51 44, 53 36, 48 35 C44 34, 45 30, 48 28 Z" fill="#22c55e" />
                        
                        <path d="M33 52 C35 55, 38 58, 36 62 C34 66, 39 69, 41 73 C42 75, 44 71, 43 67 C42 63, 46 60, 44 56 C42 53, 38 54, 35 51 C34 51, 33 52, 33 52 Z" />
                        
                        <path d="M58 56 C61 54, 65 56, 68 54 C71 52, 73 56, 70 59 C67 62, 68 66, 63 65 C59 64, 56 60, 58 56 Z" fill="#22c55e" />
                        
                        <circle cx="49" cy="54" r="2" />
                        <circle cx="53" cy="51" r="1.5" />
                        <circle cx="44" cy="61" r="1" />
                    </g>

                    <circle cx="50" cy="50" r="28" fill="url(#atmosphere)" />
                </svg>`,
        title:'Earth Guardian',
        desc:'Mengelola minimal 50kg sampah tercatat.',
        condition:function(stats){ return stats.totalKg >= 50; }
    },
    {
        icon:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="55" height="55">
            <rect width="90" height="90" x="5" y="5" rx="24" fill="#fffbeb" />

            <defs>
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#fde047" />   <stop offset="100%" stop-color="#ca8a04" /> </linearGradient>
                <linearGradient id="gemGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#ef4444" />
                <stop offset="100%" stop-color="#b91c1c" />
                </linearGradient>
            </defs>

            <g transform="translate(0, 2)">
                <path d="M 25 60 
                        L 22 36 
                        L 38 48 
                        L 50 26 
                        L 62 48 
                        L 78 36 
                        L 75 60 
                        Z" 
                    fill="url(#goldGrad)" />

                <path d="M 25 60 C 35 66, 65 66, 75 60" fill="none" stroke="#ca8a04" stroke-width="4" stroke-linecap="round" />
                <path d="M 25 60 C 35 66, 65 66, 75 60" fill="none" stroke="#fef08a" stroke-width="1.5" stroke-linecap="round" />

                <circle cx="22" cy="36" r="3" fill="url(#gemGrad)" />
                <circle cx="50" cy="26" r="3.5" fill="url(#gemGrad)" />
                <circle cx="78" cy="36" r="3" fill="url(#gemGrad)" />

                <circle cx="50" cy="48" r="2.5" fill="url(#gemGrad)" />
                <circle cx="38" cy="53" r="1.5" fill="url(#gemGrad)" />
                <circle cx="62" cy="53" r="1.5" fill="url(#gemGrad)" />
            </g>
            </svg>`,
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

