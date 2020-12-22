const $ = selector => document.querySelector(selector);

const $$ = selector => document.querySelectorAll(selector);

const createElement = (tag, className) => {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);
  return element;
}

// dynamically load main image on home page
const imgWrapper = $('.img-wrapper') || null;

if (imgWrapper) {
  const img = createElement('img', 'hero');
  const randomImg = 'https://source.unsplash.com/random'
  img.src = randomImg;
  img.alt = 'Random image from Unsplash.com';
  img.addEventListener('click', (e) => {
    console.log(e.target.alt);
  });
  imgWrapper.appendChild(img);
}

// ES6 code for testing

import Utils from './Utils.js';

const utils = new Utils();
const str = '<hello>';
const tagExists = utils.isTag(str);
console.log({tagExists});

class Status {
  constructor() {
  }
  getStatus() {
    return 'OK';
  }
}

const status = new Status();
const currentStatus = status.getStatus();
console.log({currentStatus});