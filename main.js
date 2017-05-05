$(document).ready(function() {

  function showQuote() {
    /* Only code having to do with putting a quote on the screen.
      This is just the function definition - it isn't called yet.
      Don't put the click handler in here. */
      var quotes = [
	{
		"quote" : "Keep your face always toward the sunshine—and shadows will fall behind you.",
		"author" : " Walt Whitman"
	},
	{
		"quote" : "It is always the simple that produces the marvelous.",
		"author" : " Amelia Barr"
	},
	{
		"quote" : "The world is full of magical things patiently waiting for our wits to grow sharper.",
		"author" : " Bertrand Russell"
	},
	{
		"quote" : "Let us make our future now, and let us make our dreams tomorrow’s reality.",
		"author" : " Malala Yousafzai"
	},
	{
		"quote" : "All you need is the plan, the road map, and the courage to press on to your destination.",
		"author" : " Earl Nightingale"
	},
	{
		"quote" : "The glow of one warm thought is to me worth more than money.",
		"author" : " Thomas Jefferson"
	},
	{
		"quote" : "Once we believe in ourselves, we can risk curiosity, wonder, spontaneous delight, or any experience that reveals the human spirit.",
		"author" : " E. E. Cummings"
	},
	{
		"quote" : "The power of imagination makes us infinite.",
		"author" : " John Muir"
	}
]

      randomQuote = quotes[Math.floor(Math.random() * (quotes.length))];
      document.getElementById("quotation").innerHTML = `“${randomQuote.quote}”`;
      document.getElementById("author").innerHTML = ' -- ' + randomQuote.author;
      //document.getElementById("quote_slider").innerHTML = randomQuote;


  }

  // this is a click handler - it won't fire until clicked
  // it just sits there and listens for that click
  $('.get-quote').on('click', function(event){
    event.preventDefault();
    showQuote(); // re-calling to put up new quote
  });

  // this is a click handler - it won't fire until clicked
  // it just sits there and listens for that click
  $('.share-quote').on('click', function(event) {
    event.preventDefault();
    var twitter = " \"" + randomQuote.quote + "\" " + ' -- ' + randomQuote.author;
    window.open("https://twitter.com/intent/tweet?text=" + encodeURIComponent(twitter));
    //window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(randomQuote + ' -- '))



  });


  // this is the only part of code that will actually run at first
  showQuote(); // Here we call the function to put the first quote up

});
