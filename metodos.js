function replace() {
    var nome = 'Erielson silva     ';
    console.log(`nome original: ${nome}`)
    // removendo espaços  no final da linha
    console.log(`nome original: ${nome.trim()}`)
    //conta a quantiade de caracteres.
    console.log(nome.length)
    //conta a quantidade de caracteres
    console.log(nome.trim().length)
    //retira os espaços em branco e depois converte tudo para minusculo
    console.log(nome.trim().toLowerCase())
    //retira os espaços em branco e depois converte tudo para maiscula
    console.log(nome.trim().toUpperCase())

    //replace: substitui a string a ser procurada por outra, apenasno primeiro caracteres encontrado
    console.log(nome.replace('o', 'w'))
    //replaceAll: substitui a string em todos as ocorrencias
    console.log(nome.replaceAll('o', 'w'))

    console.log(nome.indexOf('eri'))
}
replace();

