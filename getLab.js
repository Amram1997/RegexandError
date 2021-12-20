let studentLabs2 = [
    {
      student: "Blake",
      myCode: function (num) {
        return Math.pow(num, num);
      },
    },
    {
      student: "Jessica",
      runLab: function (num) {
        return Math.pow(num, num);
      },
    },
    {
      student: "Mya",
      runLab: function (num) {
        return num * num;
      },
    },
  ];
  
  function gradeLabs(arr) {
    for(let i = 0; i < arr.length; i++) {
      try {
        arr[i].runLab(2);
      } catch(error) {
        throw "Error thrown";
      }
    }
    return "All passed"
  }
  
  console.log(gradeLabs(studentLabs2)