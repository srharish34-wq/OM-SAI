// /* ================= Scroll Animation for Service Sections ================= */

// const firstTitle = document.querySelector(".page-content .section-title");

// if (firstTitle && "IntersectionObserver" in window) {
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//       if (entry.isIntersecting) {
//         firstTitle.style.transform = "translateX(0)";
//         firstTitle.style.opacity = "1";
//         observer.unobserve(firstTitle);
//       }
//     });x
//   }, { threshold: 0.3 });

//   observer.observe(firstTitle);
// } else if (firstTitle) {
//   firstTitle.style.transform = "translateX(0)";
//   firstTitle.style.opacity = "1";
// }


/* ================= Scroll Animation for Service Sections ================= */
const serviceSections = document.querySelectorAll(
  ".construction-section, .renovation-section, .property-section"
);

serviceSections.forEach(section => {
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.classList.add("animate");
          observer.unobserve(section);
        }
      });
    }, { threshold: 0.3 });

    observer.observe(section);
  } else {
    section.classList.add("animate");
  }
});

const firstTitle = document.querySelector(".page-content .section-title");

if (firstTitle && "IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        firstTitle.style.transform = "translateX(0)";
        firstTitle.style.opacity = "1";
        observer.unobserve(firstTitle);
      }
    });
  }, { threshold: 0.3 });

  observer.observe(firstTitle);
} else if (firstTitle) {
  firstTitle.style.transform = "translateX(0)";
  firstTitle.style.opacity = "1";
}

/* ============ Service Section Animation (Scroll) ============ */
const serviceCards = document.querySelectorAll(".service-card");

if (serviceCards.length && "IntersectionObserver" in window) {

  serviceCards.forEach((card, index) => {
    if (index % 4 < 2) {
      card.classList.add("from-left");
    } else {
      card.classList.add("from-right");
    }
  });

  const serviceObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        serviceObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.25 });

  serviceCards.forEach(card => serviceObserver.observe(card));

} else {
  serviceCards.forEach(card => card.classList.add("show"));
}
document.getElementById("menuToggle").addEventListener("click", function () {
  document.querySelector(".main-header .nav-menu").classList.toggle("active");
});

/* Mobile dropdown click */
document.querySelectorAll(".main-header .dropdown > a").forEach(item => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    this.parentElement.classList.toggle("active");
  });
});

// animation for ongoing project

  const reveals = document.querySelectorAll(".reveal");

  function revealOnScroll() {
    const windowHeight = window.innerHeight;
    const revealPoint = 120;

    reveals.forEach((card) => {
      const cardTop = card.getBoundingClientRect().top;

      if (cardTop < windowHeight - revealPoint) {
        card.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);

  // counter animation

const counters = document.querySelectorAll('.count');
const boxes = document.querySelectorAll('.stat-box');
let started = false;

function startCount() {
  if (started) return;
  started = true;

  counters.forEach(counter => {
    const target = +counter.getAttribute('data-target');
    let count = 0;
    const speed = target / 60;

    const updateCount = () => {
      if (count < target) {
        count += speed;
        counter.innerText = Math.ceil(count) + "+";
        requestAnimationFrame(updateCount);
      } else {
        counter.innerText = target + "+";
      }
    };
    updateCount();
  });
}

window.addEventListener('scroll', () => {
  const section = document.querySelector('.stats-section');
  const sectionTop = section.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight - 150) {
    startCount();
    boxes.forEach(box => box.classList.add('show'));
  }
});
// const reviews = [
//   {
//     text: "Suresh is very responsible and got good contacts. Purchased a home recently.",
//     name: "Harini",
//     time: "1 year ago",
//     img: "images/user1.jpg"
//   },
//   {
//     text: "Very professional service and clear guidance throughout the process.",
//     name: "Harinii",
//     time: "8 months ago",
//     img: "images/user2.jpg"
//   },
//   {
//     text: "Highly trustworthy and transparent dealings. Recommended!",
//     name: "Priya Sharma",
//     time: "6 months ago",
//     img: "images/user3.jpg"
//   }
// ];

// let index = 0;
// let autoSlide;

// function loadReview() {
//   document.getElementById("reviewText").innerText = reviews[index].text;
//   document.getElementById("reviewerName").innerText = reviews[index].name;
//   document.getElementById("reviewTime").innerText = reviews[index].time;
//   document.getElementById("profileImg").src = reviews[index].img;
// }

// function nextReview() {
//   index = (index + 1) % reviews.length;
//   loadReview();
// }

// function prevReview() {
//   index = (index - 1 + reviews.length) % reviews.length;
//   loadReview();
// }

// function startAutoSlide() {
//   autoSlide = setInterval(nextReview, 4000);
// }

// function stopAutoSlide() {
//   clearInterval(autoSlide);
// }

// const reviewBox = document.querySelector(".review-box");
// reviewBox.addEventListener("mouseenter", stopAutoSlide);
// reviewBox.addEventListener("mouseleave", startAutoSlide);

// loadReview();
// startAutoSlide();
let index = 0;

function moveSlide(step) {
  const slider = document.getElementById("slider");
  const cards = slider.children;
  const cardWidth = cards[0].offsetWidth + 30;
  const maxIndex = cards.length - 1;

  index = index + step;

  if (index < 0) {
    index = maxIndex;
  } 
  if (index > maxIndex) {
    index = 0;
  }

 slider.style.transform = `translateX(-${index * cardWidth}px)`;
}

function toggleReadMore(el) {
  const text = el.previousElementSibling;

  const shortText = text.getAttribute("data-short");
  const fullText = text.getAttribute("data-full");

  if (el.innerText === "Read more") {
    text.innerText = fullText;
    el.innerText = "Read less";
  } else {
    text.innerText = shortText;
    el.innerText = "Read more";
  }
}
let startX = 0;
let endX = 0;

const wrapper = document.querySelector(".review-wrapper");

wrapper.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

wrapper.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;

  if (startX - endX > 50) {
    moveSlide(1); // swipe left → next
  } 
  else if (endX - startX > 50) {
    moveSlide(-1); // swipe right → prev
  }
});
