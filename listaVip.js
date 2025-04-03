function verificarEntrada(){
    let mensagem = document.getElementById("PermissaoDeEntrada")

    nomeConvidado = document.getElementById("nome").value
    convidadosVovo = ["Alexania", "Celso", "Lucas", "Isabella"]
    if(convidadosVovo.includes(nomeConvidado)){
        mensagem.innerText = "Entrada Liberada! Boa Festa!";
        mensagem.style.color = "blue";

    }else{
        mensagem.innerText = "Acesso Negado!";
        mensagem.style.color = "red";  
    }
}


