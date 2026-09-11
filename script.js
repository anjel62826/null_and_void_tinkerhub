// ==========================================
// 🤯 CAPTCHA FROM HELL
// Complete JavaScript File
// ==========================================


// ------------------------------
// 1. VARIABLES
// ------------------------------

let attempt = 0;
let selectedOption = null;


// ------------------------------
// 2. HTML ELEMENTS
// ------------------------------

const challengeElement = document.getElementById("challenge");
const optionsElement = document.getElementById("options");
const verifyButton = document.getElementById("verifyButton");
const messageElement = document.getElementById("message");
const attemptElement = document.getElementById("attempt");


// ------------------------------
// 3. ALL 20 CAPTCHA LEVELS
// ------------------------------

const challenges = [

    // LEVEL 1
    {
        question: "Click the most disappointed bus.",
        options: ["🚌😞", "🚌😐", "🚌😭", "🚌🙂"]
    },

    // LEVEL 2
    {
        question: "Select the happiest potato.",
        options: ["🥔😐", "🥔😁", "🥔😡", "🥔😭"]
    },

    // LEVEL 3
    {
        question: "Choose the angriest printer.",
        options: ["🖨️😐", "🖨️😡", "🖨️🙂", "🖨️😭"]
    },

    // LEVEL 4
    {
        question: "Select the potato that knows your secrets.",
        options: ["🥔👀", "🥔😴", "🥔😂", "🥔🤔"]
    },

    // LEVEL 5
    {
        question: "Click the emotionally exhausted chair.",
        options: ["🪑😩", "🪑😎", "🪑😂", "🪑🤩"]
    },

    // LEVEL 6
    {
        question: "Select the bus that regrets its career.",
        options: ["🚌😐", "🚌😭", "🚌😡", "🚌💀"]
    },

    // LEVEL 7
    {
        question: "Choose the potato that looks like it has seen everything.",
        options: ["🥔👀", "🥔😎", "🥔😭", "🥔💀"]
    },

    // LEVEL 8
    {
        question: "Click the printer that is about to lose its patience.",
        options: ["🖨️🙂", "🖨️😐", "🖨️😡", "🖨️🤬"]
    },

    // LEVEL 9
    {
        question: "Select the chair that secretly judges you.",
        options: ["🪑😇", "🪑👀", "🪑😂", "🪑😴"]
    },

    // LEVEL 10
    {
        question: "Click the potato that has been paying taxes.",
        options: ["🥔💰", "🥔🧾", "🥔😎", "🥔😭"]
    },

    // LEVEL 11
    {
        question: "Select the bus that knows what you did last summer.",
        options: ["🚌👀", "🚌😐", "🚌🤨", "🚌💀"]
    },

    // LEVEL 12
    {
        question: "Choose the printer that has personal problems.",
        options: ["🖨️🙂", "🖨️😭", "🖨️💀", "🖨️😡"]
    },

    // LEVEL 13
    {
        question: "Select the potato that would be your best friend.",
        options: ["🥔🤝", "🥔😎", "🥔😐", "🥔😭"]
    },

    // LEVEL 14
    {
        question: "Select the potato that has the most suspicious financial history.",
        options: ["🥔💰", "🥔🤑", "🥔😐", "🥔💸"]
    },

    // LEVEL 15
    {
        question: "Click the chair that has been waiting for you since 2007.",
        options: ["🪑😴", "🪑😭", "🪑😡", "🪑👀"]
    },

    // LEVEL 16
    {
        question: "Select the bus that secretly wants to become a train.",
        options: ["🚌🚂", "🚌😔", "🚌🚆", "🚌😭"]
    },

    // LEVEL 17
    {
        question: "Choose the printer that has personally betrayed you.",
        options: ["🖨️😇", "🖨️😡", "🖨️💀", "🖨️😭"]
    },

    // LEVEL 18
    {
        question: "Select the potato that would survive a job interview.",
        options: ["🥔😎", "🥔😰", "🥔💀", "🥔🤨"]
    },

    // LEVEL 19
    {
        question: "Click the object that has absolutely no idea why it is here.",
        options: ["🪑❓", "🥔❓", "🚌❓", "🖨️❓"]
    },

    // LEVEL 20
    {
        question: "PROVE THAT YOU ARE NOT A POTATO.",
        options: ["🥔", "🥔", "🥔", "🥔"]
    }

];


