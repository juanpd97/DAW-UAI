var tbodyMostrarPersonajes = document.getElementById('mostrarPersonajes');

function mostrarPersonajes(listaPersonajes){
    
    var htmlListaPjs = '';
    for(var i=0 ; i<listaPersonajes.length ; i++){

        
        var personaje = listaPersonajes[i];

        htmlListaPjs += 
            `
                <tr> 
                <td>${personaje.id}</td>
                <td><img src="${personaje.image}"/></td>
                <td>${personaje.name}</td>
                <td>${personaje.status}</td>
                <td>${personaje.species}</td>
                <td>${personaje.gender}</td>
                </tr>
            `;}

        tbodyMostrarPersonajes.innerHTML= htmlListaPjs;

}


var btnObtenerTodos = document.getElementById('btnObtenerTodos')
                        .addEventListener('click', function() {
                            fetch('https://rickandmortyapi.com/api/character', {
                                    method: 'GET'
                                }).then(function(respuesta){
                                    return respuesta.json();
                                }).then(function(datosJson){
                                    mostrarPersonajes(datosJson.results);
                                }).catch(function(error){
                                    console.log(error);
                                });
                        });
                        

var formFiltrarPersonajes = document.getElementById('formFiltrarPersonajes').addEventListener('submit',
    function(e){//?name=rick&status=alive
        e.preventDefault();

        var parametrosConsulta = '';
        boolNombre = false;
        boolStatus = false;
        boolSpecies = false;
        boolType = false;
        boolGender = false;

        if(document.getElementById('name').value != '' ){
            parametrosConsulta += ( 'name' + '=' + document.getElementById('name').value )
            boolNombre = true;
        }

        if(  document.getElementById('status').value != ''){
            if(boolNombre){
                parametrosConsulta += '&';
            }
            parametrosConsulta += ( 'status' + '=' + document.getElementById('status').value )
            boolStatus = true;
        }

        if(document.getElementById('species').value != ''){
            if(boolStatus || boolNombre){
                parametrosConsulta += '&';
            }
            parametrosConsulta += ( 'species' + '=' + document.getElementById('species').value )
            boolSpecies = true;
        }

        if(document.getElementById('type').value != ''){
            if(boolSpecies || boolStatus || boolNombre){
                parametrosConsulta += '&';
            }
            parametrosConsulta += ( 'type' + '=' + document.getElementById('type').value )
            boolType = true;
        }

        if(document.getElementById('gender').value != ''){
            if(boolSpecies || boolStatus || boolNombre ||boolType){
                parametrosConsulta += '&';                
            }
            parametrosConsulta += ( 'gender' + '=' + document.getElementById('gender').value )
        }

        if(parametrosConsulta != ''){
            buscarPersonajesFiltrados('?' + parametrosConsulta);
        }// else
        //alert('error');
    }
)

function buscarPersonajesFiltrados(parametrosConsulta){
        fetch('https://rickandmortyapi.com/api/character/'+ parametrosConsulta, {
            method: 'GET'
        }).then(function(promise){
            return promise.json();
        }).then(function(personajes){
            mostrarPersonajes(personajes.results);
        }).catch(function(error){
            alert('error, personaje no encontrado');
        })
}