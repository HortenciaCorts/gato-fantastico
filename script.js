/*
 * change the image description as per the selected image 
 */
function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  tabContent[0].classList.add('ativo');

  function activeTab(index) {
    tabContent.forEach(section => {
      section.classList.remove('ativo');
    });
    
    console.log(tabContent)
    tabContent[index].classList.add('ativo');
  }

  tabMenu.forEach((itemMenu, index) => {
    itemMenu.addEventListener('click', () => activeTab(index));
  })
}
initTabNav();

/*
 * open/close FAQ answers 
 */
function initAccordion() {
  const accordionList = document.querySelectorAll('.js-accordion dt');
  accordionList[0].classList.add('ativo');
  accordionList[0].nextElementSibling.classList.add('ativo');
  
  function activeAccordion() {
    this.classList.toggle('ativo');
    this.nextElementSibling.classList.toggle('ativo');
  }
  
  accordionList.forEach(item => {
    item.addEventListener('click', activeAccordion);
  });
}
initAccordion();

/*
* scroll smooth in internal links 
*/
console.log('call')
function initScrollSuave() {
 const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
 function scrollToSection(event) {
   event.preventDefault();
   const href = event.currentTarget.getAttribute('href');
   const section = document.querySelector(href);
   section.scrollIntoView({
     behavior: 'smooth',
     block: 'start',
   });
 }
 
 linksInternos.forEach(link => {
   link.addEventListener('click', scrollToSection);
 });
}
initScrollSuave();

/*
 * scroll animation
 */
function initScrollAnimation() {
  const sections = document.querySelectorAll('.js-scroll');
  const windowMetade = window.innerHeight * 0.6;
  
  function animaScroll() {
    sections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = (sectionTop - windowMetade) < 0;
      if(isSectionVisible)
        section.classList.add('ativo');
      else 
        section.classList.remove('ativo');
    })
  }
  animaScroll();
  
  window.addEventListener('scroll', animaScroll)
}
initScrollAnimation();