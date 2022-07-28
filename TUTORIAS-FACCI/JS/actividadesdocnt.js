document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var tarea = document.getElementById('tarea').value;
    if(tarea.length == 0) {
      alert('No has escrito nada en tarea');
      return;
    }
    var correccion = document.getElementById('correccion').value;
    if(correccion.length == 0) {
      alert('No has escrito nada en correcciones');
      return;
    }
    var observaciones = document.getElementById('observaciones').value;
    if(observaciones.length == 0) {
      alert('No has escrito nada en observaciones');
      return;
    }
    var date = document.getElementById('date').value;
    if(date.length == 0) {
      alert('La fecha no es válida');
      return;
    }
    var select = document.getElementById('select').value;
    if(select.length == 0) {
      alert('el grupo no es válida');
      return;
    }
    this.submit();
  }


  