function descendingSort(arr) {
    let swapped;
    do {
      swapped = false;
      for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] < arr[i + 1]) {
          // Swapping elements if they are in the wrong order
          const temp = arr[i];
          arr[i] = arr[i + 1];
          arr[i + 1] = temp;
          swapped = true;
        }
      }
    } while (swapped);
  }
  
  const myArray = [64, 34, 25, 12, 22, 11, 90];
  descendingSort(myArray);
  console.log(myArray); // Output: [90, 64, 34, 25, 22, 12, 11]
  