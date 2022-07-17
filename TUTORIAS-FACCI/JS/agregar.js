function add() {
    document.getElementById('addBlock').style.display = 'block';
    document.getElementById('totalBackground').style.display = 'block';
}


function sumbit() {
    
    document.getElementById('addBlock').style.display = 'none';
    document.getElementById('totalBackground').style.display = 'none';

    
    var iTable = document.getElementById('myTable');
    var cedula = document.getElementById('cedula1').value;
    var nombre = document.getElementById('nombre1').value;
    var materia = document.getElementById('materia1').value;
    var nivel = document.getElementById('nivel1').value;
    var paralelo = document.getElementById('paralelo1').value;
    var email = document.getElementById('email1').value;
    var fecha = document.getElementById('fecha1').value;
    var nums = iTable.rows.length;
    var iTr = document.createElement('tr');

    
    if (nums % 2 != 0)
    {
        iTr.className = 'mainTbodyTr1';
    }
    else {
        iTr.className = 'mainTbodyTr2';
    }

    
    iTable.appendChild(iTr);

    
    var sel = document.createElement('input');
    sel.setAttribute('type','checkbox');
    sel.setAttribute('name','item');

    
    var iTd1 = document.createElement('td');
    iTd1.className = "col1";
    iTd1.appendChild(sel);
    var iTd2 = document.createElement('td');
    iTd2.className = "col2";
    iTd2.appendChild(document.createTextNode(nums));
    var iTd3 = document.createElement('td');
    iTd3.className = "col3";
    iTd3.appendChild(document.createTextNode(cedula));
    var iTd4 = document.createElement('td');
    iTd4.className = "col4";
    iTd4.appendChild(document.createTextNode(nombre));
    var iTd5 = document.createElement('td');
    iTd5.className = "col5";
    iTd5.appendChild(document.createTextNode(materia));
    var iTd6 = document.createElement('td');
    iTd6.className = "col6";
    iTd6.appendChild(document.createTextNode(nivel));
    var iTd7 = document.createElement('td');
    iTd7.className = "col7";
    iTd7.appendChild(document.createTextNode(paralelo));
    var iTd8 = document.createElement('td');
    iTd8.className = "col8";
    iTd8.appendChild(document.createTextNode(email));
    var iTd9 = document.createElement('td');
    iTd9.className = "col9";
    iTd9.appendChild(document.createTextNode(fecha));
    var iTd10 = document.createElement('td');
    iTd10.className = "col10";
    var examine = document.createElement('input');
    examine.id = 'examine';
    examine.setAttribute('type','button');
    examine.setAttribute('value','Ver /');
    examine.setAttribute('onclick','examine(this)');
    var update = document.createElement('input');
    update.id = 'update';
    update.setAttribute('type','button');
    update.setAttribute('value',' Editar');
    update.setAttribute('onclick','update(this)');
    iTd10.appendChild(examine);
    iTd10.appendChild(update);

    
    iTr.appendChild(iTd1);
    iTr.appendChild(iTd2);
    iTr.appendChild(iTd3);
    iTr.appendChild(iTd4);
    iTr.appendChild(iTd5);
    iTr.appendChild(iTd6);
    iTr.appendChild(iTd7);
    iTr.appendChild(iTd8);
    iTr.appendChild(iTd9);
    iTr.appendChild(iTd10);

    
    document.getElementById('cedula1').value = null;
    document.getElementById('nombre1').value = null;
    document.getElementById('materia1').value = null;
    document.getElementById('nivel1').value = null;
    document.getElementById('paralelo1').value = null;
    document.getElementById('email1').value = null;
    document.getElementById('fecha1').value = null;

    document.getElementById('nums').innerText = nums;

    var pageNum = document.getElementById('pageNum').innerText;
    pageNum = parseInt(pageNum);
    for (var i=10*pageNum+1; i<=nums; i++) {
        iTable.rows[i].style.display = 'none';
    }
}


function addCancel() {
    document.getElementById('addBlock').style.display = 'none';
    document.getElementById('totalBackground').style.display = 'none';
}

