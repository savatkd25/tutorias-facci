const formulario = document.getElementById('formulario')
const inputs = document.querySelectorAll('#formulario input')
const button = document.getElementById('button-send')


const tarea = document.getElementById('tarea')
const correccion = document.getElementById('correccion')
const observaciones = document.getElementById('observaciones')
const date = document.getElementById('date')
const select = document.getElementById('select')

const formIsValid ={
	tarea: false,
	correccion: false,
	observaciones: false,
	date: false,
	select: false
}

form.addEventListener('submit', (e) => {
    e.preventDefault()
    validateForm()
})



tarea.addEventListener('change', (e) => {
	console.log(e.target.checked)
    if(e.target.value.trim().length > 0) formIsValid.tarea = true
})



const validateForm = () => {
    const formValues = Object.values(formIsValid)
    const valid = formValues.findIndex(value => value == false)
    if(valid == -1) form.submit()
    else alert('Form invalid')
}
/*correccion.addEventListener('change', (e) => {
	console.log(e.target.checked)
    if(e.target.value.trim().length > 0) formIsValid.correccion = true
})

observaciones.addEventListener('change', (e) => {
	console.log(e.target.checked)
    if(e.target.value.trim().length > 0) formIsValid.observaciones = true
})

date.addEventListener('change', (e) => {
	
    if(e.target.value.trim().length > 0) formIsValid.date = true
})
select.addEventListener('change', (e) => {
    
    if(e.target.value.trim().length > 0) formIsValid.select = true
})*/
