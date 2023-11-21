"use strict"
const tabItem = document.querySelectorAll('.tabs__btn-item');
const tabContent = document.querySelectorAll('.tabs__content-item');

tabItem.forEach((element) => {
    element.addEventListener('click', open);
})

function open(e) {
    const tabTarget = e.currentTarget;
    const button = tabTarget.dataset.button
    tabItem.forEach((i) => i.classList.remove('tabs__btn-item--active'));
    tabContent.forEach((i) => i.classList.remove('tabs__content-item--active'));
    tabTarget.classList.add('tabs__btn-item--active');
    document.querySelector(`#${button}`).classList.add('tabs__content-item--active');
}