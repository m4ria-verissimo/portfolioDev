
emailjs.init("5EfHEhw_veKyUtXjX");

function abrirmodal(){
  const modal=  document.getElementById("modal-contato").style.display="flex";

  document.getElementById("fecharcntt").onclick=function(){
  document.getElementById("modal-contato").style.display="none";
  }
}
function enviar(){
    
   
   const nome=  document.getElementById("nome").value;
   const email = document.getElementById("email").value;
   const msg = document.getElementById("msg").value;
   
   emailjs.send("service_bblmnym" , "template_6yrg249" ,{
    nome: nome, 
    email: email ,
    mensagem: msg 
    })
    .then(()=> {
        alert("ok");
    });

    

}