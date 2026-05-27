// =========================================
// SADARIN ULTRA PREMIUM INTERACTIVE WA
// =========================================

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


// =========================================
// CINEMATIC SCROLL EFFECT
// =========================================

const heroContent = document.querySelector(".hero-content");

const heroImagesCard = document.querySelector(".hero-images");

window.addEventListener("scroll", () => {

    const scrollY = window.scrollY;

    // CONTENT PARALLAX
    heroContent.style.transform = `
    
        translateY(${scrollY * 0.18}px)
    
    `;

    // IMAGE CARD PARALLAX
    heroImagesCard.style.transform = `
    
        translateY(${scrollY * 0.10}px)
    
    `;

});


//layanan storage
const sadarinActivities = JSON.parse(
    localStorage.getItem("sadarinActivities")
) || [];

let totalKg = 0;
let totalPoint = 0;

sadarinActivities.forEach(activity => {
    totalKg += Number(activity.amount);
    totalPoint += Math.floor(Number(activity.amount) * 10);
});

const totalCo2 = (totalKg * 0.5).toFixed(1);
const level = Math.max(1, Math.floor(totalPoint / 100) + 1);

const jejakKg = document.getElementById("jejakKg");
const jejakAktivitas = document.getElementById("jejakAktivitas");
const bumiCo2 = document.getElementById("bumiCo2");
const sadarPoint = document.getElementById("sadarPoint");
const sadarLevel = document.getElementById("sadarLevel");

const jejakProgress = document.getElementById("jejakProgress");
const bumiProgress = document.getElementById("bumiProgress");
const pointProgress = document.getElementById("pointProgress");

if (jejakKg) jejakKg.innerText = totalKg + "kg";
if (jejakAktivitas) jejakAktivitas.innerText = sadarinActivities.length;
if (bumiCo2) bumiCo2.innerText = totalCo2 + "kg";
if (sadarPoint) sadarPoint.innerText = totalPoint;
if (sadarLevel) sadarLevel.innerText = "Lv." + level;

if (jejakProgress) {
    jejakProgress.style.width = Math.min(totalKg * 10, 100) + "%";
}

if (bumiProgress) {
    bumiProgress.style.width = Math.min(totalCo2 * 10, 100) + "%";
}

if (pointProgress) {
    pointProgress.style.width = Math.min(totalPoint / 3, 100) + "%";
}



window.handlelike = function () {

    const ratingContent = document.getElementById("ratingContent");

    ratingContent.innerHTML = `

        <div class="feedback-message">
            <h3>Terima Kasih!</h3>
        </div>

    `;
}
window.handDislike = function () {

    const ratingContent = document.getElementById("ratingContent");

    ratingContent.innerHTML = `

        <div class="feedback-message">
            <h3>Maaf Ya...</h3>
        </div>

    `;
}


const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {

    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");
    const icon = item.querySelector(".faq-icon");

    question.addEventListener("click", () => {

        // CEK APAKAH SUDAH ACTIVE
        const isOpen = item.classList.contains("active");

        // TUTUP SEMUA FAQ
        faqItems.forEach((faq) => {

            faq.classList.remove("active");

            faq.querySelector(".faq-answer").style.maxHeight = null;

            faq.querySelector(".faq-icon").textContent = "+";
        });

        // JIKA BELUM ACTIVE → BUKA
        if(!isOpen){

            item.classList.add("active");

            answer.style.maxHeight = answer.scrollHeight + "px";

            icon.textContent = "−";
        }

    });

});



// =========================================
// SADARIN WHATSAPP FORM
// =========================================

const form = document.querySelector(".form-lokasi form");

form.addEventListener("submit", function(e){

    // MENCEGAH FORM RELOAD
    e.preventDefault();

    // AMBIL VALUE INPUT
    const name = form.querySelector('input[name="name"]').value;
    const email = form.querySelector('input[name="email"]').value;
    const message = form.querySelector('textarea[name="message"]').value;

    // NOMOR WHATSAPP
    const phoneNumber = "6281246890251";

    // FORMAT PESAN
    const whatsappMessage = 
`Halo Sadarin 🌿

Nama : ${name}
Email : ${email}

Pesan :
${message}`;

    // ENCODE URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // LINK WA
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    // REDIRECT KE WHATSAPP
    window.open(whatsappURL, "_blank");
});


