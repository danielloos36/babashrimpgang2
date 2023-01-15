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

gsap.from(".hoerproben-child", {
  scrollTrigger: { 
    trigger: '.hoerproben-child',
    toggleActions: 'play complete none reverse',
    start: 'top 70%',
  },
    opacity: 0,
    stagger: 0.2,
  },);

gsap.from(".pressetext p", {
  scrollTrigger: { 
    trigger: '.pressetext p',
    toggleActions: 'play complete none none',
    start: 'top 70%',
  },
    x: '-100%',
    opacity: 0,
    duration: 0.2,
  },);

gsap.from(".livesession iframe", {
  scrollTrigger: { 
    trigger: '.livesession',
    toggleActions: 'play complete none none',
    start: 'top 60%',
  },
    x: '+100%',
    opacity: 0,
    duration: 0.2,
  },);

gsap.from(".konzerttermine-vergangen li", {
  scrollTrigger: { 
    trigger: '.konzerttermine-vergangen',
    toggleActions: 'play complete none none',
    start: 'top 70%',
  },
    opacity: 0,
    ease: 'back',
    stagger: 0.1,
    duration: 1,
  },);

gsap.from(".kontakt-child", {
  scrollTrigger: { 
    trigger: '.kontakt-parent',
    toggleActions: 'play complete none none',
    start: 'top 70%',
  },
    opacity: 0,
    ease: 'back',
    stagger: 0.1,
    duration: 1,
  },);

gsap.to(".icons", {
  scrollTrigger: { 
    trigger: '.footer',
    toggleActions: 'play complete reset reset',
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
  play2Btn = document.getElementById('play-2'),
  play3Btn = document.getElementById('play-3'),
  mofa = document.getElementById('song-mofa')
  zweihundertsechs = document.getElementById('song-206')
  zurAchtziger = document.getElementById('song-zur-achtziger')
	audios = document.getElementsByClassName('audio-1');
console.log(audios);

if($(window).width() > 991)
{
playBtn.addEventListener('mouseover', function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  audio.play();
});
}, false);

playBtn.addEventListener('mouseleave', function() {
  mofa.pause();
  mofa.currentTime = 0;
}, false);

play2Btn.addEventListener('mouseover', function() {
    zweihundertsechs.play();
}, false);

play2Btn.addEventListener('mouseleave', function() {
  zweihundertsechs.pause();
  zweihundertsechs.currentTime = 0;
}, false);

play3Btn.addEventListener('mouseover', function() {
  zurAchtziger.play();
}, false);

play3Btn.addEventListener('mouseleave', function() {
  zurAchtziger.pause();
  zurAchtziger.currentTime = 0;
}, false);
}
else {
playBtn.addEventListener('click', function() {
[].forEach.call(audios, function(audio) {
  // do whatever
  audio.play();
});
}, false);

playBtn.addEventListener('mouseleave', function() {
  mofa.pause();
  mofa.currentTime = 0;
}, false);

play2Btn.addEventListener('click', function() {
    zweihundertsechs.play();
}, false);

play2Btn.addEventListener('mouseleave', function() {
  zweihundertsechs.pause();
  zweihundertsechs.currentTime = 0;
}, false);

play3Btn.addEventListener('click', function() {
  zurAchtziger.play();
}, false);

play3Btn.addEventListener('mouseleave', function() {
  zurAchtziger.pause();
  zurAchtziger.currentTime = 0;
}, false);
}