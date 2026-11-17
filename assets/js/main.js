/* SEN Global Group — interactions */
(() => {
  const D = window.SEN;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const page = document.body.dataset.page || "";
  const overHero = document.body.hasAttribute("data-nav-over");

  const ARR = '<svg class="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 12h15M13 6l6 6-6 6"/></svg>';
  const ARR_S = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 12h15M13 6l6 6-6 6"/></svg>';
  const CHECK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 12.5l5 5L20 6.5"/></svg>';
  const PIN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7-6.2-7-11.5a7 7 0 1 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>';
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const fmt = (n) => n.toLocaleString("en-IN");
  const pad = (n) => String(n).padStart(2, "0");

  // Headline spec shown on each product card
  const KEY = {
    feldspar: "Melting 1150–1250°C", quartz: "Up to 99.5% SiO₂", chamotte: "Al₂O₃ ≥ 45% · 1450°C", bentonite: "Swelling · pH 8.5–10",
    talc: "Purity up to 98%", limestone: "Up to 98% CaCO₃", cordierite: "Refractory to 1450°C", "sanitary-ware-chips": "0–3 / 3–8 mm",
    "porcelain-insulator": "≥ 60 kV/mm", kyanite: "Al₂O₃ up to 58%", "silicon-carbide": "Mohs 9.2–9.5", manganese: "Up to 46% Mn",
    "alumina-grog": "Refractory > 1750°C", "ball-clay": "Al₂O₃ 25–35%"
  };

  /* ---------------- Chrome ---------------- */
  const active = (p) => (page === p ? ' class="is-active" aria-current="page"' : "");
  document.body.insertAdjacentHTML("afterbegin", `
  <header class="nav${overHero ? " nav--over" : " is-solid"}" id="nav">
    <div class="nav__bar">
      <a class="nav__logo" href="index.html" aria-label="SEN Global Group — home"><img src="images/site_senlogo.png" alt="SEN Global Group — Minerals Mining" width="157" height="32"></a>
      <ul class="nav__links">
        <li><a href="about.html"${active("about")}>About</a></li>
        <li><button type="button" data-mega aria-expanded="false" aria-controls="mega"${active("products")}>Products <svg class="chev" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M3 4.5l3 3 3-3"/></svg></button></li>
        <li><a href="companies.html"${active("companies")}>Group of Companies</a></li>
        <li><a href="projects.html"${active("projects")}>Projects</a></li>
      </ul>
      <a class="btn nav__cta" href="contact.html">Request a quote ${ARR}</a>
      <button class="nav__menu-btn" type="button" aria-label="Open menu" aria-expanded="false"><span></span></button>
    </div>
    <div class="mega" id="mega"><div class="mega__in">
      <div><h4>Products</h4><ul>${D.products.map((p) => `<li><a href="product.html?id=${p.id}"><img src="${p.img}" alt="" loading="lazy">${esc(p.name)}</a></li>`).join("")}</ul></div>
      <div class="mega__companies"><h4>Group of Companies</h4><ul>${D.companies.map((c) => `<li><a href="companies.html#${c.id}">${esc(c.name)}</a></li>`).join("")}</ul><p style="margin:18px 0 0"><a class="link-arrow" href="products.html">All products ${ARR_S}</a></p></div>
      <a class="mega__feature" href="product.html?id=chamotte"><img src="images/graded/plant-8570.webp" alt=""><span>SEN MOTTE — chamotte fired at 1450°C in our own rotary kiln</span></a>
    </div></div>
  </header>
  <nav class="mmenu" aria-label="Mobile">
    <ul class="mmenu__list">
      <li><a href="index.html">Home</a></li>
      <li><a href="about.html">About us</a></li>
      <li><button type="button" data-sub="m-prod" aria-expanded="false">Products <span>+</span></button><div class="mmenu__sub" id="m-prod" hidden>${D.products.map((p) => `<a href="product.html?id=${p.id}">${esc(p.name)}</a>`).join("")}<a href="products.html"><b>View all →</b></a></div></li>
      <li><button type="button" data-sub="m-co" aria-expanded="false">Group of Companies <span>+</span></button><div class="mmenu__sub" id="m-co" hidden>${D.companies.map((c) => `<a href="companies.html#${c.id}">${esc(c.name)}</a>`).join("")}</div></li>
      <li><a href="projects.html">Projects</a></li>
      <li><a href="contact.html">Contact</a></li>
    </ul>
    <div class="mmenu__foot"><a href="${D.contact.phoneHref}">${D.contact.phone}</a><a href="mailto:${D.contact.email}">${D.contact.email}</a><span>Chennai · Salem · Mettur · Gummidipoondi</span></div>
  </nav>`);

  document.body.insertAdjacentHTML("beforeend", `
  <footer class="footer">
    <div class="wrap">
      <div class="footer__top">
        <div class="footer__about">
          <a class="footer__logo" href="index.html"><img src="images/site_senlogo.png" alt="SEN Global Group" width="157" height="32"></a>
          <p>South India’s leading minerals manufacturer, established in 1973. We own and operate our own mines to ensure quality and sustainability.</p>
        </div>
        <div><h5>Company</h5><ul><li><a href="about.html">About us</a></li><li><a href="companies.html">Group of Companies</a></li><li><a href="projects.html">Projects</a></li><li><a href="contact.html">Contact</a></li><li><a href="documents/senglobalgroup-brochure.pdf" target="_blank" rel="noopener">Brochure (PDF)</a></li></ul></div>
        <div><h5>Products</h5><ul>${D.products.slice(0, 7).map((p) => `<li><a href="product.html?id=${p.id}">${esc(p.name)}</a></li>`).join("")}<li><a href="products.html">All products →</a></li></ul></div>
        <div><h5>Contact</h5><ul><li>${esc(D.contact.address)}</li><li><a href="${D.contact.phoneHref}">${D.contact.phone}</a></li><li><a href="mailto:${D.contact.email}">${D.contact.email}</a></li></ul></div>
      </div>
      <div class="footer__word" aria-hidden="true">SEN GLOBAL</div>
      <div class="footer__bot"><span>© ${new Date().getFullYear()} SEN Global Group</span><span>Minerals mining &amp; manufacturing · Est. 1973</span></div>
    </div>
  </footer>
  <div class="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer"><img alt=""><button class="lb-close" aria-label="Close"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6L6 18"/></svg></button><button class="lb-prev" aria-label="Previous"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M15 6l-6 6 6 6"/></svg></button><button class="lb-next" aria-label="Next"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M9 6l6 6-6 6"/></svg></button></div>`);

  // Nav: solid after hero, hide on scroll down
  const nav = $("#nav"), mega = $("#mega"), megaBtn = $("[data-mega]");
  let lastY = scrollY;
  const onScroll = () => {
    const y = scrollY;
    if (overHero) nav.classList.toggle("is-solid", y > innerHeight * 0.6 || mega.classList.contains("is-open"));
    if (!document.body.classList.contains("menu-open") && !mega.classList.contains("is-open")) nav.classList.toggle("is-hidden", y > lastY && y > 300);
    lastY = y;
  };
  addEventListener("scroll", onScroll, { passive: true }); onScroll();

  let megaT;
  const setMega = (o) => { mega.classList.toggle("is-open", o); megaBtn.setAttribute("aria-expanded", o); if (overHero) nav.classList.toggle("is-solid", o || scrollY > innerHeight * 0.6); };
  megaBtn.addEventListener("click", () => setMega(!mega.classList.contains("is-open")));
  [megaBtn, mega].forEach((el) => {
    el.addEventListener("mouseenter", () => { clearTimeout(megaT); if (matchMedia("(hover:hover)").matches) setMega(true); });
    el.addEventListener("mouseleave", () => { megaT = setTimeout(() => setMega(false), 200); });
  });
  addEventListener("keydown", (e) => { if (e.key === "Escape") { setMega(false); closeLB(); } });

  const mBtn = $(".nav__menu-btn");
  mBtn.addEventListener("click", () => {
    const o = document.body.classList.toggle("menu-open");
    mBtn.setAttribute("aria-expanded", o); mBtn.setAttribute("aria-label", o ? "Close menu" : "Open menu");
  });
  $$("[data-sub]").forEach((b) => b.addEventListener("click", () => {
    const sub = document.getElementById(b.dataset.sub);
    sub.hidden = !sub.hidden; b.setAttribute("aria-expanded", !sub.hidden); b.querySelector("span").textContent = sub.hidden ? "+" : "–";
  }));
  $$(".mmenu a").forEach((a) => a.addEventListener("click", () => document.body.classList.remove("menu-open")));

  /* ---------------- Product cards ---------------- */
  const pcard = (p, i, extra = "") => `
    <a class="pcard${extra}" href="product.html?id=${p.id}" draggable="false">
      <span class="pcard__no">${pad(i + 1)}</span>
      ${p.badge ? `<span class="pcard__badge">${p.badge}</span>` : ""}
      <div class="pcard__img"><img src="${p.img}" alt="${esc(p.name)} sample" loading="lazy" draggable="false"></div>
      <div class="pcard__body">
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.short)}</p>
        <div class="pcard__spec"><span>${esc(KEY[p.id] || "")}</span>${ARR_S}</div>
      </div>
    </a>`;

  const rail = $("#product-rail");
  if (rail) {
    rail.innerHTML = D.products.map((p, i) => pcard(p, i)).join("");
    const step = () => rail.querySelector(".pcard").offsetWidth + 2;
    $("[data-rail-prev]")?.addEventListener("click", () => rail.scrollBy({ left: -step(), behavior: "smooth" }));
    $("[data-rail-next]")?.addEventListener("click", () => rail.scrollBy({ left: step(), behavior: "smooth" }));
    let down = false, sx = 0, sl = 0, moved = false;
    rail.addEventListener("pointerdown", (e) => { if (e.pointerType !== "mouse") return; down = true; moved = false; sx = e.clientX; sl = rail.scrollLeft; });
    addEventListener("pointermove", (e) => { if (!down) return; const dx = e.clientX - sx; if (Math.abs(dx) > 5) { moved = true; rail.classList.add("is-drag"); } rail.scrollLeft = sl - dx; });
    addEventListener("pointerup", () => { down = false; rail.classList.remove("is-drag"); });
    rail.addEventListener("click", (e) => { if (moved) { e.preventDefault(); moved = false; } }, true);
  }
  const grid = $("#product-grid");
  if (grid) grid.innerHTML = D.products.map((p, i) => pcard(p, i, " rv")).join("");

  const logos = $("#logos");
  if (logos) logos.innerHTML = D.clients.map((c) => `<div><img src="${c.img}" alt="${esc(c.name)}" loading="lazy"></div>`).join("");

  /* ---------------- Product detail ---------------- */
  if (page === "product") {
    const id = new URLSearchParams(location.search).get("id") || "feldspar";
    const idx = Math.max(0, D.products.findIndex((p) => p.id === id));
    const p = D.products[idx];
    const prev = D.products[(idx - 1 + D.products.length) % D.products.length];
    const next = D.products[(idx + 1) % D.products.length];
    document.title = `${p.name} — ${p.title} | SEN Global Group`;
    $('meta[name="description"]')?.setAttribute("content", p.short);
    const chips = (p.specs || p.table.rows.map((r) => [r[0], r[2]])).slice(0, 4).map(([k, v]) => `<span><b>${esc(k)}</b>${esc(v)}</span>`).join("");
    const pk = (i) => ['<path d="M12 8h16l3 6v18H9V14z"/><path d="M9 14h22M16 8v6M24 8v6"/>', '<path d="M8 12h24v22H8z"/><path d="M12 12V6M28 12V6M12 6c3 2 13 2 16 0M8 20h24"/>', '<path d="M8 14l12-6 12 6v14l-12 6-12-6z"/><path d="M8 14l12 6 12-6M20 20v14"/>'][i];

    $("#product").innerHTML = `
    <section class="prod-hero">
      <div class="prod-hero__grid">
        <div class="prod-hero__text">
          <nav class="crumbs"><a href="index.html">Home</a>/<a href="products.html">Products</a>/<span>${esc(p.name)}</span></nav>
          <h1 class="display">${esc(p.name)}</h1>
          <p class="prod-hero__sub">${esc(p.title)}</p>
          <div class="chips">${chips}</div>
          <div class="hero__actions" style="margin-top:0"><a class="btn" href="contact.html?product=${encodeURIComponent(p.name)}">Request a quote ${ARR}</a><a class="btn btn--ghost" href="#specs">Specifications</a></div>
        </div>
        <div class="prod-hero__img"><img src="${p.img}" alt="${esc(p.name)} sample"></div>
      </div>
    </section>

    <section class="section"><div class="wrap two two--label">
      <div><span class="tag rv">${p.badge ? p.badge : "Overview"}</span></div>
      <div>${p.intro.map((t, i) => `<p class="${i ? "lead" : "statement"} rv" style="margin-bottom:${i ? 0 : 24}px">${esc(t)}</p>`).join("")}</div>
    </div></section>

    <section class="section" id="specs" style="padding-top:0;scroll-margin-top:80px"><div class="wrap">
      <div class="shead"><div><span class="tag rv">${p.table ? "Physical analysis" : "Key specifications"}</span><h2 class="h2 rv">Specifications</h2></div><p class="lead rv">Supplied in standard grades or customized to your industry requirements.</p></div>
      ${p.table
        ? `<div class="rv" style="overflow-x:auto"><table class="tbl"><thead><tr>${p.table.head.map((h) => `<th>${esc(h)}</th>`).join("")}</tr></thead><tbody>${p.table.rows.map((r) => `<tr>${r.map((c) => `<td>${esc(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`
        : `<dl class="specs rv">${p.specs.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>`}
    </div></section>

    ${p.types ? `<section class="section dark"><div class="wrap">
      <div class="shead"><div><span class="tag rv">Types available</span><h2 class="h2 rv">Grades &amp; forms</h2></div></div>
      <div class="types">${p.types.map((t, i) => `<article class="type rv" style="--d:${i * 0.06}s"><img src="${t.img}" alt="${esc(t.name)}" loading="lazy"><div><h3>${esc(t.name)}</h3>${t.desc ? `<p>${esc(t.desc)}</p>` : ""}</div></article>`).join("")}</div>
    </div></section>` : ""}

    <section class="section"><div class="wrap two">
      <div><span class="tag rv">Industries &amp; applications</span><h2 class="h2 rv" style="margin-top:16px">Where it’s used</h2></div>
      <ul class="apps">${p.apps.map(([a, b]) => `<li class="rv"><b>${esc(a)}</b><span>${esc(b)}</span></li>`).join("")}</ul>
    </div></section>

    <section class="section" style="padding-top:0"><div class="wrap">
      <div class="shead"><div><span class="tag rv">Production process</span><h2 class="h2 rv">How we make it</h2></div><p class="lead rv">Every batch passes through the same controlled sequence — from the mine to the bag.</p></div>
      <ol class="process" id="process">${p.process.map((s, i) => `<li><i>Step ${pad(i + 1)}</i><span>${esc(s)}</span></li>`).join("")}</ol>
    </div></section>

    <section class="section" style="padding-top:0"><div class="wrap">
      <div class="shead"><div><span class="tag rv">Why SEN Global Group</span><h2 class="h2 rv">Why choose our ${esc(p.name.toLowerCase())}</h2></div></div>
      <div class="why">${p.why.map((w, i) => `<div class="rv" style="--d:${(i % 3) * 0.06}s">${CHECK}${esc(w)}</div>`).join("")}</div>
    </div></section>

    <section class="section" style="padding-top:0"><div class="wrap">
      <div class="shead"><div><span class="tag rv">Packaging</span><h2 class="h2 rv">Packed for safe transport</h2></div><p class="lead rv">Designed for safe transportation and long shelf life.</p></div>
      <div class="pack">${D.packaging.map((k, i) => `<article class="rv" style="--d:${i * 0.06}s"><svg viewBox="0 0 40 40" fill="none" stroke="currentColor" stroke-width="1.4">${pk(i)}</svg><div><h3>${esc(k.name)}</h3><p>${esc(k.desc)}</p></div></article>`).join("")}</div>
    </div></section>

    <section class="cta">
      <div class="cta__img"><img src="images/graded/plant-8559.webp" alt="" loading="lazy"></div>
      <div class="wrap"><div class="cta__text">
        <span class="tag tag--light">Order today</span>
        <h2 class="h1">Order ${esc(p.name.toLowerCase())} from SEN Global Group</h2>
        <p class="lead">Customized grades for ceramics, glass, coatings, refractories and more — delivered across India and for export.</p>
        <div class="cta__actions"><a class="btn btn--oxide" href="contact.html?product=${encodeURIComponent(p.name)}">Request a quote ${ARR}</a><a class="btn btn--line-light" href="${D.contact.phoneHref}">Call ${D.contact.phone}</a></div>
      </div></div>
    </section>

    <section class="pn">
      <a href="product.html?id=${prev.id}"><img src="${prev.img}" alt=""><div><small>← Previous</small><b>${esc(prev.name)}</b></div></a>
      <a href="product.html?id=${next.id}"><div><small>Next →</small><b>${esc(next.name)}</b></div><img src="${next.img}" alt=""></a>
    </section>`;

    const proc = $("#process");
    new IntersectionObserver(([e], o) => { if (e.isIntersecting) { $$("li", proc).forEach((li, i) => setTimeout(() => li.classList.add("is-in"), i * 140)); o.disconnect(); } }, { threshold: 0.4 }).observe(proc);
  }

  /* ---------------- Companies ---------------- */
  const coWrap = $("#companies");
  if (coWrap) {
    $("#co-index").innerHTML = D.companies.map((c) => `<a href="#${c.id}">${esc(c.name)}</a>`).join("");
    coWrap.innerHTML = D.companies.map((c, i) => `
      <article class="co" id="${c.id}">
        <div class="co__media rv"><img src="${c.img}" alt="${esc(c.name)} facility" loading="lazy"></div>
        <div>
          <span class="co__idx">${pad(i + 1)} / ${pad(D.companies.length)}</span>
          <h2 class="h2 rv">${esc(c.name)}</h2>
          <p class="co__place rv">${PIN}${esc(c.place)}</p>
          ${c.text.map((t) => `<p class="lead rv" style="margin-bottom:14px">${esc(t)}</p>`).join("")}
          <div class="co__facts rv"><div><small>Established</small><b>${c.since}</b></div><div><small>Tons / year</small><b>${fmt(c.capacity)}</b></div><div><small>Machines</small><b>${c.machinery.reduce((s, m) => s + (parseInt(m) || 0), 0)}</b></div></div>
          <h4>Machinery installed</h4><div class="pills rv">${c.machinery.map((m) => `<span>${esc(m)}</span>`).join("")}</div>
          ${c.products ? `<h4>Products</h4><div class="pills rv">${c.products.map((m) => { const p = D.products.find((x) => m.toLowerCase().includes(x.name.toLowerCase())); return p ? `<a href="product.html?id=${p.id}">${esc(m)}</a>` : `<span>${esc(m)}</span>`; }).join("")}</div>` : ""}
          <h4>Industries served</h4><div class="pills rv">${D.industries.slice(0, 5).map((m) => `<span>${esc(m)}</span>`).join("")}</div>
        </div>
      </article>`).join("");
  }

  /* ---------------- Projects gallery ---------------- */
  const gal = $("#gallery");
  if (gal) {
    const items = [
      ["plant-9592", "Grinding mill · Salem"], ["plant-8566", "Processing line"], ["plant-8559", "Jumbo bags ready for dispatch"],
      ["plant-9591", "Ball mill unit"], ["plant-8583", "Mill house"], ["plant-8576", "Raw mineral yard"],
      ["plant-9593", "Finished goods store"], ["plant-8570", "Grinding & bagging hall"], ["plant-8578", "Stockpiles & yard"]
    ];
    gal.innerHTML = items.map(([f, cap], i) => `<figure class="rv" style="--d:${(i % 3) * 0.06}s" data-i="${i}"><img src="images/graded/${f}.webp" alt="${esc(cap)}" loading="lazy"><figcaption>${pad(i + 1)} — ${esc(cap)}</figcaption></figure>`).join("");
    window.__lb = items.map(([f, c]) => [`images/graded/${f}.webp`, c]);
    gal.addEventListener("click", (e) => { const f = e.target.closest("figure"); if (f) openLB(+f.dataset.i); });
  }
  const lb = $(".lightbox"); let lbI = 0;
  function openLB(i) { const L = window.__lb; if (!L) return; lbI = (i + L.length) % L.length; const im = $("img", lb); im.src = L[lbI][0]; im.alt = L[lbI][1]; lb.classList.add("is-open"); }
  function closeLB() { lb.classList.remove("is-open"); }
  $(".lb-close", lb).addEventListener("click", closeLB);
  $(".lb-prev", lb).addEventListener("click", () => openLB(lbI - 1));
  $(".lb-next", lb).addEventListener("click", () => openLB(lbI + 1));
  lb.addEventListener("click", (e) => { if (e.target === lb) closeLB(); });

  /* ---------------- Contact form ---------------- */
  const form = $("#contact-form");
  if (form) {
    const sel = form.querySelector("[name=product]");
    sel.insertAdjacentHTML("beforeend", D.products.map((p) => `<option>${esc(p.name)}</option>`).join(""));
    const pre = new URLSearchParams(location.search).get("product");
    if (pre) sel.value = pre;
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const f = Object.fromEntries(new FormData(form));
      const body = `Name: ${f.name}\nCompany: ${f.company || "-"}\nPhone: ${f.phone || "-"}\nEmail: ${f.email}\nProduct: ${f.product || "-"}\nQuantity: ${f.qty || "-"}\n\n${f.message}`;
      location.href = `mailto:${D.contact.email}?subject=${encodeURIComponent("Enquiry: " + (f.product || "Minerals") + " — " + f.name)}&body=${encodeURIComponent(body)}`;
      $(".form__note", form).textContent = "Opening your email app with the enquiry pre-filled…";
    });
  }

  /* ---------------- Reveal, counters, parallax ---------------- */
  const io = new IntersectionObserver((ents) => ents.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }), { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
  $$(".rv").forEach((el) => io.observe(el));

  const countIO = new IntersectionObserver((ents) => ents.forEach((e) => {
    if (!e.isIntersecting) return;
    const el = e.target, to = +el.dataset.count, dur = 1600, t0 = performance.now();
    const step = (t) => { const k = Math.min(1, (t - t0) / dur); el.textContent = fmt(Math.round(to * (1 - Math.pow(1 - k, 4)))); if (k < 1) requestAnimationFrame(step); };
    reduce ? (el.textContent = fmt(to)) : requestAnimationFrame(step);
    countIO.unobserve(el);
  }), { threshold: 0.5 });
  $$("[data-count]").forEach((el) => countIO.observe(el));

  const plx = $$("[data-parallax]");
  if (plx.length && !reduce) {
    const run = () => plx.forEach((el) => {
      const r = el.parentElement.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return;
      const k = (r.top + r.height / 2 - innerHeight / 2) / innerHeight;
      el.style.transform = `translate3d(0, ${k * -(+el.dataset.parallax || 60)}px, 0)`;
    });
    addEventListener("scroll", () => requestAnimationFrame(run), { passive: true }); run();
  }
})();
