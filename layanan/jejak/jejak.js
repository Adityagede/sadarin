const cards = document.querySelectorAll('.category-card');
const wasteType = document.getElementById('wasteType');
const saveBtn = document.getElementById('saveBtn');
const historyGrid = document.getElementById('historyGrid');

const scoreDisplay = document.getElementById('scoreDisplay');
const totalKg = document.getElementById('totalKg');
const activityCount = document.getElementById('activityCount');
const co2Saved = document.getElementById('co2Saved');
const impactKg = document.getElementById('impactKg');
const impactPoint = document.getElementById('impactPoint');


const premiumWa = document.querySelector('.sadarin-float');
const mascot = document.querySelector('.eco-mascot');

// FLOATING EFFECT
setInterval(() => {

    premiumWa.animate([
        {
            transform: 'translateY(0px)'
        },

        {
            transform: 'translateY(-6px)'
        },

        {
            transform: 'translateY(0px)'
        }

    ],{
        duration: 2600
    });

},2600);

// AUTO SHOW MASCOT
setTimeout(() => {

    mascot.style.opacity = '1';
    mascot.style.transform = 'translateX(0) scale(1)';

    setTimeout(() => {

        mascot.style.opacity = '0';
        mascot.style.transform = 'translateX(30px) scale(.9)';

    },4000);

},2500);

// MAGNETIC CURSOR EFFECT
premiumWa.addEventListener('mousemove', (e) => {

    const rect = premiumWa.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    premiumWa.style.transform = `
        translate(
            ${(x - rect.width / 2) / 18}px,
            ${(y - rect.height / 2) / 18}px
        )
    `;
});

premiumWa.addEventListener('mouseleave', () => {

    premiumWa.style.transform = 'translate(0,0)';
});



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





let activities = JSON.parse(localStorage.getItem('sadarinActivities')) || [];

cards.forEach(card => {

card.addEventListener('click', () => {

cards.forEach(c => c.classList.remove('active'));
card.classList.add('active');

const selected = card.dataset.type;

wasteType.value = selected;

});

});

const plastikSvg = `
<svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#2ECC71" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M7 21h10a2 2 0 0 0 2-2V10l-3-4V3a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v3L5 10v9a2 2 0 0 0 2 2z"></path>
                                    <line x1="9" y1="2" x2="15" y2="2"></line>
                                    <line x1="5" y1="10" x2="19" y2="10"></line>
                                    <path d="M12 10v11"></path>
                                </svg>`;

const organikSvg = `
<svg viewBox="0 0 24 24" fill="none" stroke="#D3BA29" stroke-width="2">
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8h-5a7 7 0 0 0-5 10Z"/>
    <path d="M3 21c3-2 3-5 5-8"/>
</svg>`;

const kertasSvg = `
 <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#4A90E2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                    <polyline points="14 2 14 8 20 8"></polyline>
                                    <line x1="16" y1="13" x2="8" y2="13"></line>
                                    <line x1="16" y1="17" x2="8" y2="17"></line>
                                    <polyline points="10 9 9 9 8 9"></polyline>
                                </svg>`;

const elektronikSvg = `
 <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#F1C40F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
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
                                                </svg>`;

function renderActivities(){

historyGrid.innerHTML = '';

let totalPoint = 0;
let totalWaste = 0;

activities.forEach(activity => {

let icon = plastikSvg;
let color = 'green';

if(activity.type === 'Organik'){
icon = organikSvg;
color = 'yellow';
}

if(activity.type === 'Kertas'){
icon = kertasSvg;
color = 'blue';
}

if(activity.type === 'Elektronik'){
icon = elektronikSvg;
color = 'red';
}

const point = Math.floor(activity.amount * 10);

const card = document.createElement('div');
card.classList.add('history-card');

card.innerHTML = `

<div class="history-left">

<div class="history-icon ${color}">
${icon}
</div>

<div class="history-text">
<h3>${activity.type}</h3>
<p>${activity.note}</p>
</div>

</div>

<div class="history-score">
<h4>+${point}</h4>
<p>SadarPoint</p>
</div>

`;

historyGrid.prepend(card);

totalPoint += point;
totalWaste += Number(activity.amount);

});

scoreDisplay.innerText = totalPoint;
impactPoint.innerText = totalPoint;

const wasteText = totalWaste + 'kg';

impactKg.innerText = wasteText;
totalKg.innerText = wasteText;

activityCount.innerText = activities.length;

const co2 = (totalWaste * 0.5).toFixed(1);
co2Saved.innerText = co2 + 'kg';

}

saveBtn.addEventListener('click', () => {

const type = wasteType.value;
const amount = document.getElementById('wasteAmount').value;
const note = document.getElementById('activityNote').value;

if(amount === '' || note === ''){
alert('Lengkapi data terlebih dahulu');
return;
}

const activity = {
type,
amount,
note
};

activities.push(activity);

localStorage.setItem(
'sadarinActivities',
JSON.stringify(activities)
);

renderActivities();

alert('Aktivitas berhasil disimpan 🌱');

// reset

document.getElementById('wasteAmount').value = '';
document.getElementById('activityNote').value = '';

});

renderActivities();
