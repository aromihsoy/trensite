
/*HEADER BLACK SCROLL*/
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) { 
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });




/*ANIMATION IMG, SECOND list*/
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const buffer = 800;
  return (
      rect.top <= window.innerHeight + buffer &&
      rect.bottom >= -buffer
  );
}

window.addEventListener('scroll', () => {
  const gymContainer = document.querySelector('.fullgym');
  const oneGym = document.querySelector('.onegym');
  const twoGym = document.querySelector('.twogym');

  if (isInViewport(gymContainer)) {
      oneGym.classList.add('active');
      twoGym.classList.add('active');
  } else {
      oneGym.classList.remove('active');
      twoGym.classList.remove('active');
  }
});




/*HR FORM ANIMATION */
let isAnimated = false;

window.addEventListener('scroll', () => {
    const hr = document.querySelector('.animated-hr');
    const formUserRect = document.querySelector('.formUser').getBoundingClientRect();

    if (formUserRect.top <= window.innerHeight && formUserRect.bottom >= 0) {
        if (!isAnimated) {
            setTimeout(() => {
                hr.classList.add('active');
                isAnimated = true; 
            }, 200);
        }
    } else {
        hr.classList.remove('active');
        isAnimated = false;
    }
});