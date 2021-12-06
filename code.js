$(function (){
$("form").on("submit", addWord)
$("button").on("click", generateHaiku);

})

//index of the array indicates number of syllables stored
let words = [[""],["pig", "shirt", "pug"],["baseball","goofy", "guitar"],["computer","programmer","jellybean"],
    ["heroism", "america", "literature"],["choreographer","disproportionate","neurotypical"],
    ["biodiversity","autobiography","rationalization"],["intellectuality","anesthesiology","onomatopoeia"]];

function addWord(event){
    event.preventDefault();

    //retrieve word
    let newWord = $('input#word').val();

    //Counts the number of dashes to determine the number of syllables in the word and
    // removes the dashes.
    const syllables = newWord.split("-");
    // If the word has more than 7 syllables,
    // displays an error message. Otherwise, adds the word to the correct location in the dictionary array.
    alert(syllables.length);
    if (syllables.length > 7){
        alert("Please enter a word that is seven syllables or less.")
    }else{
        let concatWord = syllables.join("");
        words[syllables.length].push(concatWord);
    }
    //reset inputbox
    $("input#word").val("");
}

function generateHaiku(){

    $("p#line1").text("");

    for(let i = 5; i > 0;) {
        let ranlength = Math.floor(Math.random() * i) + 1;
        let ranword = Math.floor(Math.random() * words[ranlength].length);
        $("p#line1").append(words[ranlength][ranword], " ");
        i -= ranlength;

    }

    $("p#line2").text("");

    for(let i = 7; i > 0;) {
        let ranlength = Math.floor(Math.random() * i) + 1;
        let ranword = Math.floor(Math.random() * words[ranlength].length);
        $("p#line2").append(words[ranlength][ranword], " ");
        i -= ranlength;

    }

    $("p#line3").text("");

    for(let i = 5; i > 0;) {
        let ranlength = Math.floor(Math.random() * i) + 1;
        let ranword = Math.floor(Math.random() * words[ranlength].length);
        $("p#line3").append(words[ranlength][ranword], " ");
        i -= ranlength;

    }
    /*
    Picks words randomly from the dictionary to build three lines of text: one with
    five syllables, one with seven syllables, and another with five syllables.
    If a random word would cause a line to exceed its syllable count,
    another word is chosen until one of acceptable size is found.
    Displays the complete haiku.
     */
}
