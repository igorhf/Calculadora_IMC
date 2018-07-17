$(function(){

    $('#button').click(function(){

	    var altura = $('#altura').val();
	    var peso = $('#peso').val();
        
        altura=altura.replace(',','.');
        peso=peso.replace(',','.');

	    var imc = peso / (altura*altura);

	    if (imc < 15){
	    	var status = "Extremamente abaixo do peso";
	    }else if(imc >= 15 && imc<16){
	    	var status = "Gravimente abaixo do peso";
	    }else if(imc >=16 && imc<18.5){
	    	var status ="Abaixo do peso";
	    }else if(imc >=18.5 && imc<25){
	    	var status="Faixa de peso ideal";
	    }else if(imc >=25 && imc<30){
	    	var status="Sobrepeso"
	    }else if(imc >=30 && imc<35){
	    	var status="Obesidade Grau 1";
	    }else if(imc >=35 && imc<40){
	    	var status="Obesidade Grau 2 (Grave)";
	    }else if(imc >=40){
	    	var status="Obesidade Grau 3 (Mórbida)";
	    }

	    $('#resultado').html("O seu IMC é : "+imc+" seu status é: "+status);
   
    });

});