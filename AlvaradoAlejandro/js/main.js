 /* let num; // declaraccion
        num = 0; // igualacion

        let string = "Hola Mundo";
        let char = 'c';
        let bool = false;
        let float = 0.2;
        console.log(string);
        string = "Adios";
        console.log(string); // muestra en consola la variable

        //OPERADORES
        num = num + 1; //  sumas 1 
        num = num - 2; //  = -1
        num = num * 5 // = - 5
        num = num / 5 // =  -1
        //Mandar a la consola
        console.log(num);

        //CONCATEACION
        string = "Hola";
        let miNombre = "Alex";
        string = string + " " + miNombre;//El espacio se pone con las comillas y el espacio
        console.log(string);

        let num1, num2, num3;
        num1 = 5
        num2 = 15
        num3 = -8
        console.log(num1 === num2)
        console.log(num3 >= num2)
        console.log(num >= num3)*/
/*		//EJERCICIO 1
		let string = "Hello World!"; 
		console.log(string);
		 alert(string);
		//EJERCICIO2
		let num1 = 5;
		let num2 = 10;
		console.log(num1);
		console.log(num2);
		mas = num1 + num2;
		resta = num1 - num2;
		multiplicar = num1 * num2;
		dividir = num1 / num2;
		console.log(mas);
		console.log(resta);
		console.log(multiplicar);
		console.log(dividir);
		//EJERCICIO 3
		let num3 = prompt ("Elige un numero");
		let num4 = prompt ("Elige otro numero");
        num3 = parseFloat(num3);
        num4 = parseFloat(num4);

        parseFloat(num4);
		mas = num3 + num4;
		resta = num3 - num4;
		multiplicar = num3 * num4;
		dividir = num3 / num4;
		console.log(mas);
		console.log(resta);
		console.log(multiplicar);
		console.log(dividir);       
        //EJERCICIO 4
        let num5 = prompt ("Elige un numero");
        let num6 = prompt ("Elige otro numero");
        let num7 = prompt ("Elige el tercer numero");
        num5 = parseFloat(num5)
        num7 = parseFloat(num7)
        num6 = parseFloat(num6)
		
        if (num5>num6&&num5>num7) 
        {
            console.log(num5);
        }
        else if (num6>num5&&num6>num7)
        {
            console.log(num6);
        }
        else 
        {
            console.log(num7);
        }

        //EJERCICIO 5
        let num8 = prompt ("Elige un numero");
        let num9 = prompt ("Elige otro numero");
        let num10 = prompt ("Elige el tercer numero");
        num8 = parseFloat(num8);
        num10 = parseFloat(num10);
        num9 = parseFloat(num9);
        let aux;
		
        if (num8>num9&&num8>num10) 
        {
            console.log(num8);
            aux = num8;
        }
        else if (num9>num8&&num9>num10)
        {
            console.log(num9);
            aux = num9;
        }
        else 
        {
            console.log(num10);
            aux = num10;
        }
        if (aux%2 == 0)
        {
            console.log("Es par");
        }
        else
        {
            console.log("Es impar");
        }

        //EJERCICIO 6
        let aux = prompt ("¿Que topping coges?");
        let oreo = 1+0.75, fruta = 1+1.25, virutas = 1+ 0.5,brownie = 1+2;
        let sin = 1

        if ( aux == "oreo"){
            console.log(oreo);
        }
        else if (aux == "fruta") {
            console.log(fruta);
        }
        else if (aux == "virutas") {
            console.log(virutas);
        }
        else if (aux == "brownie") {
            console.log(brownie);
        }
        else {
            console.log(sin)
        }

    //EJERCICIO 7
        for (let i = 0; i < 1001; i++){
            console.log("numero de vueltas" + (i));
        }
       
    //EJERCICIO 8
    let aux = prompt ("¿Qué tabla quieres?");
    for ( let num1 = 0; num1 < 13; num1++){
        console.log(aux+ "x"+num1+"="+num1*aux)
    }
 
    //EJERCICIO 9
    let aux
    for (let i = 0; i < 101; i++)
    {
        aux=i
            if (aux%2 === 0)
            {
                console.log(i)
            }
    }
*/   
   //EJERCICIO 10
let texto=prompt("Pon una frase")
if(!texto){
    while(texto = ""){
        texto=prompt("Pon una frase")
    }
} 
let textonuevo = "";
let numChar=texto.length;
let i = 0
console.log("Numero de caracteres:" + " " + numChar)
for(i=0; i<numChar; i++){
    if(texto[i]=='a'){
        textonuevo+='4';
    }
    else if(texto[i]=='e'){
        textonuevo+='3';
    }
    else if(texto[i]=='i'){
        textonuevo+='1';
    }
    else if(texto[i]=='o'){
        textonuevo+='0';
    }
    else{ textonuevo+= texto[i]}
}

console.log("Texto original:" +" "  + texto);
console.log("Texto nuevo:"+ " " + textonuevo);


/*
//EJERCICIO 11
let aux
for (let i=0; i < 501; i++)
{
    aux=i
    if (aux%2=== 1)
    {
        document.write(i)
    }
}
*/