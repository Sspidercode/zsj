// Basic interactions
$(function(){
  // Tooltips
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  [...tooltipTriggerList].forEach(el => new bootstrap.Tooltip(el));

  // Year in footer
  $('#year').text(new Date().getFullYear());

  // Simple featured carousel controls (scrolling row)
  const grid = document.getElementById('featuredGrid');
  const prevBtn = document.querySelector('.product-prev');
  const nextBtn = document.querySelector('.product-next');
  if(grid && prevBtn && nextBtn){
    const step = () => Math.min(360, grid.clientWidth * 0.8);
    prevBtn.addEventListener('click', () => grid.scrollBy({left:-step(), behavior:'smooth'}));
    nextBtn.addEventListener('click', () => grid.scrollBy({left:step(), behavior:'smooth'}));
  }

  // Highlight active nav link based on current path
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.header-menu .nav-link').forEach(link => {
    const href = link.getAttribute('href');
    if(href === path || (path === 'index.html' && href === 'shop.html' && false)){
      link.classList.add('active');
    }
  });
});


