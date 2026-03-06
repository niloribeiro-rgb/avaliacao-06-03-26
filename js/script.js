function comprar(){
    alert("Compra feita")
}
function thanks(){
    let nome = document.getElementById('nome').value;

    document.getElementById('ms').innerText = "Obrigado pela reclamação. "+nome+ " Em breve entraremos em contato";
}