/* SEN Global Group: shared motion for inner pages (About, Projects)
   Declarative hooks:
   [data-lines]   masked line reveal on .ln > span children
   [data-fade]    children fade/rise in, staggered
   [data-clip]    image frame opens from an inset clip
   [data-scrub]   inner <img> drifts with scroll (parallax)
   [data-lit]     paragraph words light up as you scroll
   .magnet        buttons pull toward the cursor                         */
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  // Split [data-lit] paragraphs into words up-front (static fallback keeps them readable)
  $$("[data-lit]").forEach((p) => {
    const keys = (p.dataset.lit || "").split(",").map((s) => s.trim().toLowerCase()).filter(Boolean);
    p.innerHTML = p.textContent.trim().split(/\s+/).map((w) => {
      const k = keys.some((x) => w.toLowerCase().startsWith(x));
      return `<span class="w${k ? " is-key" : ""}">${esc(w)}</span>`;
    }).join(" ");
  });

  if (!window.gsap || !window.ScrollTrigger) { $$("[data-lit] .w").forEach((w) => (w.style.opacity = 1)); return; }
  gsap.registerPlugin(ScrollTrigger);
  ScrollTrigger.config({ ignoreMobileResize: true });
  gsap.defaults({ ease: "power3.out", duration: 0.9 });

  gsap.matchMedia().add({ any: "all", reduce: "(prefers-reduced-motion: reduce)", desktop: "(min-width: 901px)", fine: "(hover: hover) and (pointer: fine)" }, (ctx) => {
    const { reduce, desktop, fine } = ctx.conditions;
    if (reduce) { gsap.set("[data-lit] .w", { opacity: 1 }); return; }

    /* Smooth scroll */
    if (window.Lenis) {
      const lenis = new Lenis({ lerp: 0.1, smoothWheel: true });
      window.__lenis = lenis;
      document.documentElement.classList.add("has-lenis");
      lenis.on("scroll", ScrollTrigger.update);
      const raf = (t) => lenis.raf(t * 1000);
      gsap.ticker.add(raf); gsap.ticker.lagSmoothing(0);
      $$('a[href^="#"]').forEach((a) => a.addEventListener("click", (e) => {
        const t = $(a.getAttribute("href")); if (!t) return;
        e.preventDefault(); lenis.scrollTo(t, { offset: -10, duration: 1.4 });
      }));
      ctx.add(() => () => { gsap.ticker.remove(raf); lenis.destroy(); window.__lenis = null; document.documentElement.classList.remove("has-lenis"); });
    }

    /* Masked lines */
    $$("[data-lines]").forEach((el, i) => {
      const spans = $$(".ln > span", el);
      const inHero = el.closest(".x-hero");
      gsap.from(spans, {
        yPercent: 115, stagger: 0.11, duration: 1.2, ease: "power4.out", delay: inHero ? 0.1 : 0,
        scrollTrigger: inHero ? undefined : { trigger: el, start: "top 82%" }
      });
    });

    /* Fade groups */
    $$("[data-fade]").forEach((el) => {
      const kids = el.children.length ? el.children : [el];
      const inHero = el.closest(".x-hero");
      if (!desktop && !inHero) return; // phones: no fade-ins while scrolling
      gsap.from(kids, {
        autoAlpha: 0, y: 34, stagger: 0.08, delay: inHero ? 0.5 : 0,
        scrollTrigger: inHero ? undefined : { trigger: el, start: "top 86%" }
      });
    });

    /* Clip-open frames */
    if (desktop) $$("[data-clip]").forEach((el) => {
      const img = $("img", el);
      gsap.fromTo(el, { clipPath: "inset(16% 10% 16% 10%)" }, { clipPath: "inset(0% 0% 0% 0%)", duration: 1.4, ease: "expo.inOut", scrollTrigger: { trigger: el, start: "top 80%" } });
      if (img) gsap.fromTo(img, { scale: 1.3 }, { scale: 1, duration: 1.8, ease: "expo.out", scrollTrigger: { trigger: el, start: "top 80%" } });
    });

    /* Parallax images */
    if (desktop) $$("[data-scrub]").forEach((el) => {
      const img = $("img", el); const amt = +el.dataset.scrub || 8;
      gsap.fromTo(img, { yPercent: -amt }, { yPercent: amt, ease: "none", scrollTrigger: { trigger: el, start: "top bottom", end: "bottom top", scrub: true } });
    });

    /* Lit words */
    $$("[data-lit]").forEach((p) => gsap.to($$(".w", p), { opacity: 1, stagger: 0.08, ease: "none", scrollTrigger: { trigger: p, start: "top 78%", end: "bottom 45%", scrub: 0.6 } }));

    /* Magnetic buttons */
    if (fine) $$(".magnet").forEach((b) => {
      const x = gsap.quickTo(b, "x", { duration: 0.5, ease: "elastic.out(1, 0.4)" });
      const y = gsap.quickTo(b, "y", { duration: 0.5, ease: "elastic.out(1, 0.4)" });
      b.addEventListener("pointermove", (e) => { const r = b.getBoundingClientRect(); x((e.clientX - r.left - r.width / 2) * 0.28); y((e.clientY - r.top - r.height / 2) * 0.35); });
      b.addEventListener("pointerleave", () => { x(0); y(0); });
    });

    /* Page-specific choreography */
    const page = document.body.dataset.page;

    if (page === "about") {
      // Opening band: image frame widens as it scrolls into view
      gsap.fromTo(".a-band__frame", { clipPath: "inset(0% 14% 0% 14%)" }, { clipPath: "inset(0% 0% 0% 0%)", ease: "none", scrollTrigger: { trigger: ".a-band", start: "top bottom", end: "center center", scrub: true } });
      gsap.fromTo(".a-band__frame img", { scale: 1.25 }, { scale: 1, ease: "none", scrollTrigger: { trigger: ".a-band", start: "top bottom", end: "bottom top", scrub: true } });

      // Timeline spine draws, milestones light up
      gsap.fromTo(".tl__spine i", { scaleY: 0 }, { scaleY: 1, ease: "none", scrollTrigger: { trigger: ".tl__list", start: "top 60%", end: "bottom 60%", scrub: true } });
      $$(".tl__item").forEach((it) => {
        ScrollTrigger.create({ trigger: it, start: "top 62%", end: "bottom 62%", toggleClass: { targets: it, className: "is-on" },
          onEnter: () => ($("#tl-year").textContent = it.dataset.year), onEnterBack: () => ($("#tl-year").textContent = it.dataset.year) });
        if (desktop) gsap.from($$(".tl__card > *", it), { autoAlpha: 0, y: 30, stagger: 0.07, scrollTrigger: { trigger: it, start: "top 80%" } });
      });

      // Values: each row slides in from alternating sides
      if (desktop) $$(".vals li").forEach((li, i) => gsap.from(li, { xPercent: i % 2 ? 6 : -6, autoAlpha: 0, duration: 1.1, scrollTrigger: { trigger: li, start: "top 90%" } }));

      // Strength cards
      if (desktop) {
      ScrollTrigger.batch(".str", { start: "top 88%", once: true, onEnter: (els) => gsap.fromTo(els, { autoAlpha: 0, y: 50 }, { autoAlpha: 1, y: 0, stagger: 0.07, overwrite: true }) });
      gsap.set(".str", { autoAlpha: 0 });
      gsap.from(".client", { autoAlpha: 0, y: 50, stagger: 0.08, duration: 1, scrollTrigger: { trigger: "#logos", start: "top 85%" } });
      }
    }

    if (page === "projects") {
      // Pinned film strip (desktop)
      const track = $(".reel__track");
      if (desktop && track) {
        const dist = () => track.scrollWidth - innerWidth + parseFloat(getComputedStyle(track).paddingLeft);
        const frames = $$(".reel__item");
        const horiz = gsap.to(track, {
          x: () => -dist(), ease: "none",
          scrollTrigger: { trigger: ".reel", pin: true, scrub: 0.8, start: "top top", end: () => "+=" + dist(), invalidateOnRefresh: true,
            onUpdate: (st) => {
              gsap.set(".reel__progress i", { scaleX: st.progress });
              const n = Math.min(frames.length, Math.round(st.progress * (frames.length - 1)) + 1);
              $("#reel-n").textContent = String(n).padStart(2, "0");
            } }
        });
        frames.forEach((f) => {
          gsap.fromTo($("img", f), { xPercent: -10 }, { xPercent: 0, ease: "none", scrollTrigger: { trigger: f, containerAnimation: horiz, start: "left right", end: "right left", scrub: true } });
          gsap.from($("figcaption", f), { autoAlpha: 0, y: 24, scrollTrigger: { trigger: f, containerAnimation: horiz, start: "left 75%" } });
        });
      }
      // Mosaic tiles
      if (desktop) {
      ScrollTrigger.batch(".mosaic figure", { start: "top 90%", once: true, onEnter: (els) => gsap.fromTo(els, { autoAlpha: 0, y: 60, scale: 0.96 }, { autoAlpha: 1, y: 0, scale: 1, stagger: 0.08, duration: 1, overwrite: true }) });
      gsap.set(".mosaic figure", { autoAlpha: 0 });
      gsap.from(".kit li", { autoAlpha: 0, y: 40, stagger: 0.08, scrollTrigger: { trigger: ".kit", start: "top 80%" } });
      }
    }

    if (desktop && document.querySelector(".cta")) gsap.from(".cta__text > *", { autoAlpha: 0, y: 34, stagger: 0.09, scrollTrigger: { trigger: ".cta", start: "top 70%" } });

    document.fonts?.ready.then(() => ScrollTrigger.refresh());
    addEventListener("load", () => ScrollTrigger.refresh(), { once: true });
  });
})();
