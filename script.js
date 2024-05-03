$(document).ready(function(){
    var theLetters = "abcdefghijklmnopqrstuvwxyz#%&^+=-"; // Letters to cycle through
    var speed = 50; // ms per frame
    var length = 7; // Adjusted number of letters in the block

    // Function to generate a block of random letters
    function generateRandomBlock(length) {
        var block = "";
        for (var i = 0; i < length; i++) {
            var num = Math.floor(theLetters.length * Math.random());
            var letter = theLetters.charAt(num);
            block += letter;
        }
        return block;
    }

    // Continuously update the block of letters
    function updateLetters() {
        var block = generateRandomBlock(length); // Use the outer `length` variable
        $("#tworca").html(block);
        setTimeout(updateLetters, speed); // Schedule the next update
    }

    updateLetters(); // Start the animation
});