// Call asideNav Dashboard
const asideNav = document.getElementById('aside');
const theBody = document.querySelector('body');
const showMenu = document.querySelectorAll('.menu');

showMenu.forEach(button => {
    button.addEventListener('click',(e)=>{
        if(e.target.id == "btn-s-menu"){
            asideNav.classList.add('show-nav');
        }
        else{
            if(e.target.id == "btn-c-menu"){
                asideNav.classList.remove('show-nav');
            }
        }
    })
});

// Show more info about profile
const profileInfo = document.querySelectorAll('.profile');
const moreInfoProf = document.getElementById('show-more-prof');

profileInfo.forEach(element => {
    element.addEventListener('click',(e)=>{
        if(e.target.id == "infoProfile"){
            moreInfoProf.classList.add('more-p-info');
        }
        else{
            if(e.target.id == "close-p-info"){
                moreInfoProf.classList.remove('more-p-info');

            }
        }
    })
});







