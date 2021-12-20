function reverseString1(s) {
    try{
      return s.split('').reverse().join('');
      
    }catch(err){
      return err.name
    }
  
    }
    console.log(reverseString1("456"))