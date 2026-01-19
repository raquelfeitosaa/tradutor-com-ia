let inputTexto = document.querySelector(".input-texto");
let traducaotext = document.querySelector(".traducao");
let idioma = document.querySelector(".idiomas");


async function btnTraduzir() {

    let endereco = "https://api.mymemory.translated.net/get?q=" + inputTexto.value + "&langpair=pt-br|" + idioma.value;

    let resposta = await fetch(endereco);

    let dados = await resposta.json();

    traducaotext.textContent = dados.responseData.translatedText;  // textContent para inserir texto em elementos HTML 

}

function ouvirVoz() {
    //ferramenta de reconhecimento de voz do google chrome
    let voz = window.webkitSpeechRecognition;
    // deixando ela pronta para uso
    let reconhecimento = new voz();
    // configurando o reconhecimento para português do Brasil
    reconhecimento.lang = "pt-BR";
    // me avise terminar de transcrever o texto 
    reconhecimento.onresult = (evento) => {
        let textotranscrito = evento.results[0][0].transcript;
        inputTexto.textContent = textotranscrito;

        btnTraduzir();
    }

    reconhecimento.start(); // iniciar o reconhecimento de voz
    
}