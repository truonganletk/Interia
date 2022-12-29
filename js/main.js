let items = document.querySelectorAll('.carousel .carousel-item')
// console.log(items);
items.forEach((el) => {
    const minPerSlide = 3
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})

const collapseiconleft = document.getElementById('collapse-icon-left');
collapseiconleft.addEventListener('click',()=>{
    const navleft = document.getElementById('navleft');
    navleft.classList.toggle('navleft-lg');
    if (navleft.classList.contains('navleft-lg')) {
        const navright = document.getElementById('navright');
        navright.classList.remove('navright-lg');
    }
})

const collapseiconright = document.getElementById('collapse-icon-right');
collapseiconright.addEventListener('click',()=>{
    const navright = document.getElementById('navright');
    navright.classList.toggle('navright-lg');
    if (navright.classList.contains('navright-lg')) {
        const navleft = document.getElementById('navleft');
        navleft.classList.remove('navleft-lg');
    }
})

document.addEventListener('scroll',()=>{
    const header = document.getElementById('header');
    if (window.scrollY>134){
        header.classList.add('header-fixed');
    } else {
        header.classList.remove('header-fixed');
    }
})