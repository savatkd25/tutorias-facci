/*const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    tarea: /^[a-zA-ZÀ-ÿ\s]{1,225}$/,
	correcion: /^[a-zA-ZÀ-ÿ\s]{1,225}$/,
    observaciones:/^[a-zA-Z0-9\_\-]{1,100}$/, 

}
const campos = {
	tarea: false,
    correcion: false,
    select: false,
    date: false,
    observaciones: false,
}

const validarFormulario = (e) => {
	switch (e.target.name) {
        case "tema":
            validarCampo(expresiones.tema, e.target, 'tema');
        break;
		case "horas":
			validarCampo(expresiones.horas, e.target, 'horas');
		break;
		case "tareas":
			validarCampo(expresiones.tareas, e.target, 'tareas');
		break;
        case "observaciones":
			validarCampo(expresiones.observaciones, e.target, 'observaciones');
		break;
	}
}

const validarCampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`grupo__${campo}`).classList.remove('content-form-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.add('content-form-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
		document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
		document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
		campos[campo] = false;
	}
} 

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();


});






function validar(){
	const tarea = document.getElementById('tarea').value;
	const correccion = document.getElementById('correccion').value;
	const observaciones = document.getElementById('observaciones').value;
	const fecha = document.getElementById('date').value;
	const select = document.getElementById('select').value;


	const formIsValid ={
		tarea: false,
		correccion: false,
		observaciones: false,
		fecha: false,
		select: false
	}

	tarea.addEventListener('change', (e) => {
    	if(e.target.value.trim().length > 0) formIsValid.tarea = true
	})
	correccion.addEventListener('change', (e) => {
    	if(e.target.value.trim().length > 0) formIsValid.correccion = true
	})
	observaciones.addEventListener('change', (e) => {
    	if(e.target.value.trim().length > 0) formIsValid.observaciones = true
	})
	fecha.addEventListener('change', (e) => {
    	if(e.target.value.trim().length > 0) formIsValid.fecha = true
	})
	select.addEventListener('change', (e) => {
    	if(e.target.value.trim().length > 0) formIsValid.select = true
	})

	const validateForm = (e) => {
		const formValues = Object.values(formIsValid)
		const valid = formValues.findIndex(value => value == false)
		if(valid == -1) form.submit(e)
		else alert('Form invalid')
	}
	
	form.addEventListener('submit', (e) => {
		e.preventDefault()
		validateForm()
	})

}

*/



	const formulario = document.getElementById('formulario');
	const inputs = document.querySelectorAll('#formulario input');

	form.addEventListener('submit', (e) => {
		e.preventDefault()
		validateForm()
	})
