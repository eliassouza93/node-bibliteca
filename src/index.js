import fs from 'fs'

 
function extraiLinks(texto) {
    const regex = /\[[^[\]]*?\]\(https?:\/\/[^\s?#.].[^\s]*\)/gm;
    const capturas = [...texto.matchAll(regex)];
    const resultados = capturas.map(captura => ({ [captura[0]]: captura[1] }))
    return resultados.length !==0 ? resultados : 'não há links'

}

async function pegaArquivo(caminhoDoArquivo) {
    try {
        const encoding = 'utf-8';
        const texto = await fs.promises.readFile(caminhoDoArquivo, encoding)
        return extraiLinks(texto)
    } catch (erro) {
        console.log(erro)
    }
}
export default pegaArquivo
 






