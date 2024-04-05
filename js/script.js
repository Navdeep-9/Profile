

let sections = document.querySelectorAll('section');
let navLinkes = document.querySelectorAll('header nav a');
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');



window.onscroll = () =>{
    sections.forEach(sec =>{

        console.clear();
        let top = window.scrollY;
        // console.log(top);

        let offset = sec.offsetTop - 100;
        // console.log(offset);

        let height = sec.offsetHeight;
        // console.log(height);

        let id = sec.getAttribute('id');


        if(top >= offset && top < offset + height){
            navLinkes.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            })
        }

    })
}

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
    
}


window.onscroll = () =>{
    let header = document.querySelector('header');
    
    header.classList.toggle('sticky',window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

}