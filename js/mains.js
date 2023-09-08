let head =document.querySelector('.header');
window.addEventListener('scroll' , () =>{
   if(scrollY > 0){
    head.classList.add('shaow');
   }else{ head.classList.remove('shaow')}
});
let had = document.querySelector('.navb');
let men = document.getElementById('menu');
men.onclick = ()=>{
   had.classList.toggle('navbar')
};
let sr = ScrollReveal ({
   distance: '60px',
   duration:2500,
   delay:400,
   reset:true
});
sr.reveal('.header',{ delay:200 , origin : 'top'});
sr.reveal('.col-text',{ delay:200 , origin : 'top'});
sr.reveal('.amazon .container',{ delay:200 , origin : 'top'});
sr.reveal('.h1',{ delay:200 , origin : 'bottom'});
sr.reveal('.col-space-text',{ delay:200 , origin : 'left'});
sr.reveal('.content',{ delay:200 , origin : 'top'});
// sr.reveal('.space-img',{ delay:100 , origin : 'right'});
sr.reveal('.img-col',{ delay:200 , origin : 'top'});
sr.reveal('.text-col',{ delay:200 , origin : 'bottom'});
sr.reveal('.box',{ delay:200 , origin : 'top'});
sr.reveal('footer .container',{ delay:200 , origin : 'top'});
