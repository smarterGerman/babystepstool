function easyGame() {
 difficulty_level = 1;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Liebe Vera,",
"ich liege krank im Bett.",
"Wahrscheinlich Covid.",
"Könntest du für mich einkaufen gehen?",
"Ich bräuchte frischen Ingwer",
"und Zutaten für eine Kartoffelsuppe.",
"Ginge das?",
"Danke dir.",
"Deine Lydia"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
function normalGame() {
 difficulty_level = 2;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Liebe Vera,",
"ich liege krank im Bett.",
"Wahrscheinlich Covid.",
"Könntest du für",
"mich einkaufen gehen?",
"Ich bräuchte",
"frischen Ingwer",
"und Zutaten",
"für eine",
"Kartoffelsuppe.",
"Ginge das?",
"Danke dir.",
"Deine Lydia"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
function hardGame() {
 difficulty_level = 3;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Liebe Vera,",
"ich liege krank im Bett.",
"Wahrscheinlich Covid.",
"Könntest du für mich einkaufen gehen?",
"Ich bräuchte frischen Ingwer",
"und Zutaten für eine Kartoffelsuppe.",
"Ginge das?",
"Danke dir.",
"Deine Lydia"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
