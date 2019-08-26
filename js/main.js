$( document ).ready(function() {
    //supaya nav responsive
    let main_nav=document.getElementById('main-nav');
    let navbar_toggle=document.getElementById('navbar-toggle');
    let navbar = document.getElementById("nav");

    navbar_toggle.addEventListener('click',function(){
        if(this.classList.contains('active')){
            main_nav.style.display="none";
            this.classList.remove('active');
            navbar.className = "navbar";
        }
        else{
            main_nav.style.display="flex";
            this.classList.add('active');
        }
    });
    $( ".nav-links" ).click(function() {
        main_nav.style.display="none";
    });
    var docWidth = document.documentElement.offsetWidth;


    // smooth scrool untuk menu
    $('a[href*="#"]').click(function(event) {
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
            location.hostname == this.hostname
        ) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex', '-1');
                        $target.focus();
                    };
                });
            }
        }
    });
});
