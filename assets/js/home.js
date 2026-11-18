/* SEN Global Group: landing page motion ("From rock to refined") */
(() => {
  const D = window.SEN;
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const pad = (n) => String(n).padStart(2, "0");
  const ARR = '<svg class="idx__arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 12h15M13 6l6 6-6 6"/></svg>';

  /* ---------- Content: product index + client marquee ---------- */
  $("#idx").innerHTML = D.products.map((p, i) => `
    <li><a class="idx__row" href="product.html?id=${p.id}" data-img="${p.img}" data-name="${esc(p.name)}">
      <span class="idx__no">${pad(i + 1)}</span>
      <span class="idx__name">${esc(p.name)}${p.badge ? `<span class="idx__badge">${p.badge}</span>` : ""}</span>
      <span class="idx__spec">${esc(D.key[p.id] || "")}</span>
      ${ARR}
      <img class="idx__thumb" src="${p.img}" alt="" loading="lazy">
    </a></li>`).join("");

  // Manifesto: split into words (kept as real text for screen readers)
  const man = $("#manifesto");
  const KEYW = /^(furnaces|tiles|glass|cement|own)/i;
  man.innerHTML = man.textContent.trim().split(/\s+/).map((w) => `<span class="w${KEYW.test(w) ? " is-key" : ""}">${esc(w)}</span>`).join(" ");

  const done = () => { document.documentElement.classList.remove("show-pre"); document.body.classList.remove("is-loading"); };
  window.scrollTo({ top: 0, left: 0, behavior: "instant" });

  if (!window.gsap || !window.ScrollTrigger) { // CDN unavailable: show everything statically
    done(); $$(".manifesto__text .w").forEach((w) => (w.style.opacity = 1)); $$(".h-map .pin i").forEach((i) => (i.style.transform = "none")); return;
  }
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true }); // phone address bar showing/hiding shouldn't re-layout animations
  gsap.defaults({ ease: "power3.out", duration: 0.9 });

  const mm = gsap.matchMedia();

  mm.add({ any: "all", reduce: "(prefers-reduced-motion: reduce)", desktop: "(min-width: 901px)", fine: "(hover: hover) and (pointer: fine)" }, (ctx) => {
    const { reduce, desktop, fine } = ctx.conditions;

    if (reduce) {
      done();
      gsap.set(".manifesto__text .w", { opacity: 1 });
      gsap.set(".h-map .pin i", { scale: 1 });
      return;
    }

    /* ---------- Smooth scroll (Lenis drives ScrollTrigger) ---------- */
    let lenis;
    if (window.Lenis) {
      lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
      document.documentElement.classList.add("has-lenis");
      lenis.on("scroll", ScrollTrigger.update);
      const raf = (t) => lenis.raf(t * 1000);
      gsap.ticker.add(raf);
      gsap.ticker.lagSmoothing(0);
      $$('a[href^="#"]').forEach((a) => a.addEventListener("click", (e) => {
        const t = $(a.getAttribute("href")); if (!t) return;
        e.preventDefault(); lenis.scrollTo(t, { offset: 0, duration: 1.4 });
      }));
      ctx.add(() => () => { gsap.ticker.remove(raf); lenis.destroy(); document.documentElement.classList.remove("has-lenis"); });
    }

    /* ---------- Preloader → hero intro ---------- */
    const showPre = document.documentElement.classList.contains("show-pre");
    gsap.set(".h-title .ln > span", { yPercent: 115 });
    gsap.set(".h-fade, .h-hero__meta", { autoAlpha: 0, y: 24 });
    gsap.set(".h-hero__media", { clipPath: "inset(14% 12% 14% 12%)" });
    gsap.set(".h-hero__media img", { scale: 1.35 });

    const intro = gsap.timeline({ paused: true, onComplete: () => { buildHeroScroll(); ScrollTrigger.refresh(); } })
      .to(".h-hero__media", { clipPath: "inset(0% 0% 0% 0%)", duration: 1.5, ease: "expo.inOut" })
      .to(".h-hero__media img", { scale: 1, duration: 1.9, ease: "expo.out" }, "<")
      .to(".h-title .ln > span", { yPercent: 0, duration: 1.15, stagger: 0.11, ease: "power4.out" }, "-=0.95")
      .to(".h-hero__meta, .h-fade", { autoAlpha: 1, y: 0, stagger: 0.08, duration: 0.9 }, "-=0.7");

    if (showPre) {
      document.body.classList.add("is-loading"); lenis?.scrollTo(0, { immediate: true, force: true }); lenis?.stop();
      const yr = { v: 1973 }, end = new Date().getFullYear();
      gsap.timeline({ onComplete: () => { done(); lenis?.start(); } })
        .to(yr, { v: end, duration: 1.5, ease: "power2.inOut", onUpdate: () => ($("#pre-year").textContent = Math.round(yr.v)) })
        .to(".pre__bar i", { scaleX: 1, duration: 1.5, ease: "power2.inOut" }, 0)
        .from(".pre__logo", { autoAlpha: 0, y: 28, scale: 0.92, duration: 0.9, ease: "power3.out" }, 0)
        .from(".pre__top > span:last-child, .pre__bot", { autoAlpha: 0, duration: 0.8 }, 0.2)
        .to(".pre", { yPercent: -100, duration: 1, ease: "expo.inOut" }, "+=0.15")
        .add(() => intro.play(), "-=0.55");
    } else {
      done(); intro.play();
    }

    /* ---------- Hero scroll: the headline is "crushed" ---------- */
    // Built after the intro so the two never fight over the same properties (that caused a jump/flash)
    const buildHeroScroll = () => {
      const heroTl = gsap.timeline({ scrollTrigger: { trigger: ".h-hero", start: "top top", end: "bottom top", scrub: true } });
      heroTl.fromTo(".h-hero__media img", { scale: 1, yPercent: 0 }, { scale: 1.14, yPercent: 8, ease: "none", immediateRender: false }, 0)
        .fromTo(".h-title", { yPercent: 0 }, { yPercent: -18, ease: "none", immediateRender: false }, 0)
        .fromTo(".h-hero__row, .h-hero__meta", { autoAlpha: 1, y: 0 }, { autoAlpha: 0, y: -40, ease: "none", immediateRender: false }, 0);
      if (desktop) heroTl.fromTo(".h-title", { "--wdth": 100 }, { "--wdth": 64, ease: "none", immediateRender: false }, 0);
    };

    /* ---------- Manifesto: words light up as you read ---------- */
    gsap.to(".manifesto__text .w", {
      opacity: 1, stagger: 0.08, ease: "none",
      scrollTrigger: { trigger: "#manifesto", start: "top 78%", end: "bottom 45%", scrub: 0.6 }
    });
    if (desktop) gsap.from(".manifesto__foot li, .manifesto__foot .link-arrow", { autoAlpha: 0, y: 30, stagger: 0.08, scrollTrigger: { trigger: ".manifesto__foot", start: "top 90%" } });

    /* ---------- Process: pinned horizontal chapters (desktop) ---------- */
    const track = $(".proc__track");
    if (desktop) {
      const dist = () => track.scrollWidth - innerWidth;
      const steps = $$(".chap[data-step]");
      const horiz = gsap.to(track, {
        x: () => -dist(), ease: "none",
        scrollTrigger: {
          trigger: ".proc", pin: true, scrub: 0.8, start: "top top", end: () => "+=" + dist(), invalidateOnRefresh: true,
          onUpdate: (st) => {
            gsap.set(".proc__progress i", { scaleX: st.progress });
            const n = Math.min(steps.length, Math.max(1, Math.round(st.progress * (steps.length - 1)) + 1));
            $("#proc-count").textContent = `${pad(n)} / ${pad(steps.length)}`;
          }
        }
      });
      steps.forEach((ch) => {
        const media = $(".chap__media", ch), mImg = $("img", media);
        const st = { trigger: ch, containerAnimation: horiz, start: "left right", end: "right left", scrub: true };
        if (media.classList.contains("chap__media--contain")) gsap.fromTo(mImg, { rotation: -25 }, { rotation: 25, ease: "none", scrollTrigger: st }); // sample dish turns slowly
        else gsap.fromTo(mImg, { xPercent: -12 }, { xPercent: 0, ease: "none", scrollTrigger: st });
        gsap.from([$(".chap__num", ch), $("h3", ch), $("p", ch), $(".chap__spec", ch)], { autoAlpha: 0, y: 50, stagger: 0.08, scrollTrigger: { trigger: ch, containerAnimation: horiz, start: "left 70%" } });
      });
      gsap.from(".chap--intro h2, .chap--intro p", { autoAlpha: 0, y: 60, stagger: 0.12, scrollTrigger: { trigger: ".proc", start: "top 70%" } });
    }

    /* ---------- Product index ---------- */
    if (desktop) {
    gsap.from(".idx__head > *", { autoAlpha: 0, y: 40, stagger: 0.1, scrollTrigger: { trigger: ".idx", start: "top 80%" } });
    ScrollTrigger.batch(".idx__list li", {
      start: "top 92%", once: true,
      onEnter: (els) => gsap.fromTo(els, { autoAlpha: 0, y: 40 }, { autoAlpha: 1, y: 0, stagger: 0.05, duration: 0.8, overwrite: true })
    });
    gsap.set(".idx__list li", { autoAlpha: 0 });
    }

    if (fine && desktop) {
      const pv = $(".preview"), pvImg = $("img", pv), pvCap = $("figcaption", pv);
      const xTo = gsap.quickTo(pv, "x", { duration: 0.55, ease: "power3" });
      const yTo = gsap.quickTo(pv, "y", { duration: 0.55, ease: "power3" });
      const rTo = gsap.quickTo(pv, "rotation", { duration: 0.8, ease: "power3" });
      let lastX = 0;
      const move = (e) => { xTo(e.clientX); yTo(e.clientY); rTo(gsap.utils.clamp(-10, 10, (e.clientX - lastX) * 0.6)); lastX = e.clientX; };
      $$(".idx__row").forEach((row) => {
        row.addEventListener("mouseenter", (e) => {
          pvImg.src = row.dataset.img; pvCap.textContent = row.dataset.name;
          gsap.set(pv, { x: e.clientX, y: e.clientY }); lastX = e.clientX;
          gsap.to(pv, { autoAlpha: 1, scale: 1, duration: 0.45, ease: "power3.out", overwrite: "auto" });
        });
        row.addEventListener("mouseleave", () => gsap.to(pv, { autoAlpha: 0, scale: 0.6, duration: 0.35, ease: "power3.in", overwrite: "auto" }));
      });
      const list = $("#idx");
      list.addEventListener("mousemove", move);
      ctx.add(() => () => list.removeEventListener("mousemove", move));
    }

    /* ---------- Band: scrubbed outline line + stats ---------- */
    // Seamless loop: drifts steadily, speeds up with scroll and turns with scroll direction
    const loop = gsap.to(".band__track", { xPercent: -50, ease: "none", duration: 26, repeat: -1 });
    let dir = 1;
    ScrollTrigger.create({
      trigger: ".band", start: "top bottom", end: "bottom top",
      onToggle: (st) => (st.isActive ? loop.play() : loop.pause()),
      onUpdate: (st) => {
        const v = st.getVelocity(); if (Math.abs(v) < 5) return;
        dir = v > 0 ? 1 : -1;
        const boost = gsap.utils.clamp(1, 4, 1 + Math.abs(v) / 700);
        gsap.to(loop, { timeScale: dir * boost, duration: 0.3, overwrite: true, onComplete: () => gsap.to(loop, { timeScale: dir, duration: 1.2, ease: "power2.out" }) });
      }
    });
    if (desktop) gsap.from(".band .stat", { autoAlpha: 0, y: 40, stagger: 0.08, scrollTrigger: { trigger: ".band .stats", start: "top 85%" } });

    /* ---------- Footprint ---------- */
    if (!desktop) gsap.set(".h-map .pin i", { scale: 1 });
    else {
    gsap.from(".h-map .map__fig img", { autoAlpha: 0, scale: 0.94, duration: 1.4, scrollTrigger: { trigger: ".h-map", start: "top 70%" } });
    gsap.to(".h-map .pin i", { scale: 1, duration: 0.7, stagger: 0.25, ease: "back.out(3)", scrollTrigger: { trigger: ".h-map", start: "top 55%" } });
    gsap.from(".h-map .pin span", { autoAlpha: 0, x: (i) => (i ? 16 : -16), stagger: 0.25, delay: 0.3, scrollTrigger: { trigger: ".h-map", start: "top 55%" } });
    gsap.from(".h-map .tag, .h-map h2, .h-map .loc-list li", { autoAlpha: 0, y: 36, stagger: 0.07, scrollTrigger: { trigger: ".h-map .loc-list", start: "top 85%" } });
    }

    /* ---------- Clients ---------- */
    if (desktop) gsap.from(".cl .shead > *", { autoAlpha: 0, y: 36, stagger: 0.1, scrollTrigger: { trigger: ".cl", start: "top 80%" } });
    if (desktop) gsap.from(".client", { autoAlpha: 0, y: 50, stagger: 0.08, duration: 1, scrollTrigger: { trigger: "#logos", start: "top 85%" } });

    /* ---------- Final CTA ---------- */
    if (desktop) {
    gsap.fromTo(".fin__bg img", { yPercent: -10 }, { yPercent: 6, ease: "none", scrollTrigger: { trigger: ".fin", start: "top bottom", end: "bottom top", scrub: true } });
    gsap.from(".fin__big .ln > span", { yPercent: 115, stagger: 0.12, duration: 1.2, ease: "power4.out", scrollTrigger: { trigger: ".fin", start: "top 65%" } });
    gsap.from(".fin .tag, .fin__row > *", { autoAlpha: 0, y: 30, stagger: 0.1, delay: 0.3, scrollTrigger: { trigger: ".fin", start: "top 65%" } });
    }

    /* ---------- Magnetic buttons ---------- */
    if (fine) {
      $$(".magnet").forEach((b) => {
        const x = gsap.quickTo(b, "x", { duration: 0.5, ease: "elastic.out(1, 0.4)" });
        const y = gsap.quickTo(b, "y", { duration: 0.5, ease: "elastic.out(1, 0.4)" });
        const mv = (e) => { const r = b.getBoundingClientRect(); x((e.clientX - r.left - r.width / 2) * 0.28); y((e.clientY - r.top - r.height / 2) * 0.35); };
        const lv = () => { x(0); y(0); };
        b.addEventListener("pointermove", mv); b.addEventListener("pointerleave", lv);
        ctx.add(() => () => { b.removeEventListener("pointermove", mv); b.removeEventListener("pointerleave", lv); });
      });
    }

    // Layout settles after images/fonts load
    document.fonts?.ready.then(() => ScrollTrigger.refresh());
    addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
  });
})();
