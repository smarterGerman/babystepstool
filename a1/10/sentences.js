function easyGame() {
 difficulty_level = 1;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Sehr geehrter Herr Herrlich,",
"vielen Dank für Ihre Einladung zum Geburtstag.",
"Ich habe mich sehr darüber gefreut.",
"Leider kann ich nicht kommen,",
"da ich einen wichtigen Termin habe.",
"Mit freundlichen Grüßen",
"Max Mustermann"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
function normalGame() {
 difficulty_level = 2;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Sehr geehrter",
"Herr Herrlich,",
"vielen Dank für",
"Ihre Einladung zum",
"Geburtstag.",
"Ich habe mich",
"sehr darüber gefreut.",
"Leider kann",
"ich nicht",
"kommen,",
"da ich einen",
"wichtigen Termin habe.",
"Mit freundlichen Grüßen",
"Max Mustermann"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
function hardGame() {
 difficulty_level = 3;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Sehr geehrter Herr Herrlich,",
"vielen Dank für Ihre Einladung zum Geburtstag.",
"Ich habe mich sehr darüber gefreut.",
"Leider kann ich nicht kommen,",
"da ich einen wichtigen Termin habe.",
"Mit freundlichen Grüßen",
"Max Mustermann"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
