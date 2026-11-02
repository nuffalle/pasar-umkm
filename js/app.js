/* =========================================================
   Pasar UMKM — Logika aplikasi
   Filter kategori, pencarian, pengurutan, dan modal detail.
   ========================================================= */

(function () {
  "use strict";

  /* ---------- State ---------- */

  const state = {
    category: "Semua",
    query: "",
    sort: "default"
  };

  /* ---------- Elemen ---------- */

  const grid = document.getElementById("umkmGrid");
  const chipsWrap = document.getElementById("categoryChips");
  const searchInput = document.getElementById("searchInput");
  const clearBtn = document.getElementById("clearSearch");
  const sortSelect = document.getElementById("sortSelect");
  const resultInfo = document.getElementById("resultInfo");
  const emptyState = document.getElementById("emptyState");
  const resetBtn = document.getElementById("resetFilters");
  const statCount = document.getElementById("statCount");
  const statCategories = document.getElementById("statCategories");
  const modal = document.getElementById("modal");
  const modalContent = document.getElementById("modalContent");

  let lastFocused = null;

  /* ---------- Konstanta tampilan ---------- */

  const CATEGORY_EMOJI = {
    Semua: "🏪",
    Makanan: "🍛",
    Minuman: "☕",
    Fashion: "👘",
    Kerajinan: "🧺",
    Pertanian: "🥬",
    Jasa: "🔧"
  };

  const CATEGORY_CLASS = {
    Makanan: "cat-makanan",
    Minuman: "cat-minuman",
    Fashion: "cat-fashion",
    Kerajinan: "cat-kerajinan",
    Pertanian: "cat-pertanian",
    Jasa: "cat-jasa"
  };

  const categories = ["Semua", ...new Set(UMKM_DATA.map((u) => u.category))];

  /* ---------- Utilitas ---------- */

  function escapeHtml(value) {
    return String(value).replace(/[&<>"']/g, function (char) {
      return {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
      }[char];
    });
  }

  function categoryClass(category) {
    return CATEGORY_CLASS[category] || "cat-other";
  }

  function formatRating(rating) {
    return Number(rating).toFixed(1);
  }

  /* ---------- Filter & urutkan ---------- */

  function matchesFilters(umkm) {
    const inCategory =
      state.category === "Semua" || umkm.category === state.category;
    if (!inCategory) return false;

    const query = state.query.trim().toLowerCase();
    if (!query) return true;

    const haystack = [
      umkm.name,
      umkm.category,
      umkm.city,
      umkm.description,
      ...umkm.products.map((product) => product.name)
    ]
      .join(" ")
      .toLowerCase();

    return haystack.includes(query);
  }

  function sortItems(items) {
    const copy = items.slice();

    if (state.sort === "rating") {
      copy.sort((a, b) => b.rating - a.rating);
    } else if (state.sort === "name") {
      copy.sort((a, b) => a.name.localeCompare(b.name, "id"));
    }

    return copy;
  }

  /* ---------- Template ---------- */

  function chipTemplate(category) {
    const active = state.category === category;
    const emoji = CATEGORY_EMOJI[category] || "🏷️";

    return `
      <button
        type="button"
        class="chip${active ? " active" : ""}"
        data-category="${escapeHtml(category)}"
        aria-pressed="${active}"
      >
        <span aria-hidden="true">${emoji}</span> ${escapeHtml(category)}
      </button>`;
  }

  function cardTemplate(umkm) {
    return `
      <article
        class="card"
        data-id="${umkm.id}"
        tabindex="0"
        role="button"
        aria-label="Lihat detail ${escapeHtml(umkm.name)}"
      >
        <div class="card-media ${categoryClass(umkm.category)}" aria-hidden="true">
          <span>${umkm.emoji}</span>
        </div>
        <div class="card-body">
          <div class="card-top">
            <span class="tag">${escapeHtml(umkm.category)}</span>
            <span class="rating" title="Rating ${formatRating(umkm.rating)}">
              ★ ${formatRating(umkm.rating)}
            </span>
          </div>
          <h3>${escapeHtml(umkm.name)}</h3>
          <p class="card-desc">${escapeHtml(umkm.description)}</p>
          <p class="card-loc">📍 ${escapeHtml(umkm.city)}</p>
          <div class="card-foot">
            <span class="price">${escapeHtml(umkm.priceRange)}</span>
            <span class="detail-link">Lihat detail →</span>
          </div>
        </div>
      </article>`;
  }

  function modalTemplate(umkm) {
    const message = encodeURIComponent(
      `Halo ${umkm.name}, saya melihat usaha Anda di Pasar UMKM dan ingin bertanya tentang produknya.`
    );
    const waLink = `https://wa.me/${umkm.whatsapp}?text=${message}`;

    const products = umkm.products
      .map(
        (product) => `
          <li>
            <span>
              <b>${escapeHtml(product.name)}</b><br />
              <small>${escapeHtml(product.note)}</small>
            </span>
            <span class="p-price">${escapeHtml(product.price)}</span>
          </li>`
      )
      .join("");

    return `
      <div class="modal-hero ${categoryClass(umkm.category)}" aria-hidden="true">
        <span>${umkm.emoji}</span>
      </div>
      <div class="modal-body">
        <span class="tag">${escapeHtml(umkm.category)}</span>
        <h2 id="modalTitle">${escapeHtml(umkm.name)}</h2>
        <p class="modal-meta">
          <span>★ ${formatRating(umkm.rating)}</span>
          <span>📍 ${escapeHtml(umkm.city)}</span>
          <span>🕘 ${escapeHtml(umkm.hours)}</span>
        </p>
        <p class="modal-desc">${escapeHtml(umkm.description)}</p>
        <p class="modal-address">🏠 ${escapeHtml(umkm.address)}</p>

        <h3>Produk &amp; harga</h3>
        <ul class="product-list">${products}</ul>

        <a
          class="btn-wa"
          href="${waLink}"
          target="_blank"
          rel="noopener noreferrer"
        >
          💬 Hubungi via WhatsApp
        </a>
        <p class="modal-note">Nomor WhatsApp pada prototype ini masih contoh.</p>
      </div>`;
  }

  /* ---------- Render ---------- */

  function renderChips() {
    chipsWrap.innerHTML = categories.map(chipTemplate).join("");
  }

  function render() {
    const items = sortItems(UMKM_DATA.filter(matchesFilters));

    grid.innerHTML = items.map(cardTemplate).join("");
    grid.hidden = items.length === 0;
    emptyState.hidden = items.length !== 0;

    resultInfo.textContent = `Menampilkan ${items.length} dari ${UMKM_DATA.length} usaha`;
  }

  /* ---------- Modal ---------- */

  function openModal(id) {
    const umkm = UMKM_DATA.find((item) => item.id === id);
    if (!umkm) return;

    lastFocused = document.activeElement;

    modalContent.innerHTML = modalTemplate(umkm);
    modal.hidden = false;
    document.body.style.overflow = "hidden";

    const closeButton = modal.querySelector(".modal-close");
    if (closeButton) closeButton.focus();
  }

  function closeModal() {
    modal.hidden = true;
    document.body.style.overflow = "";

    if (lastFocused && typeof lastFocused.focus === "function") {
      lastFocused.focus();
    }
  }

  /* ---------- Event listeners ---------- */

  // Kartu bisa dibuka dengan klik atau keyboard (Enter / Spasi).
  grid.addEventListener("click", function (event) {
    const card = event.target.closest(".card");
    if (card) openModal(Number(card.dataset.id));
  });

  grid.addEventListener("keydown", function (event) {
    if (event.key !== "Enter" && event.key !== " ") return;

    const card = event.target.closest(".card");
    if (!card) return;

    event.preventDefault();
    openModal(Number(card.dataset.id));
  });

  // Klik chip kategori.
  chipsWrap.addEventListener("click", function (event) {
    const chip = event.target.closest(".chip");
    if (!chip) return;

    state.category = chip.dataset.category;
    renderChips();
    render();
  });

  // Pencarian.
  searchInput.addEventListener("input", function () {
    state.query = searchInput.value;
    clearBtn.hidden = state.query.length === 0;
    render();
  });

  clearBtn.addEventListener("click", function () {
    searchInput.value = "";
    state.query = "";
    clearBtn.hidden = true;
    searchInput.focus();
    render();
  });

  // Pengurutan.
  sortSelect.addEventListener("change", function () {
    state.sort = sortSelect.value;
    render();
  });

  // Reset dari empty state.
  resetBtn.addEventListener("click", function () {
    state.category = "Semua";
    state.query = "";
    state.sort = "default";
    searchInput.value = "";
    sortSelect.value = "default";
    clearBtn.hidden = true;
    renderChips();
    render();
    searchInput.focus();
  });

  // Tutup modal: klik backdrop atau tombol close.
  modal.addEventListener("click", function (event) {
    if (event.target.hasAttribute("data-close")) closeModal();
  });

  // Tutup modal dengan Escape.
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !modal.hidden) closeModal();
  });

  /* ---------- Inisialisasi ---------- */

  statCount.textContent = UMKM_DATA.length;
  statCategories.textContent = categories.length - 1;

  renderChips();
  render();
})();
