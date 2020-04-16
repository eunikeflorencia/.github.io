function toggleMenu(){
    let menu = document.getElementById('hamburger-menu');
    if(menu.classList.contains('hidden')){
        menu.classList.remove('hidden')
    } else {
        menu.classList.add('hidden')
    }
}

function scrollToLeft(id){
    let list = document.getElementById(id);
    list.scrollLeft -= 100;
}

function scrollToRight(id){
    let list = document.getElementById(id);
    list.scrollLeft += 100;
}