var body = document.querySelector('body'),
    clickTarget = document.getElementById('click-target'),
    mouseOverTarget = document.getElementById('mouse-over-target'),
    toggle = false;
    
function makeBackgroundOrange () {
    'use strict';
    if (toggle) {
        body.style.backgroundColor = 'white';
    } else {
        body.style.backgroundColor = 'orange';
    }
    toggle = !toggle;
}

clickTarget.addEventListener('click', makeBackgroundOrange, false);

mouseOverTarget.addEventListener('mouseover', function(){
    'use strict';
    clickTarget.removeEventListener('click', makeBackgroundOrange, false);
});