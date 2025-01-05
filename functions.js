console.log(words('Este es una prueba'));
function words(text) {
    var words = text.split(' ');
    console.log(words);
    return words.length;
}
