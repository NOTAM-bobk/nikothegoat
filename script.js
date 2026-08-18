/* ==========================================================================
   NICO SCHULTZ — SITE LOGIC
   Edit the CONFIG object below to change all content. Nothing further down
   this file needs to be touched for normal content updates.
   ========================================================================== */

const CONFIG = {

  name: "Nico Schultz",
  tagline: "Distance runner. Record chaser. Still counting.",

  // ---- Top nav quick links (in-page anchors or external URLs) ----
  nav: [
    { label: "Home",     href: "#top" },
    { label: "Records",  href: "#prs" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "Journey",  href: "#journey" },
    { label: "Contact",  href: "#contact" },
  ],

  // ---- Social links: used in the nav bar AND the social strip ----
  // icon options: "instagram", "twitter", "tiktok", "strava", "youtube", "linkedin", "email"
  socials: [
    { platform: "Instagram", icon: "instagram", url: "https://instagram.com/" },
    { platform: "Twitter/X", icon: "twitter",   url: "https://twitter.com/" },
    { platform: "Strava",    icon: "strava",    url: "https://strava.com/" },
    { platform: "TikTok",    icon: "tiktok",    url: "https://tiktok.com/" },
  ],

  // ---- Personal Records ----
  prs: [
    { event: "800 Meters",   mark: "1:52.14", meta: "Set Spring 2026" },
    { event: "1600 Meters",  mark: "4:11.87", meta: "Set Spring 2026" },
    { event: "3200 Meters",  mark: "9:02.33", meta: "Set Winter 2025" },
    { event: "5K Road",      mark: "15:24",   meta: "Set Fall 2025" },
    { event: "Cross Country 5K", mark: "15:41", meta: "Regional Championship" },
    { event: "10K Road",     mark: "32:10",   meta: "Set Fall 2025" },
  ],

  // ---- Sponsors: shown in the sliding carousel ----
  // color accepts any CSS color — sets the card's top bar + logo mark
  sponsors: [
    { name: "BiCarb",       tier: "Nutrition Partner", initials: "BC", color: "#7A9E7E" },
    { name: "Eddie Bauer",  tier: "Apparel Partner",   initials: "EB", color: "#3E5C76" },
    { name: "TrailForge",   tier: "Gear Sponsor",      initials: "TF", color: "#B7742F" },
    { name: "PaceLab",      tier: "Training Partner",  initials: "PL", color: "#9A5A44" },
    { name: "NorthWind Co.",tier: "Local Sponsor",     initials: "NW", color: "#556270" },
  ],

  // ---- Journey timeline: order matters, earliest first ----
  timeline: [
    {
      year: "2019 — 2021",
      title: "Middle School Track",
      org: "Lincoln Middle School",
      desc: "First laps on a real track. Ran junior varsity distance events and found out running could be more than a gym-class mile.",
    },
    {
      year: "2021 — 2023",
      title: "Freshman & JV Years",
      org: "Roosevelt High School",
      desc: "Moved up to the high school program. Cut his mile time by nearly a minute across two seasons of varsity-adjacent racing.",
    },
    {
      year: "2023 — 2025",
      title: "Varsity Breakthrough",
      org: "Roosevelt High School",
      desc: "Earned a varsity spot, qualified for regionals in cross country, and set five personal records in a single outdoor season.",
    },
    {
      year: "2025 — Present",
      title: "Chasing State, Chasing More",
      org: "Roosevelt High School / Independent Training",
      desc: "Training for a state qualifying mark, picking up local sponsors along the way, and building toward the next level.",
    },
  ],

  // ---- Footer links ----
  footerLinks: [
    { label: "Records",  href: "#prs" },
    { label: "Sponsors", href: "#sponsors" },
    { label: "Journey",  href: "#journey" },
    { label: "Press Kit", href: "#" },
  ],

  gofundme: "https://gofundme.com/",
  contact: "mailto:developer@example.com",
};


/* ==========================================================================
   ICON LIBRARY (small inline SVGs, currentColor-based)
   ========================================================================== */

