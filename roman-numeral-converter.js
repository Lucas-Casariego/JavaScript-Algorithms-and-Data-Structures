function convertToRoman(num) {
  let str = num.toString()
  let arr = str.split('')
  const reductora = (acumulador, cifra, index) => {
    // 4: miles  : 1: unidades
    if(arr.length-index == 4){
      if(cifra == 3) return [...acumulador, "MMM"];
      if(cifra == 2) return [...acumulador, "MM"];
      if(cifra == 1) return [...acumulador, "M"];
      if(cifra == 0) return acumulador
    }
    // 3:cientos
    if(arr.length-index == 3){
      if(cifra == 9) return [...acumulador, "CM"];
      if(cifra == 8) return [...acumulador, "DCCC"];
      if(cifra == 7) return [...acumulador, "DCC"];
      if(cifra == 6) return [...acumulador, "DC"];
      if(cifra == 5) return [...acumulador, "D"];
      if(cifra == 4) return [...acumulador, "CD"];
      if(cifra == 3) return [...acumulador, "CCC"];
      if(cifra == 2) return [...acumulador, "CC"];
      if(cifra == 1) return [...acumulador, "C"];
      if(cifra == 0) return acumulador
    }
    // 2: decenas
    if(arr.length-index == 2){
      if(cifra == 9) return [...acumulador, "XC"];
      if(cifra == 8) return [...acumulador, "LXXX"];
      if(cifra == 7) return [...acumulador, "LXX"];
      if(cifra == 6) return [...acumulador, "LX"];
      if(cifra == 5) return [...acumulador, "L"];
      if(cifra == 4) return [...acumulador, "XL"];
      if(cifra == 3) return [...acumulador, "XXX"];
      if(cifra == 2) return [...acumulador, "XX"];
      if(cifra == 1) return [...acumulador, "X"];
      if(cifra == 0) return acumulador
    }
    if(arr.length-index == 1){
      if(cifra == 9) return [...acumulador, "IX"];
      if(cifra == 8) return [...acumulador, "VIII"];
      if(cifra == 7) return [...acumulador, "VII"];
      if(cifra == 6) return [...acumulador, "VI"];
      if(cifra == 5) return [...acumulador, "V"];
      if(cifra == 4) return [...acumulador, "IV"];
      if(cifra == 3) return [...acumulador, "III"];
      if(cifra == 2) return [...acumulador, "II"];
      if(cifra == 1) return [...acumulador, "I"];
      if(cifra == 0) return acumulador
    }
    
  }
  const otravar = arr.reduce(reductora, [])
  const nroRomano = otravar.join('')
  return nroRomano

}

console.log(convertToRoman(501));