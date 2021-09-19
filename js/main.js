let btnMenu = document.querySelector('.btnMenu');
let menu = document.querySelector('.listContainer');
let containerMenu = document.querySelector('.menu');
let activador = true;


//Menu de animacion
btnMenu.addEventListener('click', () =>{
	
	document.querySelector('.btnMenu i').classList.toggle('fa-times');

	if(activador){
		menu.style.left = '0';
		menu.style.transition = '0.5s';

		activador = false;
	}else{
		activador = false;

		menu.style.left = '-100%';
		menu.style.transition = '0.5s';

		activador = true;
	}
});


//Clase active
let enlaces = document.querySelectorAll('.lista li a');

enlaces.forEach((element) => {
   
  element.addEventListener('click', (event) => {
   enlaces.forEach((link) => {
     link.classList.remove('active');
   });
    event.target.classList.add('active');

  });

});


//Efecto Scroll
let scrollPrevio = window.pageYOffset;
let home = document.querySelector('.home');

window.onscroll = () => {
	let scrollActual = window.pageYOffset
	//Mostrar y Ocultar Menu

	if(scrollPrevio > scrollActual){
		containerMenu.style.top = '0';
		containerMenu.style.transition = '0.5s';
	}else{
		containerMenu.style.top = '-60px';
		containerMenu.style.transition = '0.5s';
	}
	scrollPrevio = scrollActual;

	//Mostrar y Ocultar Estilos
	let arriba = window.pageYOffset;

	if(arriba <= 600){
		containerMenu.style.borderBottom = 'none'
		home.style.right = '-100%';
	}else{
		containerMenu.style.borderBottom = '3px solid #e40017'
		home.style.right = '20px';
		home.style.transition = '0.5s';
	}
}

home.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

let abajo = document.querySelector('#abajo');

abajo.addEventListener('click', () => {
  document.body.scrollTop = 600;
  document.documentElement.scrollTop = 600;
});