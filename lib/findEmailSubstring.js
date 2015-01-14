var findEmailSubstring = function(input){


    var sentences = input.split("\n")

    group = {}

    for (s=0; s < sentences.length; s++) {
      if ( sentences[s] != '') {
        if ( !group[sentences[s]] ) {
          group[sentences[s]] = 0;
        }
        group[sentences[s]]++;

      }
    }

    var lowerCaseSentences = sentences[1].toLowerCase()

    var arr = lowerCaseSentences.split(" ")

    var obj = {}

    var winner = group

    for (i = 0; i < arr.length; i++) {
      if ( arr[i] != '') {
          if ( !obj[arr[i]] ) {
              obj[arr[i]] = 0;
          }
          obj[arr[i]]++;

          }
      }



    /************************************
    * Do some things here to make this
    * function return the expected value
    *  as explained in the instructions
    *************************************/



    return winner;
};
// this one has hello. It has hello too.

module.exports=findEmailSubstring;