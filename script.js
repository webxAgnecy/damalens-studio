const navbar = document.getElementById('navbar');
window.onscroll= function () {
    scrolllFunction()
}

function scrolllFunction() {
    if (document.body.scrollTop>20 || document.body.scrollTop<20) {
        navbar.classList.add('active')
    }else{
        navbar.classList.remove('active')

    }
    
}

const scrollRevealOption={
    distance:"50px",
    origin:"bottom",
    duration:1000
}
const scrollRevealtransparent={
    distance:"50px",
    opacity: 0.2,
    duration:1000
}

ScrollReveal().reveal(".header h2",scrollRevealOption)
ScrollReveal().reveal(".header h1",{...scrollRevealOption,delay:500})
ScrollReveal().reveal(".header h3",{...scrollRevealOption,delay:1000})
ScrollReveal().reveal(".header .card-tags",{...scrollRevealtransparent,delay:1000})
ScrollReveal().reveal("section h1",scrollRevealOption)
ScrollReveal().reveal("section h2",{...scrollRevealOption,delay:500})
ScrollReveal().reveal("section .item",{...scrollRevealOption,delay:1000})
ScrollReveal().reveal("section .row",{...scrollRevealOption,delay:2000})
$(function () {
	$('.popup-modal').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#username',
		modal: true
	});
	$(document).on('click', '.popup-modal-dismiss', function (e) {
		e.preventDefault();
		$.magnificPopup.close();
	});
});