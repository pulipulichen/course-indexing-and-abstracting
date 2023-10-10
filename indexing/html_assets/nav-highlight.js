
setTimeout(function() {
  let aList = document.querySelectorAll('a[href^="#"]')

  for (let i = 0; i < aList.length; i++) {
    aList[i].addEventListener('click', function(e) {
      e.preventDefault();

      let targetID = this.href
      if (targetID.startsWith('#')) {
        targetID = targetID.slice(1)
      }

      let targetElement = document.getElementById(targetID)
      targetElement.scrollIntoView({ behavior: "smooth", block: "start", inline: "nearest" });

      targetElement.classList.add("highlight")
      setTimeout(() => {
        targetElement.classList.remove("highlight")
      }, 3000)
    })
  }

  // $('nav.primary a').click(function(event) { // the elements you click to scroll
  //   event.preventDefault();
  //   var link = this; // you need this if you are using hash links on ex: a href="#link" to id="link"
  //   $.smoothScroll({
  //     offset: -160, // adjusts where the scroll will stop so the height of the scrolling element plus the height of the element you are scrolling to.
  //     speed: 2000,
  //     scrollTarget: link.hash
  //   });
  // });
  // // waypoint alternative
  // // jsfiddle.net/senff/4D3bH/3/
  // $('nav.primary a').click(function(){
  //   $('nav.primary a').removeClass('active');
  //   $(this).addClass('active');
  // });
}, 0);