let attempt = 0;
let selectedOption = null;

const challengeElement = document.getElementById("challenge");
const optionsElement = document.getElementById("options");
const verifyButton = document.getElementById("verifyButton");
const messageElement = document.getElementById("message");
const attemptElement = document.getElementById("attempt");

const challenges = [
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

function loadChallenge() {

    const challenge =
        challenges[attempt % challenges.length];

    challengeElement.textContent =
    `LEVEL ${attempt + 1}: ${challenge.question}`;

    optionsElement.innerHTML = "";

    challenge.options.forEach(option => {

        const optionElement =
            document.createElement("div");

        optionElement.classList.add("option");

        optionElement.textContent = option;

        optionElement.addEventListener("click", function() {

            document
                .querySelectorAll(".option")
                .forEach(item => {
                    item.classList.remove("selected");
                });

            optionElement.classList.add("selected");

            selectedOption = option;

        });

        optionsElement.appendChild(optionElement);

    });
}

loadChallenge();

verifyButton.addEventListener("click", function() {

    if (selectedOption === null) {

        messageElement.textContent =
            "⚠️ You didn't even choose anything. Suspicious.";

        return;
    }

    attempt++;

    attemptElement.textContent = attempt;

    const messages = [
        "❌ Verification failed. Try again.",
        "❌ Nice try. You're still suspicious.",
        "❌ Incorrect. Your humanity is questionable.",
        "❌ The CAPTCHA doesn't believe you.",
        "❌ A committee of potatoes has rejected your application.",
        "❌ Humanity verification denied.",
        "❌ You are getting worse at being human.",
        "❌ We have discussed your case. The answer is NO."
    ];

    const randomMessage =
        messages[Math.floor(Math.random() * messages.length)];

    messageElement.textContent = randomMessage;

    selectedOption = null;

    loadChallenge();

});

const hellLevels = [
    "Prove that you are human.",
    "Prove that you are REALLY human.",
    "Prove that you deserve human rights.",
    "The CAPTCHA no longer trusts you.",
    "This has become personal."
];

if (attempt < 5) {

    document.querySelector(".subtitle").textContent =
        hellLevels[attempt];

}

{
    question: "Level 14: Select the potato that has the most suspicious financial history.",
    options: ["🥔💰", "🥔🤑", "🥔😐", "🥔💸"]
},

{
    question: "Level 15: Click the chair that has been waiting for you since 2007.",
    options: ["🪑😴", "🪑😭", "🪑😡", "🪑👀"]
},

{
    question: "Level 16: Select the bus that secretly wants to become a train.",
    options: ["🚌🚂", "🚌😔", "🚌🚆", "🚌😭"]
},

{
    question: "Level 17: Choose the printer that has personally betrayed you.",
    options: ["🖨️😇", "🖨️😡", "🖨️💀", "🖨️😭"]
},

{
    question: "Level 18: Select the potato that would survive a job interview.",
    options: ["🥔😎", "🥔😰", "🥔💀", "🥔🤨"]
},

{
    question: "Level 19: Click the object that has absolutely no idea why it is here.",
    options: ["🪑❓", "🥔❓", "🚌❓", "🖨️❓"]
},

{
    question: "Level 20: PROVE THAT YOU ARE NOT A POTATO.",
    options: ["🥔", "🥔", "🥔", "🥔"]
}