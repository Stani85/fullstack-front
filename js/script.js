document.getElementById("form").addEventListener("submit", function(event){
    let nombre = document.getElementById("nombre");
    let apellidos = document.getElementById("apellidos");
    let lableNombre = document.getElementById("lableNombre");
    let lableApellidos = document.getElementById("lableApellidos");
    
    if(nombre.value==null || nombre.value == ''){
        lableNombre.style.color = "red";
        nombre.style.borderBlockColor = "red";
        event.preventDefault();
    }
    if(apellidos.value==null || apellidos.value == ''){
        lableApellidos.style.color = "red";
        apellidos.style.borderBlockColor = "red";
        event.preventDefault();
    }
    console.log("he hecho click");

});

document.getElementById("nombre").addEventListener("change", (event) => {
    let nombre = document.getElementById("nombre");
    let lableNombre = document.getElementById("lableNombre");

    if(nombre.value != ''){
        lableNombre.style.color = "white";
        nombre.style.borderBlockColor = "black";
    }
})

document.getElementById("apellidos").addEventListener("change", (event) => {
    let apellidos = document.getElementById("apellidos");
    let lableApellidos = document.getElementById("lableApellidos");

    if(apellidos.value != ''){
        lableApellidos.style.color = "white";
        apellidos.style.borderBlockColor = "black";
    }
})



