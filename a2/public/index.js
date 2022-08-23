let timer_text = document.querySelector(".init_time-konstantin");
let accuracy_text = document.querySelector(".init_accuracy-konstantin");
let error_text = document.querySelector(".init_errors-konstantin");
let words_text = document.querySelector(".init_wpm-konstantin");
let content_text = document.querySelector(".content-konstantin");
let input_box = document.querySelector(".input_box-konstantin");
let start_btn = document.querySelector(".reset-button-konstantin");
let restart_btn = document.querySelector(".restart-konstantin");
let wpm_group = document.querySelector(".wpm-konstantin");
let error_group = document.querySelector(".errors-konstantin");
let accuracy_group = document.querySelector(".accuracy-konstantin");
let checker_div = document.querySelector(".checker-konstantin");
let written_div = document.querySelector(".written-konstantin");
let score_text = document.querySelector(".init_score-konstantin");
let score_container = document.querySelector(".score-konstantin");
let errors_container = document.querySelector(".errors-konstantin");
let playbutton_container = document.querySelector(".playbutton-konstantin");
let tool_container = document.querySelector(".container-konstantin");
let difficulty_container = document.querySelector(".difficulty_box-konstantin");
let finished_section = document.querySelector(".finished-section-konstantin");
let start_counter = 0;
// checker_div.innerText = "";
let total_errors = 0;
let errors = 0;
let accuracy = 0;
let typed = 0;
let score = 0;
let total_score = 0;
let highscore = 0;
let current_content = "";
let c = 0;
let current_best_time = 1000000000;
var start;
var difficulty_level;
var tmp_content = "";

// Warn if overriding existing method
if(Array.prototype.equals)
    console.warn("Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code.");
// attach the .equals method to Array's prototype to call it on any array
Array.prototype.equals = function (array) {
    // if the other array is a falsy value, return
    if (!array)
        return false;

    // compare lengths - can save a lot of time 
    if (this.length != array.length)
        return false;

    for (var i = 0, l=this.length; i < l; i++) {
        // Check if we have nested arrays
        if (this[i] instanceof Array && array[i] instanceof Array) {
            // recurse into the nested arrays
            if (!this[i].equals(array[i]))
                return false;       
        }           
        else if (this[i] != array[i]) { 
            // Warning - two different object instances will never be equal: {x:20} != {x:20}
            return false;   
        }           
    }       
    return true;
}
// Hide method from for-in loops
Object.defineProperty(Array.prototype, "equals", {enumerable: false});

// DIFFICULTY LEVELS
function triggerFocus(element) {
  var eventType = "onfocusin" in element ? "focusin" : "focus",
      bubbles = "onfocusin" in element,
      event;

  if ("createEvent" in document) {
      event = document.createEvent("Event");
      event.initEvent(eventType, bubbles, true);
  }
  else if ("Event" in window) {
      event = new Event(eventType, { bubbles: bubbles, cancelable: true });
  }

  element.focus();
  element.dispatchEvent(event);
}

 
let content_counter = 0;
function ChangeContent() {
  if (content_counter < tmp_content.length) {
    content_text.classList.remove("transparent-konstantin");
    // input_box.placeholder = tmp_content[content_counter];
    content_text.textContent = null;
    current_content = tmp_content[content_counter];
    
    current_content.split('').forEach(char => {
      const charSpan = document.createElement('span');
      charSpan.innerText = char;
      content_text.appendChild(charSpan);
    })
  }
}

