import fs from 'fs'

function pegaArquivo(caminhoDoArquivo) {
    const encoding = 'utf-8'
    fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
        console.log(texto)
    })

}