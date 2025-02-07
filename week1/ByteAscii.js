function asciiToByte(str){
    return new Uint8Array([...str].map(char=>char.charCodeAt(0)));
}

let ascii='Hello';
console.log(asciiToByte(ascii))


function byteToAscii(bytearray){
    return bytearray.map(byte=>String.fromCharCode(byte)).join('');
}

let bytearray=[72,101,108,108,111];
console.log(byteToAscii(bytearray));