function textInput() {
  input = input_box.value;
  input_array = input.split('');
  // console.log(input_box.value);
  input_box.addEventListener('keypress', function (e) {
    if (e.keyCode === 13 || e.which === 13) {
      e.preventDefault();
      return false;
    }
  })

  if (input_box.value.length > 1 ) {
    // UMLAUT ä
    if ((input_array.slice(-2).equals(['a','/']))) {
      input_box.value = input_box.value.slice(0,-2)+"ä";
    }
    // UMLAUT Ä
    if ((input_array.slice(-2).equals(['A','/']))) {
      input_box.value = input_box.value.slice(0,-2)+"Ä";
    }
    // UMLAUT ö
    if ((input_array.slice(-2).equals(['o','/']))) {
      input_box.value = input_box.value.slice(0,-2)+"ö";
    }
    // UMLAUT Ö
    if ((input_array.slice(-2).equals(['O','/']))) {
      input_box.value = input_box.value.slice(0,-2)+"Ö";
    }
    // UMLAUT ü
    if ((input_array.slice(-2).equals(['u','/']))) {
      input_box.value = input_box.value.slice(0,-2)+"ü";
    }
    // UMLAUT Ü
    if ((input_array.slice(-2).equals(['U','/']))) {
      input_box.value = input_box.value.slice(0,-2)+"Ü";
    }
    // ß
    if ((input_array.slice(-2).equals(['B','/']))) {
      input_box.value = input_box.value.slice(0,-2)+"ß";
    }
      // ’
      if ((input_array.slice(-1).equals(['\'']))) {
        input_box.value = input_box.value.slice(0,-1)+"’";
    }
  }

  typed++;
  errors = 0;
  quoteSpanArray = content_text.querySelectorAll('span');
  quoteSpanArray.forEach((char, index) => {
  let typed = input_array[index];
  if (difficulty_level > 1) {
    if (input_array.length > 5) {
      // content_text.classList.add("hide-konstantin");
      content_text.classList.add("transparent-konstantin");
    }
  }
  if (typed == null) {
      char.classList.remove('correct-konstantin');
      char.classList.remove('incorrect-konstantin');
  } 
  else if (typed === char.innerText) {
      char.classList.add('correct-konstantin');
      char.classList.remove('incorrect-konstantin');
  } 
  else {
    char.classList.add('incorrect-konstantin');
    char.classList.remove('correct-konstantin');
    errors++;
    if (total_errors >= 0) {
      total_errors++;
    }
  }
});
  error_text.textContent = errors;

  if (input.length == current_content.length) {
    input_box.placeholder = "";
    console.log("Errors: " + errors);
    if (errors == 0) {
      content_text.classList.remove("hide-konstantin");
      written_div.classList.remove("hide-konstantin");
      written_div.innerText += tmp_content[content_counter] + "\n";
      content_counter++;
      score = current_content.length;
      total_score += score;
      highscore = total_score - total_errors
      score_text.textContent = highscore;
      if (content_counter == tmp_content.length) {
        content_text.innerText = "Filler";
        content_text.classList.add("transparent-konstantin");
        finishGame();
      }
      ChangeContent();
      checker_div.style.color = "transparent";
      input_box.value = "";
    }
    else {
      console.log(errors);
      checker_div.style.color = "red";
      checker_div.innerText = "Correct your mistakes before you continue.";
    }

  }
}


function finishGame() {
  if (content_counter == tmp_content.length) {
    var delta = Math.floor((Date.now() - start)/1000);
    var minutes = Math.floor(delta/60);
    var seconds = delta - minutes*60;
    input_box.disabled = true;
    content_text.classList.add("transparent-konstantin");
    finished_section.classList.remove("hide-konstantin");
    finished_section.classList.add("blink-me-konstantin");
    if (delta < current_best_time) {
      current_best_time = delta;
      finished_section.innerText = "Congrats. Your new best time is " +String(minutes)
      + " minutes and " + String(seconds) +" seconds. Can you beat this?"
    }
    else {
      finished_section.innerText = "You didn't beat your highscore. Your time is " +String(minutes)
      + " minutes and " + String(seconds) +" seconds. Can you beat this?"
    }
  }
}

function startGame() {
  start = Date.now();
  content_text.classList.remove("hide-konstantin");
  start_btn.classList.remove("hide-konstantin");
  start_btn.innerHTML = "<img src=\"https://www.filepicker.io/api/file/9KBTW5kDRluhcmsNlIOE\" width=\"50\" height=\"50\">";
  ChangeContent();
  start_counter++;
}

function resetGame() {
  errors = 0;
  total_errors = 0;
  typed = 0;
  content_counter = 0;
  highscore = 0;
  score = 0;
  total_score = 0;
  score_text.textContent = 0;
  c = 0;
  input_box.disabled = false;
  input_box.value = "";
  input_box.innerText = "";
  content_text.textContent = "";
  error_text.textContent = 0;
  written_div.innerText = "";
  written_div.classList.add("hide-konstantin");
  input_box.classList.remove("hide-konstantin");
  content_text.classList.add("hide-konstantin");
  tool_container.classList.add("hide-konstantin");
  finished_section.classList.add("hide-konstantin");
  difficulty_container.classList.remove("hide-konstantin");
}

