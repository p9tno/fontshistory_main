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


document.addEventListener('DOMContentLoaded', () => {
    initAnimations();
});

function initAnimations() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    animateFirstScreenSection();
    animateTableContentSection();
    animateAntiqueFontsSection();
    animateDuringSection();
    // animateSpiralSections();
    animateSpiral('#first-spiral');
    // animateSpiral('#third-spiral');
}

function animateFirstScreenSection() {
  
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
            scrub: 3,
            // markers: true
        },
    });

    tl.from(img, { 
        duration: 3, 
        opacity: 0, 
        ease: "power2.out"
    });
    tl.from(portret, { 
        duration: 3, 
        scale: 1.3, 
        opacity: 0, 
        ease: "back.out(1.2)" 
    }, "-=1.5");
    tl.from(pattern, { 
        duration: 3, 
        x: -100, 
        opacity: 0, 
        ease: "power1.out" 
    }, "-=1.5");
    tl.from(autograf, { 
        duration: 3, 
        x: 100, 
        rotation: 10, 
        opacity: 0, 
        ease: "power1.out"
    }, "+=1");
    tl.from(plates, { 
        rotation: 20,
        y: -15,
        opacity: 0, 
        stagger: 0.3, 
        duration: 3,
        ease: "sine.out"
    }, "+=1");
    
}

function animateDuringSection() {
    const section = document.querySelector('.during');
    const title = section.querySelector('.section__title');
    const top = section.querySelector('.section__except');
    const anchore = section.querySelector('.section__anchore');
    const text = section.querySelector('.section__text');
    const images = gsap.utils.toArray('.during__img');

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
            scrub: 2.5,
            // markers: true,
            // repeat: -1,
        },
    });


    tl.from(images, {
        duration: 1,
        scale: 2,             
        opacity: 0,            
        x: (i) => gsap.utils.random(-15, 15),
        y: (i) => gsap.utils.random(-15, 15),
        rotation: (i) => gsap.utils.random(-5, 5),
        stagger: {
            amount: 2,
            from: "random"
        },
        ease: "sine.inOut"
    });

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

function animateSpiral(containerSelector, customOptions = {}) {
    const lettersContainer = document.querySelector(containerSelector);
    if (!lettersContainer) {
        console.error(`Контейнер ${containerSelector} не найден!`);
        return;
    }
    
    // Настройки по умолчанию
    const defaultOptions = {
        originalText: "Fascinating Trivia About Antique Fonts ・",
        repeatCount: 11,
        speed: 0.0125,          // угловая скорость вращения (рад/с)
        direction: -1,          // направление вращения (-1 по часовой)
        radiusStart: 10,        // начальный радиус в центре (em)
        radiusGrowth: 3,        // рост радиуса на радиан (шаг спирали)
        spread: 0.105,          // угловой шаг между буквами (для расчёта общего размера)
        driftSpeedArc: 1.05,    // скорость движения букв вдоль спирали к центру (em/с) по длине дуги
        fadeStart: 10,          // радиус, с которого начинается исчезновение (em)
        fadeEnd: 40             // радиус, на котором буква полностью исчезает (em)
    };
    
    const options = { ...defaultOptions, ...customOptions };

    let fullText = '';
    for (let i = 0; i < options.repeatCount; i++) {
        fullText += options.originalText + ' ';
    }
    
    const symbols = fullText.split('');
    let html = '';
    
    symbols.forEach((char, index) => {
        if (char === ' ') {
            html += `<span class="spiral__letter" data-index="${index}"> </span>`;
        } else {
            html += `<span class="spiral__letter" data-index="${index}">${char}</span>`;
        }
    });
    
    lettersContainer.innerHTML = html;
    
    const letters = document.querySelectorAll(`${containerSelector} .spiral__letter`);
    // console.log(`Создано букв в ${containerSelector}:`, letters.length);
    
    let startTime = Date.now();
    let lastLogTime = startTime;
    
    // Вспомогательные функции для длины дуги спирали Архимеда
    function arcLength(theta) {
        const sqrt = Math.sqrt(theta * theta + 1);
        return options.radiusGrowth / 2 * (theta * sqrt + Math.log(theta + sqrt));
    }
    
    function thetaFromArcLength(L) {
        let theta = Math.sqrt(2 * L / options.radiusGrowth);
        for (let iter = 0; iter < 10; iter++) {
            const sqrt = Math.sqrt(theta * theta + 1);
            const f = options.radiusGrowth / 2 * (theta * sqrt + Math.log(theta + sqrt)) - L;
            const df = options.radiusGrowth * sqrt;
            theta -= f / df;
            if (Math.abs(f) < 1e-6) break;
        }
        return theta;
    }
    
    // Вычисляем общую длину дуги
    const totalLetters = letters.length;
    const maxThetaOld = (totalLetters - 1) * options.spread;
    const totalArcLength = arcLength(maxThetaOld);
    const step = totalArcLength / (totalLetters - 1);
    
    // Предвычисляем начальные длины дуг
    const baseLengths = [];
    for (let i = 0; i < totalLetters; i++) {
        baseLengths.push(i * step);
    }
    
    // Lookup таблица
    const TABLE_SIZE = 1000;
    const thetaTable = new Float64Array(TABLE_SIZE);
    const maxL = totalArcLength;
    for (let i = 0; i < TABLE_SIZE; i++) {
        const L = (i / (TABLE_SIZE - 1)) * maxL;
        thetaTable[i] = thetaFromArcLength(L);
    }
    
    function thetaFromArcLengthFast(L) {
        if (L <= 0) return 0;
        if (L >= maxL) return thetaTable[TABLE_SIZE - 1];
        const index = (L / maxL) * (TABLE_SIZE - 1);
        const i = Math.floor(index);
        const frac = index - i;
        return thetaTable[i] * (1 - frac) + thetaTable[i + 1] * frac;
    }
    
    let frameCount = 0;
    
    function animate() {
        frameCount++;
        const elapsed = (Date.now() - startTime) / 1000;
        const rotationOffset = elapsed * options.speed * options.direction;
    
        if (frameCount % 2 === 0) {
            letters.forEach((letter, index) => {
                let L = baseLengths[index] - options.driftSpeedArc * elapsed;
                L = Math.max(L, 0);
                
                const theta = thetaFromArcLengthFast(L);
                const angle = theta + rotationOffset;
                
                const radius = options.radiusStart + theta * options.radiusGrowth;
                
                const x = Math.cos(angle) * radius;
                const y = Math.sin(angle) * radius;
                
                const rotation = angle * (180 / Math.PI) + 90;
                
                let opacity = 1;
                if (L <= 0) {
                    opacity = 0;
                } else if (radius < options.fadeEnd) {
                    opacity = Math.max(0, (radius - options.fadeStart) / (options.fadeEnd - options.fadeStart));
                }
                
                letter.style.transform = `translate(calc(-50% + ${x/16}em), calc(-50% + ${y/16}em)) rotate(${rotation}deg)`;
                letter.style.opacity = opacity;
            });
        }
        requestAnimationFrame(animate);
    }
    animate();
}




