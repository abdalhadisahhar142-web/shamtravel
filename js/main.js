/* =========================================================
   Sham Travel — Interactions & Animations
   ========================================================= */
(() => {
  const $ = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => [...c.querySelectorAll(s)];
  const page = document.body.dataset.page || "home";
  const fine = matchMedia("(hover: hover) and (pointer: fine)").matches;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const openLink = url => { const a = document.createElement("a"); a.href = url; a.target = "_blank"; a.rel = "noopener"; document.body.appendChild(a); a.click(); a.remove(); };
  const wa = (msg = "") => `https://wa.me/${SITE.whatsapp}${msg ? "?text=" + encodeURIComponent(msg) : ""}`;

  /* ---------- shared layout injection ---------- */
  const NAV = [
    ["home", "index.html", "الرئيسية"], ["about", "about.html", "من نحن"], ["services", "services.html", "خدماتنا"],
    ["packages", "packages.html", "الباقات"], ["guide", "guide.html", "دليل المسافر"], ["contact", "contact.html", "تواصل معنا"]
  ];
  const header = `
    <div class="scroll-progress"></div>
    <header class="header" id="header">
      <div class="container header__in">
        <a href="index.html" class="brand" aria-label="${SITE.fullName}">
          <img src="assets/logo-h.png" alt="شعار شام ترافل">
        </a>
        <nav class="nav">${NAV.map(([k, h, t]) => `<a href="${h}" class="${k === page ? "active" : ""}">${t}</a>`).join("")}</nav>
        <div class="header__cta">
          <a class="icon-btn" href="${wa()}" target="_blank" rel="noopener" aria-label="واتساب">${I.whatsapp}</a>
          <a href="booking.html" class="btn btn--primary btn--sm" data-magnetic>احجز رحلتك ${I.arrow}</a>
          <button class="burger" aria-label="القائمة"><span></span><span></span><span></span></button>
        </div>
      </div>
    </header>
    <div class="mobile-menu">
      ${NAV.concat([["booking", "booking.html", "احجز الآن"]]).map(([k, h, t], i) => `<a class="m-link" href="${h}" style="transition-delay:${0.25 + i * 0.06}s">${t}<small>0${i + 1}</small></a>`).join("")}
      <div class="mobile-menu__foot">
        <a class="btn btn--primary" href="${wa()}" target="_blank" rel="noopener">${I.whatsapp} واتساب</a>
        <a class="btn btn--ghost" href="tel:${SITE.phone.replace(/\s/g, "")}">${I.phone} اتصل بنا</a>
      </div>
    </div>`;
  const footer = `
    <footer class="footer">
      <div class="container">
        <div class="footer__grid">
          <div class="footer__about">
            <a href="index.html" class="brand"><img src="assets/logo.png" alt="${SITE.fullName}" style="height:84px"></a>
            <p>بوابتك إلى العالم… تذاكر طيران، فنادق، تأشيرات ورحلات سياحية بخدمة موثوقة وأسعار منافسة.</p>
            <div class="socials">
              <a href="${SITE.facebook}" target="_blank" rel="noopener" aria-label="فيسبوك">${I.facebook}</a>
              <a href="${SITE.instagram}" target="_blank" rel="noopener" aria-label="انستغرام">${I.instagram}</a>
              <a href="${wa()}" target="_blank" rel="noopener" aria-label="واتساب">${I.whatsapp}</a>
            </div>
          </div>
          <div><h4>روابط سريعة</h4><ul>${NAV.map(([, h, t]) => `<li><a href="${h}">${t}</a></li>`).join("")}<li><a href="booking.html">احجز رحلتك</a></li></ul></div>
          <div><h4>خدماتنا</h4><ul>${SERVICES.slice(0, 6).map(s => `<li><a href="services.html#${s.id}">${s.title}</a></li>`).join("")}</ul></div>
          <div><h4>تواصل معنا</h4><ul class="footer__contact">
            <li>${I.pin}<span>${SITE.address}</span></li>
            <li>${I.phone}<a href="tel:${SITE.phone.replace(/\s/g, "")}" dir="ltr">${SITE.phone}</a></li>
            <li>${I.mail}<a href="mailto:${SITE.email}">${SITE.email}</a></li>
            <li>${I.clock}<span>${SITE.hours}</span></li>
          </ul></div>
        </div>
        <div class="footer__big">SHAM TRAVEL</div>
        <div class="footer__bottom"><span>© <span class="yr"></span> ${SITE.fullName}. جميع الحقوق محفوظة.</span><span>سافر بثقة… العالم أقرب مع شام ترافل</span></div>
      </div>
    </footer>
    <a class="wa-float" href="${wa("مرحباً شام ترافل، أود الاستفسار عن رحلاتكم")}" target="_blank" rel="noopener" aria-label="واتساب">${I.whatsapp}</a>
    <button class="to-top" aria-label="للأعلى"><svg class="ring" viewBox="0 0 52 52"><circle cx="26" cy="26" r="24" stroke="rgba(255,255,255,.1)"/><circle class="prog" cx="26" cy="26" r="24" stroke="#d9dce0" stroke-dasharray="150.8" stroke-dashoffset="150.8"/></svg>${I.arrowUp}</button>
    <div class="cursor"></div><div class="cursor-dot"></div>
    <div class="page-trans"><span></span><span></span><span></span><span></span><span></span></div>`;

  document.body.insertAdjacentHTML("afterbegin", header);
  document.body.insertAdjacentHTML("beforeend", footer);
  $$(".yr").forEach(e => (e.textContent = new Date().getFullYear()));

  /* fill config placeholders */
  $$("[data-site]").forEach(el => { el.textContent = SITE[el.dataset.site]; });
  $$("[data-wa]").forEach(el => { el.href = wa(el.dataset.wa); el.target = "_blank"; el.rel = "noopener"; });
  $$("[data-tel]").forEach(el => { el.href = "tel:" + SITE.phone.replace(/\s/g, ""); });
  $$("[data-icon]").forEach(el => { el.insertAdjacentHTML("afterbegin", I[el.dataset.icon] || ""); });
  $$("[data-art]").forEach(el => { el.insertAdjacentHTML("afterbegin", ART(el.dataset.art)); });

  /* ---------- page renderers ---------- */
  const serviceCard = (s, i) => `
    <article class="card" data-tilt data-reveal="up" style="--rd:${(i % 4) * 0.08}s" id="${s.id}">
      <span class="card__num">0${i + 1}</span>
      <div class="card__icon">${I[s.icon]}</div>
      <h3>${s.title}</h3><p>${s.short}</p>
      <a class="card__link" href="services.html#${s.id}">اعرف المزيد ${I.arrow}</a>
    </article>`;
  const pkgCard = (p, i) => `
    <article class="pkg ${p.featured ? "pkg--featured" : ""}" data-type="${p.type}" data-reveal="up" style="--rd:${(i % 3) * 0.1}s">
      <div class="pkg__media">${ART(p.art)}<span class="pkg__tag ${p.featured ? "" : "alt"}">${p.tag}</span><span class="pkg__dur">${p.days} أيام</span></div>
      <div class="pkg__body">
        <span class="pkg__type">${p.typeLabel}</span>
        <h3>${p.title}</h3>
        <div class="pkg__price"><small>تبدأ من</small><b class="metal">${SITE.currency}${p.price.toLocaleString("en")}</b><small>/ للشخص</small></div>
        <ul class="pkg__list">${p.features.slice(0, 4).map(f => `<li>${I.check}${f}</li>`).join("")}</ul>
        <div class="pkg__actions">
          <a class="btn btn--primary btn--sm" href="booking.html?pkg=${p.id}">احجز الآن</a>
          <button class="btn btn--ghost btn--sm" data-details="${p.id}">التفاصيل</button>
        </div>
      </div>
    </article>`;

  const svcGrid = $("#services-grid");
  if (svcGrid) svcGrid.innerHTML = SERVICES.slice(0, +svcGrid.dataset.limit || 8).map(serviceCard).join("");

  const svcDetail = $("#services-detail");
  if (svcDetail) svcDetail.innerHTML = SERVICES.map((s, i) => `
    <div class="split ${i % 2 ? "split--rev" : ""}" id="${s.id}" style="margin-bottom:clamp(70px,9vw,130px);scroll-margin-top:120px">
      <div style="order:${i % 2 ? 2 : 0}" data-reveal="${i % 2 ? "left" : "right"}">
        <span class="eyebrow">خدمة 0${i + 1}</span>
        <h2 class="h-1" style="margin:12px 0 14px">${s.title}</h2>
        <p class="lead">${s.short}</p>
        <ul class="check-list">${s.points.map(p => `<li><i>${I.check}</i><span><b>${p}</b></span></li>`).join("")}</ul>
        <a class="btn btn--primary" href="booking.html?service=${s.id}" data-magnetic>اطلب الخدمة ${I.arrow}</a>
        <a class="btn btn--ghost" style="margin-inline-start:8px" href="${wa("أود الاستفسار عن خدمة: " + s.title)}" target="_blank" rel="noopener">${I.whatsapp} استفسار</a>
      </div>
      <div class="visual-card" data-reveal="clip" data-speed="0.04">${ART(s.art)}
        <div class="visual-card__tag"><div><small>${SITE.fullName}</small><b>${s.title}</b></div><div class="card__icon" style="margin:0;width:48px;height:48px">${I[s.icon]}</div></div>
      </div>
    </div>`).join("");

  const pkgGrid = $("#packages-grid");
  if (pkgGrid) {
    const lim = +pkgGrid.dataset.limit || PACKAGES.length;
    const list = pkgGrid.dataset.limit ? PACKAGES.filter(p => ["istanbul", "kl", "dubai"].includes(p.id)) : PACKAGES;
    pkgGrid.innerHTML = list.slice(0, lim).map(pkgCard).join("");
  }

  const tstTrack = $("#tst-track");
  if (tstTrack) {
    tstTrack.innerHTML = TESTIMONIALS.map(t => `
      <div class="tst__slide"><div class="stars">${I.star.repeat(5)}</div><p>«${t.text}»</p>
      <div class="tst__who"><span class="tst__av">${t.name.trim().charAt(0)}</span><div><b>${t.name}</b><small>${t.role}</small></div></div></div>`).join("");
    $("#tst-dots").innerHTML = TESTIMONIALS.map((_, i) => `<button aria-label="${i + 1}" class="${i ? "" : "active"}"></button>`).join("");
  }

  const faqBox = $("#faq");
  if (faqBox) faqBox.innerHTML = FAQS.map((f, i) => `
    <div class="faq__item ${i ? "" : "open"}" data-reveal="up" style="--rd:${i * 0.06}s">
      <button class="faq__q">${f.q}<i></i></button>
      <div class="faq__a"><div><p>${f.a}</p></div></div>
    </div>`).join("");

  /* ---------- split words ---------- */
  $$(".split-words").forEach(el => {
    let i = 0;
    const walk = node => {
      [...node.childNodes].forEach(n => {
        if (n.nodeType === 3) {
          const frag = document.createDocumentFragment();
          n.textContent.split(/(\s+)/).forEach(part => {
            if (!part.trim()) { frag.appendChild(document.createTextNode(part)); return; }
            const w = document.createElement("span"); w.className = "w";
            const inner = document.createElement("span"); inner.textContent = part; inner.style.setProperty("--i", i++);
            w.appendChild(inner); frag.appendChild(w);
          });
          n.replaceWith(frag);
        } else if (n.nodeType === 1 && !n.classList.contains("w")) walk(n);
      });
    };
    walk(el);
  });

  /* ---------- preloader ---------- */
  const pre = $(".preloader");
  const finishLoad = () => {
    if (pre) pre.classList.add("done");
    document.body.classList.remove("is-loading");
    document.body.classList.add("loaded");
    setTimeout(() => pre && pre.remove(), 1300);
  };
  if (pre) {
    const bar = $(".preloader__bar i"), pct = $(".preloader__txt");
    let p = 0;
    const isFirst = !sessionStorageSafe("seen");
    const minTime = isFirst ? 1700 : 650;
    const t0 = performance.now();
    const tick = () => {
      const target = Math.min(100, ((performance.now() - t0) / minTime) * 100);
      p += (target - p) * 0.2;
      if (bar) bar.style.transform = `scaleX(${p / 100})`;
      if (pct) pct.textContent = Math.round(p) + "%";
      if (p < 99.5) requestAnimationFrame(tick); else { sessionStorageSafe("seen", "1"); finishLoad(); }
    };
    requestAnimationFrame(tick);
  } else finishLoad();
  function sessionStorageSafe(k, v) { try { if (v) sessionStorage.setItem(k, v); return sessionStorage.getItem(k); } catch (e) { return null; } }

  /* ---------- header & scroll ---------- */
  const hdr = $("#header"), prog = $(".scroll-progress"), toTop = $(".to-top"), ring = $(".to-top .prog");
  let lastY = 0;
  const onScroll = () => {
    const y = scrollY, max = document.documentElement.scrollHeight - innerHeight, r = max > 0 ? y / max : 0;
    hdr.classList.toggle("scrolled", y > 30);
    hdr.classList.toggle("hide", y > 500 && y > lastY && !document.body.classList.contains("menu-open"));
    lastY = y;
    prog.style.transform = `scaleX(${r})`;
    toTop.classList.toggle("show", y > 600);
    ring.style.strokeDashoffset = 150.8 * (1 - r);
    parallax();
    guideFill();
  };
  addEventListener("scroll", onScroll, { passive: true });
  toTop.addEventListener("click", () => scrollTo({ top: 0, behavior: "smooth" }));

  /* mobile menu */
  $(".burger").addEventListener("click", () => document.body.classList.toggle("menu-open"));
  $$(".mobile-menu a").forEach(a => a.addEventListener("click", () => document.body.classList.remove("menu-open")));

  /* ---------- parallax ---------- */
  const pEls = $$("[data-speed]");
  function parallax() {
    if (reduce) return;
    pEls.forEach(el => {
      const r = el.getBoundingClientRect();
      const c = r.top + r.height / 2 - innerHeight / 2;
      el.style.translate = `0 ${(-c * parseFloat(el.dataset.speed)).toFixed(1)}px`;
    });
  }

  /* ---------- reveal on scroll ---------- */
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      el.classList.add("in");
      if (el.dataset.count !== undefined) countUp(el);
      io.unobserve(el);
    });
  }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });
  const observeAll = () => $$("[data-reveal], .split-words, [data-count], .process, .g-step").forEach(el => io.observe(el));
  observeAll();

  function countUp(el) {
    const end = +el.dataset.count, dur = 2000, t0 = performance.now();
    const step = t => {
      const k = Math.min(1, (t - t0) / dur), e = 1 - Math.pow(1 - k, 4);
      el.textContent = Math.round(end * e).toLocaleString("en");
      if (k < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /* ---------- tilt + spotlight ---------- */
  const bindTilt = () => {
    if (!fine || reduce) return;
    $$("[data-tilt]").forEach(c => {
      if (c._t) return; c._t = 1;
      c.addEventListener("mousemove", e => {
        const r = c.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height;
        c.style.setProperty("--mx", x * 100 + "%"); c.style.setProperty("--my", y * 100 + "%");
        c.style.transform = `perspective(900px) rotateX(${(0.5 - y) * 8}deg) rotateY(${(x - 0.5) * 8}deg) translateY(-6px)`;
      });
      c.addEventListener("mouseleave", () => (c.style.transform = ""));
    });
  };
  bindTilt();

  /* ---------- magnetic buttons ---------- */
  if (fine && !reduce) $$("[data-magnetic]").forEach(b => {
    b.addEventListener("mousemove", e => {
      const r = b.getBoundingClientRect();
      b.style.setProperty("--bx", (e.clientX - r.left - r.width / 2) * 0.25 + "px");
      b.style.setProperty("--by", (e.clientY - r.top - r.height / 2) * 0.35 + "px");
    });
    b.addEventListener("mouseleave", () => { b.style.setProperty("--bx", "0px"); b.style.setProperty("--by", "0px"); });
  });

  /* ---------- custom cursor ---------- */
  if (fine && !reduce) {
    const cur = $(".cursor"), dot = $(".cursor-dot");
    let mx = innerWidth / 2, my = innerHeight / 2, cx = mx, cy = my;
    addEventListener("mousemove", e => { document.body.classList.add("cursor-on"); mx = e.clientX; my = e.clientY; dot.style.transform = `translate(${mx}px,${my}px)`; });
    const loop = () => { cx += (mx - cx) * 0.16; cy += (my - cy) * 0.16; cur.style.transform = `translate(${cx}px,${cy}px)`; requestAnimationFrame(loop); };
    loop();
    document.addEventListener("mouseover", e => cur.classList.toggle("hover", !!e.target.closest("a, button, .choice, [data-tilt]")));
  }

  /* ---------- page transitions ---------- */
  const trans = $(".page-trans");
  document.addEventListener("click", e => {
    const a = e.target.closest("a");
    if (!a || e.metaKey || e.ctrlKey || a.target === "_blank") return;
    const href = a.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("tel:") || href.startsWith("mailto:") || /^https?:/.test(href)) return;
    const url = new URL(href, location.href);
    if (url.pathname === location.pathname && url.hash) return;
    e.preventDefault();
    trans.classList.add("out");
    setTimeout(() => (location.href = href), 750);
  });
  addEventListener("pageshow", e => { if (e.persisted) trans.classList.remove("out"); });

  /* ---------- hero particles ---------- */
  const cvs = $(".hero__canvas");
  if (cvs && !reduce) {
    const ctx = cvs.getContext("2d");
    let W, H, pts = [], mouse = { x: -999, y: -999 };
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const size = () => {
      W = cvs.offsetWidth; H = cvs.offsetHeight; cvs.width = W * dpr; cvs.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      pts = Array.from({ length: Math.min(120, Math.floor(W * H / 12000)) }, () => ({ x: Math.random() * W, y: Math.random() * H, r: Math.random() * 1.6 + .3, vx: (Math.random() - .5) * .25, vy: -Math.random() * .35 - .05, a: Math.random() * .7 + .2 }));
    };
    size(); addEventListener("resize", size);
    cvs.parentElement.addEventListener("mousemove", e => { const r = cvs.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach(p => {
        const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
        if (d < 120) { p.x += dx / d * 1.2; p.y += dy / d * 1.2; }
        p.x += p.vx; p.y += p.vy;
        if (p.y < -10) { p.y = H + 10; p.x = Math.random() * W; }
        if (p.x < -10) p.x = W + 10; if (p.x > W + 10) p.x = -10;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.283); ctx.fillStyle = `rgba(10,133,209,${p.a * 0.45})`; ctx.fill();
      });
      requestAnimationFrame(draw);
    };
    draw();
  }

  /* hero mouse parallax */
  const stage = $(".hero__stage");
  if (stage && fine && !reduce) {
    $(".hero").addEventListener("mousemove", e => {
      const x = e.clientX / innerWidth - .5, y = e.clientY / innerHeight - .5;
      stage.style.transform = `perspective(1000px) rotateY(${x * 8}deg) rotateX(${-y * 6}deg)`;
      $$(".hero__badge").forEach((b, i) => (b.style.translate = `${x * (i ? -30 : 30)}px ${y * 20}px`));
    });
  }

  /* ---------- testimonials ---------- */
  if (tstTrack) {
    let idx = 0; const n = TESTIMONIALS.length, dots = $$("#tst-dots button");
    const go = i => { idx = (i + n) % n; tstTrack.style.transform = `translateX(${idx * 100}%)`; dots.forEach((d, j) => d.classList.toggle("active", j === idx)); };
    dots.forEach((d, i) => d.addEventListener("click", () => { go(i); reset(); }));
    $("#tst-prev")?.addEventListener("click", () => { go(idx - 1); reset(); });
    $("#tst-next")?.addEventListener("click", () => { go(idx + 1); reset(); });
    let timer; const reset = () => { clearInterval(timer); timer = setInterval(() => go(idx + 1), 6000); };
    reset();
  }

  /* ---------- FAQ ---------- */
  $$(".faq__q").forEach(q => q.addEventListener("click", () => {
    const it = q.parentElement, open = it.classList.contains("open");
    $$(".faq__item").forEach(x => x.classList.remove("open"));
    if (!open) it.classList.add("open");
  }));

  /* ---------- package filters + modal ---------- */
  $$(".filter-btn").forEach(b => b.addEventListener("click", () => {
    $$(".filter-btn").forEach(x => x.classList.remove("active")); b.classList.add("active");
    const f = b.dataset.filter;
    $$(".pkg").forEach((p, i) => {
      const show = f === "all" || p.dataset.type === f;
      p.classList.remove("in"); p.classList.toggle("hide", !show);
      if (show) { p.style.setProperty("--rd", (i % 3) * 0.08 + "s"); requestAnimationFrame(() => requestAnimationFrame(() => p.classList.add("in"))); }
    });
  }));
  const qf = new URLSearchParams(location.search).get("type");
  if (qf) $(`.filter-btn[data-filter="${qf}"]`)?.click();

  const modal = $("#pkg-modal");
  document.addEventListener("click", e => {
    const d = e.target.closest("[data-details]");
    if (!d || !modal) return;
    const p = PACKAGES.find(x => x.id === d.dataset.details);
    $(".modal__media", modal).innerHTML = ART(p.art);
    $(".modal__content", modal).innerHTML = `
      <span class="pkg__type">${p.typeLabel} · ${p.days} أيام</span>
      <h3 class="h-1" style="margin:6px 0 10px">${p.title}</h3>
      <div class="pkg__price" style="border:0;padding:0;margin:0"><small>تبدأ من</small><b class="metal">${SITE.currency}${p.price.toLocaleString("en")}</b><small>/ للشخص</small></div>
      <div class="modal__cols">
        <div><h4>الباقة تشمل</h4><ul class="pkg__list">${p.features.map(f => `<li>${I.check}${f}</li>`).join("")}</ul></div>
        <div><h4>برنامج الرحلة</h4><ul class="pkg__list">${p.program.map((s, i) => `<li><b style="color:var(--text);min-width:20px">${i + 1}.</b>${s}</li>`).join("")}</ul></div>
      </div>
      <p style="color:var(--muted);font-size:15px;margin-bottom:24px"><b style="color:var(--text)">الإقامة: </b>${p.hotels}</p>
      <div class="hero__actions" style="justify-content:flex-start">
        <a class="btn btn--primary" href="booking.html?pkg=${p.id}">احجز هذه الباقة ${I.arrow}</a>
        <a class="btn btn--ghost" href="${wa("أود الاستفسار عن: " + p.title)}" target="_blank" rel="noopener">${I.whatsapp} استفسار</a>
      </div>`;
    modal.classList.add("open"); document.body.style.overflow = "hidden";
  });
  const closeModal = () => { modal?.classList.remove("open"); document.body.style.overflow = ""; };
  $$("[data-close]").forEach(b => b.addEventListener("click", closeModal));
  addEventListener("keydown", e => e.key === "Escape" && closeModal());

  /* ---------- guide timeline fill ---------- */
  const gs = $(".guide-steps"), gf = $(".g-fill");
  function guideFill() {
    if (!gs) return;
    const r = gs.getBoundingClientRect();
    const k = Math.min(1, Math.max(0, (innerHeight * 0.6 - r.top) / r.height));
    gf.style.height = k * 100 + "%";
  }

  /* ---------- booking (multi-step → WhatsApp) ---------- */
  const bf = $("#booking-form");
  if (bf) {
    const params = new URLSearchParams(location.search);
    const pkgSel = $("#b-package");
    const fillPkgs = type => {
      const list = PACKAGES.filter(p => !type || ["flights", "hotels", "visa", "transport", "insurance"].includes(type) ? false : p.type === type);
      pkgSel.innerHTML = `<option value="">— برنامج مخصص / غير محدد —</option>` + list.map(p => `<option value="${p.id}">${p.title} — ${SITE.currency}${p.price}</option>`).join("");
    };
    const typeInputs = $$('input[name="type"]', bf);
    typeInputs.forEach(r => r.addEventListener("change", () => fillPkgs(r.value)));
    const pre = params.get("pkg"), svc = params.get("service");
    if (pre) {
      const p = PACKAGES.find(x => x.id === pre);
      if (p) { const r = $(`input[name="type"][value="${p.type}"]`, bf); r.checked = true; fillPkgs(p.type); pkgSel.value = p.id; }
    } else if (svc) {
      const map = { umrah: "umrah", tours: "tour", inbound: "tour", flights: "flights", hotels: "hotels", visa: "visa", transport: "tour", insurance: "tour" };
      const r = $(`input[name="type"][value="${map[svc] || "tour"}"]`, bf); if (r) { r.checked = true; fillPkgs(r.value); }
    } else fillPkgs("tour");

    let step = 0;
    const steps = $$(".form-step", bf), bars = $$(".steps-bar > div");
    const show = i => {
      step = i;
      steps.forEach((s, j) => s.classList.toggle("active", j === i));
      bars.forEach((b, j) => b.classList.toggle("done", j <= i));
      $("#b-prev").style.visibility = i ? "visible" : "hidden";
      $("#b-next").style.display = i === steps.length - 1 ? "none" : "";
      $("#b-send").style.display = i === steps.length - 1 ? "" : "none";
      if (i === steps.length - 1) buildSummary();
      const top = bf.getBoundingClientRect().top + scrollY - 120;
      if (scrollY > top) scrollTo({ top, behavior: "smooth" });
    };
    const validate = () => {
      let ok = true;
      $$("[required]", steps[step]).forEach(f => {
        const bad = !f.value.trim() || (f.type === "tel" && f.value.replace(/\D/g, "").length < 7);
        f.closest(".field")?.classList.toggle("err", bad); if (bad) ok = false;
      });
      return ok;
    };
    const val = n => (bf.elements[n]?.value || "").trim();
    const typeLabel = () => $('input[name="type"]:checked', bf)?.dataset.label || "";
    function buildSummary() {
      const pk = PACKAGES.find(p => p.id === val("package"));
      const rows = [["نوع الرحلة", typeLabel()], ["الباقة", pk ? pk.title : "برنامج مخصص"], ["تاريخ السفر", val("date") || "مرن"], ["عدد البالغين", val("adults")], ["عدد الأطفال", val("children") || "0"], ["نوع الغرفة", val("room")], ["الاسم", val("name")], ["الهاتف", val("phone")], ["المدينة", val("city") || "-"]];
      $("#b-summary").innerHTML = rows.map(([k, v]) => `<div><span>${k}</span><b>${v}</b></div>`).join("");
    }
    $("#b-next").addEventListener("click", () => validate() && show(step + 1));
    $("#b-prev").addEventListener("click", () => show(step - 1));
    bf.addEventListener("submit", e => {
      e.preventDefault();
      const pk = PACKAGES.find(p => p.id === val("package"));
      const msg = `مرحباً شام ترافل، أود حجز رحلة:
• نوع الرحلة: ${typeLabel()}
• الباقة: ${pk ? pk.title : "برنامج مخصص"}
• تاريخ السفر: ${val("date") || "مرن"}
• البالغين: ${val("adults")} | الأطفال: ${val("children") || 0}
• الغرفة: ${val("room")}
• الاسم: ${val("name")}
• الهاتف: ${val("phone")}
• المدينة: ${val("city") || "-"}
• ملاحظات: ${val("notes") || "-"}`;
      openLink(wa(msg));
      const wl = $("#wa-link"); if (wl) wl.href = wa(msg);
      $(".booking-steps").style.display = "none";
      $(".success").classList.add("show");
    });
    show(0);
  }

  /* contact form → WhatsApp */
  const cf = $("#contact-form");
  if (cf) cf.addEventListener("submit", e => {
    e.preventDefault();
    let ok = true;
    $$("[required]", cf).forEach(f => { const bad = !f.value.trim(); f.closest(".field").classList.toggle("err", bad); if (bad) ok = false; });
    if (!ok) return;
    const v = n => cf.elements[n].value.trim();
    openLink(wa(`مرحباً، أنا ${v("name")}\nالهاتف: ${v("phone")}\nالموضوع: ${v("subject")}\n\n${v("message")}`));
    cf.reset();
    const b = $("button[type=submit]", cf); const t = b.innerHTML; b.innerHTML = "تم التحويل إلى واتساب ✓"; setTimeout(() => (b.innerHTML = t), 3000);
  });
  $$(".field input, .field select, .field textarea").forEach(f => f.addEventListener("input", () => f.closest(".field").classList.remove("err")));

  /* clouds on inner page heroes */
  $$(".page-hero").forEach(h => h.insertAdjacentHTML("afterbegin", `<div class="sky-bg">${[[14, 260, 70, -10], [40, 180, 55, -30], [62, 300, 85, -50]].map(([y, w, t, d]) => `<div class="cloud" style="--y:${y}%;--w:${w}px;--t:${t}s;--dl:${d}s;--o:.8"><i></i></div>`).join("")}</div>`));

  /* quick search → WhatsApp */
  const qs = $("#qsearch");
  if (qs) qs.addEventListener("submit", e => {
    e.preventDefault();
    const v = n => (qs.elements[n].value || "").trim();
    const kind = $('input[name="kind"]:checked', qs).value;
    openLink(wa(`مرحباً شام ترافل، أود الاستفسار عن ${kind}:\n• من: ${v("from") || "-"}\n• إلى: ${v("to") || "-"}\n• التاريخ: ${v("date") || "مرن"}\n• المسافرين: ${v("pax")}`));
  });

  /* re-run things that depend on injected markup */
  observeAll(); bindTilt(); onScroll();
})();
