import * as fs from 'fs';

const textoTeste = 'São geralmente recuperados a partir de um objeto [FileList](https://developer.mozilla.org/pt-BR/docs/Web/API/FileList) que é retornado como resultado da seleção, pelo usuário, de arquivos através do elemento [<input>](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/Input), a partir do objeto [DataTransfer](https://developer.mozilla.org/pt-BR/docs/Web/API/DataTransfer) utilizado em operações de arrastar e soltar, ou a partir da API `mozGetAsFile()` em um [HTMLCanvasElement](https://developer.mozilla.org/pt-BR/docs/Web/API/HTMLCanvasElement). Em Gecko, códigos com privilégiios podem criar objetos File representando qualquer arquivo local sem a intereção do usuário (veja [Implementation notes](https://developer.mozilla.org/pt-BR/docs/Web/API/File#implementation_notes) para mais informações.)'

function extraiLinks(texto) {
    const regex = /\[[^[\]]*?\]\(https?:\/\/[^\s?#.].[^\s]*\)/gm;
    const capturas = texto.matchAll(regex)
    console.log(capturas)

}

extraiLinks(textoTeste)


function trataErro(erro) {

    throw new Error(erro, 'Arquivo não encontrado!')

}

//async/await

async function pegaArquivo(caminhoDoArquivo) {
    try {
        const ecoding = 'utf-8'
        const texto = await fs.promises
            .readFile(caminhoDoArquivo, ecoding)
        console.log(texto)

    } catch (error) {
        console.log(error, 'erro caminho não encontrado!!')
    }

}
 



// sempre quando falamos de promisses, estamos falando de codigo assincrono
//promises com then()
//function pegaArquivo(caminhoDoArquivo) {
//    const encoding = 'utf-8'
//    fs.promises
//        .readFile(caminhoDoArquivo, encoding)
//        .then((texto) => console.log(texto))
//        .catch((erro) => trataErro(erro)) // ou .cath(trataErro)
//}
//
//function pegaArquivo(caminhoDoArquivo) { (versao 5)
//   const encoding = 'utf-8'
//   fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//       if (erro) {
//           trataErro(erro)
//
//       }
//       console.log(texto)
//   })  \(https?:\/\/[^\s?#.]*        \(https?:\/\/[^\s?#.].[^\s]*\)

 

