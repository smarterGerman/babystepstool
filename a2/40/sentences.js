function easyGame() {
 difficulty_level = 1;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Liebe Vera,",
"wir fahren nächste Woche in Urlaub.",
"Könntest Du unsere Blumen gießen?",
"Das wäre total lieb.",
"Danke Dir.",
"Lydia"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
function normalGame() {
 difficulty_level = 2;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Liebe Vera,",
"wir fahren nächste",
"Woche in Urlaub.",
"Könntest Du",
"unsere Blumen",
"gießen?",
"Das wäre",
"total lieb.",
"Danke Dir.",
"Lydia"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
function hardGame() {
 difficulty_level = 3;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Liebe Vera,",
"wir fahren nächste Woche in Urlaub.",
"Könntest Du unsere Blumen gießen?",
"Das wäre total lieb.",
"Danke Dir.",
"Lydia"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
