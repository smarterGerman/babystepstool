function easyGame() {
 difficulty_level = 1;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Liebe Maria,",
"Entschuldige bitte,",
"aber ich verspäte mich ein paar Minuten,",
"weil ich die Bahn verpasst habe.",
"Ich bin in zehn Minuten bei Dir.",
"Sollen wir uns am Bahnhof treffen?",
"Bis gleich",
"Konstantin"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
function normalGame() {
 difficulty_level = 2;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Liebe Maria,",
"aber ich verspäte",
"mich ein paar",
"Minuten,",
"weil ich die",
"Bahn verpasst habe.",
"Ich bin in",
"zehn Minuten bei",
"Dir.",
"Sollen wir uns",
"am Bahnhof treffen?",
"Bis gleich",
"Konstantin"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
function hardGame() {
 difficulty_level = 3;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Liebe Maria,",
"Entschuldige bitte,",
"aber ich verspäte mich ein paar Minuten,",
"weil ich die Bahn verpasst habe.",
"Ich bin in zehn Minuten bei Dir.",
"Sollen wir uns am Bahnhof treffen?",
"Bis gleich",
"Konstantin"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
