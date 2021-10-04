function temaSeleccionado(){

    var articles = document.getElementsByTagName('article');
    console.log(articles)

    for(i=0; i<articles.length; i++){
           articles[i].style.display='none';
    }
    
    var valor = document.getElementById('temaCarta').value;
    /*console.log(valor);*/

    document.getElementById(valor).style.display = 'flex';
    console.log(valor);
}


function marcos(nombreFoto, nombreFotoUso){
    var fondoMarco
    fondoMarco= "url('media/marcos/"+nombreFoto+".png')";
    
    document.getElementById('marcoRes').style.background= fondoMarco;
    document.getElementById('marcoRes').style.backgroundPosition = 'center';
    document.getElementById('marcoRes').style.backgroundRepeat = 'no-repeat';
    document.getElementById('marcoRes').style.backgroundSize = 'cover';

    console.log(fondoMarco);
    console.log(nombreFotoUso);


};
function fondosNavidad(nombreFoto, nombreFotoUso){
    var fondoBack;
    fondoBack= "url('media/fondos/navidad/"+nombreFoto+".jpg')";
    
    document.getElementById('img-fondo').style.background= fondoBack;
    document.getElementById('img-fondo').style.backgroundPosition = 'center';
    document.getElementById('img-fondo').style.backgroundRepeat = 'no-repeat';
    document.getElementById('img-fondo').style.backgroundSize = 'contain';

    console.log(fondoBack);
    console.log(nombreFotoUso);


};
function fondosCumple(nombreFoto, nombreFotoUso){
    var fondoBack;
    fondoBack= "url('media/fondos/cumpleaños/"+nombreFoto+"')";
    
    document.getElementById('img-fondo').style.background= fondoBack;
    document.getElementById('img-fondo').style.backgroundPosition = 'center';
    document.getElementById('img-fondo').style.backgroundRepeat = 'no-repeat';
    document.getElementById('img-fondo').style.backgroundSize = 'contain';

    console.log(fondoBack);
    console.log(nombreFotoUso);


};
function fondosMotivacion(nombreFoto, nombreFotoUso){
    var fondoBack;
    fondoBack= "url('media/fondos/motivacion/"+nombreFoto+".jpg')";
    
    document.getElementById('img-fondo').style.background= fondoBack;
    document.getElementById('img-fondo').style.backgroundPosition = 'center';
    document.getElementById('img-fondo').style.backgroundRepeat = 'no-repeat';
    document.getElementById('img-fondo').style.backgroundSize = 'contain';

    console.log(fondoBack);
    console.log(nombreFotoUso);


};


document.getElementById('seleccionColor').addEventListener('change', function(){colorAdd()});

function colorAdd(){
    var colorRes = document.getElementById('seleccionColor').value;
    document.getElementById('fondo').style.backgroundColor = colorRes;
    document.getElementById('fondo').style.border ='none';
};

document.getElementById('nombreResultado').addEventListener('keyup', function(){textoNombre()})
var textoNombre = function(){
    document.getElementById('nombreR').innerHTML = document.getElementById('nombreResultado').value;
    
};

document.getElementById('tituloResultado').addEventListener('keyup', function(){textoTitulo()})
var textoTitulo = function(){
    document.getElementById('titulo').innerHTML = document.getElementById('tituloResultado').value;
    
};

document.getElementById('mensajeResultado').addEventListener('keyup', function(){textoMensaje()})
var textoMensaje = function(){
    document.getElementById('mensajeR').innerHTML = document.getElementById('mensajeResultado').value;
    
};


document.getElementById('colorTitulo').addEventListener('change', function(){colorAddTitulo()});

function colorAddTitulo(){
    var color = document.getElementById('colorTitulo').value;
    document.getElementById('titulo').style.color = color;
};

document.getElementById('colorNombre').addEventListener('change', function(){colorAddNombre()});

function colorAddNombre(){
    var color = document.getElementById('colorNombre').value;
    document.getElementById('nombreR').style.color = color;
};

document.getElementById('colorMensaje').addEventListener('change', function(){colorAddMensaje()});

function colorAddMensaje(){
    var color = document.getElementById('colorMensaje').value;
    document.getElementById('mensajeR').style.color = color;
};



///MOSTRAR TARJETA
var colorMensaje = document.getElementById('colorMensaje').value;
document.getElementById('mostrar').addEventListener('click', function(){mostrarTarjeta()});
var mostrarTarjeta = function(){
    var tar = document.getElementById('carta').innerHTML;
    sessionStorage.setItem('carta', tar);
    
    window.open('nodo.html','Tarjeta',"width=500,height=800,scrollbars=NO");
}