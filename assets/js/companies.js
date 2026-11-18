/* SEN Global Group: Group of Companies page */
(() => {
  const D = window.SEN;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const fmt = (n) => n.toLocaleString("en-IN");
  const pad = (n) => String(n).padStart(2, "0");
  const PIN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M12 21s-7-6.2-7-11.5a7 7 0 1 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>';
  const DOWN = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 12h15M13 6l6 6-6 6"/></svg>';
  const COLORS = ["#9b2422", "#c49a5a", "#a4552f", "#8a8378", "#e9e2d6"];

  const cos = [...D.companies].sort((a, b) => a.since - b.since);
  const total = cos.reduce((s, c) => s + c.capacity, 0);
  const max = Math.max(...cos.map((c) => c.capacity));
  const town = (c) => c.place.split(" · ")[0].replace("Ambattur, ", "");

  /* ---------- Render ---------- */
  $("#g-total").textContent = fmt(total);
  $("#share").innerHTML = `
    <div class="share__bar" role="img" aria-label="Share of group capacity by company">${cos.map((c, i) => `<i style="flex:${c.capacity};background:${COLORS[i]}"></i>`).join("")}</div>
    <div class="share__legend" style="grid-template-columns:repeat(${cos.length},minmax(0,1fr))">${cos.map((c, i) => `
      <a href="#${c.id}" style="border-top-color:${COLORS[i]}"><small>${c.since} · ${esc(town(c))}</small><strong>${esc(c.name)}</strong><em>${fmt(c.capacity)} t · ${Math.round((c.capacity / total) * 100)}%</em></a>`).join("")}
    </div>`;

  $("#g-rows").innerHTML = cos.map((c) => `
    <li><a class="g-row" href="#${c.id}">
      <span class="g-row__year">${c.since}</span>
      <span class="g-row__name">${esc(c.name)}</span>
      <span class="g-row__place">${esc(c.place)}</span>
      <span class="g-row__cap">${fmt(c.capacity)} t / yr</span>
      ${DOWN}
    </a></li>`).join("");

  $("#g-list").innerHTML = cos.map((c, i) => {
    const machines = c.machinery.reduce((s, m) => s + (parseInt(m, 10) || 0), 0);
    const prods = (c.products || []).map((m) => {
      const p = D.products.find((x) => m.toLowerCase().includes(x.name.toLowerCase()));
      return p ? `<a href="product.html?id=${p.id}">${esc(m)}</a>` : `<span>${esc(m)}</span>`;
    }).join("");
    return `
    <article class="g-co" id="${c.id}">
      <div class="g-co__media">
        <div class="g-co__frame"><img src="${c.img}"${window.SENsrcset ? window.SENsrcset(c.img) : ""} alt="${esc(c.name)} facility" loading="lazy" decoding="async"><span class="g-co__tagline">${esc(town(c))} · Est. ${c.since}</span></div>
      </div>
      <div class="g-co__body">
        <div class="g-co__year" aria-hidden="true">${c.since}</div>
        <span class="g-co__idx">${pad(i + 1)} / ${pad(cos.length)} · SEN Group company</span>
        <h2 class="h2">${esc(c.name)}</h2>
        <p class="g-co__place">${PIN}${esc(c.place)}</p>
        ${c.text.map((t) => `<p class="lead">${esc(t)}</p>`).join("")}
        <div class="g-co__facts"><div><small>Established</small><b>${c.since}</b></div><div><small>Tons / year</small><b>${fmt(c.capacity)}</b></div><div><small>Machines</small><b>${machines}</b></div></div>
        <div class="g-co__cap"><small><span>Share of group capacity</span><span>${Math.round((c.capacity / total) * 100)}%</span></small><div><i data-w="${c.capacity / max}"></i></div></div>
        <h4>Machinery installed</h4><div class="pills">${c.machinery.map((m) => `<span>${esc(m)}</span>`).join("")}</div>
        ${prods ? `<h4>Products</h4><div class="pills">${prods}</div>` : ""}
      </div>
    </article>`;
  }).join("");
  $$(".g-co__cap i").forEach((i) => (i.style.transform = `scaleX(${i.dataset.w})`));

  /* ---------- Motion ---------- */
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
  gsap.defaults({ ease: "power3.out", duration: 0.9 });

  gsap.matchMedia().add({ any: "all", reduce: "(prefers-reduced-motion: reduce)", desktop: "(min-width: 901px)", fine: "(hover: hover) and (pointer: fine)" }, (ctx) => {
    const { reduce, desktop, fine } = ctx.conditions;
    if (reduce) return;

    if (window.Lenis) {
      const lenis = new Lenis({ lerp: 0.14, smoothWheel: true, wheelMultiplier: 1.05 });
      window.__lenis = lenis;
      document.documentElement.classList.add("has-lenis");
      lenis.on("scroll", ScrollTrigger.update);
      const raf = (t) => lenis.raf(t * 1000);
      gsap.ticker.add(raf); gsap.ticker.lagSmoothing(0);
      $$('a[href^="#"]').forEach((a) => a.addEventListener("click", (e) => {
        const t = $(a.getAttribute("href")); if (!t) return;
        e.preventDefault(); lenis.scrollTo(t, { offset: -10, duration: 1.4 });
      }));
      ctx.add(() => () => { gsap.ticker.remove(raf); lenis.destroy(); document.documentElement.classList.remove("has-lenis"); });
    }

    // Hero
    gsap.timeline()
      .from(".g-title .ln > span", { yPercent: 115, stagger: 0.12, duration: 1.2, ease: "power4.out" })
      .from(".g-hero .crumbs, .g-fade", { autoAlpha: 0, y: 26, stagger: 0.08 }, "-=0.8")
      .from(".share__bar i", { scaleX: 0, stagger: 0.1, duration: 1.1, ease: "expo.out" }, "-=0.6")
      .from(".share__legend a", { autoAlpha: 0, y: 20, stagger: 0.08 }, "-=0.9");
    const tot = { v: 0 };
    gsap.to(tot, { v: total, duration: 2, ease: "power2.out", delay: 0.4, onUpdate: () => ($("#g-total").textContent = fmt(Math.round(tot.v))) });
    gsap.to(".g-hero__bg img", { yPercent: 12, ease: "none", scrollTrigger: { trigger: ".g-hero", start: "top top", end: "bottom top", scrub: true } });

    // Index rows
    if (desktop) {
    gsap.from(".g-index__head > *", { autoAlpha: 0, y: 36, stagger: 0.1, scrollTrigger: { trigger: ".g-index", start: "top 80%" } });
    gsap.from(".g-rows li", { autoAlpha: 0, y: 36, stagger: 0.07, scrollTrigger: { trigger: "#g-rows", start: "top 85%" } });
    }

    // Chapters
    $$(".g-co").forEach((co) => {
      const bar = $(".g-co__cap i", co);
      if (!desktop) return; // phones: chapters are simply there, bars shown at full length
      gsap.fromTo($(".g-co__frame", co), { clipPath: "inset(18% 10% 18% 10%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "expo.inOut", scrollTrigger: { trigger: co, start: "top 75%" } });
      gsap.fromTo($(".g-co__frame img", co), { scale: 1.3 }, { scale: 1, duration: 1.8, ease: "expo.out", scrollTrigger: { trigger: co, start: "top 75%" } });
      if (desktop) gsap.fromTo($(".g-co__frame img", co), { yPercent: -6 }, { yPercent: 6, ease: "none", scrollTrigger: { trigger: co, start: "top bottom", end: "bottom top", scrub: true } });
      gsap.from($(".g-co__year", co), { xPercent: -8, autoAlpha: 0, duration: 1.4, scrollTrigger: { trigger: co, start: "top 75%" } });
      gsap.from($$(".g-co__idx, h2, .g-co__place, .lead, .g-co__facts, .g-co__cap, h4, .pills", co), { autoAlpha: 0, y: 32, stagger: 0.06, scrollTrigger: { trigger: co, start: "top 70%" } });
      gsap.fromTo(bar, { scaleX: 0 }, { scaleX: +bar.dataset.w, duration: 1.4, ease: "expo.out", scrollTrigger: { trigger: bar, start: "top 90%" } });
    });

    // Industries + CTA
    if (desktop) gsap.from(".g-ind h2, .g-ind li", { autoAlpha: 0, y: 30, stagger: 0.07, scrollTrigger: { trigger: ".g-ind", start: "top 80%" } });
    if (desktop) gsap.from(".cta__text > *", { autoAlpha: 0, y: 34, stagger: 0.09, scrollTrigger: { trigger: ".cta", start: "top 70%" } });

    if (fine) {
      $$(".magnet").forEach((b) => {
        const x = gsap.quickTo(b, "x", { duration: 0.5, ease: "elastic.out(1, 0.4)" });
        const y = gsap.quickTo(b, "y", { duration: 0.5, ease: "elastic.out(1, 0.4)" });
        const mv = (e) => { const r = b.getBoundingClientRect(); x((e.clientX - r.left - r.width / 2) * 0.28); y((e.clientY - r.top - r.height / 2) * 0.35); };
        const lv = () => { x(0); y(0); };
        b.addEventListener("pointermove", mv); b.addEventListener("pointerleave", lv);
      });
    }

    addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
  });
})();
