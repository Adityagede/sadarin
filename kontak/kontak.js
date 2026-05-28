

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



// =========================================
// KONTAK HERO SLIDER
// =========================================

// TARGET IMAGE
const kontakImage =
document.querySelector("#imgKontak img");

// LIST IMAGE
const kontakImages = [

    "/asset/img/kontak-hero.jpg",
    "/asset/img/kontak-hero1.jpg",
    "/asset/img/kontak-hero2.jpg"

];

let currentKontak = 0;

// =========================================
// PRELOAD IMAGE
// =========================================

kontakImages.forEach((src)=>{

    const img = new Image();

    img.src = src;

});

// =========================================
// CHANGE IMAGE
// =========================================

function changeKontakImage(){

    // FADE OUT
    kontakImage.style.opacity = "0";

    // CINEMATIC ZOOM
    kontakImage.style.transform =
        "scale(1.08)";

    setTimeout(()=>{

        // NEXT IMAGE
        currentKontak++;

        // RESET
        if(currentKontak >= kontakImages.length){

            currentKontak = 0;
        }

        // CHANGE IMAGE
        kontakImage.src =
            kontakImages[currentKontak];

        // SMOOTH SHOW
        requestAnimationFrame(()=>{

            kontakImage.style.opacity = "1";

            kontakImage.style.transform =
                "scale(1)";
        });

    },900);

}

// =========================================
// AUTO SLIDE
// =========================================

setInterval(changeKontakImage,6500);




// =========================================
// SADARIN WHATSAPP FORM
// =========================================

// FORM
const form =
document.getElementById("whatsappForm");

// BUTTON
const sendBtn =
document.getElementById("sendBtn");

// SUBMIT
form.addEventListener("submit",(e)=>{

    e.preventDefault();

    // START LOADING
    sendBtn.classList.add("loading");

    // GET VALUE
    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    const subject =
    document.getElementById("subject").value;

    const message =
    document.getElementById("message").value;

    const phone =
    "+6285180676238";

    // MESSAGE TEMPLATE
    const text =

`🌿 Halo Sadarin!

👤 Nama:
${name}

📧 Email:
${email}

📌 Subjek:
${subject}

💬 Pesan:
${message}

Terima kasih 🌱`;

    // ENCODE
    const encodedText =
    encodeURIComponent(text);

    // LOADING DELAY
    setTimeout(()=>{

        // HIDE LOADING
        sendBtn.classList.remove("loading");

        // SHOW SUCCESS
        sendBtn.classList.add("success");

        // DELAY SUCCESS
        setTimeout(()=>{

            // OPEN WHATSAPP
            window.open(

                `https://wa.me/${phone}?text=${encodedText}`,

                "_blank"
            );

            
            sendBtn.classList.remove("success");

        },1200);

    },1800);

});