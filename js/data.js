/* =========================================================
   إعدادات الموقع — عدّل معلومات الشركة من هنا فقط
   Site config — edit the company details here
   ========================================================= */
const SITE = {
  name: "شام ترافل",
  fullName: "شام ترافل للسياحة والسفر",
  enName: "Sham Travel · Travel & Tourism",
  phone: "+963 900 000 000",          // ← رقم الهاتف
  whatsapp: "963900000000",            // ← رقم الواتساب بدون + أو أصفار بالبداية
  email: "info@shamtravel.com",        // ← البريد الإلكتروني
  address: "دمشق، سوريا",               // ← عنوان المكتب
  hours: "يومياً من 9:00 صباحاً حتى 8:00 مساءً",
  mapQuery: "Damascus, Syria",
  facebook: "https://www.facebook.com/profile.php?id=100063733848385",
  instagram: "https://www.instagram.com/sham.travel.tourism/",
  currency: "$"
};

/* ===================== Icons ===================== */
const I = {
  arrow: '<svg class="arr" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M19 12H5M11 6l-6 6 6 6"/></svg>',
  arrowUp: '<svg class="ar" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M6 11l6-6 6 6"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  kaaba: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><path d="M4 8l8-4 8 4v10l-8 3-8-3z"/><path d="M4 8l8 3 8-3M12 11v10"/><path d="M4 11l8 3 8-3"/></svg>',
  mosque: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M7 21v-6a5 5 0 0 1 10 0v6"/><path d="M12 6c-2.5 1.5-5 3.5-5 9M12 6c2.5 1.5 5 3.5 5 9M12 3v3"/><path d="M3 21V11M21 21V11M2 21h20M3 11l0-2M21 11v-2"/></svg>',
  plane: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>',
  hotel: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 21V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16"/><path d="M2 21h20M9 7h1M14 7h1M9 11h1M14 11h1M9 15h1M14 15h1M10 21v-3h4v3"/></svg>',
  passport: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="2" width="16" height="20" rx="2"/><circle cx="12" cy="10" r="3.5"/><path d="M8.5 10h7M12 6.5c-1 1-1.5 2.2-1.5 3.5s.5 2.5 1.5 3.5M12 6.5c1 1 1.5 2.2 1.5 3.5s-.5 2.5-1.5 3.5M9 18h6"/></svg>',
  bus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="13" rx="3"/><path d="M3 11h18M8 4v7M16 4v7"/><circle cx="7.5" cy="19" r="1.5"/><circle cx="16.5" cy="19" r="1.5"/></svg>',
  globe: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></svg>',
  shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
  guide: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="7" r="4"/><path d="M5.5 21a6.5 6.5 0 0 1 13 0"/><path d="M15.5 4.5 19 2M19 2v3"/></svg>',
  heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 0 0-7.8 7.8L12 21.2l8.8-8.8a5.5 5.5 0 0 0 0-7.8z"/></svg>',
  clock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>',
  wallet: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12V8H6a2 2 0 0 1 0-4h12v4"/><path d="M4 6v12a2 2 0 0 0 2 2h14v-4"/><path d="M18 12a2 2 0 0 0 0 4h4v-4z"/></svg>',
  star: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/></svg>',
  phone: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>',
  mail: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>',
  pin: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  calendar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></svg>',
  users: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  quote: '<svg viewBox="0 0 48 48" fill="currentColor"><path d="M20 10v8c-5 1-7 4-7 9h7v13H6V27C6 17 11 11 20 10zm22 0v8c-5 1-7 4-7 9h7v13H28V27c0-10 5-16 14-17z"/></svg>',
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17.5 14.4c-.3-.1-1.8-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.2-.2.2-.3.2-.6.1-.3-.1-1.3-.5-2.4-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.4-.5c.2-.2.2-.3.3-.5.1-.2 0-.4 0-.5l-.9-2.2c-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5.1 4.5.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.8-.7 2-1.4.2-.7.2-1.3.2-1.4-.1-.1-.3-.2-.6-.3zM12 21.8c-1.8 0-3.5-.5-5-1.4l-.4-.2-3.7 1 1-3.6-.2-.4A9.8 9.8 0 1 1 12 21.8zm8.4-18.2A11.8 11.8 0 0 0 1.7 17.9L0 24l6.3-1.6A11.8 11.8 0 0 0 23.8 12c0-3.2-1.2-6.1-3.4-8.4z"/></svg>',
  facebook: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-2.8 0-4.5 1.8-4.5 4.6V11H7v4h2.5v9h4v-9H16l.5-4h-3V8.8c0-.5.3-.8.8-.8z"/></svg>',
  instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/></svg>',
  orn: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><rect x="5" y="5" width="14" height="14"/><rect x="5" y="5" width="14" height="14" transform="rotate(45 12 12)"/><circle cx="12" cy="12" r="2.5"/></svg>',
  moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3 7 7 0 0 0 21 12.8z"/></svg>',
  ticket: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a3 3 0 0 0 0 6v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a3 3 0 0 0 0-6z"/><path d="M14 5v14" stroke-dasharray="2 2"/></svg>',
  food: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2v7a3 3 0 0 0 6 0V2M6 2v20M21 15V2a5 5 0 0 0-5 5v6a2 2 0 0 0 2 2h3zm0 0v7"/></svg>',
  headset: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1v-7h3zM3 19a2 2 0 0 0 2 2h1v-7H3z"/></svg>'
};

