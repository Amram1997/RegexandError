function validPassword(str){
    let reg = /[\D\t]/
    if(reg.test(str)){
      return false
    }else if(str.length === 4 || str.length === 6){
      return true
    }else{
      return false
    }
}
console.log(validPassword('12aa36'));
console.log(validPassword('45655'));
console.log(validPassword('456557'));
console.log(validPassword(' 565'));
console.log(validPassword('456$55'));