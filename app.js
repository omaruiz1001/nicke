// console.log(undefined);
// console.log(true);
// console.log(25);
// console.log('Omar');

// console.log(2==2);
// console.log(2=='2');
// console.log(2===2);
// console.log(2==='2');
// console.log(18<18);
// console.log(18<=18);
// console.log(17<18);
// console.log(17<=18);
// console.log(18>18);
// console.log(18>=18);
// console.log(17>18);
// console.log(17>=18);

// let edad=26;
// console.log(edad);
// console.log(edad++);
// console.log(edad);
// console.log(++edad);
// console.log(edad);

// console.log(edad);
// console.log(edad--);
// console.log(edad);
// console.log(--edad);
// console.log(edad);

// console.log('5')
// console.log(+'5')
// console.log(-'5')

// console.log("Elliot" +  " leo");
// console.log(8+8+ " Leo");
// console.log("8"+8+" Leo");

// let edad=16;
// console.log("Es mayor de edad?");
// console.log((edad>=18) ? "Eres mayor de edad" : "Eres menor de edad")

// let comidaEstofado= "Chancho";
// console.log(comidaEstofado);
// comidaEstofado="pollo";
// console.log(comidaEstofado);
// alt + 96 = `` 
// let nombre='Omar';
// let apellido='Ruiz';

// console.log(`Nombre:${nombre}, Apellido : ${apellido}`);
// const tabla=2;
// for (let i= 1; i <= 12 ; i++) {
//     console.log(`${tabla} x ${i} = ${tabla * i} `);
    
// }
// let i=1;
// do {
//     console.log(`${tabla} x ${i} = ${tabla * i} `);
//      i++;
// } while (i <= 12);
// const estofados = ["Cocodrilo" , "Atun" ,"Lengua" , "Toro"];
// for (let i in estofados){
//     console.log(`Comidas ${+i + 1 }:${estofados[i]}`);
// }
// const perro = {
//     nombre : "David",
//     edad : 25,
//     raza : "pitbul",
//     color : "humilde",
//     vacunado : true,
//     size : "Grande",
//     ladrar : function(){
//         return "guaf guaf"
//     }
    

// };
// console.log(perro);

// function perro1(nombre,edad,raza,color,ladrar){
// this.nombre=nombre;
// this.edad=edad;
// this.raza=raza;
// this.color=color;
// this.ladrar =function(){
//     return "guaf guaf";
// }

// }
// const perro = new perro1("Omar",25,"pitbul","black",);
// console.log(perro);
// const pepito = new perro1("Carlos",24,"pitbul","black",);
// console.log(pepito);




const numeros = [2,5,8,7,10,1,8,3];
// console.log(numeros.indexOf(10));
// console.log(numeros.indexOf(8));
// console.log(numeros.lastIndexOf(8));
// console.log(numeros.find(element => element > 7 ));
// console.log(numeros.findIndex(element => element > 7));
// console.log(numeros.some(element => element > 7));
// console.log(numeros.some(element => element > 10));
// console.log(numeros.every(element => element > 10));
// console.log(numeros.every(element => element <11));
// console.log(numeros.includes(0));
// console.log(numeros);
// console.log(numeros.join(","));
// console.log(numeros.toString());
// console.log(numeros.sort());
// console.log(numeros.sort((a,b)=> a-b));
// console.log(numeros.reverse());
// console.log(
//     numeros.forEach(element => {
//         console.log(element)
//     })
// );
// console.log(numeros);
// console.log(numeros.map(element => element * 2));
// console.log(numeros.filter(element => element > 5 ));
// console.log(numeros.reduce((valorAnterior,valorActual)=> valorAnterior+valorActual,0));
// console.log(numeros.reduce((valorAnterior,valorActual)=>{
//     console.log(valorAnterior);
//     console.log(valorActual);
//     return(valorAnterior+valorActual);
// },10));
// console.log(numeros);

// function esMayor(edad){
//     let respuesta ="";
//     if(edad>=18){
//         respuesta ="Es mayor";
//     }
//     else {
//         respuesta ="Es menor";
//     }
// return (respuesta);
// }
// const esMayor=function(edad){
//     return (edad>=18 ? "es mayor" : "es menor");
// };
// const esMayor = edad => edad >=18 ? "es mayor" : "es menor";
// console.log(esMayor(20));
// console.log(esMayor(17));
// console.log(window);
// console.log(window.document);
// console.log(alert("Te quiero mucho"));
// console.log(confirm("Quisieras estar conmigo"));
// console.log(prompt("Por que?"));

// const intervalId = setInterval(()=>{
//     console.log("No quiero estar contigo");
// }, 1000);
// console.log(intervalId);
// console.log(setTimeout(()=>{
//     console.log("Matar rechazo");
//     clearInterval(intervalId);
// }, 5000));

// window.onclick = () => {
//     alert("estofado de toro");
// };
// console.log(window);
// const title= document.getElementById("title");
// console.log(title);
// const partner = prompt("dime tu name")
// console.log(title.innerText+= `${partner}?`);
// console.log(mainButton);
// const buttons=document.querySelectorAll("button");
// console.log(buttons);

const mensajeAceptacion = ()=>{
    alert("Ya fuiste ya ,Ahora somos novios ¬¬");

};

// const heroButtonYes=document.getElementById("heroButtonYes");
// heroButtonYes.addEventListener("click",mensajeAceptacion);

// const heroButtonNo=document.getElementById("heroButtonNo");
// heroButtonNo.addEventListener("click",()=>{
//     alert("Piensalo bien chiquibaby");
// });
// heroButtonNo.addEventListener("click",()=>{
//     heroButtonYes.removeEventListener("click",mensajeAceptacion);
//     alert("ya no podras insitir ¡Toxico!");
// });
// const heroTitle=document.querySelector(".herotitle");
// heroTitle.innerHTML += "?";
// const hero = document.querySelector(".hero");
// hero.insertAdjacentHTML('afterend','<h2>bebecitaa</h2>');
    // const heroButtonYes=document.getElementById("heroButtonYes");
    // heroButtonYes.addEventListener("click",()=>{
    //     const heroButtonNo=document.getElementById("heroButtonNo");
    //     heroButtonNo.style.display="none";
    // });
    // const heroButtonNo= document.getElementById("heroButtonNo");
    // heroButtonNo.addEventListener("click", ()=>{
    //     const body=document.querySelector(".body");
    //     body.style.backgroundColor="black";
    // });
    // const themeButton=document.getElementById("themeButton");
    // themeButton.addEventListener("click",()=>{
    //     const body=document.querySelector(".body");
    //     body.classList.add("body--blue");
    // });
    // const removethemeButton=document.getElementById("removethemeButton");
    // removethemeButton.addEventListener("click",()=>{
    //     const body=document.querySelector(".body");
    //     body.classList.remove("body--blue");
    // });
    // const themeToggleButton=document.getElementById("themeToggleButton");
    // themeToggleButton.addEventListener("click",()=>{
    //     const body=document.querySelector(".body");
    //     body.classList.toggle("body--blue");
    // });
    // const heroTitle = document.querySelector(".herotitle");
    // console.log(heroTitle.classList.contains(".herotitle"));
    // console.log(heroTitle.classList.contains(".herotitle-2"));
    // heroTitle.classList.replace("herotitle","herotitle--2");