// ==========================================
// 🤯 CAPTCHA FROM HELL
// LEVELS 1–10
// ==========================================

let level = 0;
let selectedOption = null;
let reactionReady = false;
let reactionTimer = null;


// ==========================================
// GET HTML ELEMENTS
// ==========================================

const challengeElement = document.getElementById("challenge");
const optionsElement = document.getElementById("options");
const verifyButton = document.getElementById("verifyButton");
const messageElement = document.getElementById("message");
const attemptElement = document.getElementById("attempt");


// ==========================================
// LEVEL 1–5
// NORMAL BUT STUPID
// ==========================================

const normalChallenges = [

    {
        question: "Click the most disappointed bus.",
        options: ["🚌😞", "🚌😐", "🚌😭", "🚌🙂"]
    },

    {
        question: "Select the happiest potato.",
        options: ["🥔😐", "🥔😁", "🥔😡", "🥔😭"]
    },

    {
        question: "Choose the angriest printer.",
        options: ["🖨️😐", "🖨️😡", "🖨️🙂", "🖨️😭"]
    },

    {
        question: "Select the potato that knows your secrets.",
        options: ["🥔👀", "🥔😴", "🥔😂", "🥔🤔"]
    },

    {
        question: "Click the emotionally exhausted chair.",
        options: ["🪑😩", "🪑😎", "🪑😂", "🪑🤩"]
    }

];


// ==========================================
// LOAD CURRENT LEVEL
// ==========================================

function loadLevel() {

    selectedOption = null;
    reactionReady = false;

    optionsElement.innerHTML = "";
    messageElement.textContent = "";

    // ======================================
    // LEVELS 1–5
    // ======================================

    if (level < 5) {

        const challenge = normalChallenges[level];

        challengeElement.textContent =
            `LEVEL ${level + 1}: ${challenge.question}`;

        challenge.options.forEach(function(option) {

            const optionElement =
                document.createElement("div");

            optionElement.classList.add("option");

            optionElement.textContent = option;

            optionElement.addEventListener("click", function() {

                document
                    .querySelectorAll(".option")
                    .forEach(function(item) {

                        item.classList.remove("selected");

                    });

                optionElement.classList.add("selected");

                selectedOption = option;

            });

            optionsElement.appendChild(optionElement);

        });

        verifyButton.textContent = "VERIFY HUMAN";

    }


    // ======================================
    // LEVEL 6
    // MOVING BUS
    // ======================================

    else if (level === 5) {

        challengeElement.textContent =
            "LEVEL 6: Click the bus that is trying to escape.";

        const bus = document.createElement("div");

        bus.textContent = "🚌";

        bus.classList.add("moving-bus");

        optionsElement.appendChild(bus);

        bus.addEventListener("click", function() {

            messageElement.textContent =
                "😂 You caught the bus! Unfortunately, that was suspicious.";

            selectedOption = "bus";

            bus.style.position = "static";

        });

        verifyButton.textContent = "VERIFY HUMAN";

    }


    // ======================================
    // LEVEL 7
    // FAKE HUMANITY SCAN
    // ======================================

    else if (level === 6) {

        challengeElement.textContent =
            "LEVEL 7: Allow us to analyze your humanity.";

        const scanBox =
            document.createElement("div");

        scanBox.classList.add("scan-box");

        scanBox.innerHTML =
            "🔍 READY TO SCAN HUMANITY";

        optionsElement.appendChild(scanBox);

        selectedOption = "scan";

        verifyButton.textContent =
            "START HUMANITY SCAN";

    }


    // ======================================
    // LEVEL 8
    // DON'T CLICK THE POTATO
    // ======================================

    else if (level === 7) {

        challengeElement.textContent =
            "LEVEL 8: DO NOT CLICK THE POTATO.";

        const instruction =
            document.createElement("p");

        instruction.textContent =
            "Seriously. Do NOT click it.";

        instruction.style.marginBottom = "20px";

        optionsElement.appendChild(instruction);


        const potato =
            document.createElement("div");

        potato.textContent = "🥔";

        potato.classList.add("big-potato");

        optionsElement.appendChild(potato);


        potato.addEventListener("click", function() {

            messageElement.textContent =
                "😐 YOU CLICKED THE POTATO. I LITERALLY TOLD YOU NOT TO.";

            selectedOption = "potato";

        });


        verifyButton.textContent =
            "I DIDN'T CLICK IT";

    }


    // ======================================
    // LEVEL 9
    // ANGRY PRINTER SOUND
    // ======================================

    else if (level === 8) {

        challengeElement.textContent =
            "LEVEL 9: Type the sound of an angry printer.";

        const input =
            document.createElement("input");

        input.type = "text";

        input.placeholder =
            "Type the printer sound...";

        input.classList.add("captcha-input");

        optionsElement.appendChild(input);


        input.addEventListener("input", function() {

            selectedOption = input.value;

        });


        verifyButton.textContent =
            "SUBMIT SOUND";

    }


    // ======================================
    // LEVEL 10
    // REACTION TEST
    // ======================================

    else if (level === 9) {

        challengeElement.textContent =
            "LEVEL 10: Click the potato when it becomes emotionally ready.";

        const potato =
            document.createElement("div");

        potato.textContent = "🥔😐";

        potato.classList.add("reaction-potato");

        optionsElement.appendChild(potato);


        let emotions = [
            "🥔😐",
            "🥔🙂",
            "🥔😳",
            "🥔😁",
            "🥔😎"
        ];

        let index = 0;

        const emotionTimer =
            setInterval(function() {

                if (level !== 9) {

                    clearInterval(emotionTimer);

                    return;
                }

                potato.textContent =
                    emotions[index];

                index++;

                if (index >= emotions.length) {

                    clearInterval(emotionTimer);

                    reactionReady = true;

                }

            }, 800);


        potato.addEventListener("click", function() {

            if (reactionReady) {

                selectedOption = "potato";

                potato.textContent = "🥔🎉";

                messageElement.textContent =
                    "😱 YOU ACTUALLY TIMED IT CORRECTLY.";

            } else {

                messageElement.textContent =
                    "😂 TOO EARLY. The potato wasn't emotionally ready.";

            }

        });


        verifyButton.textContent =
            "VERIFY HUMAN";

    }

}


