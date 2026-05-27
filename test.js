
const chatWindow = document.getElementById('chat-window');
const chatbotToggle = document.getElementById('chatbot-toggle');
const chatMessages = document.getElementById('chat-messages');
const chatInput = document.getElementById('chat-input');

const scoreEl = document.getElementById("scoreValue");
const levelEl = document.getElementById("levelText");
const circle = document.querySelector(".score-circle");
const hamburger = document.getElementById("hamburger");
const mobileMenu = document.getElementById("mobileMenu");
const navbar = document.querySelector(".navbar");


// Buka/Tutup Chatbot
function toggleChat() {
    if (chatWindow.style.display === 'none' || chatWindow.style.display === '') {
        chatWindow.style.display = 'flex';
        chatbotToggle.style.display = 'none';
    } else {
        chatWindow.style.display = 'none';
        chatbotToggle.style.display = 'block';
    }
}

// Tangkap tombol Enter
function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

// Fungsi kirim pesan ke Backend
async function sendMessage() {
    const message = chatInput.value.trim();
    if (!message) return;

    // Tampilkan pesan user
    appendMessage(message, 'user-message');
    chatInput.value = '';

    // Tampilkan indikator loading (opsional)
    const loadingId = appendMessage('Mengetik...', 'bot-message');

    try {
        // Pastikan URL backend sesuai dengan port server.js kamu
        const response = await fetch('http://localhost:0808/api/chat', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: message })
        });

        const data = await response.json();
        
        // Hapus tulisan "Mengetik..."
        const loadingElement = document.getElementById(loadingId);
        if (loadingElement) loadingElement.remove();
        
        if (data.reply) {
            appendMessage(data.reply, 'bot-message');
        } else {
            appendMessage('Maaf, terjadi kesalahan.', 'bot-message');
        }
    } catch (error) {
        const loadingElement = document.getElementById(loadingId);
        if (loadingElement) loadingElement.remove();
        appendMessage('Gagal terhubung ke server.', 'bot-message');
    }
}

// Fungsi bantu untuk menambahkan div pesan ke layar
function appendMessage(text, className) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', className);
    messageDiv.textContent = text;
    
    // Generate ID unik untuk keperluan hapus pesan loading
    const id = 'msg-' + Date.now();
    messageDiv.id = id;
    
    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Scroll otomatis ke bawah
    return id;
}




// default
if (!localStorage.getItem("ecoScore")) {
  localStorage.setItem("ecoScore", "0");
}

// load
function loadScore() {
  let score = parseInt(localStorage.getItem("ecoScore")) || 0;

  scoreEl.textContent = score;

  updateCircle(score);
  updateLevel(score);
}

// warna bertahap
function getColor(score) {
  if (score === 0) return "#000000"; // hitam
  if (score <= 30) return "#e53935"; // merah
  if (score <= 70) return "#fbc02d"; // kuning
  return "#2E7D32"; // hijau
}

// update circle
function updateCircle(score) {
  const color = getColor(score);

  circle.style.background = `conic-gradient(
    ${color} 0% ${score}%,
    #e0e0e0 ${score}% 100%
  )`;
}

function updateLevel(score) {
  if (score === 0) {
    levelEl.textContent = "Belum Peduli";
  } 
  else if (score <= 30) {
    levelEl.textContent = "Mulai Sadar";
  } 
  else if (score <= 70) {
    levelEl.textContent = "Peduli Lingkungan";
  } 
  else {
    levelEl.textContent = "Penjaga Bumi 🌱";
  }
}

// tambah score (daily check-in)
function addScore(value) {
  let score = parseInt(localStorage.getItem("ecoScore")) || 0;

  score += value;
  if (score > 100) score = 100;

  localStorage.setItem("ecoScore", score);

  loadScore();
}

// load awal
window.addEventListener("load", loadScore);

/* =========================
hamburger
========================= */
hamburger.addEventListener("click", () => {

hamburger.classList.toggle("active");
mobileMenu.classList.toggle("active");

});


/* =========================
CLOSE MENU WHEN LINK CLICK
========================= */

const mobileLinks = document.querySelectorAll(".mobile-card a");

mobileLinks.forEach(link => {

link.addEventListener("click", () => {

hamburger.classList.remove("active");
mobileMenu.classList.remove("active");

});

});


/* =========================
STICKY NAVBAR
========================= */

window.addEventListener("scroll", () => {

if (window.scrollY > 50) {

navbar.classList.add("scrolled");

} else {

navbar.classList.remove("scrolled");

}

});

