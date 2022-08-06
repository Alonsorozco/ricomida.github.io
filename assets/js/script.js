$(function(){


// jquery para motrar la alerta para cuando se presion el boton  enviar correo
    $("#enviarCorreo").click(function(){
        alert("El correo fue Enviado Correctamente.."); });

// jquery tootips
        $('[data-toggle="popover"]').popover()


// cambia los titulo de las recetas y preparacion a color rojo
    $("#recetas").on("dblclick",function(){
	    $(".titulo-uno").css("color", "#FF0000")});

    $("#recetasdos").on("dblclick",function(){
            $(".titulo-dos").css("color", "#FF0000")});
    

// jqueri para  desaparecer las card cuando se haga un click en ellas
    $(".card").click(function(){
                $(".card-body").toggle("slow",function(){});


});
});