// ==========================================
// VERIFY BUTTON
// ==========================================

verifyButton.addEventListener("click", function() {


    // ======================================
    // LEVEL 7 SPECIAL
    // ======================================

    if (level === 6) {

        messageElement.textContent =
            "🔍 Scanning humanity...";

        verifyButton.disabled = true;

        setTimeout(function() {

            messageElement.textContent =
                "🧠 Checking brain activity...";

        }, 1000);

        setTimeout(function() {

            messageElement.textContent =
                "🥔 Consulting potato council...";

        }, 2000);

        setTimeout(function() {

            messageElement.textContent =
                "❌ POTATO COUNCIL HAS REJECTED YOU.";

            verifyButton.disabled = false;

            level++;

            attemptElement.textContent = level;

            setTimeout(loadLevel, 1200);

        }, 3200);

        return;
    }


    // ======================================
    // LEVEL 8
    // ======================================

    if (level === 7) {

        level++;

        attemptElement.textContent = level;

        messageElement.textContent =
            "❌ You followed the instruction. That's suspicious.";

        setTimeout(loadLevel, 1200);

        return;
    }


    // ======================================
    // NOTHING SELECTED
    // ======================================

    if (
        selectedOption === null ||
        selectedOption === ""
    ) {

        messageElement.textContent =
            "⚠️ You didn't even do anything. Suspicious.";

        return;

    }


    // ======================================
    // LEVEL 9
    // ======================================

    if (level === 8) {

        messageElement.textContent =
            "❌ That is NOT how an angry printer sounds.";

        level++;

        attemptElement.textContent = level;

        setTimeout(loadLevel, 1200);

        return;

    }


    // ======================================
    // LEVEL 10
    // ======================================

    if (level === 9) {

        if (!reactionReady) {

            messageElement.textContent =
                "❌ You clicked too early. PATIENCE.";

            return;

        }

        messageElement.textContent =
            "❌ Correct timing detected. Unfortunately, this is suspicious.";

        level++;

        attemptElement.textContent = level;

        setTimeout(showFinishedScreen, 1500);

        return;

    }


    // ======================================
    // LEVELS 1–6
    // ======================================

    level++;

    attemptElement.textContent = level;

    const funnyMessages = [

        "❌ Verification failed. Try again.",

        "❌ Nice try. You're still suspicious.",

        "❌ The CAPTCHA doesn't believe you.",

        "❌ Your humanity is questionable.",

        "❌ Even the potato knows you're suspicious.",

        "❌ Humanity verification denied."

    ];

    const randomMessage =
        funnyMessages[
            Math.floor(Math.random() * funnyMessages.length)
        ];

    messageElement.textContent = randomMessage;


    setTimeout(loadLevel, 1000);

});


// ==========================================
// FINAL SCREEN AFTER LEVEL 10
// ==========================================

function showFinishedScreen() {

    challengeElement.textContent =
        "🔥 LEVEL 10 COMPLETED";

    optionsElement.innerHTML = "";

    messageElement.innerHTML =
        "🎉 You survived the first 10 levels.<br><br>" +
        "Unfortunately, you are still not verified.";

    verifyButton.textContent =
        "CONTINUE TO HELL";

}


// ==========================================
// START
// ==========================================

loadLevel();