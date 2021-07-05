// let list = document.getElementById('team__list');
let list = document.getElementsByClassName('team__list'); // почему не работает
const buttons = document.querySelectorAll('.team__name');

for (let i = 0; i < buttons.length; i++) {
  const element = buttons[i];
  element.addEventListener('click', function (e) {
    e.preventDefault();
    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
    } else {
      e.target.classList.add("active");
    }
    // const content = e.target.nextElementSibling;
    // content.style['max-height'] = '100vh';
    
    // e.target.classList.add('active');
    for (let x = 0; x < buttons.length; x++) {
      const e = buttons[x]
      if (e !== element) {
        const contentToHide = e.nextElementSibling;
        e.classList.remove('active');
      }
    }

  });
}


