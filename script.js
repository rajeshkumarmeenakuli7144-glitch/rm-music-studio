document.getElementById("year").textContent = new Date().getFullYear();

function renderShorts(){
  const row = document.getElementById("shorts-row");
  const shorts = (window.SITE_CONFIG && window.SITE_CONFIG.shorts) || [];

  if (!shorts.length){
    row.outerHTML = `
      <div class="shorts-empty">
        Abhi koi Short add nahi hui hai. <code>config.js</code> file kholo aur apne
        Shorts ke video ID is tarah add karo:
        <code>{ id: "AbCd1234xyz", title: "Song ka naam" }</code>
      </div>`;
    return;
  }

  row.innerHTML = shorts.map(s => `
    <div class="short-card">
      <div class="short-embed">
        <iframe
          src="https://www.youtube.com/embed/${s.id}"
          title="${s.title || 'RM Music Studio Short'}"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
      <div class="short-title">${s.title || ""}</div>
    </div>
  `).join("");
}

renderShorts();
