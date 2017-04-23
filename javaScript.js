var quote = [
             "I love you the more in that I believe you had liked me for my own sake and for nothing else.",
             "But man is not made for defeat. A man can be destroyed but not defeated.",
             "When you reach the end of your rope, tie a knot in it and hang on.",
             "There is nothing permanent except change.",
             "You cannot shake hands with a clenched fist.",
             "Let us sacrifice our today so that our children can have a better tomorrow.",
            ];

function newQuote () {
  var randomQuote = Math.floor(Math.random() * (quote.length));
  document.getElementById("quote_slider").innerHTML = quote[randomQuote];
}
