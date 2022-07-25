const form = document.getElementById('formulario')
const submit = document.getElementById('button-send')


const tarea = document.getElementById('tarea')
const correccion = document.getElementById('correccion')
const observaciones = document.getElementById('observaciones')
const fecha = document.getElementById('date')
const select = document.getElementById('select')


form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateForm()
})

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
correcion.addEventListener('change', (e) => {
    if(e.target.value.trim().length > 0) formIsValid.correcion = true
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

const validateForm = () => {
    const formValues = Object.values(formIsValid)
    const valid = formValues.findIndex(value => value == false)
    if(valid == -1) form.submit()
    else alert('Form invalid')
}
