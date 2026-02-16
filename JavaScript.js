// Modal
function openModal(img) {
  if (!img.complete || img.naturalWidth === 0) {
    showError();
    return;
  }
  document.getElementById("modal").style.display = "block";
  document.getElementById("modalImg").src = img.src;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Filter Album
function filterAlbum(album) {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    if (album === "all" || card.dataset.album === album) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Favorite System
function toggleFavorite(btn) {
  const card = btn.closest(".card");
  card.classList.toggle("favorite");
}

function showFavorites() {
  const cards = document.querySelectorAll(".card");
  cards.forEach(card => {
    if (card.classList.contains("favorite")) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}

// Error Popup
function showError() {
  const popup = document.getElementById("errorPopup");
  popup.style.display = "block";
  setTimeout(() => {
    popup.style.display = "none";
  }, 2000);
}