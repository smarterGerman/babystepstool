function easyGame() {
 difficulty_level = 1;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Sehr geehrte Frau Fraunhofer,",
"ich möchte meinen Sohn entschuldigen.",
"Er ist leider krank.",
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
"Frau Fraunhofer,",
"ich möchte",
"meinen Sohn",
"entschuldigen.",
"Er ist",
"leider krank.",
"Mit freundlichen Grüßen",
"Max Mustermann"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
function hardGame() {
 difficulty_level = 3;
 tool_container.classList.remove("hide-konstantin");
 tmp_content = ["Sehr geehrte Frau Fraunhofer,",
"ich möchte meinen Sohn entschuldigen.",
"Er ist leider krank.",
"Mit freundlichen Grüßen",
"Max Mustermann"];
 difficulty_container.classList.add("hide-konstantin");
 startGame();
 triggerFocus(input_box);
}
