// script.js - simple accessible hamburger toggle
document.addEventListener('DOMContentLoaded', function(){
  const btn = document.querySelector('.nav-toggle');
  const nav = document.getElementById('primary-navigation');
  btn.addEventListener('click', function(){
    const expanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('show');
    // animate hamburger to X
    this.querySelector('.hamburger').classList.toggle('open');
  });
});