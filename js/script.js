const ruleta = document.querySelector('#ruleta');

ruleta.addEventListener('click', girar);
giros = 0;
function girar(){
  if (giros < 20) {
    let rand = Math.random() * 7200;
    calcular(rand);
    giros++;
    var sonido = document.querySelector('#audio');
    sonido.setAttribute('src', 'sonido/ruleta.mp3');
    document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros; 
  }else{
    Swal.fire({
      icon: 'success',
      title: 'VUELVA PRONTO EL JUEGO TERMINO!!',
      confirmButtonColor: '#3085d6',
      confirmButtonText: 'Aceptar',
      allowOutsideClick: false
    }).then((result)=>{
      if (result.value == true) {
        giros = 0;
         document.querySelector('.elije').innerHTML = 'TU PREMIO ES: ';
         document.querySelector('.contador').innerHTML = 'TURNOS: ' + giros;        
      }
    })
  }


function premio(premios){

  document.querySelector('.elije').innerHTML = 'TU PREMIO ES: ' + premios;

}


 function calcular(rand) {

  valor = rand / 360;
  valor = (valor - parseInt(valor.toString().split(".")[0]))* 360;
  ruleta.style.transform = "rotate("+rand+"deg)";

  setTimeout(() => {
  switch (true) {
    case valor > 0 && valor <= 18:
     premio("Siga participando");
     break;
     case valor > 18 && valor <= 54:
     premio("Esfero");
     break;
     case valor > 54 && valor <= 90:
     premio("Tomatodo"); 
     break; 
     case valor > 90 && valor <= 126:
     premio("Gorra");
     break;
     case valor > 126 && valor <= 162:
     premio("Llavero");
     break; 
     case valor > 162 && valor <= 198:
     premio("Siga participando");
     break;
     case valor > 198 && valor <= 234:
     premio("Esfero");
     break;
     case valor > 234 && valor <= 270:
     premio("Tomatodo"); 
     break;
     case valor > 270 && valor <= 306:
     premio("Siga participando"); 
     break;
     case valor > 306 && valor <= 342:
     premio("Mochila"); 
     break;
     case valor > 342 && valor <= 360:
      premio("Siga Participando"); 
      break;
  }

 }, 5800);

}
}