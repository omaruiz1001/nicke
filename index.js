'use strict';

const documentReady = () => {
  const heroTitle = document.querySelector(".herotitle")
  const jirovutonari=document.getElementById("heroButtonYes");
  const jirovuttonmanan=document.getElementById("heroButtonNo");

  const aceptameporfi =()=>{
    alert("🙄 Mas te vale, Sabia que escogerias bien");
    alert("😍 TEEE AMOOOOO MÑNA NOS CASAMOS🤗");
    alert("🤓 PREPARATE😎🥰😘");
    location.href="https://youtube.com/clip/Ugkx-cu9U5i-47R2X7pN8mPy7r7R1LF5U9G3";
  };

  const evitarqueserompamybobo = ()=>{
    jirovuttonmanan.style.position="absolute";
    jirovuttonmanan.style.top = Math.random() * window.innerHeight + "px";
    jirovuttonmanan.style.left = Math.random() * window.innerWidth + "px";
    

  }
   const partner= prompt("❤ Pon Tu nombre bella dama🥰");
   heroTitle.innerHTML += partner + ' ♥?';

  jirovuttonmanan.addEventListener("mouseover",evitarqueserompamybobo);
  jirovutonari.addEventListener("click",aceptameporfi);
};

document.addEventListener('DOMContentLoaded', documentReady); 