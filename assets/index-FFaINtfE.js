(function () {
  const o = document.createElement("link").relList;
  if (o && o.supports && o.supports("modulepreload")) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) i(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === "childList")
        for (const r of t.addedNodes)
          r.tagName === "LINK" && r.rel === "modulepreload" && i(r);
  }).observe(document, { childList: !0, subtree: !0 });
  function s(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === "use-credentials"
        ? (t.credentials = "include")
        : e.crossOrigin === "anonymous"
        ? (t.credentials = "omit")
        : (t.credentials = "same-origin"),
      t
    );
  }
  function i(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = s(e);
    fetch(e.href, t);
  }
})();
const a = document.querySelector(".header__burger"),
  m = document.querySelector(".header__top-menu");
a &&
  a.addEventListener("click", function (n) {
    a.classList.toggle("_x"),
      m.classList.toggle("_x"),
      document.body.classList.toggle("_lock");
  });
const d = document.querySelectorAll(
  ".header__top-menu-link[data-goto], .header__bottom-scroll[data-goto]"
);
if (d.length > 0) {
  let n = function (o) {
    const s = o.target;
    if (s.dataset.goto && document.querySelector(s.dataset.goto)) {
      const t =
        document.querySelector(s.dataset.goto).getBoundingClientRect().top +
        window.pageYOffset -
        30;
      a.classList.contains("_x") &&
        (a.classList.remove("_x"),
        m.classList.remove("_x"),
        document.body.classList.remove("_lock")),
        window.scrollTo({ top: t, behavior: "smooth" }),
        o.preventDefault();
    }
  };
  var f = n;
  d.forEach((o) => {
    o.addEventListener("click", n);
  });
}
const u = window.scrollTo;
window.scrollTo = function (n) {
  if ((n == null ? void 0 : n.behavior) === "smooth") {
    const o = window.pageYOffset,
      s = n.top - o - 30,
      i = 400;
    let e = null;
    const t = (r) => {
      e = e || r;
      const c = Math.min((r - e) / i, 1);
      u(0, o + s * c), c < 1 && requestAnimationFrame(t);
    };
    requestAnimationFrame(t);
    return;
  }
  u.apply(this, arguments);
};
new Swiper(".works__container", {
  spaceBetween: 30,
  autoHeight: !0,
  slidesPerView: 3,
  loop: !0,
  speed: 800,
  grabCursor: !0,
  centeredSlides: !1,
  autoplay: { delay: 1e3, stopOnLastSlide: !1, disableOnInteraction: !1 },
  breakpoints: {
    0: { slidesPerView: 1.1, spaceBetween: 15, centeredSlides: !0 },
    400: { slidesPerView: 1.3, spaceBetween: 15 },
    576: { slidesPerView: 1.5, spaceBetween: 20 },
    768: { slidesPerView: 2, spaceBetween: 25 },
    992: { slidesPerView: 2.5, spaceBetween: 30 },
    1200: { slidesPerView: 3, spaceBetween: 30 },
  },
});
const l = document.querySelectorAll("._anim-items");
if (l.length > 0) {
  let n = function () {
      for (let s = 0; s < l.length; s++) {
        const i = l[s],
          e = i.offsetHeight,
          t = o(i).top,
          r = 4;
        let c = window.innerHeight - e / r;
        e > window.innerHeight &&
          (c = window.innerHeight - window.innerHeight / r),
          pageYOffset > t - c && pageYOffset < t + e
            ? i.classList.add("_active")
            : i.classList.contains("_anim-no-hide") ||
              i.classList.remove("_active");
      }
    },
    o = function (s) {
      const i = s.getBoundingClientRect(),
        e = window.pageXOffset || document.documentElement.scrollLeft,
        t = window.pageYOffset || document.documentElement.scrollTop;
      return { top: i.top + t, left: i.left + e };
    };
  var g = n,
    p = o;
  window.addEventListener("scroll", n),
    setTimeout(() => {
      n();
    }, 200);
}
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(function () {
    const n = document.querySelector(".name-animation"),
      o = document.querySelector(".job-animation");
    n &&
      o &&
      ((n.style.animation = "none"),
      (o.style.animation = "none"),
      setTimeout(function () {
        (n.style.animation = ""), (o.style.animation = "");
      }, 50));
  }, 300);
});
