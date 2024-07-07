// 720. Longest Word in Dictionary



// Given an array of strings words representing an English Dictionary, return the longest word in words that can be built one character at a time by other words in words.

// If there is more than one possible answer, return the longest word with the smallest lexicographical order. If there is no answer, return the empty string.

// Note that the word should be built from left to right with each additional character being added to the end of a previous word. 





/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    // Step 1: Sort the words lexicographically
    words.sort();
    
    // Step 2: Initialize a set to keep track of buildable words
    let buildableWords = new Set();
    buildableWords.add("");
    
    // Step 3: Initialize the variable to keep track of the longest valid word
    let longestWord = "";
    
    // Step 4: Iterate through the sorted list of words
    for (let word of words) {
        // Check if the word minus its last character is in the set
        if (buildableWords.has(word.slice(0, -1))) {
            // Add the current word to the set
            buildableWords.add(word);
            
            // Update the longest word if the current word is longer or lexicographically smaller
            if (word.length > longestWord.length) {
                longestWord = word;
            }
        }
    }
    
    // Return the longest valid word
    return longestWord;
};