const ICONS = {
  instagram: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1"/></svg>`,
  twitter: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 3H21.5L15.6 9.7L22.5 21H17.1L12.9 14.9L8.1 21H5.5L11.8 13.8L5.2 3H10.8L14.6 8.6L18.9 3ZM17.9 19.4H19.4L9.9 4.5H8.3L17.9 19.4Z"/></svg>`,
  strava: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10.8 2L4.5 14.3H8.2L10.8 9.2L13.3 14.3H17L10.8 2ZM13.4 16.9L11.7 20.4L10 16.9H6.9L11.7 26L16.5 16.9H13.4Z"/></svg>`,
  tiktok: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M16.6 5.8C15.9 5.1 15.5 4.1 15.5 3H12.4V16.4C12.4 17.8 11.3 18.9 9.9 18.9C8.5 18.9 7.4 17.8 7.4 16.4C7.4 15 8.5 13.9 9.9 13.9C10.2 13.9 10.4 13.9 10.7 14V10.9C10.4 10.9 10.2 10.8 9.9 10.8C6.8 10.8 4.3 13.3 4.3 16.4C4.3 19.5 6.8 22 9.9 22C13 22 15.5 19.5 15.5 16.4V9.1C16.7 9.9 18.1 10.4 19.6 10.4V7.3C18.5 7.3 17.4 6.7 16.6 5.8Z"/></svg>`,
  youtube: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 8.2C22 6.5 20.7 5.2 19 5.1C16.7 5 12 5 12 5C12 5 7.3 5 5 5.1C3.3 5.2 2 6.5 2 8.2C1.9 9.6 1.9 12 1.9 12C1.9 12 1.9 14.4 2 15.8C2 17.5 3.3 18.8 5 18.9C7.3 19 12 19 12 19C12 19 16.7 19 19 18.9C20.7 18.8 22 17.5 22 15.8C22.1 14.4 22.1 12 22.1 12C22.1 12 22.1 9.6 22 8.2ZM9.9 15.3V8.7L15.7 12L9.9 15.3Z"/></svg>`,
  linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5.3 3C4 3 3 4 3 5.3S4 7.6 5.3 7.6 7.6 6.6 7.6 5.3 6.6 3 5.3 3ZM3.3 9.1H7.3V21H3.3V9.1ZM10.3 9.1H14.1V10.8H14.2C14.7 9.9 15.9 8.9 17.7 8.9C21.4 8.9 22.1 11.3 22.1 14.4V21H18.1V15.2C18.1 13.8 18.1 12 16.1 12C14.1 12 13.8 13.5 13.8 15.1V21H10.3V9.1Z"/></svg>`,
  email: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7L12 13L21 7"/></svg>`,
};

function iconFor(name) {
  return ICONS[name] || ICONS.email;
}


/* ==========================================================================
   RENDER: populate DOM from CONFIG
   ========================================================================== */

function renderNav() {
  const navLinks = document.getElementById("nav-links");
  navLinks.innerHTML = CONFIG.nav.map(
    item => `<a href="${item.href}">${item.label}</a>`
  ).join("");

  const navSocials = document.getElementById("nav-socials");
  navSocials.innerHTML = CONFIG.socials.map(
    s => `<a href="${s.url}" target="_blank" rel="noopener" aria-label="${s.platform}">${iconFor(s.icon)}</a>`
  ).join("");
}

function renderSocialStrip() {
  const strip = document.getElementById("social-strip");
  strip.innerHTML = CONFIG.socials.map(
    s => `<a href="${s.url}" target="_blank" rel="noopener">${iconFor(s.icon)}<span>${s.platform}</span></a>`
  ).join("");
}

function renderPRs() {
  const grid = document.getElementById("pr-grid");
  grid.innerHTML = CONFIG.prs.map(pr => `
    <div class="pr-card">
      <p class="pr-event">${pr.event}</p>
      <p class="pr-mark">${pr.mark}</p>
      <p class="pr-meta">${pr.meta}</p>
    </div>
  `).join("");
}

