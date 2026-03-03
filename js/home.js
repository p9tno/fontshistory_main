var app = {
    pageScroll: '',
    lgWidth: 1200,
    mdWidth: 992,
    smWidth: 768,
    resized: false,
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    touchDevice: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod|Android|BlackBerry|Opera Mini|IEMobile/i);
    },
};

function isLgWidth() {
    return $(window).width() >= app.lgWidth;
} // >= 1200
function isMdWidth() {
    return $(window).width() >= app.mdWidth && $(window).width() < app.lgWidth;
} //  >= 992 && < 1200
function isSmWidth() {
    return $(window).width() >= app.smWidth && $(window).width() < app.mdWidth;
} // >= 768 && < 992
function isXsWidth() {
    return $(window).width() < app.smWidth;
} // < 768
function isIOS() {
    return app.iOS();
} // for iPhone iPad iPod
function isTouch() {
    return app.touchDevice();
} // for touch device

// document.addEventListener('DOMContentLoaded', () => {
// });
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

animateFirstScreenSection();
animateTableContentSection();
animateAntiqueFontsSection();
animateDuringSection();

function animateFirstScreenSection() {
    let tl;

    const points = gsap.utils.toArray('.fScreen__point');
    const random = gsap.utils.random([0, 1], true);
    const randomInterval = gsap.utils.random(4, 5, true);

    const pageTitle = document.querySelector('.fScreen .section__title span');
    const titleChars = getLetterInWrapp(pageTitle);

    const toptl = gsap.timeline({ duration: 2 });
    toptl.from(titleChars, { x: 10, y: 10, opacity: 0, stagger: 0.1 });
    toptl.from('.fScreen .before__line', { width: 0 });
    toptl.from('.fScreen .after__line', { width: 0 });
    toptl.from('.fScreen .section__sub', { opacity: 0 });
    toptl.from('.fScreen__img', { y: 100, opacity: 0 });
    toptl.from('.fScreen__map', { opacity: 0 });
    toptl.from('.fScreen__bg', { opacity: 0 });
    toptl.from('.header__content > div', { y: -100, opacity: 0, stagger: 0.2 });

    points.forEach((point) => {
        const active = random() === 1 ? 'active' : '';
        if (active) {
            point.classList.add(active);
        }

        tl = gsap.timeline({
            duration: randomInterval(),
            repeat: -1,
            onRepeat: () => {
                cyclePoint();
            },
        });

        function cyclePoint() {
            const active = random() === 1 ? 'active' : '';
            point.classList.remove('active');
            if (active) {
                point.classList.add(active);
            }
        }
    });
}

function animateTableContentSection() {
    const section = document.querySelector('.tableContent');
    const rows = gsap.utils.toArray('.tableContent__row');

    // const toptl = gsap.timeline({ duration: 2 });
    const title = section.querySelector('.section__title');
    const titleChars = getLetterInWrapp(title);

    gsap.from(titleChars, {
        x: 0,
        y: 50,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
            trigger: title,
            scrub: 1,
            start: 'top 100%',
            end: 'top 50%',
        },
    });

    rows.forEach((point) => {
        gsap.from(point, {
            opacity: 0,
            y: 50,
            // duration: 1,
            scrollTrigger: {
                trigger: point,
                // pin: true,
                start: 'top 100%',
                end: 'top 70%',
                // markers: true,
                scrub: 1,
            },
        });
    });
}

function animateAntiqueFontsSection() {
    const section = document.querySelector('.antiqueFonts');

    // const toptl = gsap.timeline({ duration: 2 });
    const title = section.querySelector('.section__title');
    const top = section.querySelector('.section__except');
    const anchore = section.querySelector('.section__anchore');
    const text = section.querySelector('.section__text');
    const img = section.querySelector('.antiqueFonts__img');
    const pattern = section.querySelector('.antiqueFonts__pattern');
    const portret = section.querySelector('.antiqueFonts__portret');
    const autograf = section.querySelector('.antiqueFonts__autograf');
    const plates = gsap.utils.toArray('.antiqueFonts__plate');

    const titleChars = getLetterInWrapp(title);

    gsap.from(titleChars, {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
            trigger: title,
            scrub: 1,
            start: 'top 80%',
            end: 'top 30%',
        },
    });

    gsap.from(top, {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
            trigger: top,
            scrub: 1,
            start: 'top 80%',
            end: 'top 30%',
        },
    });

    gsap.from(anchore, {
        y: 50,
        x: -50,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
            trigger: anchore,
            scrub: 1,
            start: 'top 80%',
            end: 'top 30%',
        },
    });

    gsap.from(text, {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
            trigger: text,
            scrub: 1,
            start: 'top 80%',
            end: 'top 30%',
        },
    });

    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1,
        },
    });

    // add animations and labels to the timeline
    tl.from(img, { duration: 3, opacity: 0 })
        .from(portret, { duration: 3, scale: 1.3, opacity: 0 })
        .from(pattern, { duration: 3, x: -100, opacity: 0 })
        .from(autograf, { duration: 3, x: 100, rotation: 10, opacity: 0 })
        .from(plates, { rotation: 20, y: -20, opacity: 0, stagger: 0.2 });
}

function animateDuringSection() {
    const section = document.querySelector('.during');
    const title = section.querySelector('.section__title');
    const top = section.querySelector('.section__except');
    const anchore = section.querySelector('.section__anchore');
    const text = section.querySelector('.section__text');
    const img = gsap.utils.toArray('.during__img');

    const titleChars = getLetterInWrapp(title);

    gsap.from(titleChars, {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
            trigger: title,
            scrub: 1,
            start: 'top 80%',
            end: 'top 30%',
        },
    });

    gsap.from(top, {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
            trigger: top,
            scrub: 1,
            start: 'top 80%',
            end: 'top 30%',
        },
    });

    gsap.from(anchore, {
        y: 50,
        x: -50,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
            trigger: anchore,
            scrub: 1,
            start: 'top 80%',
            end: 'top 30%',
        },
    });

    gsap.from(text, {
        y: 50,
        opacity: 0,
        stagger: 0.1,
        scrollTrigger: {
            trigger: text,
            scrub: 1,
            start: 'top 80%',
            end: 'top 30%',
        },
    });
    let tl = gsap.timeline({
        scrollTrigger: {
            trigger: section,
            start: 'top 20%',
            end: 'top -20%',
            scrub: 1,
            // markers: true,
        },
    });

    const random = gsap.utils.random([-10, 10], true);

    tl.from(img, { duration: 3, scale: 2, opacity: 0, stagger: 0.3, x: random(), y: random(), rotation: random() });
}

function getLetterInWrapp(title) {
    let html = '';
    let isTag = false;
    const text = title.innerHTML;
    const clean = text
        .replace(/^\s\s*/, '')
        .replace(/\s\s*$/, '')
        .replace(/(\r\n|\n|\r)/gm, '')
        .replace('&nbsp;', '');

    const symbols = clean.split('');
    // console.log(text);
    // console.log('clean', clean);

    symbols.forEach((char) => {
        if (char === '<') {
            isTag = true;
        }
        if (isTag || char === ' ') {
            html += char;
        } else {
            html += '<span class="letter">' + char + '</span>';
        }
        if (char === '>') {
            isTag = false;
        }
    });

    title.innerHTML = html;
    return title.querySelectorAll('.letter');
}
