let nota1,nota2,nota3;
let dato1,dato2,dato3,media;

dato1=window.prompt("Primer numero?","0");
nota1=parseInt(dato1);
dato2=window.prompt("Segundo numero?","0");
nota2=parseInt(dato2);
dato3=window.prompt("Tercer numero?","0");
nota3=parseInt(dato3);

media=(nota1+nota2+nota3)/3;

if(media<5)
{
    resultat="Suspendido";
}
else{
    resultat="Aprobado";
}
document.write(`<h3>La nota final es ${resultat}</h3>`)