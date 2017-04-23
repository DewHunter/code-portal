/**
 * Taken from
 * https://www.thepolyglotdeveloper.com/2015/03/create-a-random-nonce-string-using-javascript/
 */
const randomString = (length) => {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}

export default randomString;
