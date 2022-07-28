document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var tema = document.getElementById('tema').value;
    if(tema.length == 0) {
		alert('No has escrito nada en tema');
      return;
    }
    var horas = document.getElementById('horas').value;
    if(horas.length == 0) {
		alert('No has escrito nada en horas');
      return;
    }
    var tareas = document.getElementById('tareas').value;
    if(tareas.length == 0) {
		alert('No has escrito nada en tareas');
      return;
    }
	var select = document.getElementById('select').value;
    if(select.length == 0) {
		alert('el grupo no es valido');
      return;
    }
    var date = document.getElementById('date').value;
    if(date.length == 0) {
		alert('la fecha no es valida');
      return;
    }
	var proxdate = document.getElementById('proxdate').value;
    if(proxdate.length == 0) {
		alert('la proxima fecha no es valida');
      return;
    }
	var observaciones = document.getElementById('observaciones').value;
    if(observaciones.length == 0) {
		alert('No has escrito nada en observaciones');
      return;
    }
  if(!document.querySelector('input[name="tipo"]:checked')) {
    alert('Error, rellena el campo tipo tutoria');
    hasError = true;
    return
    }
  if(!document.querySelector('input[name="tiempo"]:checked')) {
    alert('Error, rellena el campo tiempo tutoria');
    hasError = true;
    return
    }
   
    this.submit();
  }
