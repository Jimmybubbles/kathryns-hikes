// when the page loads hide the firstcard.

$(document).ready(function() {
    $("#firstcard").hide();
});

// window.onload = function() {
//     document.getElementById('#firstcard');
    
//   };


//when genbutton pressed add the class show to the firstcard.

$("#Genbutton").on("click", function() {
    $("#firstcard").show();
})