/* ===================== Illustrations (pure SVG, no images) ===================== */
const ART = (() => {
  let uid = 0;
  const stars = (n, w, h, maxY) => {
    let s = "";
    const k = Math.max(2, Math.round(n / 12));
    for (let i = 0; i < k; i++) {
      const x = (Math.sin(i * 91.7 + n) * 0.5 + 0.5) * w * 0.8, y = 20 + (Math.cos(i * 37.3 + n) * 0.5 + 0.5) * maxY * 0.7;
      const sc = 0.6 + (i % 3) * 0.25, dur = 40 + i * 13;
      s += `<g opacity=".95"><g><animateTransform attributeName="transform" type="translate" from="${w + 80} 0" to="${-w - 160} 0" dur="${dur}s" begin="${-i * 9}s" repeatCount="indefinite"/><g transform="translate(${x.toFixed(0)} ${y.toFixed(0)}) scale(${sc})" fill="#fff"><ellipse cx="0" cy="12" rx="44" ry="12"/><circle cx="-14" cy="4" r="14"/><circle cx="8" cy="-2" r="18"/><circle cx="26" cy="6" r="11"/></g></g></g>`;
    }
    return s;
  };
  const defs = (id, top = "#8fd0f2", bottom = "#eef8fe") => `
    <defs>
      <linearGradient id="sky${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="${top}"/><stop offset="1" stop-color="${bottom}"/></linearGradient>
      <linearGradient id="met${id}" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#7fd8f5"/><stop offset=".5" stop-color="#1a9ee4"/><stop offset="1" stop-color="#0877c0"/></linearGradient>
      <linearGradient id="metH${id}" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#a77b2c"/><stop offset=".5" stop-color="#f3d58a"/><stop offset="1" stop-color="#a77b2c"/></linearGradient>
      <radialGradient id="glow${id}" cx=".5" cy=".35" r=".6"><stop offset="0" stop-color="#ffffff" stop-opacity=".75"/><stop offset="1" stop-color="#ffffff" stop-opacity="0"/></radialGradient>
    </defs>`;
  const wrap = (vb, inner) => `<svg class="art" viewBox="${vb}" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`;

  const kaaba = () => {
    const id = "k" + (++uid);
    let pilgrims = "";
    const path = "M 30 372 A 170 42 0 1 0 370 372 A 170 42 0 1 0 30 372";
    for (let i = 0; i < 46; i++) {
      const dur = 22, off = -(i / 46) * dur, r = 1.6 + (i % 3) * .5;
      pilgrims += `<circle r="${r}" fill="${i % 4 ? '#d9dce0' : '#ffffff'}" opacity=".85"><animateMotion dur="${dur}s" begin="${off}s" repeatCount="indefinite" path="${path}"/></circle>`;
    }
    let band = "";
    for (let x = 124; x < 248; x += 7) band += `<path d="M${x} 207 q2 -4 4 0" stroke="#4a4d53" stroke-width="1" fill="none"/>`;
    return wrap("0 0 400 440", `${defs(id)}
      <rect width="400" height="440" fill="url(#sky${id})"/>
      <circle cx="200" cy="150" r="230" fill="url(#glow${id})"/>
      ${stars(46, 400, 440, 170)}
      <g class="rays" opacity=".06">${Array.from({ length: 18 }, (_, i) => `<path d="M200 130 L${200 + Math.cos(i / 18 * 6.283) * 400} ${130 + Math.sin(i / 18 * 6.283) * 400} L${200 + Math.cos((i + .3) / 18 * 6.283) * 400} ${130 + Math.sin((i + .3) / 18 * 6.283) * 400}Z" fill="#fff"/>`).join("")}</g>
      <!-- clock tower -->
      <g opacity=".75">
        <path d="M318 330 V92 h30 V330z" fill="#1b1c20" stroke="#3c3f45"/>
        <path d="M312 92 h42 l-6 -18 h-30z" fill="#202126" stroke="#3c3f45"/>
        <circle cx="333" cy="112" r="11" fill="none" stroke="url(#met${id})" stroke-width="1.5"/>
        <path d="M333 112 v-7 M333 112 l5 3" stroke="#e6e8eb" stroke-width="1"/>
        <path d="M333 74 V40" stroke="url(#met${id})" stroke-width="2"/>
        <path d="M333 40 a6 6 0 1 0 5 -4" fill="none" stroke="#fff" stroke-width="1.2"/>
        <circle cx="333" cy="30" r="2" fill="#fff" class="twinkle"/>
        ${Array.from({ length: 9 }, (_, i) => `<rect x="${323 + (i % 3) * 7}" y="${150 + Math.floor(i / 3) * 40}" width="3" height="16" fill="#e6e8eb" opacity=".35" class="twinkle" style="animation-delay:${i * .5}s"/>`).join("")}
        <path d="M30 330 V220 h22 V330 M60 330 V250 h40 V330 M260 330 V240 h40 V330 M360 330 V200 h24 V330" fill="#141518" stroke="#2c2e33"/>
        <path d="M41 220 V170 M380 200 v-50" stroke="#55585e" stroke-width="3"/>
        <path d="M38 170 h6 l-3 -10z M369 150 h6 l-3 -10z" fill="#9a9ea5"/>
      </g>
      <!-- mataf floor -->
      <ellipse cx="200" cy="380" rx="200" ry="60" fill="#121316"/>
      <ellipse cx="200" cy="372" rx="170" ry="42" fill="none" stroke="#2a2c31"/>
      <ellipse cx="200" cy="372" rx="120" ry="28" fill="none" stroke="#2a2c31" stroke-dasharray="2 4"/>
      <clipPath id="back${id}"><rect x="0" y="0" width="400" height="372"/></clipPath>
      <clipPath id="front${id}"><rect x="0" y="372" width="400" height="80"/></clipPath>
      <g clip-path="url(#back${id})">${pilgrims}</g>
      <!-- kaaba -->
      <g class="svg-float" style="animation-duration:9s">
        <path d="M120 175 L250 175 L300 160 L170 160Z" fill="#26272b" stroke="#55585e" stroke-width=".8"/>
        <path d="M120 175 H250 V358 H120Z" fill="#0c0c0e" stroke="#34363b"/>
        <path d="M250 175 L300 160 V343 L250 358Z" fill="#050506" stroke="#2a2c31"/>
        <path d="M120 198 H250 V218 H120Z" fill="url(#metH${id})" opacity=".95"/>
        <path d="M250 198 L300 183 V203 L250 218Z" fill="url(#metH${id})" opacity=".6"/>
        <g opacity=".9">${band}</g>
        <path d="M120 236 H250 M120 240 H250" stroke="#3a3c41" stroke-width=".6"/>
        <g fill="none" stroke="#6f737a" stroke-width=".6" opacity=".7">
          <path d="M135 250 l6 -10 l6 10 l-6 10z M160 250 l6 -10 l6 10 l-6 10z M135 280 l6 -10 l6 10 l-6 10z"/>
        </g>
        <path d="M206 268 H236 V352 H206Z" fill="url(#metH${id})" stroke="#fff" stroke-width=".5"/>
        <path d="M206 268 Q221 252 236 268" fill="url(#metH${id})"/>
        <path d="M221 272 V350 M210 290 H232 M210 320 H232" stroke="#55585e" stroke-width=".8"/>
        <circle cx="221" cy="305" r="5" fill="none" stroke="#55585e" stroke-width=".8"/>
        <path d="M120 175 L250 175 L300 160" fill="none" stroke="#ffffff" stroke-width=".8" opacity=".5" class="draw-path"/>
      </g>
      <g clip-path="url(#front${id})">${pilgrims}</g>
      <rect width="400" height="440" fill="url(#sky${id})" opacity=".0"/>
    `);
  };

  const madinah = () => {
    const id = "m" + (++uid);
    const minaret = (x, h) => `<g><path d="M${x - 7} 270 V${270 - h} h14 V270z" fill="#16171a" stroke="#3a3c41"/><path d="M${x - 10} ${270 - h} h20 v-6 h-20z" fill="url(#met${id})"/><path d="M${x - 5} ${264 - h} V${240 - h} h10 V${264 - h}" fill="#1c1d21" stroke="#3a3c41"/><path d="M${x - 6} ${240 - h} Q${x} ${215 - h} ${x + 6} ${240 - h}z" fill="url(#met${id})"/><path d="M${x} ${215 - h} v-10" stroke="#fff" stroke-width="1.2"/><circle cx="${x}" cy="${203 - h}" r="1.6" fill="#fff" class="twinkle"/></g>`;
    let arches = "";
    for (let x = 30; x < 380; x += 34) arches += `<path d="M${x} 300 V272 Q${x + 14} 252 ${x + 28} 272 V300" fill="#0d0d10" stroke="#3a3c41"/>`;
    let umb = "";
    for (let x = 40; x < 380; x += 70) umb += `<g opacity=".55"><path d="M${x} 330 V300" stroke="#55585e"/><path d="M${x - 28} 304 Q${x} 280 ${x + 28} 304" fill="none" stroke="url(#met${id})" stroke-width="1.4"/></g>`;
    return wrap("0 0 400 340", `${defs(id)}
      <rect width="400" height="340" fill="url(#sky${id})"/>
      <circle cx="200" cy="120" r="200" fill="url(#glow${id})"/>
      ${stars(40, 400, 340, 140)}
      <path d="M300 50 a26 26 0 1 0 22 36 a20 20 0 1 1 -22 -36z" fill="url(#met${id})" opacity=".9" class="svg-float"/>
      ${minaret(50, 150)}${minaret(350, 150)}${minaret(120, 100)}${minaret(280, 100)}
      <path d="M20 300 V270 H380 V300z" fill="#121316" stroke="#2c2e33"/>
      <path d="M150 230 h100 v40 h-100z" fill="#141518" stroke="#3a3c41"/>
      <path d="M160 232 Q200 140 240 232z" fill="url(#met${id})"/>
      <path d="M174 232 Q200 160 226 232" fill="none" stroke="#fff" stroke-width=".8" opacity=".6"/>
      <path d="M200 162 v-26" stroke="#fff" stroke-width="1.5"/>
      <path d="M196 138 a4 4 0 1 0 6 -4" fill="none" stroke="#fff" stroke-width="1.2"/>
      ${arches}
      <rect x="0" y="300" width="400" height="40" fill="#0b0b0d"/>
      ${umb}
    `);
  };

  const skyline = (kind) => {
    const id = "s" + (++uid);
    let city = "";
    if (kind === "istanbul") {
      city = `
        <path d="M110 250 Q200 120 290 250z" fill="#16171a" stroke="url(#met${id})" stroke-width="1.2"/>
        <path d="M200 135 v-24" stroke="#fff" stroke-width="1.4"/><circle cx="200" cy="108" r="2" fill="#fff"/>
        <path d="M70 250 Q110 190 150 250z M250 250 Q290 190 330 250z" fill="#121316" stroke="#4a4d53"/>
        ${[60, 100, 300, 340].map((x, i) => `<path d="M${x - 4} 250 V${120 + (i % 2) * 20} h8 V250z" fill="#16171a" stroke="#4a4d53"/><path d="M${x - 4} ${120 + (i % 2) * 20} l4 -26 l4 26z" fill="url(#met${id})"/>`).join("")}
        <path d="M0 270 Q100 255 200 270 T400 270 V300 H0z" fill="#0e0f12"/>
        <path d="M20 280 h60 M140 286 h90 M280 282 h70" stroke="#ffffff" stroke-opacity=".25" stroke-dasharray="6 6"/>`;
    } else if (kind === "dubai") {
      city = `
        <path d="M196 260 L200 40 L204 260z" fill="url(#met${id})"/>
        <path d="M188 260 L193 110 L207 110 L212 260z" fill="#1a1b1f" stroke="#4a4d53"/>
        <path d="M180 260 L186 170 L214 170 L220 260z" fill="#16171a" stroke="#4a4d53"/>
        ${[[40, 150, 30], [80, 190, 28], [120, 170, 34], [250, 160, 30], [290, 130, 26], [330, 185, 34], [365, 165, 26]].map(([x, y, w]) => `<rect x="${x}" y="${y}" width="${w}" height="${260 - y}" fill="#141518" stroke="#34363b"/>${Array.from({ length: 5 }, (_, j) => `<rect class="twinkle" style="animation-delay:${(x + j) % 5 * .5}s" x="${x + 6}" y="${y + 12 + j * 16}" width="${w - 12}" height="2" fill="#e6e8eb" opacity=".5"/>`).join("")}`).join("")}
        <path d="M0 260 H400 V300 H0z" fill="#0d0e10"/>`;
    } else if (kind === "cairo") {
      city = `
        <path d="M60 260 L160 130 L260 260z" fill="#17181b" stroke="url(#met${id})" stroke-width="1.2"/>
        <path d="M160 130 L260 260 L200 260z" fill="#0f1012"/>
        <path d="M220 260 L295 165 L370 260z" fill="#141518" stroke="#55585e"/>
        <path d="M295 165 L370 260 L325 260z" fill="#0e0f11"/>
        <path d="M10 260 L50 210 L90 260z" fill="#121316" stroke="#4a4d53"/>
        <circle cx="90" cy="80" r="22" fill="url(#met${id})" opacity=".9"/>
        <path d="M0 260 H400 V300 H0z" fill="#0d0e10"/>
        <path d="M0 268 Q200 250 400 268" stroke="#4a4d53" fill="none"/>`;
    } else if (kind === "kl") {
      city = `
        ${[160, 230].map(x => `<path d="M${x} 260 V90 l5 -8 h10 l5 8 V260z" fill="#17181b" stroke="url(#met${id})"/><path d="M${x + 10} 82 V40" stroke="#fff" stroke-width="1.2"/>${Array.from({ length: 8 }, (_, j) => `<path d="M${x + 4} ${110 + j * 18} h12" stroke="#e6e8eb" stroke-opacity=".5" class="twinkle" style="animation-delay:${j * .3}s"/>`).join("")}`).join("")}
        <path d="M180 170 h50 v8 h-50z" fill="url(#met${id})"/>
        <path d="M40 260 V180 h40 v80 M300 260 V160 h30 v100 M340 260 V200 h40 v60" fill="#121316" stroke="#34363b"/>
        <path d="M0 260 H400 V300 H0z" fill="#0d0e10"/>`;
    }
    return wrap("0 0 400 300", `${defs(id)}<rect width="400" height="300" fill="url(#sky${id})"/><circle cx="200" cy="140" r="190" fill="url(#glow${id})"/>${stars(36, 400, 300, 120)}${city}`);
  };

  const plane = () => {
    const id = "p" + (++uid);
    return wrap("0 0 400 300", `${defs(id)}<rect width="400" height="300" fill="url(#sky${id})"/><circle cx="200" cy="150" r="190" fill="url(#glow${id})"/>${stars(40, 400, 300, 300)}
      <path d="M-20 260 Q120 240 200 160 T430 40" fill="none" stroke="#fff" stroke-opacity=".35" stroke-dasharray="4 8"/>
      <g class="svg-float"><g transform="translate(205 150) rotate(-32) scale(1.7)">
        <path d="M-40 0 Q-40 -6 -30 -6 H30 Q42 -6 46 0 Q42 6 30 6 H-30 Q-40 6 -40 0z" fill="url(#met${id})"/>
        <path d="M0 -5 L-14 -38 H-6 L16 -5z M0 5 L-14 38 H-6 L16 5z" fill="#cfd2d6"/>
        <path d="M-34 -5 L-42 -18 H-36 L-26 -5z M-34 5 L-42 18 H-36 L-26 5z" fill="#9a9ea5"/>
        <path d="M30 -3 h8 v2 h-8z" fill="#222"/>
      </g></g>
      <path d="M0 270 Q100 250 200 268 T400 262 V300 H0z" fill="#0e0f12"/>`);
  };

  const hotel = () => {
    const id = "h" + (++uid);
    let win = "";
    for (let r = 0; r < 9; r++) for (let c = 0; c < 6; c++) win += `<rect class="twinkle" style="animation-delay:${(r * 6 + c) % 9 * .35}s" x="${142 + c * 20}" y="${80 + r * 20}" width="10" height="10" fill="#e6e8eb" opacity=".6"/>`;
    return wrap("0 0 400 300", `${defs(id)}<rect width="400" height="300" fill="url(#sky${id})"/><circle cx="200" cy="140" r="190" fill="url(#glow${id})"/>${stars(30, 400, 300, 100)}
      <path d="M130 270 V70 H270 V270z" fill="#141518" stroke="url(#met${id})"/>
      <path d="M120 70 H280 V60 H120z" fill="url(#met${id})"/>
      ${win}
      <path d="M185 270 v-30 h30 v30" fill="#0a0a0c" stroke="#e6e8eb" stroke-opacity=".6"/>
      <path d="M150 52 l4 -8 l4 8 l-8 -5 h8z M200 48 l4 -8 l4 8 l-8 -5 h8z M246 52 l4 -8 l4 8 l-8 -5 h8z" fill="#fff"/>
      <path d="M40 270 V180 h70 v90 M290 270 V160 h70 v110" fill="#101114" stroke="#2c2e33"/>
      <path d="M0 270 H400 V300 H0z" fill="#0d0e10"/>`);
  };

  const passport = () => {
    const id = "v" + (++uid);
    return wrap("0 0 400 300", `${defs(id)}<rect width="400" height="300" fill="url(#sky${id})"/><circle cx="200" cy="150" r="190" fill="url(#glow${id})"/>${stars(30, 400, 300, 300)}
      <g class="svg-float"><g transform="rotate(-8 200 150)">
        <rect x="140" y="60" width="130" height="180" rx="10" fill="#17181b" stroke="url(#met${id})" stroke-width="1.5"/>
        <circle cx="205" cy="135" r="34" fill="none" stroke="url(#met${id})" stroke-width="1.4"/>
        <path d="M171 135 h68 M205 101 q-18 34 0 68 M205 101 q18 34 0 68" fill="none" stroke="#cfd2d6" stroke-width="1"/>
        <path d="M170 200 h70 M180 214 h50" stroke="#9a9ea5" stroke-width="2"/>
      </g></g>
      <g transform="rotate(14 290 200)"><rect x="240" y="170" width="110" height="70" rx="6" fill="#1d1e22" stroke="#55585e"/><circle cx="270" cy="205" r="16" fill="none" stroke="#e6e8eb" stroke-dasharray="3 3"/><path d="M296 196 h40 M296 208 h30" stroke="#9a9ea5" stroke-width="2"/></g>`);
  };

  const bus = () => {
    const id = "b" + (++uid);
    return wrap("0 0 400 300", `${defs(id)}<rect width="400" height="300" fill="url(#sky${id})"/><circle cx="200" cy="150" r="190" fill="url(#glow${id})"/>${stars(30, 400, 300, 120)}
      <path d="M0 250 H400" stroke="#2c2e33"/><path d="M0 262 H400" stroke="#fff" stroke-opacity=".3" stroke-dasharray="20 14"><animate attributeName="stroke-dashoffset" from="0" to="68" dur="1.2s" repeatCount="indefinite"/></path>
      <g class="svg-float" style="animation-duration:3s">
        <rect x="80" y="140" width="240" height="96" rx="16" fill="url(#met${id})"/>
        <rect x="96" y="154" width="170" height="36" rx="6" fill="#141518"/>
        <path d="M130 154 v36 M165 154 v36 M200 154 v36 M235 154 v36" stroke="#3a3c41"/>
        <rect x="276" y="154" width="34" height="60" rx="6" fill="#141518"/>
        <path d="M90 206 H266" stroke="#55585e" stroke-width="2"/>
        <circle cx="130" cy="238" r="16" fill="#0a0a0c" stroke="#9a9ea5" stroke-width="3"/><circle cx="270" cy="238" r="16" fill="#0a0a0c" stroke="#9a9ea5" stroke-width="3"/>
      </g>`);
  };

  const pattern = (op = 1) => {
    const id = "pt" + (++uid);
    return `<svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg"><defs><pattern id="${id}" width="80" height="80" patternUnits="userSpaceOnUse"><g fill="none" stroke="currentColor" stroke-width=".7" opacity="${op}"><rect x="20" y="20" width="40" height="40"/><rect x="20" y="20" width="40" height="40" transform="rotate(45 40 40)"/><circle cx="40" cy="40" r="10"/><path d="M0 0 L20 20 M80 0 L60 20 M0 80 L20 60 M80 80 L60 60"/></g></pattern><radialGradient id="f${id}" cx=".5" cy=".5" r=".6"><stop offset="0" stop-color="#fff"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient><mask id="m${id}"><rect width="100%" height="100%" fill="url(#f${id})"/></mask></defs><rect width="100%" height="100%" fill="url(#${id})" mask="url(#m${id})"/></svg>`;
  };

  const rosette = () => {
    let g = "";
    for (let i = 1; i < 8; i++) { const ry = 280 * Math.sin(i / 8 * Math.PI); const cy = 300 - 280 * Math.cos(i / 8 * Math.PI); g += `<ellipse cx="300" cy="${cy.toFixed(1)}" rx="${ry.toFixed(1)}" ry="${(ry * 0.12).toFixed(1)}"/>`; }
    for (let i = 0; i < 6; i++) g += `<ellipse cx="300" cy="300" rx="${(280 * Math.abs(Math.cos(i / 6 * Math.PI))).toFixed(1)}" ry="280"><animate attributeName="rx" values="${(280 * Math.abs(Math.cos(i / 6 * Math.PI))).toFixed(1)};${(280 * Math.abs(Math.cos((i + 1) / 6 * Math.PI))).toFixed(1)}" dur="6s" repeatCount="indefinite"/></ellipse>`;
    return `<svg viewBox="0 0 600 600" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" stroke-width="1.2"><circle cx="300" cy="300" r="280"/>${g}</g></svg>`;
  };

  /* hero: globe + orbit + plane (inspired by the logo) */
  const sky = () => {
    const id = "sk" + (++uid);
    const orbit = "M 60 300 C 40 150 200 70 330 120 C 400 150 390 260 330 300 C 260 350 120 360 60 300";
    return wrap("0 0 400 440", `${defs(id, "#7cc9ee", "#eef8fe")}
      <defs><radialGradient id="gl${id}" cx=".38" cy=".32" r=".75"><stop offset="0" stop-color="#bfeaf8"/><stop offset=".6" stop-color="#74cbe8"/><stop offset="1" stop-color="#3aa7d8"/></radialGradient>
      <clipPath id="gc${id}"><circle cx="200" cy="215" r="105"/></clipPath>
      <linearGradient id="sw${id}" x1="0" x2="1"><stop offset="0" stop-color="#0877c0"/><stop offset="1" stop-color="#1a9ee4"/></linearGradient></defs>
      <rect width="400" height="440" fill="url(#sky${id})"/>
      <circle cx="320" cy="70" r="90" fill="#fff" opacity=".35"/><circle cx="320" cy="70" r="40" fill="#fff" opacity=".7"/>
      ${stars(40, 400, 440, 200)}
      <g class="svg-float" style="animation-duration:8s">
        <circle cx="200" cy="215" r="112" fill="#fff" opacity=".35"/>
        <circle cx="200" cy="215" r="105" fill="url(#gl${id})"/>
        <g clip-path="url(#gc${id})" fill="none" stroke="#fff" stroke-opacity=".55" stroke-width="1">
          <ellipse cx="200" cy="215" rx="105" ry="30"/><ellipse cx="200" cy="215" rx="105" ry="70"/><path d="M95 215 H305"/>
          ${[0, 1, 2, 3, 4].map(i => `<ellipse cx="200" cy="215" ry="105" rx="${20 + i * 20}"><animate attributeName="rx" values="${20 + i * 20};${40 + i * 20};${20 + i * 20}" dur="${7 + i}s" repeatCount="indefinite"/></ellipse>`).join("")}
          <g fill="#fff" fill-opacity=".45" stroke="none"><path d="M150 170 q20 -15 40 -5 q10 15 -5 25 q-20 5 -25 20 q-15 -10 -10 -40z"><animateTransform attributeName="transform" type="translate" values="-60 0;140 0" dur="18s" repeatCount="indefinite"/></path><path d="M210 230 q25 -5 35 10 q-5 25 -25 30 q-15 -15 -10 -40z"><animateTransform attributeName="transform" type="translate" values="-90 0;120 0" dur="18s" repeatCount="indefinite"/></path></g>
        </g>
        <path d="M70 330 C 20 230 90 110 230 95 C 300 88 345 115 352 140" fill="none" stroke="url(#sw${id})" stroke-width="10" stroke-linecap="round" opacity=".95"/>
        <path d="M70 330 C 120 380 260 370 345 300" fill="none" stroke="#0a85d1" stroke-width="3" stroke-linecap="round" stroke-dasharray="2 9" opacity=".7"/>
        <path id="op${id}" d="${orbit}" fill="none"/>
        <g><animateMotion dur="9s" repeatCount="indefinite" rotate="auto" path="${orbit}"/>
          <g transform="scale(.9) rotate(180)" fill="#0a85d1"><path d="M-30 0 Q-30 -5 -22 -5 H22 Q32 -5 36 0 Q32 5 22 5 H-22 Q-30 5 -30 0z"/><path d="M0 -4 L-10 -28 H-4 L12 -4z M0 4 L-10 28 H-4 L12 4z" fill="#1a9ee4"/><path d="M-24 -4 L-30 -13 H-26 L-19 -4z" fill="#0877c0"/></g>
        </g>
      </g>
      <path d="M0 410 Q 60 380 120 395 T 240 390 T 400 395 V440 H0z" fill="#ffffff" opacity=".9"/>
      <path d="M0 425 Q 80 400 160 418 T 400 412 V440 H0z" fill="#fff"/>
    `);
  };

  /* Damascus skyline */
  const damascus = () => {
    const id = "d" + (++uid);
    return wrap("0 0 400 300", `${defs(id)}<rect width="400" height="300" fill="url(#sky${id})"/><circle cx="200" cy="140" r="190" fill="url(#glow${id})"/>${stars(36, 400, 300, 120)}
      <path d="M0 200 Q 80 120 170 150 T 400 130 V300 H0z" fill="#7cc4e8" opacity=".55"/>
      <path d="M120 260 V200 h160 v60z" fill="#1a7fc4"/>
      <path d="M170 200 Q200 150 230 200z" fill="url(#met${id})"/>
      ${[110, 290].map(x => `<path d="M${x - 6} 260 V120 h12 V260z" fill="#0f6aac"/><path d="M${x - 9} 120 h18 v-6 h-18z" fill="#1a9ee4"/><path d="M${x - 5} 114 l5 -22 l5 22z" fill="#0877c0"/>`).join("")}
      ${Array.from({ length: 7 }, (_, i) => `<path d="M${130 + i * 21} 260 V236 Q${140 + i * 21} 224 ${150 + i * 21} 236 V260" fill="#e9f6fe" opacity=".7"/>`).join("")}
      <path d="M0 260 H400 V300 H0z" fill="#0b5d9c"/>
      <path d="M20 240 h70 v20 h-70z M320 230 h60 v30 h-60z" fill="#2389cc"/>`);
  };

  const map = { kaaba, madinah, plane, hotel, passport, bus, istanbul: () => skyline("istanbul"), dubai: () => skyline("dubai"), cairo: () => skyline("cairo"), kl: () => skyline("kl"), pattern: () => pattern(1), rosette, sky, damascus };
  const KEEP = ["#0c0c0e", "#050506", "#26272b", "#34363b", "#2a2c31", "#3a3c41", "#4a4d53", "#6f737a", "#55585e"];
  const deep = [11, 93, 156], light = [233, 246, 253];
  const recolor = (svg, keepKaaba) => svg.replace(/#([0-9a-f]{6})\b/gi, (m, h) => {
    const r = parseInt(h.slice(0, 2), 16), g = parseInt(h.slice(2, 4), 16), b = parseInt(h.slice(4, 6), 16);
    if (Math.max(r, g, b) - Math.min(r, g, b) > 14) return m;          // already colored
    if (keepKaaba && KEEP.includes(m.toLowerCase())) return m;
    const t = Math.pow(r / 255, 0.7);
    const c = deep.map((d, i) => Math.round(d + (light[i] - d) * t));
    return "#" + c.map(v => v.toString(16).padStart(2, "0")).join("");
  });
  return (name) => (map[name] ? recolor(map[name](), name === "kaaba") : "");
})();

