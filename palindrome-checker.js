function palindrome(str) {
  str = str.toLowerCase()
  const regex = /_|\W+|\s/gi;
  str = str.replace(regex, "")
  const len = str.length; 
  console.log("str.length",len)

  for(let i=0; i<Math.ceil(len/2); i++){
    // diametralmente opuestos
    if(str[i] !== str[len-i-1]){
      return false
    }
    console.log("i",i)
    console.log("j",len-i-1)
  }
  return true;
}

palindrome("eye");