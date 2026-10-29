/* ==========================================================================
   GREATER.realestate — Shared Layout
   The header, footer and menu live HERE ONLY. Edit this file once and every
   page updates.

   Each page needs just:
     <div id="site-header"></div>      (right after <body>)
     <div id="site-footer"></div>      (right before </body>)
     <script src="layout.js"></script> (after the footer placeholder)
   ========================================================================== */

/* ---------- EDIT: main menu (header + footer) ---------- */
var NAV = [
  { label: "Learning Center",       href: "learning-center.html" },
  { label: "Association Solutions", href: "association-solutions.html" },
  { label: "About",                 href: "about.html" },
  { label: "Resources",             href: "resources.html", footerLabel: "News & Resources" },
  { label: "Contact",               href: "contact.html", footerOnly: true }
];

/* ---------- EDIT: header button ---------- */
var HEADER_BUTTON = { label: "Let's Connect", href: "contact.html" };

/* ---------- EDIT: social links (leave href "" to hide one) ---------- */
var SOCIAL = {
  linkedin:  "#",
  facebook:  "#",
  instagram: "#",
  youtube:   "#"
};

/* ---------- EDIT: footer legal links + copyright ---------- */
var LEGAL = [
  { label: "Privacy",       href: "privacy.html" },
  { label: "Terms",         href: "terms.html" },
  { label: "Accessibility", href: "accessibility.html" }
];
var COPYRIGHT = "GREATER.realestate. All rights reserved.";


/* ==========================================================================
   You shouldn't need to edit below this line.
   ========================================================================== */
(function () {
  var current = location.pathname.split("/").pop() || "index.html";

  var logo =
    '<a href="index.html" class="logo" aria-label="GREATER.realestate home">' +
      '<svg viewBox="0 0 48 40" fill="#e31b23" aria-hidden="true"><path d="M24 0 48 18v22L24 22 0 40V18z"/></svg>' +
      '<span class="logo__text"><span class="logo__top">GREATER</span><span class="logo__bottom">.REALESTATE</span></span>' +
    '</a>';

  var icons = {
    linkedin:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-2 3.8-2 4 0 4.8 2.6 4.8 6V21h-4v-5.3c0-1.3 0-2.9-1.8-2.9s-2 1.4-2 2.8V21h-4z"/></svg>',
    facebook:  '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M14 8V6c0-.9.6-1 1-1h3V1h-4c-3.6 0-4.4 2.7-4.4 4.4V8H7v4h2.6v11H14V12h3.4l.6-4z"/></svg>',
    instagram: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor"/></svg>',
    youtube:   '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M23 7.2a3 3 0 0 0-2.1-2.1C19 4.6 12 4.6 12 4.6s-7 0-8.9.5A3 3 0 0 0 1 7.2 31 31 0 0 0 .5 12a31 31 0 0 0 .5 4.8 3 3 0 0 0 2.1 2.1c1.9.5 8.9.5 8.9.5s7 0 8.9-.5a3 3 0 0 0 2.1-2.1 31 31 0 0 0 .5-4.8 31 31 0 0 0-.5-4.8zM9.8 15.1V8.9l5.8 3.1z"/></svg>'
  };

  function navItem(item, useFooterLabel) {
    var active = item.href === current ? ' aria-current="page"' : "";
    var text = useFooterLabel && item.footerLabel ? item.footerLabel : item.label;
    return '<li><a href="' + item.href + '"' + active + ">" + text.replace("&", "&amp;") + "</a></li>";
  }

  var header =
    '<header class="site-header"><div class="container">' + logo +
      '<button class="nav-toggle" aria-label="Open menu" aria-expanded="false"><span></span><span></span><span></span></button>' +
      '<nav class="nav" aria-label="Main">' +
        '<ul class="nav__links">' + NAV.filter(function (i) { return !i.footerOnly; }).map(function (i) { return navItem(i, false); }).join("") + "</ul>" +
        '<button class="nav__search" aria-label="Search"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg></button>' +
        '<a href="' + HEADER_BUTTON.href + '" class="btn btn--sm btn--plain">' + HEADER_BUTTON.label + "</a>" +
      "</nav>" +
    "</div></header>";

  var socials = Object.keys(SOCIAL).filter(function (k) { return SOCIAL[k]; }).map(function (k) {
    return '<a href="' + SOCIAL[k] + '" aria-label="' + k + '">' + icons[k] + "</a>";
  }).join("");

  var legal = LEGAL.map(function (l) { return '<a href="' + l.href + '">' + l.label + "</a>"; }).join("<span>|</span>");

  var footer =
    '<footer class="site-footer"><div class="container">' + logo +
      '<ul class="footer-links">' + NAV.map(function (i) { return navItem(i, true); }).join("") + "</ul>" +
      '<div class="footer-meta">' +
        '<div class="socials">' + socials + "</div>" +
        '<div class="legal">' + legal + "</div>" +
        "<p>&copy; " + new Date().getFullYear() + " " + COPYRIGHT + "</p>" +
      "</div>" +
    "</div></footer>";

  var h = document.getElementById("site-header");
  var f = document.getElementById("site-footer");
  if (h) h.outerHTML = header;
  if (f) f.outerHTML = footer;

  /* Mobile menu */
  var toggle = document.querySelector(".nav-toggle");
  if (toggle) {
    toggle.addEventListener("click", function () {
      var open = document.querySelector(".nav").classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open);
    });
  }
})();