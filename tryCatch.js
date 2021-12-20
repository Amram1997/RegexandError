function reverseString(s){
    try{
      let riversStr = s.split('').reverse().join('');
      return riversStr
    }catch(err){
      return err.message
    }
}
console.log(reverseString(123))