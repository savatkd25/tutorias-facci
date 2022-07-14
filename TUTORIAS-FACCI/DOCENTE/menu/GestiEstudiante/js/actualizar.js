function update(obj) {
    document.getElementById('updateBlock').style.display = 'block';
    document.getElementById('totalBackground').style.display = 'block';

    var iTr = obj.parentNode.parentNode;

    iTds = iTr.getElementsByTagName('td');

    document.getElementById('cedula2').value = iTds[2].innerText;
    document.getElementById('nombre2').value = iTds[3].innerText;
    document.getElementById('materia2').value = iTds[4].innerText;
    document.getElementById('nivel2').value = iTds[5].innerText;
    document.getElementById('paralelo2').value = iTds[6].innerText;
    document.getElementById('email2').value = iTds[7].innerText;
    document.getElementById('fecha2').value = iTds[8].innerText;
}


function preservation() {
    iTds[2].innerText = document.getElementById('cedula2').value;
    iTds[3].innerText = document.getElementById('nombre2').value;
    iTds[4].innerText = document.getElementById('materia2').value;
    iTds[5].innerText = document.getElementById('nivel2').value;
    iTds[6].innerText = document.getElementById('paralelo2').value;
    iTds[7].innerText = document.getElementById('email2').value;
    iTds[8].innerText = document.getElementById('fecha2').value;
    document.getElementById('updateBlock').style.display = 'none';
    document.getElementById('totalBackground').style.display = 'none';
}

function updateCancel() {
    document.getElementById('updateBlock').style.display = 'none';
    document.getElementById('totalBackground').style.display = 'none';
}
