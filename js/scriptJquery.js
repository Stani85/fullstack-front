$(function(){
    
    $("#form").submit(function(event){
        const nombre = $("#nombre").val();
        const apellidos = $("#apellidos").val();
        if(nombre === undefined || nombre === null || nombre === ''){
            $("#lableNombre").css("color", "red");
            $("#nombre").css("borderBlockColor", "red");
            event.preventDefault();
        }
        if(apellidos === undefined || apellidos === null || apellidos === ''){
            $("#lableApellidos").css("color", "red");
            $("#apellidos").css("borderBlockColor", "red");
            event.preventDefault();
        }
    });

    $("#nombre").change(function(event){
        const nombre = $("#nombre").val();
        if(nombre != undefined || nombre != null || nombre != ''){
            $("#lableNombre").css("color", "white");
            $("#nombre").css("borderBlockColor", "black");
            event.preventDefault();
        }
    });

    $("#apellidos").change(function(event){
        const apellidos = $("#apellidos").val();
        if(apellidos != undefined && apellidos != null || apellidos != ''){
            $("#lableApellidos").css("color", "white");
            $("#apellidos").css("borderBlockColor", "black");
            event.preventDefault();
        }
    });

});