/* ===================== Services ===================== */
const SERVICES = [
  { id: "flights", icon: "plane", title: "تذاكر الطيران", short: "حجز تذاكر طيران لجميع الوجهات العربية والعالمية بأفضل الأسعار وأنسب المواعيد.", points: ["رحلات مباشرة وترانزيت", "مقارنة أسعار شركات الطيران", "تعديل وإلغاء الحجوزات", "حجوزات المجموعات والشركات"], art: "plane" },
  { id: "hotels", icon: "hotel", title: "حجز الفنادق", short: "فنادق ومنتجعات مختارة حول العالم بأسعار تفضيلية وتأكيد فوري للحجز.", points: ["فنادق من 3 إلى 5 نجوم", "منتجعات وشقق فندقية", "أسعار تعاقدية خاصة", "تأكيد فوري للحجز"], art: "hotel" },
  { id: "tours", icon: "globe", title: "الرحلات السياحية", short: "برامج سياحية متكاملة إلى تركيا، الإمارات، مصر، ماليزيا وغيرها — للعائلات والأفراد.", points: ["برامج شاملة الطيران والفندق", "جولات يومية مع مرشد", "برامج عائلية ومجموعات", "رحلات شهر العسل"], art: "istanbul" },
  { id: "visa", icon: "passport", title: "التأشيرات", short: "تجهيز ومتابعة طلبات التأشيرات السياحية والزيارة والعمرة بسرعة ودقة.", points: ["تأشيرات سياحية وزيارة", "تأشيرة عمرة إلكترونية", "مراجعة وتجهيز المستندات", "متابعة حتى صدور التأشيرة"], art: "passport" },
  { id: "umrah", icon: "kaaba", title: "العمرة والحج", short: "برامج عمرة على مدار العام بخدمات متكاملة وسكن قريب من الحرم.", points: ["برامج اقتصادية ومميزة", "عمرة رمضان والعطل", "مرشد ديني مرافق", "زيارة المدينة المنورة"], art: "kaaba" },
  { id: "inbound", icon: "mosque", title: "سياحة داخلية في سوريا", short: "جولات في دمشق وحلب وتدمر وبصرى والساحل، للزوار والمغتربين والمجموعات.", points: ["جولات دمشق القديمة", "رحلات المواقع الأثرية", "برامج الساحل والجبال", "مرشدين محترفين"], art: "damascus" },
  { id: "transport", icon: "bus", title: "النقل والاستقبال", short: "استقبال من المطار وسيارات خاصة وحافلات حديثة للتنقل بكل راحة.", points: ["استقبال وتوديع في المطار", "سيارات خاصة مع سائق", "حافلات للمجموعات", "تنقلات بين المدن"], art: "bus" },
  { id: "insurance", icon: "shield", title: "التأمين على السفر", short: "تأمين سفر شامل يغطي العلاج والطوارئ ليكون سفرك بلا قلق.", points: ["تأمين صحي أثناء السفر", "تغطية الطوارئ", "تأمين ضد إلغاء الرحلة", "تغطية فقدان الأمتعة"], art: "sky" }
];

