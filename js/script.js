document.addEventListener("DOMContentLoaded", function() {
    // Smooth scroll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    // Entrance Animations
    const fadeIn = document.querySelectorAll('.fade-in');
    const fadeLeft = document.querySelectorAll('.fade-left');
    const fadeRight = document.querySelectorAll('.fade-right');

    function checkFade() {  
        fadeIn.forEach(element => { // Fade In
            const position = element.getBoundingClientRect().top;

            if (position < window.innerHeight * 0.75) {
                element.classList.add('appear');
            }
        });

        fadeLeft.forEach(element => { // Fade Left
            const position = element.getBoundingClientRect().top;

            if (position < window.innerHeight * 0.75) {
                element.classList.add('appear');
            }
        });

        fadeRight.forEach(element => { // Fade Right
            const position = element.getBoundingClientRect().top;

            if (position < window.innerHeight * 0.75) {
                element.classList.add('appear');
            }
        });
    }

    checkFade();
    window.addEventListener('scroll', checkFade);

    // Header Scroll
    const headerScroll = document.querySelector('.scroll-down');

    headerScroll.classList.add('appear');
    

    // Logo slider
    var swiper = new Swiper(".mySwiper.logo-slider", {
        slidesPerView: 8,
        spaceBetween: 85,
        loop: true,
        allowTouchMove: true,
        grabCursor: true,
        autoplay: {
            delay: 1500,
        },
    });

    // Testmonial Slider 
    var swiper = new Swiper(".mySwiper.testimonials", {
        slidesPerView: 2,
        spaceBetween: 20,
        loop: true,
        allowTouchMove: true,
        grabCursor: true,
        autoplay: {
            delay: 3000,
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
    });

    // Timezone
    let timezone = document.querySelector(".timezone"),
    icons = document.querySelector(".icons");
    icons.onclick = ()=>{
        timezone.classList.toggle("dark");
    }
    setInterval(()=>{
        let date = new Date(),
        hour = date.getHours(),
        min = date.getMinutes(),
        sec = date.getSeconds();
        let d;
        d = hour < 12 ? "AM" : "PM";
        hour = hour > 12 ? hour - 12 : hour;
        hour = hour == 0 ? hour = 12 : hour; 
        hour = hour < 10 ? "0" + hour : hour;
        min = min < 10 ? "0" + min : min;
        sec = sec < 10 ? "0" + sec : sec;
        document.querySelector(".hour_num").innerText = hour;
        document.querySelector(".min_num").innerText = min;
        document.querySelector(".sec_num").innerText = sec;
        document.querySelector(".am_pm").innerText = d;
    }, 1000);


    // Popup Form
    let pop_quote = document.querySelector(".pop-quote");
    let pop_contact = document.querySelector(".pop-contact");
    let cover = document.querySelector(".cover");
    let pop_open_quote = document.querySelector(".pop-open-quote");
    let pop_open_contact = document.querySelector(".pop-open-contact");
    let pop_close = document.querySelectorAll(".pop-close");

    pop_open_quote.addEventListener('click', function() {
        pop_quote.style.transform = "translate(-50%, -50%)";
        cover.style.display = "block";
    });

    pop_open_contact.addEventListener('click', function() {
        pop_contact.style.transform = "translate(-50%, -50%)";
        cover.style.display = "block";
    });
    
    pop_close.forEach(function(close) {
        close.addEventListener('click', function() {
            pop_quote.style.transform = "translate(-50%, -200%)";
            pop_contact.style.transform = "translate(-50%, -250%)";
            cover.style.display = "none";
        });
    });
});