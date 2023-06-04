'use strict';

// Selectors
const changeBtn = document.getElementById('change');
const main = document.querySelector('.main');
const mainTitle = document.querySelector('.main-title');
const btnPrimary = document.getElementById('primary');
const btnDefault = document.getElementById('default');
const heroText = document.getElementById('hero');
const heroContent = document.getElementById('heroContent');
const takeBtn = document.querySelector('.nature');
const skyBtn = document.querySelector('.sky');

// Selectors / Functions to not repeat code
const bodyChange = document.body.style;
const mainTitleChange = mainTitle.style;
const primaryChange = function () {
  if (btnPrimary.classList.contains('btn-light')) {
    btnPrimary.classList.remove('btn-light');
    btnPrimary.classList.add('btn-dark');
  } else {
    btnPrimary.classList.remove('btn-dark');
    btnPrimary.classList.add('btn-light');
  }
};

const defaultChange = function () {
  if (btnDefault.classList.contains('btn-dark')) {
    btnDefault.classList.remove('btn-dark');
    btnDefault.classList.add('btn-light');
  } else {
    btnDefault.classList.remove('btn-light');
    btnDefault.classList.add('btn-dark');
  }
};

// Change button functionality
changeBtn.addEventListener('click', function () {
  if (changeBtn.classList.contains('btn-light')) {
    // Dark theme
    changeBtn.classList.remove('btn-light');
    changeBtn.classList.add('btn-dark');
    bodyChange.backgroundColor = '#DDE6ED';
    mainTitleChange.color = '#526D82';
    heroText.style.color = '#526D82';
    heroContent.style.color = '#526D82';
    takeBtn.style.color = '#526D82';
    skyBtn.style.color = '#DDE6ED';

    primaryChange();
    defaultChange();
  } else {
    // White theme
    changeBtn.classList.remove('btn-dark');
    changeBtn.classList.add('btn-light');
    bodyChange.backgroundColor = '#27374D';
    mainTitleChange.color = '#DDE6ED';
    heroText.style.color = '#DDE6ED';
    heroContent.style.color = '#DDE6ED';
    takeBtn.style.color = '#DDE6ED';
    skyBtn.style.color = '#526D82';

    primaryChange();
    defaultChange();
  }
});
