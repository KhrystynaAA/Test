let numbers;
function submitForm() {
    let fileInput = document.getElementById('file');
    if (fileInput.files.length > 0) {
      let file = fileInput.files[0];
      let reader = new FileReader();

      reader.onload = function (e) {
        let fileContent = e.target.result;
        numbers = fileContent.split('\n').map(Number);
        
        let sortedNumbers = quickSort(numbers);
        
        let minNumber = sortedNumbers[0];
        let maxNumber = sortedNumbers[sortedNumbers.length - 1];
        let mediana = searchMediana(sortedNumbers);
        let middle = arithmeticMean(sortedNumbers);
        document.getElementById('result').innerText = 'Min num: ' + minNumber+'\n'+'Max num: ' + maxNumber+'\n'+'Mediana: ' + mediana+ '\n'+'Arithmetic mean: '+middle;
      };

      reader.readAsText(file);
    } else {
      alert('Будь ласка, виберіть файл.');
    }
  }

  function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    let pivot = arr[0];
    let left = [];
    let right = [];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return quickSort(left).concat(pivot, quickSort(right));
  }
   function searchMediana(arr){
    let len = arr.length;

  if (len % 2 === 1) {
    return arr[Math.floor(len / 2)];
  } else {
    let mid1 = arr[len / 2 - 1];
    let mid2 = arr[len / 2];
    return (mid1 + mid2) / 2;
  }

   }
  
  
  function arithmeticMean(arr){
    let sum = 0;
    for(let i=0; i<arr.length; i++){
       sum+= arr[i];
      }
    if(arr.length!==0){
        
    return (sum/(arr.length));
    }
  }