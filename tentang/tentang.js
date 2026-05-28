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
// TENTANG HERO SLIDER
// =========================================

// TARGET IMAGE
const heroImage =
document.querySelector("#hertan img");

// LIST IMAGE
const heroImages = [

    "../asset/img/tentang-img1.jpg",
    "../asset/img/tentang-img2.jpg",
    "../asset/img/tentang-img3.jpg",
    "../asset/img/tentang-img4.jpg"

];

let current = 0;

// =========================================
// PRELOAD IMAGE
// =========================================

heroImages.forEach((src)=>{

    const img = new Image();

    img.src = src;

});

// =========================================
// CHANGE HERO IMAGE
// =========================================

function changeHeroImage(){

    // FADE OUT
    heroImage.style.opacity = "0";

    // ZOOM EFFECT
    heroImage.style.transform =
        "scale(1.08)";

    setTimeout(()=>{

        // NEXT IMAGE
        current++;

        // RESET
        if(current >= heroImages.length){

            current = 0;
        }

        // CHANGE SRC
        heroImage.src = heroImages[current];

        // SMOOTH SHOW
        requestAnimationFrame(()=>{

            heroImage.style.opacity = "1";

            heroImage.style.transform =
                "scale(1)";
        });

    },900);

}

// =========================================
// AUTO SLIDE
// =========================================

setInterval(changeHeroImage,6500);



const impactItems = document.querySelectorAll(".impact-item");

impactItems.forEach((item) => {
    item.addEventListener("click", () => {

        impactItems.forEach((card) => {
            card.classList.remove("active");
        });

        item.classList.add("active");

    });
});