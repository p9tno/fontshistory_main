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
    animateSpiralSections();
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

function animateSpiralSections() {
    console.log('Скрипт запущен');
    
    const lettersContainer = document.querySelector('.spiral__letters');
    
    if (!lettersContainer) {
        console.error('Контейнер .spiral__letters не найден!');
        return;
    }
    
    const originalText = "Fascinating Trivia About Antique Fonts ・";
    
    // Повторяем 11 раз
    let fullText = '';
    for (let i = 0; i < 11; i++) {
        fullText += originalText + ' ';
    }
    
    // Создаем буквы
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
    
    const letters = document.querySelectorAll('.spiral__letter');
    console.log('Создано букв:', letters.length);
    
    let startTime = Date.now();
    let lastLogTime = startTime;
    
    // Параметры спирали
    const speed = 0.0125;          // угловая скорость вращения (рад/с)
    const direction = -1;       // направление вращения (-1 по часовой)
    const radiusStart = 10;     // начальный радиус в центре (em)
    const radiusGrowth = 3;     // рост радиуса на радиан (шаг спирали)
    const spread = 0.1;       // угловой шаг между буквами (для расчёта общего размера)
    const driftSpeedArc = 1.05;  // скорость движения букв вдоль спирали к центру (em/с) по длине дуги
    const fadeStart = 10;       // радиус, с которого начинается исчезновение (em)
    const fadeEnd = 40;         // радиус, на котором буква полностью исчезает (em)
    
    // Вспомогательные функции для длины дуги спирали Архимеда
    function arcLength(theta) {
        const sqrt = Math.sqrt(theta * theta + 1);
        return radiusGrowth / 2 * (theta * sqrt + Math.log(theta + sqrt));
    }
    
    function thetaFromArcLength(L) {
        // Начальное приближение: для малых theta L ≈ radiusGrowth * theta^2 / 2
        let theta = Math.sqrt(2 * L / radiusGrowth);
        // Уточняем методом Ньютона (5 итераций достаточно)
        for (let iter = 0; iter < 10; iter++) {
            const sqrt = Math.sqrt(theta * theta + 1);
            const f = radiusGrowth / 2 * (theta * sqrt + Math.log(theta + sqrt)) - L;
            const df = radiusGrowth * sqrt; // производная dL/dtheta
            theta -= f / df;
            if (Math.abs(f) < 1e-6) break;
        }
        return theta;
    }
    
    // Вычисляем общую длину дуги для последней буквы при старом распределении
    // чтобы сохранить общий размер спирали
    const totalLetters = letters.length;
    const maxThetaOld = (totalLetters - 1) * spread;
    const totalArcLength = arcLength(maxThetaOld);
    const step = totalArcLength / (totalLetters - 1); // желаемое расстояние по дуге между соседними буквами
    
    // Предвычисляем начальные длины дуг для каждой буквы
    const baseLengths = [];
    for (let i = 0; i < totalLetters; i++) {
        baseLengths.push(i * step);
    }
    
    function animate() {
        const elapsed = (Date.now() - startTime) / 1000;
        const rotationOffset = elapsed * speed * direction;
        
        // Отладочный вывод каждую секунду
        if (Date.now() - lastLogTime > 1000) {
            // console.log('Анимация работает, elapsed:', elapsed, 'rotationOffset:', rotationOffset);
            lastLogTime = Date.now();
        }
        
        letters.forEach((letter, index) => {
            // Текущая длина дуги с учётом дрейфа
            let L = baseLengths[index] - driftSpeedArc * elapsed;
            L = Math.max(L, 0); // не уходим в отрицательную область
            
            // Угол, соответствующий этой длине дуги
            const theta = thetaFromArcLength(L);
            const angle = theta + rotationOffset;
            
            // Радиус
            const radius = radiusStart + theta * radiusGrowth;

            // console.log(radius);
            
            
            // Координаты
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            
            // Поворот буквы по касательной к спирали (поменяли верх/низ)
            const rotation = angle * (180 / Math.PI) + 90;
            
            // Прозрачность: исчезновение только в центре
            let opacity = 1;
            if (L <= 0) {
                opacity = 0;
            } else if (radius < fadeEnd) {
                // Плавное исчезновение между fadeStart и fadeEnd
                opacity = Math.max(0, (radius - fadeStart) / (fadeEnd - fadeStart));
            }
            // На периферии opacity остаётся 1 (исчезновение не нужно)
            
            // Применяем
            letter.style.transform = `translate(calc(-50% + ${x/16}em), calc(-50% + ${y/16}em)) rotate(${rotation}deg)`;
            letter.style.opacity = opacity;
        });
        
        requestAnimationFrame(animate);
    }
    
    animate();
}




