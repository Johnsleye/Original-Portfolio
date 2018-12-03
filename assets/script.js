window.addEventListener('scroll', checkHeader);

if(scrollPossition > 100){
    document.querrySelector('header').classList.add('sticky');
}else{
    document.querrySelector('header').classList.remove('sticky');
}
