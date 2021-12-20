function isPositive(a){
    if(a > 0){
      return "yes"
    }else{
      if(a === 0){
        throw new Error('Zero Error')
      }
      if(a < 0){
        throw new Error('Negative Error')
      }
    }
  }
  console.log(isPositive(2))