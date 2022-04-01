$(document).ready(() => {
    $(window).scroll(() => {
        if (this.scrollY > 25) {
            $('header').addClass('sticky');
        } else {
            $('header').removeClass('sticky');
        }
    });
});

function redmore(btn, dot, more, par) {
    var dots = document.getElementById(dot);
    var more = document.getElementById(more);
    var id = document.getElementById(btn);
    var par = document.getElementById(par);

    if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        id.innerHTML = 'Read more';
        more.style.display = 'none';
    } else {
        dots.style.display = 'none';
        id.innerHTML = 'Read less';
        more.style.display = 'inline';
        par.style.height = 'max-content';
    }
}