/* ===================== Packages (الأسعار للعرض — عدّلها حسب الشركة) ===================== */
const PACKAGES = [
  { id: "istanbul", type: "tour", typeLabel: "رحلة سياحية", title: "إسطنبول وبورصة", art: "istanbul", days: 7, price: 780, featured: true, tag: "الأكثر طلباً",
    features: ["طيران ذهاب وعودة", "فندق 4 نجوم", "جولات سياحية يومية", "رحلة بحرية في البوسفور", "استقبال من المطار"],
    hotels: "إسطنبول: فندق 4 نجوم في منطقة تقسيم — بورصة: فندق 4 نجوم",
    program: ["الوصول إلى إسطنبول والاستقبال", "جولة السلطان أحمد وآيا صوفيا", "رحلة البوسفور البحرية", "رحلة يوم كامل إلى بورصة", "يوم حر للتسوق", "العودة"] },
  { id: "trabzon", type: "tour", typeLabel: "رحلة سياحية", title: "طرابزون والطبيعة", art: "istanbul", days: 6, price: 690, tag: "طبيعة",
    features: ["طيران ذهاب وعودة", "فندق 4 نجوم", "جولات المرتفعات", "بحيرة أوزنجول", "تنقلات خاصة"],
    hotels: "طرابزون: فندق 4 نجوم",
    program: ["الوصول إلى طرابزون", "بحيرة أوزنجول", "هضبة أيدر", "دير سوميلا", "يوم حر", "العودة"] },
  { id: "dubai", type: "tour", typeLabel: "رحلة سياحية", title: "دبي الساحرة", art: "dubai", days: 5, price: 690, tag: "جديد",
    features: ["طيران ذهاب وعودة", "فندق 4 نجوم", "سفاري صحراوية", "جولة في المدينة", "التأشيرة"],
    hotels: "دبي: فندق 4 نجوم",
    program: ["الوصول والاستقبال", "جولة دبي وبرج خليفة", "رحلة السفاري الصحراوية", "يوم حر", "العودة"] },
  { id: "cairo", type: "tour", typeLabel: "رحلة سياحية", title: "القاهرة وشرم الشيخ", art: "cairo", days: 8, price: 720, tag: "صيفية",
    features: ["طيران ذهاب وعودة", "فنادق 4 نجوم", "زيارة الأهرامات", "رحلة نيلية", "تنقلات داخلية"],
    hotels: "القاهرة: فندق 4 نجوم — شرم الشيخ: منتجع 4 نجوم",
    program: ["الوصول إلى القاهرة", "الأهرامات وأبو الهول", "خان الخليلي ورحلة نيلية", "الانتقال إلى شرم الشيخ", "أيام بحرية ونشاطات", "العودة"] },
  { id: "kl", type: "honey", typeLabel: "شهر عسل", title: "ماليزيا - شهر العسل", art: "kl", days: 9, price: 1150, featured: true, tag: "للعرسان",
    features: ["طيران ذهاب وعودة", "فنادق 4 و5 نجوم", "كوالالمبور ولنكاوي", "عشاء رومانسي", "استقبال خاص"],
    hotels: "كوالالمبور: فندق 5 نجوم — لنكاوي: منتجع 4 نجوم",
    program: ["الوصول إلى كوالالمبور", "جولة الأبراج التوأم", "مرتفعات جنتنج", "الانتقال إلى لنكاوي", "جولة الجزر", "العودة"] },
  { id: "maldives", type: "honey", typeLabel: "شهر عسل", title: "جزر المالديف", art: "sky", days: 6, price: 1890, tag: "فاخرة",
    features: ["طيران ذهاب وعودة", "فيلا فوق الماء", "إقامة شاملة", "نقل بالطائرة المائية", "أنشطة بحرية"],
    hotels: "منتجع 5 نجوم — فيلا فوق الماء",
    program: ["الوصول والانتقال للمنتجع", "أنشطة الغوص والسنوركل", "رحلة بحرية عند الغروب", "يوم استجمام وسبا", "العودة"] },
  { id: "u-eco", type: "umrah", typeLabel: "عمرة", title: "عمرة اقتصادية", art: "kaaba", days: 10, price: 650, tag: "اقتصادية",
    features: ["طيران ذهاب وعودة", "فندق 3 نجوم في مكة", "تأشيرة العمرة", "تنقلات مكيفة", "مرشد ديني"],
    hotels: "مكة: فندق 3 نجوم — المدينة: فندق 3 نجوم",
    program: ["الوصول والاستقبال", "أداء مناسك العمرة", "زيارة المدينة المنورة", "يوم حر للعبادة", "العودة"] },
  { id: "u-plus", type: "umrah", typeLabel: "عمرة", title: "عمرة مميزة", art: "madinah", days: 14, price: 990, tag: "مميزة",
    features: ["طيران مباشر", "فندق 4 نجوم قريب من الحرم", "إفطار يومي", "زيارة المدينة المنورة", "مرشد ومشرف"],
    hotels: "مكة: فندق 4 نجوم — المدينة: فندق 4 نجوم",
    program: ["الوصول والاستقبال", "أداء العمرة مع المرشد", "جولة المشاعر المقدسة", "المدينة المنورة والمزارات", "عمرة ثانية وطواف الوداع", "العودة"] },
  { id: "syria", type: "tour", typeLabel: "سياحة داخلية", title: "جولة سوريا الكبرى", art: "damascus", days: 5, price: 350, tag: "داخلية",
    features: ["فنادق 4 نجوم", "دمشق القديمة", "تدمر أو بصرى", "الساحل السوري", "مرشد سياحي"],
    hotels: "دمشق: فندق 4 نجوم — الساحل: منتجع 4 نجوم",
    program: ["جولة دمشق القديمة والجامع الأموي", "رحلة إلى بصرى أو تدمر", "الانتقال إلى الساحل", "قلعة الحصن ومشتى الحلو", "العودة إلى دمشق"] }
];

