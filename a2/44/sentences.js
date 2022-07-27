function easyGame() {
 difficulty_level = 1;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Liebe Vera,",
"mein Corona-Test war positiv.",
"Könntest du für mich einkaufen gehen?",
"Das wäre total lieb von dir.",
"Sag einfach kurz Bescheid.",
"Liebe Grüße",
"Lydia"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
function normalGame() {
 difficulty_level = 2;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Liebe Vera,",
"mein Corona-Test",
"war positiv.",
"Könntest du für",
"mich einkaufen gehen?",
"Das wäre total",
"lieb von dir.",
"Sag einfach",
"kurz Bescheid.",
"Liebe Grüße",
"Lydia"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
function hardGame() {
 difficulty_level = 3;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Liebe Vera,",
"mein Corona-Test war positiv.",
"Könntest du für mich einkaufen gehen?",
"Das wäre total lieb von dir.",
"Sag einfach kurz Bescheid.",
"Liebe Grüße",
"Lydia"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
