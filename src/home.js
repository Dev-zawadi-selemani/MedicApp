// NavBar homePage
const navJs = document.getElementById('temp-menu');
const showMenuJs = document.getElementById('show-menu-js');
const closeMenuJs = document.getElementById('close-menu-js');
showMenuJs.addEventListener('click',()=>{
    navJs.classList.add('show-menu-nav');
    showMenuJs.style.display = 'none';
    navJs.style.transition = "1s";
})
closeMenuJs.addEventListener('click',()=>{
    navJs.classList.remove('show-menu-nav');
    showMenuJs.style.display = 'block';
})

// hero typed effect
const typed = document.querySelector('.typed');
if(typed){
    const newLocal = 'data-typed-items';
    let typed_strings = typed.getAttribute(newLocal);
    typed_strings = typed_strings.split(',');
    let newTyped = new Typed('.typed', {
        strings : typed_strings,
        loop : true,
        typeSpeed : 100,
        backSpeed : 100,
        backDelay : 2000
    })
}