function myFunction() {
var x = document.getElementById("navbar-collapsed");
if (x.style.top === "-20vh") {
  x.style.top = "3000px";
  document.getElementsByClassName("icons")[0].style.fill = "black";
  document.getElementsByClassName("icons")[1].style.fill = "black";
  document.getElementsByClassName("icons")[2].style.fill = "black";
} else {
  x.style.top = "-20vh";
  document.getElementsByClassName("icons")[0].style.fill = "white";
  document.getElementsByClassName("icons")[1].style.fill = "white";
  document.getElementsByClassName("icons")[2].style.fill = "white";
}
}
function linkClicked() {
    var x = document.getElementById("navbar-collapsed");
    x.style.top = "3000px";
    document.getElementsByClassName("icons")[0].style.fill = "black";
    document.getElementsByClassName("icons")[1].style.fill = "black";
    document.getElementsByClassName("icons")[2].style.fill = "black";
}
function burgerIcon() {
    document.getElementsByClassName("bar1")[0].classList.toggle("change");
    document.getElementsByClassName("bar2")[0].classList.toggle("change");
    document.getElementsByClassName("bar3")[0].classList.toggle("change");
}
function burgerIcons() {
    document.getElementsByClassName("bar1")[0].classList.remove("change");
    document.getElementsByClassName("bar2")[0].classList.remove("change");
    document.getElementsByClassName("bar3")[0].classList.remove("change");
}

/*
      www.dakitec.de - Cookie Banner
      https://dakitec.de/blog/cookie-banner-selbst-erstellen
      Dieses Skript zeigt den Banner an, wenn er noch nicht bestätigt wurde
    */
      var footerCookie = document.querySelector("#footer-cookie");
      var footerCookieAccept = document.querySelector("#accept");
  
      if (document.cookie.indexOf("dakitecCookieBanner=") == -1) {
        footerCookie.style.display = "block";
      }
  
      footerCookieAccept.onclick = function(e) {
        var cookieDate = new Date();
        cookieDate.setTime(new Date().getTime() + 31104000000);
  
        document.cookie = "dakitecCookieBanner = 1; path=/; secure; expires=" + cookieDate.toUTCString();
  
        footerCookie.style.display = "none";
      };


gsap.registerPlugin(ScrollTrigger);

gsap.to(".icons", {
  scrollTrigger: { 
    trigger: '.footer',
    toggleActions: 'play complet reset reset',
    start: 'top bottom'
  },
    duration: 0.1,
    fill: 'white'
  },);

tl = gsap.timeline({
  scrollTrigger: { 
    trigger: '.ueber-uns',
    toggleActions: 'play none none reverse',
    start: 'top bottom'
  },
  repeat: -1
  },);
  tl.to(".lampe", {
    rotation: -4,
    duration: 1.5,
    transformOrigin: "top center",
    ease: Power3. easeInOut,  
  },);
  tl.to(".lampe", {
    rotation: 4,
    duration: 1.5,
    transformOrigin: "top center",
    ease: Power3. easeInOut,  
  },);

  tl = gsap.timeline({
    scrollTrigger: { 
      trigger: '.ueber-uns-page',
      toggleActions: 'play none none reverse',
      start: 'top bottom'
    },
    repeat: -1
    },);
    tl.to(".lampe", {
      rotation: -4,
      duration: 1.5,
      transformOrigin: "top center",
      ease: Power3. easeInOut,  
    },);
    tl.to(".lampe", {
      rotation: 4,
      duration: 1.5,
      transformOrigin: "top center",
      ease: Power3. easeInOut,  
    },);

  tl = gsap.timeline({
    scrollTrigger: { 
      trigger: '.kontaktformular',
      toggleActions: 'play',
    },
    repeat: -1
    },);
    tl.to(".kk", {
      rotation: 360,
      duration: 25,
      transformOrigin: "center",
      ease: "none"
    },);
    tl = gsap.timeline({
      scrollTrigger: { 
        trigger: '.kontaktformular',
        toggleActions: 'play',
      },
      repeat: -1
      },);
      tl.to(".vwl", {
        rotation: -360,
        duration: 22,
        transformOrigin: "center",
        ease: "none"
      },);




var playBtn = document.getElementById('play'),
  resetBtn = document.getElementById('reset'),
  hearbeat = document.getElementById('heartbeat')
	audios = document.querySelectorAll('audio');
console.log(audios);


playBtn.addEventListener('mouseover', function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  audio.play();
});
}, false);

playBtn.addEventListener('mouseleave', function() {
  heartbeat.pause();
  heartbeat.currentTime = 0;
}, false);

resetBtn.addEventListener('mouseover', function() {
    heartbeat.play();
}, false);

resetBtn.addEventListener('mouseleave', function() {
  heartbeat.pause();
  heartbeat.currentTime = 0;
}, false);