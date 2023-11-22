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

    $("#size").change(function(event){
        console.log(this.value);
        $.post("http://127.0.0.1:5000/checksize",
            {
              size: this.value
            },
            function(data,status){
              $("#response_size").text(data);
              if(data === "No disponible"){
                $("#submit").attr("disabled", "disabled")
              }else{
                $("#submit").removeAttr("disabled");
              }
        });
    });

});
