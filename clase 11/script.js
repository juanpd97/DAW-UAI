var tbodyMostrarPersonajes = document.getElementById('mostrarPersonajes');
function mostrarPersonajes(datosJSON){
    
    var listaPersonajes = datosJSON.results;

    for(var i=0 ; i<listaPersonajes.length ; i++){

        var personaje = listaPersonajes[i];

        tbodyMostrarPersonajes.innerHTML += 
            `
                <tr> 
                <td>${personaje.id}</td>
                <td><img src="${personaje.image}" alt="Foto de Rick Sanchez" style="width: 50px; height: 50px;" /></td>
                <td>${personaje.name}</td>
                <td>${personaje.status}</td>
                <td>${personaje.species}</td>
                <td>${personaje.gender}</td>
                </tr>
            `;

    }
    

}



var btnObtenerTodos = document.getElementById('btnObtenerTodos')
                        .addEventListener('click', function() {
                            fetch('https://rickandmortyapi.com/api/character', {
                                    method: 'GET'
                                }).then(function(respuesta){
                                    return respuesta.json();
                                }).then(function(datosJson){
                                    mostrarPersonajes(datosJson);
                                }).catch(function(error){
                                    console.log(error);
                                });
                        });
                        