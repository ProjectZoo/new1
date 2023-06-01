
function logar(){
    
    let nome = document.getElementById("nome").value 
    let senha = document.getElementById("senha").value 

    let dados = JSON.parse(localStorage.getItem("usuarios"));


    for(let i=0;dados.length> i;i++){
        if (dados[i].nome === nome && dados[i].senha === senha) {
            window.location.href = "index.html";
            return;
        }

    }
}







function teste(){
   
    let item =["zucas"]
    let nomes=[[pedro, zaz, théo]+ ","+ item]

    localStorage.setItem("todos",nomes);

    //Retrieve
    document.getElementById("demo").innerHTML= localStorage.getItem("todos")
}

function retorno(){
    
}
function redirecionar() {
    window.location.href = "index.html";
  }
  
  let novoUsuario = {
    id: Date.now(),
    nome: "nome",
    senha: "senha",
  };
let dados = JSON.parse(localStorage.getItem("usuarios")) || [];
dados.push(novoUsuario);

localStorage.setItem("usuarios", JSON.stringify(dados));



