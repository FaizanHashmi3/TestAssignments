function reverseWords(sentence) {
    // Splitting the sentence into words based on spaces
    const words = sentence.split(' ');
    
    // Function to reverse a single word
    function reverseWord(word) {
      let reversed = '';
      for (let i = word.length - 1; i >= 0; i--) {
        reversed += word[i];
      }
      return reversed;
    }
    
    // Reversing each word in the array
    const reversedWords = words.map(word => reverseWord(word));
    
    // Joining the reversed words back into a sentence
    const reversedSentence = reversedWords.join(' ');
  
    return reversedSentence;
  }
  
  const inputSentence = 'This is a sunny day';
  const reversedSentence = reverseWords(inputSentence);
  console.log(reversedSentence); // Output: 'sihT si a ynnus yad'
  