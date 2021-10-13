
var formulario= document.getElementById('formulario');
var respuesta = document.getElementById('respuesta')
formulario.addEventListener('submit',function(e){
    e.preventDefault();
    var datos= new FormData(formulario);
    fetch('http://127.0.0.1:80/Suma/Servicio.php',{
        method: 'POST',
        body: datos
    }).then(res=>res.json())
    .then(data=>{
        if(data.status=='OK'){
            respuesta.innerHTML=`
            <div class="alert alert-success" role="alert">
                            Datos enviados correctamente :)
            </div>
            `
        }else{
            respuesta.innerHTML=`
            <div class="alert alert-danger" role="alert">
                Por favor rellene todos los campos!
            </div>
            `
        }
    });
})