function easyGame() {
 difficulty_level = 1;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Sehr geehrte Damen und Herren,",
"ich habe Ihre Stellenanzeige in der Zeitung gelesen.",
"Ich hätte Interesse an der Stelle.",
"Ist sie noch zu haben?",
"Mit freundlichen Grüßen",
"Max Mustermann"];
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
"ich habe Ihre Stellenanzeige",
"in der Zeitung gelesen.",
"Ich hätte Interesse",
"an der Stelle.",
"Ist sie",
"noch zu",
"haben?",
"Mit freundlichen Grüßen",
"Max Mustermann"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
function hardGame() {
 difficulty_level = 3;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Sehr geehrte Damen und Herren,",
"ich habe Ihre Stellenanzeige in der Zeitung gelesen.",
"Ich hätte Interesse an der Stelle.",
"Ist sie noch zu haben?",
"Mit freundlichen Grüßen",
"Max Mustermann"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
