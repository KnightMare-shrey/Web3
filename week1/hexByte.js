function byteToHex(bytearray){
    let hexString='';
    // (10).toString(16)->'a'
    // since (255).toString(16)->'ff' hence we will do padding 2 
    // so for (10).toString(16)->'0a'
    for(let i=0;i<bytearray.length;i++){
        hexString+=bytearray[i].toString(16).padStart(2,'0');
    }
    return hexString
}

let bytearray=[72,101,108,108,111]; //Hello
let hexString=byteToHex(bytearray);
console.log(hexString);


function hexToByteArr(str){
    arr=new Uint8Array(str.length/2);
    for(let i=0;i<arr.length;i++){
        arr[i]=parseInt(str.substr(i*2,2),16)  //paresInt converts the string or any format to integer and 
        // we will take starting from i*2 2 chars at a time ,finally the encoded string is in hex format 
    }
    return arr;
}

console.log(hexToByteArr(hexString))