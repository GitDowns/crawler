var keyString = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
var str1 = "(!@$%%^&&^@)(*&^^&";
var str2 = "*&^%#@$%%^$#)(**&*&";
var str3 = ")(*&^%$%^&*((())=+";
var str4 = "&*^^*&*&(*(!+)((&&^&^*%^*";
var publickey = "BCcd^%$%^&*(opqr%^$#)(*stuefgD^OPQRc^%$%^&*(opqrstudefgSTUV&^*EFGH@$%%ghij1234";
var rand_no = Math.floor(Math.random() * 10);
/**
 * @return {string}
 */
var KeyInEncode = function (string)
{
    string = string.replace(/\\x0d\\x0a/g, "\\x0a");
    var output = "";
    for (var n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);
        if (c < 128) {
            output += String.fromCharCode(c)
        } else if ((c > 127) && (c < 2048)) {
            output += String.fromCharCode((c >> 6) | 192);
            output += String.fromCharCode((c & 63) | 128)
        } else {
            output += String.fromCharCode((c >> 12) | 224);
            output += String.fromCharCode(((c >> 6) & 63) | 128);
            output += String.fromCharCode((c & 63) | 128)
        }
    }

    return output;
};
/**
 * @return {string}
 */
function SessionInhaE(input) {
    var output = "";
    var output2 = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;
    var keychain = "";
    var j = 0;
    while (j < 3) {
        rand_no = Math.floor(Math.random() * 10) + "";
        keychain = keychain + publickey.substring(rand_no, rand_no + j) + rand_no;
        j++
    }
    keychain = keychain + "/";
    input = KeyInEncode(input);
    while (i < input.length) {
        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);
        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;
        if (isNaN(chr2)) {
            enc3 = enc4 = 64
        } else if (isNaN(chr3)) {
            enc4 = 64
        }
        output = output + str1.substring(9, 11) + keyString.charAt(enc1) + str3.substring(16, 18) + keyString.charAt(enc2) + keyString.charAt(enc3) + keyString.charAt(enc4) + str2.substring(10, 12)
    }
    return keychain + str3.substring(16, 18) + output + str4.substring(11, 13);
}
