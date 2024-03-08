const tl=gsap.timeline({defaults:{ease: 'power2.out'}});
tl.to(".slider",{y:"-100%",duration:1.3});
tl.to(".intro .hero",{y:"0%",duration:1.3},"-=1");


tl.fromTo(".nav",{opacity:0},{opacity:1,duration:0.90});
