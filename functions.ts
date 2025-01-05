
console.log(words('Este es una prueba'))

function words(text: string): number{

    const words = text.split(' ')
    console.log(words)
    return words.length
}