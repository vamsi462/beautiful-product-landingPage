function imgSlider(anything){
    document.querySelector('.pepsi').src= anything;
}

function changeBgColor(color){
    const section = document.querySelector('.sec')
    section.style.background = color;
}

function toggleMenu(){
    const toggleMenu = document.querySelector('.toggleMenu')
    const navigation = document.querySelector('.navigation')
    toggleMenu.classList.toggle('active')
    navigation.classList.toggle('active')
}