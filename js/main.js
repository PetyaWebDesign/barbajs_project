function pageTransition() {
    let tl = gsap.timeline();
    tl.to('ul.transition li', {
        duration: .5,
        scaleY: 1,
        transformOrigin: "bottom left",
        stagger: .2,
    })
    console.log('test11')
    tl.to('ul.transition li', {
        duration: .5,
        scaleY: 0,
        transformOrigin: "bottom left",
        stagger: .1,
        delay: .1
    })
    console.log('test222')
}

function contentAnimation() {
    let tl = gsap.timeline();
    tl.from('.left', {
        duration: 1.5,
        translateY: 50,
        opacity: 0
    })
    tl.to('img', {
            clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)"
        },
        "-=1.5")
    console.log('test333')
}

function delay(n) {
    n = n || 2000;
    return new Promise(done => {
        setTimeout(() => {
            done();
        }, n);
    });

}


// Init barba.js
barba.init({
    sync: true,
    transitions: [{
        async leave(data) {
            const done = this.async();

            pageTransition();
            await delay(1500);
            done();
        },

        async enter(data) {
            contentAnimation();

        },
        async once(data) {
            contentAnimation();
        }
    }]

})

pageTransition();

// Init lightgallery.js
// lightGallery(document.querySelector('.gallery'));