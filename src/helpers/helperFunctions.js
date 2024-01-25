export function capitalizeWords(inputString) {
    // Split the input string into an array of words
    const words = inputString.split(' ');
  
    // Capitalize each word in the array
    const capitalizedWords = words.map(word => {
      // Ensure the word is not an empty string
      if (word.length > 0) {
        // Capitalize the first letter and concatenate the rest of the word
        return word.charAt(0).toUpperCase() + word.slice(1);
      } else {
        // If the word is empty, return it as is
        return word;
      }
    });
  
    // Join the capitalized words back into a string
    const resultString = capitalizedWords.join(' ');
  
    return resultString;
  }
  


  export function stripHtmlTags(html) {
    let doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  }
  
  