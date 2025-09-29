function easyGame() {
 difficulty_level = 1;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Liebe Liese,",
"lange nichts gehört.",
"Es gibt eine tolle Neuigkeit.",
"Ich fliege nächste Woche nach Indien.",
"Warst du schon mal in Indien?",
"Ich freu mich, von dir zu hören.",
"Dein Deinhard"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
function normalGame() {
 difficulty_level = 2;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Liebe Liese,",
"lange nichts gehört.",
"Es gibt",
"eine tolle",
"Neuigkeit.",
"Ich fliege nächste",
"Woche nach Indien.",
"Warst du schon",
"mal in Indien?",
"Ich freu mich,",
"von dir zu",
"hören.",
"Dein Deinhard"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
function hardGame() {
 difficulty_level = 3;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Liebe Liese,",
"lange nichts gehört.",
"Es gibt eine tolle Neuigkeit.",
"Ich fliege nächste Woche nach Indien.",
"Warst du schon mal in Indien?",
"Ich freu mich, von dir zu hören.",
"Dein Deinhard"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
