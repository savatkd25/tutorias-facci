const formulario = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input');

const expresiones = {
    tema: /^[a-zA-ZÀ-ÿ\s]{1,225}$/,
	horas: /^[a-zA-Z0-9\_\-]{4,16}$/, 
	tareas: /^[a-zA-ZÀ-ÿ\s]{1,225}$/, 
    observaciones:/^[a-zA-Z0-9\_\-]{1,100}$/, 

}

const campos = {
	tema: false,
	horas: false,
    tareas: false,
    group: false,
    date: false,
	proxdate: false,
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
		document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
		campos[campo] = true;
	} else {
		document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
		document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
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


$inputs.forEach((input) => {
    input.addEventListener("keyup", validarFormulario);
    input.addEventListener("blur", validarFormulario);
});




$formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const $terminos = document.getElementById("button-send");
    if(campos.tema && campos.horas && campos.tareas && campos.group && campos.date && $terminos.proxdate) {
        // formulario.reset();

        document.getElementById("formulario__mensaje-exito").classList.add("formulario__mensaje-exito-activo");
        setTimeout(() => {
        }, 3000);
    
        setTimeout(() => {
            location.reload();
        }, 5000);

    } else {

    }
});