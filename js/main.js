var loader = document.getElementById("demo");
let body = document.getElementById("body")
setTimeout(function () {
  loader.classList.add('d-none')
  body.classList.remove('d-none')
}, 1500)

var typed = new Typed('#element', {
  strings: ['Larry Daniels', 'Developer', 'Designer'],
  typeSpeed: 60,
  backSpeed: 60,
  loop: true
});
let section = document.querySelector(".about");
let spans = document.querySelectorAll(".progress-bar");
let nums = document.querySelectorAll(".nums .num");
let section2 = document.querySelector(".testimonials");
let started = false; // Function Started ? No
let span = document.querySelector(".navbar");
window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 200) {
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  }
  if (window.scrollY >= section2.offsetTop) {
    if (!started) {


      nums.forEach((num) => startCount(num));
    }
    started = true;
  }
  this.scrollY >= 600 ? span.classList.add("show") : span.classList.remove("show");
};
function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 2000 / goal);
}
