document.addEventListener("DOMContentLoaded", () => {

    // =========================================
    // SADARIN FLOATING WA - SAFE MODE
    // =========================================

    const premiumWa = document.querySelector(".sadarin-float");
    const mascot = document.querySelector(".eco-mascot");

    if (premiumWa) {
        setInterval(() => {
            premiumWa.animate([
                {
                    transform: "translateY(0px)"
                },
                {
                    transform: "translateY(-6px)"
                },
                {
                    transform: "translateY(0px)"
                }
            ], {
                duration: 2600
            });
        }, 2600);

        premiumWa.addEventListener("mousemove", (e) => {
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

        premiumWa.addEventListener("mouseleave", () => {
            premiumWa.style.transform = "translate(0,0)";
        });
    }

    if (mascot) {
        setTimeout(() => {
            mascot.style.opacity = "1";
            mascot.style.transform = "translateX(0) scale(1)";

            setTimeout(() => {
                mascot.style.opacity = "0";
                mascot.style.transform = "translateX(30px) scale(.9)";
            }, 4000);

        }, 2500);
    }

    // =========================================
    // PREMIUM MOBILE MENU - SAFE MODE
    // =========================================

    const hamburger = document.getElementById("hamburger");
    const mobileMenu = document.getElementById("mobileMenu");
    const menuOverlay = document.getElementById("menuOverlay");
    const menuClose = document.getElementById("menuClose");

    if (hamburger && mobileMenu && menuOverlay) {
        hamburger.addEventListener("click", () => {
            hamburger.classList.toggle("active");
            mobileMenu.classList.toggle("active");
            menuOverlay.classList.toggle("active");
        });

        menuOverlay.addEventListener("click", () => {
            hamburger.classList.remove("active");
            mobileMenu.classList.remove("active");
            menuOverlay.classList.remove("active");
        });
    }

    if (menuClose && hamburger && mobileMenu && menuOverlay) {
        menuClose.addEventListener("click", () => {
            hamburger.classList.remove("active");
            mobileMenu.classList.remove("active");
            menuOverlay.classList.remove("active");
        });
    }

    const mobileDropdown = document.querySelector(".mobile-dropdown");
    const dropdownBtn = document.querySelector(".mobile-dropdown-btn");

    if (mobileDropdown && dropdownBtn) {
        dropdownBtn.addEventListener("click", () => {
            mobileDropdown.classList.toggle("active");
        });
    }

    // =========================================
    // BUMIMETER SIMULATION SYSTEM
    // =========================================

    const simulationCards = document.querySelectorAll(".simulation-card");
    const wasteType = document.getElementById("wasteType");
    const analyzeBtn = document.getElementById("analyzeBtn");

    const resultTitle = document.getElementById("resultTitle");
    const resultDesc = document.getElementById("resultDesc");
    const decomposeTime = document.getElementById("decomposeTime");
    const co2Impact = document.getElementById("co2Impact");
    const earthImpact = document.getElementById("earthImpact");
    const ecoAction = document.getElementById("ecoAction");
    const earthHealth = document.getElementById("earthHealth");

    const wasteData = {
        Plastik: {
            time: "450",
            co2: 6,
            impact: 88,
            action: 4,
            health: 60,
            desc: "Sampah plastik membutuhkan waktu sangat lama untuk terurai dan dapat mencemari lingkungan laut serta tanah."
        },

        Organik: {
            time: "2",
            co2: 2,
            impact: 30,
            action: 2,
            health: 90,
            desc: "Sampah organik lebih mudah terurai namun tetap menghasilkan gas metana jika tidak dikelola dengan baik."
        },

        Kertas: {
            time: "5",
            co2: 3,
            impact: 24,
            action: 2,
            health: 94,
            desc: "Kertas dapat didaur ulang sehingga membantu mengurangi penebangan pohon dan limbah lingkungan."
        },

        Elektronik: {
            time: "1000",
            co2: 10,
            impact: 95,
            action: 5,
            health: 40,
            desc: "Limbah elektronik mengandung zat berbahaya yang dapat mencemari air dan tanah jika dibuang sembarangan."
        }
    };

    if (simulationCards.length > 0 && wasteType) {
        simulationCards.forEach((card) => {
            card.addEventListener("click", () => {
                simulationCards.forEach((item) => {
                    item.classList.remove("active");
                });

                card.classList.add("active");

                const selected = card.dataset.type;

                if (selected) {
                    wasteType.value = selected;
                }
            });
        });
    }

    if (analyzeBtn) {
        analyzeBtn.addEventListener("click", (e) => {
            e.preventDefault();

            const selectedType = wasteType ? wasteType.value : "";
            const amountInput = document.getElementById("wasteAmount");
            const amount = amountInput ? Number(amountInput.value) : 0;

            if (!selectedType) {
                alert("Pilih jenis sampah terlebih dahulu");
                return;
            }

            if (!amount || amount <= 0) {
                alert("Masukkan jumlah sampah terlebih dahulu");
                return;
            }

            const data = wasteData[selectedType];

            if (!data) {
                alert("Data jenis sampah belum tersedia");
                return;
            }

            const totalCo2 = (data.co2 * amount).toFixed(1);
            const totalImpact = Math.min(data.impact + amount, 100);
            const health = Math.max(data.health - amount, 0);

            if (resultTitle) {
                resultTitle.innerText = "Dampak " + selectedType;
            }

            if (resultDesc) {
                resultDesc.innerText = data.desc;
            }

            if (decomposeTime) {
                decomposeTime.innerText = data.time;
            }

            if (co2Impact) {
                co2Impact.innerText = totalCo2 + "kg";
            }

            if (earthImpact) {
                earthImpact.innerText = totalImpact + "%";
            }

            if (ecoAction) {
                ecoAction.innerText = data.action;
            }

            if (earthHealth) {
                earthHealth.innerText = health + "%";
            }
        });
    }

});