function rot13(str) {
  const code = "ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM"
  let decodeStr = "";
  for (let i=0; i<str.length; i++){
    // si es un signo de puntuación lo agrego directamente
    if(!code.includes(str[i].toUpperCase()))
      decodeStr = decodeStr.concat(str[i])
    else{
      let indexLetra = code.indexOf(str[i]) + 13
      decodeStr = decodeStr.concat(code[indexLetra])
    }
  }
  
  return decodeStr
}

rot13("SERR PBQR PNZC");