function renderSponsors() {
  const track = document.getElementById("sponsor-track");
  const cardHTML = s => `
    <div class="sponsor-card" style="--sponsor-color:${s.color}">
      <div class="sponsor-mark">${s.initials}</div>
      <p class="sponsor-name">${s.name}</p>
      <p class="sponsor-tier">${s.tier}</p>
    </div>
  `;
  // duplicate the list once so the marquee loop is seamless
  const all = [...CONFIG.sponsors, ...CONFIG.sponsors];
  track.innerHTML = all.map(cardHTML).join("");
}

function renderTimeline() {
  const items = document.getElementById("timeline-items");
  items.innerHTML = CONFIG.timeline.map(t => `
    <div class="timeline-item">
      <span class="timeline-dot"></span>
      <p class="timeline-year">${t.year}</p>
      <h3 class="timeline-title">${t.title}</h3>
      <p class="timeline-org">${t.org}</p>
      <p class="timeline-desc">${t.desc}</p>
    </div>
  `).join("");
}

function renderFooter() {
  const links = document.getElementById("footer-links");
  links.innerHTML = CONFIG.footerLinks.map(
    l => `<a href="${l.href}">${l.label}</a>`
  ).join("");

  document.getElementById("footer-gofundme").href = CONFIG.gofundme;
  document.getElementById("footer-year").textContent = new Date().getFullYear();
}

function renderHero() {
  document.getElementById("hero-tagline").textContent = CONFIG.tagline;
}

function wireModalLinks() {
  document.getElementById("modal-contact").href = CONFIG.contact;
  document.getElementById("modal-gofundme").href = CONFIG.gofundme;
}


/* ==========================================================================
   LOADER
   ========================================================================== */

function initLoader() {
  const loader = document.getElementById("loader");
  window.addEventListener("load", () => {
    setTimeout(() => {
      loader.classList.add("loader-hidden");
      typeName();
    }, 550);
  });
  // fallback in case 'load' already fired
  if (document.readyState === "complete") {
    setTimeout(() => {
      loader.classList.add("loader-hidden");
      typeName();
    }, 550);
  }
}


/* ==========================================================================
   TYPEWRITER — types out the name in the hero
   ========================================================================== */

function typeName() {
  const el = document.getElementById("typed-name");
  const text = CONFIG.name;
  let i = 0;
  el.textContent = "";

  function tick() {
    if (i <= text.length) {
      el.textContent = text.slice(0, i);
      i++;
      const delay = 55 + Math.random() * 55;
      setTimeout(tick, delay);
    }
  }
  tick();
}


/* ==========================================================================
   AMBIENT DOT FIELD — canvas grid of dots drifting between black & gray
   ========================================================================== */

function initDotField() {
  const canvas = document.getElementById("dot-field");
  const ctx = canvas.getContext("2d");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  let dots = [];
  let w, h;
  const spacing = 42;

  const grays = ["#918B7C", "#B9B2A0", "#57534A", "#1A1917", "#322F29"];

  function resize() {
    w = canvas.width = window.innerWidth * devicePixelRatio;
    h = canvas.height = document.documentElement.scrollHeight * devicePixelRatio;
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = document.documentElement.scrollHeight + "px";
    buildDots();
  }

  function buildDots() {
    dots = [];
    const cols = Math.ceil(w / (spacing * devicePixelRatio));
    const rows = Math.ceil(h / (spacing * devicePixelRatio));
    for (let x = 0; x < cols; x++) {
      for (let y = 0; y < rows; y++) {
        dots.push({
          x: x * spacing * devicePixelRatio + (spacing * devicePixelRatio) / 2,
          y: y * spacing * devicePixelRatio + (spacing * devicePixelRatio) / 2,
          baseColor: grays[Math.floor(Math.random() * grays.length)],
          phase: Math.random() * Math.PI * 2,
          speed: 0.15 + Math.random() * 0.25,
          radius: 1.1 + Math.random() * 1.1,
        });
      }
    }
  }

  function draw(t) {
    ctx.clearRect(0, 0, w, h);
    const time = t * 0.001;
    for (const d of dots) {
      const pulse = (Math.sin(time * d.speed + d.phase) + 1) / 2; // 0..1
      ctx.globalAlpha = 0.25 + pulse * 0.55;
      ctx.fillStyle = d.baseColor;
      ctx.beginPath();
      ctx.arc(d.x, d.y, d.radius * devicePixelRatio, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
    if (!reducedMotion) requestAnimationFrame(draw);
  }

  resize();
  window.addEventListener("resize", debounce(resize, 200));
  // rebuild on content growth (e.g. after fonts load / images shift layout)
  window.addEventListener("load", () => setTimeout(resize, 300));

  if (reducedMotion) {
    draw(0);
  } else {
    requestAnimationFrame(draw);
  }
}

function debounce(fn, wait) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), wait);
  };
}


