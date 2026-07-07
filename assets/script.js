document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("materiGrid");
  const emptyState = document.getElementById("emptyState");
  const menuItems = document.querySelectorAll(".menu-item");
  const searchInput = document.getElementById("searchInput");
  const contentTitle = document.getElementById("contentTitle");
  const contentCount = document.getElementById("contentCount");

  const viewerOverlay = document.getElementById("viewerOverlay");
  const viewerFrame = document.getElementById("viewerFrame");
  const viewerTitle = document.getElementById("viewerTitle");
  const viewerBack = document.getElementById("viewerBack");
  const viewerNewTab = document.getElementById("viewerNewTab");

  let activeCategory = "all";
  let searchTerm = "";

  const labelFor = (key) => {
    const found = categories.find((c) => c.key === key);
    return found ? found.label : key;
  };

  function render() {
    const filtered = topics.filter((t) => {
      const matchCategory = activeCategory === "all" || t.category === activeCategory;
      const matchSearch =
        searchTerm.trim() === "" ||
        t.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (t.desc || "").toLowerCase().includes(searchTerm.toLowerCase());
      return matchCategory && matchSearch;
    });

    contentTitle.textContent =
      searchTerm.trim() !== ""
        ? `Hasil pencarian "${searchTerm}"`
        : activeCategory === "all"
        ? "Semua Materi"
        : labelFor(activeCategory);
    contentCount.textContent = `${filtered.length} materi`;

    grid.innerHTML = "";

    if (filtered.length === 0) {
      emptyState.hidden = false;
      return;
    }
    emptyState.hidden = true;

    filtered.forEach((t) => {
      const card = document.createElement("a");
      card.className = "materi-card";
      card.href = t.file;

      card.innerHTML = `
        <div class="card-top">
          <span class="tag tag-${t.category}">${labelFor(t.category)}</span>
          ${t.kelas ? `<span class="kelas-badge">Kelas ${t.kelas}</span>` : ""}
        </div>
        <h3>${t.title}</h3>
        <p>${t.desc || ""}</p>
        <span class="card-open">Buka materi &rarr;</span>
      `;

      // Klik biasa -> buka di dalam jendela viewer (ada tombol kembali otomatis).
      // Ctrl/Cmd/tombol-tengah klik -> tetap buka di tab baru seperti link biasa.
      card.addEventListener("click", (e) => {
        if (e.ctrlKey || e.metaKey || e.shiftKey || e.button === 1) return;
        e.preventDefault();
        openViewer(t);
      });

      grid.appendChild(card);
    });
  }

  function openViewer(topic) {
    viewerFrame.src = topic.file;
    viewerTitle.textContent = topic.title;
    viewerNewTab.href = topic.file;
    viewerOverlay.style.display = "flex";
    document.body.style.overflow = "hidden";
    history.pushState({ viewerOpen: true }, "", "#" + encodeURIComponent(topic.file));
  }

  function closeViewer(updateHistory = true) {
    viewerOverlay.style.display = "none";
    viewerFrame.src = "about:blank";
    document.body.style.overflow = "";
    if (updateHistory) {
      history.pushState({}, "", location.pathname + location.search);
    }
  }

  viewerBack.addEventListener("click", () => closeViewer());

  // Tombol "kembali" fisik di browser / HP juga menutup viewer, bukan keluar situs.
  window.addEventListener("popstate", () => {
    if (viewerOverlay.style.display === "flex") {
      closeViewer(false);
    }
  });

  // Tombol Escape juga menutup viewer.
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && viewerOverlay.style.display === "flex") {
      closeViewer();
    }
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      menuItems.forEach((c) => c.classList.remove("active"));
      item.classList.add("active");
      activeCategory = item.dataset.filter;
      render();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      searchTerm = e.target.value;
      render();
    });
  }

  render();
});
