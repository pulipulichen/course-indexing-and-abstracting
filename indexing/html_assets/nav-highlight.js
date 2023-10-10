
setTimeout(function() {
  let aList = document.querySelectorAll('a[href^="#"]')

  for (let i = 0; i < aList.length; i++) {
    aList[i].addEventListener('click', function(e) {
      e.preventDefault();

      let targetID = this.href
      let hashPos = targetID.indexOf('#')
      if (hashPos > -1) {
        targetID = targetID.slice(hashPos + 1)
      }
      console.log(targetID)
      let targetElement = document.getElementById(targetID)
      targetElement.scrollIntoView({ 
        behavior: "smooth", 
        block: "center", 
        inline: "center" 
      });

      // remove all other highlight
      let highlightElements = document.querySelectorAll('.highlight')
      for (let i = 0; i < highlightElements.length; i++) {
        highlightElements[i].classList.remove('highlight')
      }

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