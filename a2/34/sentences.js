function easyGame() {
 difficulty_level = 1;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Sehr geehrte Damen und Herren,",
"ich möchte mich bei Ihnen beschweren.",
"Ich bekomme seit Wochen keine Post mehr.",
"Mit freundlichen Grüßen",
"Deinhard Beinhart"];
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
"ich möchte mich",
"bei Ihnen beschweren.",
"Ich bekomme seit",
"Wochen keine Post",
"mehr.",
"Mit freundlichen Grüßen",
"Deinhard Beinhart"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
function hardGame() {
 difficulty_level = 3;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Sehr geehrte Damen und Herren,",
"ich möchte mich bei Ihnen beschweren.",
"Ich bekomme seit Wochen keine Post mehr.",
"Mit freundlichen Grüßen",
"Deinhard Beinhart"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
