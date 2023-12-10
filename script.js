function stringChop(str, size) {
  // your code here
	 // Check for null or empty string
  if (str === null || str === '') {
    return [];
  }

  // Initialize the result array
  const result = [];

  // Loop through the string in chunks of the specified length
  for (let i = 0; i < str.length; i += size) {
    // Extract a chunk of the specified length
    const chunk = str.substr(i, size);

    // Add the chunk to the result array
    result.push(chunk);
  }

  return result;
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