const TESTIMONIALS = [
  { name: "رامي", role: "إسطنبول وبورصة", text: "كل شي كان مرتب من أول ما وصلنا للمطار. الفندق ممتاز والجولات حلوة كتير، أكيد رح نعيدها." },
  { name: "لينا وسامر", role: "ماليزيا - شهر العسل", text: "أحلى رحلة بحياتنا! البرنامج مدروس والمتابعة كانت مستمرة طول الوقت." },
  { name: "أبو خالد", role: "عمرة مميزة", text: "تنظيم ممتاز وفندق قريب من الحرم، والمرشد كان معنا بكل خطوة. جزاكم الله خير." },
  { name: "نور", role: "تذاكر طيران وتأشيرة", text: "طلعولي التأشيرة والتذكرة بوقت قياسي وبأفضل سعر. تعامل راقي وسريع." }
];

const FAQS = [
  { q: "كيف يمكنني حجز رحلة؟", a: "اختر الباقة المناسبة من صفحة الباقات أو املأ نموذج الحجز، وسيصلنا طلبك مباشرة على واتساب ليتواصل معك فريقنا ويؤكد التفاصيل." },
  { q: "ما الأوراق المطلوبة للتأشيرة السياحية؟", a: "تختلف حسب الدولة، لكن غالباً: جواز سفر ساري لمدة 6 أشهر، صور شخصية، حجز فندق وطيران، وكشف حساب أحياناً. فريقنا يجهز لك قائمة دقيقة حسب وجهتك." },
  { q: "هل الأسعار تشمل تذاكر الطيران؟", a: "معظم الباقات السياحية تشمل الطيران والفندق والتنقلات. التفاصيل الكاملة مذكورة في صفحة كل باقة." },
  { q: "هل يمكن تصميم رحلة خاصة لعائلتي؟", a: "بالتأكيد، نصمم برامج حسب الوجهة والمدة والميزانية وعدد الأشخاص ومستوى الفندق المطلوب." },
  { q: "هل يوجد خيارات تقسيط؟", a: "نوفر خيارات دفع مرنة لبعض الباقات. تواصل معنا لمعرفة التفاصيل المتاحة." },
  { q: "ما سياسة الإلغاء؟", a: "تختلف حسب الباقة وموعد الإلغاء وشروط شركات الطيران والفنادق، ونوضحها لك بشفافية قبل تأكيد الحجز." }
];
