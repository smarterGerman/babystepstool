function easyGame() {
 difficulty_level = 1;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Liebe WG,",
"ich habe eure Anzeige in der Zeitung gelesen.",
"Ich hätte Interesse an dem Zimmer.",
"Ist das noch zu haben?",
"Ich liebe es zu putzen, den Müll runterzutragen und",
"zahle gerne eure GEZ.",
"Ich freue mich, von Euch zu hören",
"Tschö mit Ö",
"Max Mustermann"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
function normalGame() {
 difficulty_level = 2;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Liebe WG,",
"ich habe eure Anzeige",
"in der Zeitung gelesen.",
"Ich hätte Interesse",
"an dem Zimmer.",
"Ist das",
"noch zu",
"haben?",
"zahle gerne",
"eure GEZ.",
"Ich freue mich,",
"von Euch zu",
"hören",
"Tschö mit Ö",
"Max Mustermann"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
function hardGame() {
 difficulty_level = 3;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Liebe WG,",
"ich habe eure Anzeige in der Zeitung gelesen.",
"Ich hätte Interesse an dem Zimmer.",
"Ist das noch zu haben?",
"Ich liebe es zu putzen, den Müll runterzutragen und",
"zahle gerne eure GEZ.",
"Ich freue mich, von Euch zu hören",
"Tschö mit Ö",
"Max Mustermann"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
