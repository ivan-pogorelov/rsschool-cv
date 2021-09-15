const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body');

if (iconMenu) {
    iconMenu.addEventListener("click", function(e) {
        document.body.classList.toggle('_lock');
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}

const menuLinks = document.querySelectorAll('.header__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick);
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

            if (iconMenu.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: 'smooth'
            });
            e.preventDefault();
        }
    }
}

console.log('Вёрстка валидная: +10 баллов');
console.log('Присутствует: aside, main, header, nav, section, footer - +12\nh1 (только один), h2, h3, h6 - +8: Итого +20 баллов');
console.log('Для оформления СV используются css-стили: +10 баллов');
console.log('Контент размещается в блоке, который горизонтально центрируется на странице.\nФоновый цвет, если он есть, тянется во всю ширину страницы: +10 баллов');
console.log('Вёрстка адаптивная: +10 баллов');
console.log('Есть адаптивное бургер-меню, якоря реализованы с плавной прокруткой: +10 баллов');
console.log('На странице СV присутствует изображение автора CV: +10 баллов');
console.log('контакты для связи и перечень навыков оформлены в виде списка: +10 баллов');
console.log('CV содержит контакты для связи, краткую информацию о себе, перечень навыков,\nинформацию об образовании и уровне английского: +10 баллов');
console.log('CV содержит пример моего кода с его подсветкой: +10 баллов');
console.log('CV содержит изображения-ссылки на выполненные мои проекты: +10 баллов');
console.log('CV выполнено на английском языке: +10 баллов');
console.log('Выполнены требования к Pull Request: +10 баллов');
console.log('Дизайн, оформление, качество выполнения CV не ниже чем в примерах CV: +10 баллов');
console.log('Итого: 150 баллов');