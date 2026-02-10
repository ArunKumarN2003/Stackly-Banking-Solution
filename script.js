const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", () => {
    tabs.forEach(t => t.classList.remove("active"));
    contents.forEach(c => c.classList.remove("active"));
    tab.classList.add("active");
    document.getElementById(tab.dataset.tab).classList.add("active");
  });
});
const counters = document.querySelectorAll('.counter');
  let started = false;

  function startCounters() {
    if (started) return;
    started = true;

    const duration = 2000; 
    const startTime = performance.now();

    function updateCounters(currentTime) {
      const progress = Math.min((currentTime - startTime) / duration, 1);

      counters.forEach(counter => {
        const target = parseFloat(counter.dataset.target);
        const prefix = counter.dataset.prefix || '';
        const suffix = counter.dataset.suffix || '';

        const value = (target * progress).toFixed(target % 1 !== 0 ? 1 : 0);
        counter.textContent = prefix + value + suffix;
      });

      if (progress < 1) {
        requestAnimationFrame(updateCounters);
      }
    }

    requestAnimationFrame(updateCounters);
  }
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      startCounters();
    }
  }, { threshold: 0.4 });

  observer.observe(document.querySelector('.stats-section'));
   document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle)').forEach(link => {
    link.addEventListener('click', () => {
      const navbar = document.querySelector('.navbar-collapse');
      const bsCollapse = bootstrap.Collapse.getInstance(navbar);

      if (bsCollapse) {
        bsCollapse.hide();
      }
    });
  });


   const slides = document.querySelectorAll('.hero-slide');
  let index = 0;

  setInterval(() => {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
  }, 5000);