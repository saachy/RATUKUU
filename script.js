// ================================
// DOLLAR BERGERAK
// ================================

const moneyContainer = document.getElementById("money-container");

function createMoney() {
    const money = document.createElement("div");

    money.className = "money";
    money.textContent = "$";

    // Posisi horizontal acak
    money.style.left = Math.random() * 100 + "vw";

    // Ukuran acak
    money.style.fontSize = (12 + Math.random() * 20) + "px";

    // Kecepatan acak
    const duration = 4 + Math.random() * 6;
    money.style.animationDuration = duration + "s";

    moneyContainer.appendChild(money);

    // Hapus setelah animasi selesai
    setTimeout(function () {
        money.remove();
    }, duration * 1000);
}

// Membuat dollar terus menerus
setInterval(createMoney, 300);


// ================================
// PARTIKEL BERKILAU
// ================================

const particles = document.getElementById("particles");

function createParticle() {
    const particle = document.createElement("div");

    particle.className = "particle";

    particle.style.left = Math.random() * 100 + "vw";

    const size = 1 + Math.random() * 3;

    particle.style.width = size + "px";
    particle.style.height = size + "px";

    const duration = 5 + Math.random() * 8;

    particle.style.animationDuration = duration + "s";

    particles.appendChild(particle);

    setTimeout(function () {
        particle.remove();
    }, duration * 1000);
}

// Membuat partikel
setInterval(createParticle, 200);


// ================================
// EFEK SAAT KLIK
// ================================

document.addEventListener("click", function (event) {

    for (let i = 0; i < 8; i++) {

        const spark = document.createElement("div");

        spark.className = "particle";

        spark.style.position = "fixed";

        spark.style.left = event.clientX + "px";
        spark.style.top = event.clientY + "px";

        spark.style.width = "4px";
        spark.style.height = "4px";

        document.body.appendChild(spark);

        // Arah gerakan acak
        const angle = Math.random() * Math.PI * 2;
        const distance = 30 + Math.random() * 70;

        const x = Math.cos(angle) * distance;
        const y = Math.sin(angle) * distance;

        spark.animate(
            [
                {
                    transform: "translate(0px, 0px)",
                    opacity: 1
                },
                {
                    transform: "translate(" + x + "px, " + y + "px)",
                    opacity: 0
                }
            ],
            {
                duration: 800,
                easing: "ease-out"
            }
        );

        setTimeout(function () {
            spark.remove();
        }, 800);
    }

});