// ------------------------------
// 4. FUNNY FAILURE MESSAGES
// ------------------------------

const messages = [

    "❌ Verification failed. Try again.",

    "❌ Nice try. You're still suspicious.",

    "❌ The CAPTCHA doesn't believe you.",

    "❌ Your humanity is questionable.",

    "❌ Incorrect. Even the potato knows better.",

    "❌ A committee of potatoes has rejected your application.",

    "❌ Humanity verification denied.",

    "❌ You are getting worse at being human.",

    "❌ We have discussed your case. The answer is NO.",

    "❌ Your behavior has been reported to the chairs.",

    "❌ The bus refuses to cooperate with you.",

    "❌ The printer has lost trust in you.",

    "❌ Please try being more human.",

    "❌ Suspicious potato activity detected.",

    "❌ We have serious concerns about your humanity."

];


// ------------------------------
// 5. LOAD A CAPTCHA LEVEL
// ------------------------------

function loadChallenge() {

    // Get the current level
    const challenge = challenges[attempt];

    // Change the question
    challengeElement.textContent =
        `LEVEL ${attempt + 1}: ${challenge.question}`;

    // Clear previous options
    optionsElement.innerHTML = "";

    // Reset selected option
    selectedOption = null;


    // Create each option
    challenge.options.forEach(function(option) {

        const optionElement =
            document.createElement("div");

        optionElement.classList.add("option");

        optionElement.textContent = option;


        // When user clicks an option
        optionElement.addEventListener("click", function() {

            // Remove selection from all options
            document
                .querySelectorAll(".option")
                .forEach(function(item) {

                    item.classList.remove("selected");

                });


            // Select this option
            optionElement.classList.add("selected");

            selectedOption = option;

        });


        // Add option to page
        optionsElement.appendChild(optionElement);

    });

}


// ------------------------------
// 6. VERIFY BUTTON
// ------------------------------

verifyButton.addEventListener("click", function() {


    // If nothing is selected
    if (selectedOption === null) {

        messageElement.textContent =
            "⚠️ You didn't even choose anything. Suspicious.";

        return;
    }


    // Increase attempt
    attempt++;


    // Update attempt counter
    attemptElement.textContent = attempt;


    // Pick a random funny message
    const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];


    // Display message
    messageElement.textContent = randomMessage;


    // ------------------------------
    // 7. CHECK IF ALL LEVELS ARE DONE
    // ------------------------------

    if (attempt >= challenges.length) {

        challengeElement.textContent =
            "🎉 FINAL RESULT";

        optionsElement.innerHTML = "";

        messageElement.innerHTML =
            "🎉 CONGRATULATIONS!<br><br>" +
            "You have successfully failed all 20 CAPTCHA levels.<br><br>" +
            "🏆 CERTIFIED HUMAN FAILURE™";

        verifyButton.textContent =
            "TRY AGAIN";

        return;
    }


    // ------------------------------
    // 8. SPECIAL MESSAGES FOR LEVELS
    // ------------------------------

    if (attempt === 5) {

        messageElement.textContent =
            "😐 You've failed 5 times. This is becoming personal.";

    }

    if (attempt === 10) {

        messageElement.textContent =
            "🤨 10 attempts. We are beginning to question your existence.";

    }

    if (attempt === 15) {

        messageElement.textContent =
            "💀 15 attempts. Even the CAPTCHA feels sorry for you.";

    }


    // Load the next challenge
    loadChallenge();

});


// ------------------------------
// 9. TRY AGAIN BUTTON
// ------------------------------

verifyButton.addEventListener("click", function() {

    if (attempt >= challenges.length) {

        attempt = 0;

        attemptElement.textContent = attempt;

        verifyButton.textContent =
            "VERIFY HUMAN";

        messageElement.textContent =
            "";

        loadChallenge();

    }

});


// ------------------------------
// 10. START THE CAPTCHA
// ------------------------------

loadChallenge();