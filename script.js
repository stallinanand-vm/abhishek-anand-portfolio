const grid = document.getElementById("project-grid");
grid.innerHTML = projects.map((p, i) => `
  <article class="project">
    <div class="project-image">${p.image ? `<img src="${p.image}" alt="${p.title}" style="width:100%;height:100%;object-fit:cover">` : "PROJECT " + String(i+1).padStart(2,"0")}</div>
    <div class="project-body">
      <div class="project-meta">${p.brand} · ${p.year} · ${p.category}</div>
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="tags">${p.tags.map(t => `<span class="tag">${t}</span>`).join("")}</div>
    </div>
  </article>
`).join("");
