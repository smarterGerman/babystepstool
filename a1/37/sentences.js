function easyGame() {
 difficulty_level = 1;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Sehr geehrte Damen und Herren,",
"ich möchte im August gerne Berlin besuchen",
"und suche nach einem günstigen Hotel.",
"Mit freundlichen Grüßen",
"Erika Mustermann"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
function normalGame() {
 difficulty_level = 2;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Sehr geehrte",
"Damen und",
"Herren,",
"ich möchte im",
"August gerne Berlin",
"besuchen",
"und suche nach",
"einem günstigen Hotel.",
"Mit freundlichen Grüßen",
"Erika Mustermann"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
function hardGame() {
 difficulty_level = 3;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Sehr geehrte Damen und Herren,",
"ich möchte im August gerne Berlin besuchen",
"und suche nach einem günstigen Hotel.",
"Mit freundlichen Grüßen",
"Erika Mustermann"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
