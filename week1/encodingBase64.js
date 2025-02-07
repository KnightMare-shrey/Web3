const uint8arr=new Uint8Array([72,101,108,108,111]);
const base64encod=Buffer.from(uint8arr).toString('base64');
console.log(base64encod);

// 5x8=40 (len of binary string rep hello)
// when encoded in base64 

const bs58=require('bs58');
function unit8arrToBase58(byteArr){
    return bs58.encode(byteArr);
}

function decodeBS58(str){
    return bs58.decode(str)
}

console.log(bs58);

console.log(unit8arrToBase58(uint8arr))
