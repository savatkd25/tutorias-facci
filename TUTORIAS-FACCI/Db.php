<?php
$usuario=$_POST['UserName']
$clave=$_POST['Passwod']

//Conexion a DB

$conexion=mysqli_connect("localhos","root","","tutoria");
$consulta="SELEC * FROM usuario WHERE usuario='$usuario' and clave='$clave'";
$resultado=mysqli_query($conexion,$consulta);

$fila=mysqli_num_rows($resultado);

if ($fila>0){
    header("location:../MenuE.html")
}
else {
    echo "Error en la autenticacion";
}
mysqli_free_resul($resultado);
mysqli_close($conexion);