/* ==========================================================================
   NAV: scrolled state + mobile toggle + smooth in-page links
   ========================================================================== */

function initNav() {
  const nav = document.getElementById("site-nav");
  const toggle = document.getElementById("nav-toggle");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 12);
  }, { passive: true });

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("menu-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  document.getElementById("nav-links").addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      nav.classList.remove("menu-open");
      toggle.setAttribute("aria-expanded", "false");
    }
  });
}


/* ==========================================================================
   SCROLL REVEAL — PR cards + timeline items fade/slide in on view
   ========================================================================== */

function initScrollReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
      }
    });
  }, { threshold: 0.2, rootMargin: "0px 0px -8% 0px" });

  document.querySelectorAll(".pr-card, .timeline-item").forEach(el => observer.observe(el));
}


/* ==========================================================================
   TIMELINE LINE DRAW — the vertical line "progresses" as you scroll
   ========================================================================== */

function initTimelineDraw() {
  const svg = document.getElementById("timeline-line");
  const bgPath = document.getElementById("timeline-path");
  const wrap = document.querySelector(".timeline-wrap");
  if (!wrap) return;

  // clone the path to create a progress overlay drawn on top
  const progress = bgPath.cloneNode();
  progress.id = "timeline-path-progress";
  svg.appendChild(progress);

  function update() {
    const rect = wrap.getBoundingClientRect();
    const vh = window.innerHeight;
    const total = rect.height;
    const scrolled = clamp(vh * 0.75 - rect.top, 0, total);
    const ratio = total > 0 ? scrolled / total : 0;

    const length = 1000;
    progress.setAttribute("d", `M2,0 L2,${length * ratio}`);
  }

  function clamp(v, min, max) { return Math.max(min, Math.min(max, v)); }

  window.addEventListener("scroll", () => requestAnimationFrame(update), { passive: true });
  window.addEventListener("resize", () => requestAnimationFrame(update));
  update();
}


/* ==========================================================================
   BOTTOM POPUP — appears once, when footer sentinel enters view
   ========================================================================== */

function initBottomModal() {
  const overlay = document.getElementById("modal-overlay");
  const closeBtn = document.getElementById("modal-close");
  const sentinel = document.getElementById("footer-sentinel");
  let shown = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !shown) {
        shown = true;
        setTimeout(() => overlay.classList.add("modal-visible"), 300);
      }
    });
  }, { threshold: 0.6 });

  observer.observe(sentinel);

  function close() {
    overlay.classList.remove("modal-visible");
  }

  closeBtn.addEventListener("click", close);
  overlay.addEventListener("click", (e) => {
    if (e.target === overlay) close();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}


/* ==========================================================================
   INIT
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderSocialStrip();
  renderPRs();
  renderSponsors();
  renderTimeline();
  renderFooter();
  renderHero();
  wireModalLinks();

  initLoader();
  initDotField();
  initNav();
  initScrollReveal();
  initTimelineDraw();
  initBottomModal();
});
