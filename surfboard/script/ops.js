const sections = $("section");
const display = $("wrapp__content");

let inScroll = false;

sections.first().addClass("active");

const performTransition = sectionEq =>{
  if(inScroll==false){
    inScroll=true;
    const position = sectionEq * -100;

    const currentSection = sections.eq(sectionEq);
    const menuTheme = currentSection.attr("data-sidemenu-theme");
    const sideMenu=$(".fixed-menu");
    if(menuTheme=="black"){
      sideMenu.addClass("fixed-menu--black");
    }else{
      sideMenu.removeClass("fixed-menu--black");
    }
    display.css({
      transform: `translateY(${position}%)`
    });
  
    sections.eq(sectionEq).addClass("active").siblings().removeClass("active");
    
setTimeout(()=>{
  inScroll=false;
  sideMenu.find(".fixed-menu__item").eq(sectionEq).addClass("fixed-menu__item--active").siblings().removeClass("fixed-menu__item--active");

},1300);

  }

};

const scrollViewport = direction=>{
  const activeSection = sections.hasClass("active");
  const nextSection = $(activeSection).next();
  const prevSection = $(activeSection).prev();
  if(direction=="next" && nextSection.length){
  performTransition(nextSection.index())
  }
  if(direction=="prev" && prevSection.length){
    performTransition(prevtSection.index())
  }
}

$(window).on("wheel", e =>{
  const deltaY=e.originalEvent.deltaY
  if(deltaY>0)
  {
    scrollViewport("next");
  }
  if(deltaY<0){
    scrollViewport("prev");
  }
})


$(window).on("keydown", e =>{
  const tagName = e.target.tagName.toLowerCase();
  if(tagName!== "input" && tagName !== "textarea"){
    switch(e.keyCode){
      case 38:
        scrollViewport("prev")
        break;
  
        case 40:
          scrollViewport("next")
          break;
    }
  }
 
})

$("[data-scroll-to]").click(e =>{
  e.preventDefault();
  const $this = $(e.currentTarget);
  const target = $this.attr("data-scroll-to");
  const reqSection = $(`[data-section-id=${target}]`) ;
  
  console.log(reqSection.index());

  performTransition(reqSection.index());
})