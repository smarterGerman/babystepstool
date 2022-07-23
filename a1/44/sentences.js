function easyGame() {
 difficulty_level = 1;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Liebe Erika,",
"ich hoffe, es geht Dir gut.",
"Ich habe nächste Woche Geburtstag",
"und möchte Dich gerne einladen.",
"Herzliche Grüße",
"Erika Mustermann"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
function normalGame() {
 difficulty_level = 2;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Liebe Erika,",
"ich hoffe, es",
"geht Dir gut.",
"Ich habe",
"nächste Woche",
"Geburtstag",
"und möchte",
"Dich gerne",
"einladen.",
"Herzliche Grüße",
"Erika Mustermann"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
function hardGame() {
 difficulty_level = 3;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Liebe Erika,",
"ich hoffe, es geht Dir gut.",
"Ich habe nächste Woche Geburtstag",
"und möchte Dich gerne einladen.",
"Herzliche Grüße",
"Erika Mustermann"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
