'use strict';
const nav = document.getElementById('nav');
const btn = document.querySelector('.btn');

btn.addEventListener('click', function () {
  nav.classList.toggle('active');
});
