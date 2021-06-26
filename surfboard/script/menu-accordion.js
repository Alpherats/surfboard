let list = document.getElementById('team__list');

const buttons = document.querySelectorAll('.team__name');

for (let i = 0; i < buttons.length; i++) {
  const element = buttons[i];
  element.addEventListener('click', function (e) {
    e.preventDefault();
    // debugger;
    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
    } else {
      e.target.classList.add("active");
    }
    const content = e.target.nextElementSibling;
    content.style['max-height'] = '100vh';
    
    e.target.classList.add('active');
    for (let x = 0; x < buttons.length; x++) {
      const e = buttons[x]
      if (e !== element) {
        const contentToHide = e.nextElementSibling;
        contentToHide.style['max-height'] = '0';
        e.classList.remove('active');
      }
    }

  });
}



