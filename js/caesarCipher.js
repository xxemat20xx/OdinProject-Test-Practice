
export function caesarCipher(str, shift) {

    return str.split('').map(char => {

        if (char.match(/[a-z]/i)) {

            let code = char.charCodeAt();

            let base = code >= 65 && code <= 90 ? 65 : 97;

            shift = (shift % 26 + 26) % 26; // Ensure shift is positive

            return String.fromCharCode(((code - base + shift) % 26) + base);

        }

        return char;

    }).join('');

}
