var s2 = "This sentence is similar to a foo bar sentence";

function countWords(sentence) {
  var index = {},
      words = sentence
              .replace(/[.,?!;()"'-]/g, " ")
              .replace(/\s+/g, " ")
               .toLowerCase()
              .split(" ");

    words.forEach(function (word) {
        if (!(index.hasOwnProperty(word))) {
            index[word] = 0;
        }
        index[word]++;
    });

    return index;
}

console.log(JSON.stringify(countWords(s2)));