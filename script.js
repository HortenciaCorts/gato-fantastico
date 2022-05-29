/*
 * change the image description as per the selected image 
 */
function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  tabContent[0].classList.add('ativo');
  console.log(tabContent[0])

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