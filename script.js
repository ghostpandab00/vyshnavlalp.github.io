const generateQuote = function() {
    const quotes = [
        {   quote: "Do not dwell in the past, do not dream of the future, concentrate the mind on the present moment."},
        {   quote: "It is better to travel well than to arrive."},
        {   quote: "Peace comes from within. Do not seek it without."},
        {   quote: "The only real failure in life is not to be true to the best one knows."},
        {   quote: "The way is not in the sky. The way is in the heart."},
        {   quote: "We are what we think. All that we are arises with our thoughts.\n With our thoughts, we make the world."},
        {   quote: "What we think, we become."},
        {   quote: "A jug fills drop by drop."}
        ];

        let arrayIndex = Math.floor(Math.random() * quotes.length);
        document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
        }
        window.onload = function() {
            generateQuote();
        }
        function myFunction() {
            var element = document.body;
            element.classList.toggle("dark-mode");


         }

          