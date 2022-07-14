function examine(obj) {
    document.getElementById('examineBlock').style.display = 'block';
    document.getElementById('totalBackground').style.display = 'block';

    var iTr = obj.parentNode.parentNode;

    var iTds = iTr.getElementsByTagName('td');

    document.getElementById('cedula3').value = iTds[2].innerText;
    document.getElementById('nombre3').value = iTds[3].innerText;
    document.getElementById('materia3').value = iTds[4].innerText;
    document.getElementById('nivel3').value = iTds[5].innerText;
    document.getElementById('paralelo3').value = iTds[6].innerText;
    document.getElementById('email3').value = iTds[7].innerText;
    document.getElementById('fecha3').value = iTds[8].innerText;
}

function examineCancel() {
    document.getElementById('examineBlock').style.display = 'none';
    document.getElementById('totalBackground').style.display = 'none';
}
