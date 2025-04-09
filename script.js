// Dark Mode Toggle
document.getElementById('darkModeToggle').addEventListener('click', function() {
  document.body.classList.toggle('dark-mode');
  const icon = this.querySelector('i');
  if (document.body.classList.contains('dark-mode')) {
    icon.classList.replace('fa-moon', 'fa-sun');
  } else {
    icon.classList.replace('fa-sun', 'fa-moon');
  }
});

// Project Filter
const filterButtons = document.querySelectorAll('.filter-btn');
const projectItems = document.querySelectorAll('.project-item');

filterButtons.forEach(button => {
  button.addEventListener('click', function() {
    // Update button styles
    filterButtons.forEach(btn => {
      btn.classList.remove('active');
      btn.classList.add('btn-outline-primary');
      btn.classList.remove('btn-primary');
    });
    
    this.classList.remove('btn-outline-primary');
    this.classList.add('btn-primary');
    
    // Filter projects
    const filterValue = this.getAttribute('data-filter');
    
    projectItems.forEach(item => {
      if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Scroll Animation
function animateOnScroll() {
  const elements = document.querySelectorAll('[data-aos]');
  elements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('aos-animate');
    }
  });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll(); // Initial check

// Resume Download
document.getElementById('downloadResume').addEventListener('click', function(e) {
  e.preventDefault();
  alert('Resume download would start here!');
  // In production: window.open('resume.pdf', '_blank');
});

// Form Submission
document.querySelector('#contact form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for your message! I will get back to you soon.');
  this.reset();
});