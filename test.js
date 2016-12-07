var new_random, old_random;
function random_num(){
    return Math.floor((Math.random() * quotes.length));
}

var quotes = [{
        q: "Whether you think that you can, or that you cant, you are usually right"}, {
        q: "I shall not waste my days in trying to prolong them"}, {
        q: "Try to learn something about everything and everything about something"    
        }
    
    ];

$(document).ready(function(){
    $("#button").click(function(){
        new_random = random_num();
        while(new_random == old_random){
            new_random = random_num();
        }
        $("#quote-p").html(quotes[new_random].q);
        $("#links-right").attr("href", quotes[new_random].l);
        $("#links-right").html(quotes[new_random].a);
        $("#links-left a").attr("href", 'https://twitter.com/intent/tweet?text=' + quotes[new_random].q);
        old_random = new_random;
    });
});
