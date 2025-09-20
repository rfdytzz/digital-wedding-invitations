function openInvitation() {
  const name = document.getElementById("guestName").value.trim();
  if (name === "") {
    alert("Silakan masukkan nama terlebih dahulu.");
    return;
  }
  document.getElementById("guestDisplay").textContent = name;
  document.getElementById("welcomePage").style.display = "none";
  document.getElementById("invitationPage").style.display = "flex";
}

// Countdown ke tanggal pernikahan
const weddingDate = new Date("Oct 12, 2025 09:00:00").getTime();
const countdownEl = document.getElementById("countdown");

setInterval(() => {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  if (distance < 0) {
    countdownEl.innerHTML = "Acara sudah dimulai 🎉";
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownEl.innerHTML = `Hitung Mundur: ${days} Hari ${hours} Jam ${minutes} Menit ${seconds} Detik`;
}, 1000);
