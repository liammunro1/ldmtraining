// Basic interactions: nav toggle, form success UI, current year
document.addEventListener('DOMContentLoaded', function(){
  // Year
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();

  // Nav toggle (mobile)
  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('.nav');
  if(navToggle && nav){
    navToggle.addEventListener('click', function(){
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', String(!expanded));
      nav.setAttribute('aria-expanded', String(!expanded));
    });
  }

  // Form submit handling to give quick feedback (works with Formspree or any POST endpoint)
  const form = document.getElementById('contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      // let the form submit normally — if you want ajax, replace action with fetch.
      // Provide a short UI change
      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.textContent = 'Sending...';
      // If using a fetch-based submission, you'd preventDefault and handle response.
      // We add a fallback timer to re-enable the button after 8s in case of network issues.
      setTimeout(()=>{
        if(btn){ btn.disabled = false; btn.textContent = 'Send message'; }
      }, 8000);
    });
  }
});
