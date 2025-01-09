const btn = document.querySelector('.btn');
const burger = document.querySelector('.burger');

btn.addEventListener('click', () => {
    btn.classList.toggle('active');
    burger.classList.toggle('active');
});