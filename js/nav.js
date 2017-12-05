// Nav vairables
const overlay = document.getElementById('navOverlay');
const button = document.getElementById('navToggle');
const nav = document.querySelector('nav');
const navItems = document.querySelectorAll('.nav-item');

const buttonIcon = 'nav-toggle-icon';
const buttonSpan = 'buttonSlice';

// Project variables
const viewRepo = 'view-repo';
const projectCards = document.querySelectorAll('.project-card');

// Page animations variables
const hidden = document.querySelectorAll('.hidden');
const fade = document.querySelectorAll('.fade');
const up = document.querySelectorAll('.up');


function ToggleNav() {
    overlay.classList.toggle('open');
    button.classList.toggle('nav-toggle--open');
    NavigationStatus();
}

function NavigationStatus() {
    if (overlay.classList.contains('open')) {
        setTabIndexOpen();
        return true;
    } else {
        setTabIndexClosed();
        return false;
    }
}

function setTabIndexOpen() {
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].setAttribute('tabindex', '0');
    }
}

function setTabIndexClosed() {
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].setAttribute('tabindex', '-1');
    }
}

function ClickEvents() {
    document.addEventListener('click', function(e) {
        if (NavigationStatus()) {
            if (e.target !== nav && e.target !== button && !e.target.classList.contains(buttonIcon) && !e.target.classList.contains(buttonSpan)) {
                ToggleNav();
                if (e.keyCode == 13) {
                    ToggleNav();
                }
            }
        }
        if (e.target === button || e.target.classList.contains(buttonIcon) || e.target.classList.contains(buttonSpan)) {
            e.preventDefault();
            ToggleNav();
        }

    });
}

// Projects aimations

document.addEventListener('keydown', function(e) {
    if (13 == e.keyCode) {
        if (e.target.classList.contains(viewRepo)) {
            let target = e.target.parentNode.lastElementChild;
            let child = target.firstElementChild;
            child.click();
        }
    }
});

function isInViewport(element) {
  var rect = element.getBoundingClientRect();
  var html = document.documentElement;
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || html.clientHeight) &&
    rect.right <= (window.innerWidth || html.clientWidth)
  );
}

function isEven(value){
    if (value%2 == 0)
        return true;
    else
        return false;
}

if (document.documentElement.clientWidth > 1024) {
    for (let j = 0; j < hidden.length ; j++ ) {
            hidden[j].style.opacity = 0;
    }
    for (let f = 0 ; f < fade.length ; f++ ) {
        fade[f].classList.add('animated', 'fadeInDown');
    }

    window.addEventListener('scroll', function() {
        for (let i = 0; i < projectCards.length ; i++ ) {
            if (isInViewport(projectCards[i])){
                if (isEven(i)) {
                    projectCards[i].classList.add('animated', 'fadeInLeft');
                } else {
                    projectCards[i].classList.add('animated', 'fadeInRight');
                }

            }
        }


        for (let u = 0 ; u < up.length ; u++ ) {
            if (isInViewport(up[u])) {
                up[u].classList.add('animated', 'fadeInUp');
            }
        }

    });
}



NavigationStatus();
ClickEvents();
