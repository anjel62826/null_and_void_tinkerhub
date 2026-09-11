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
        challenge.question;

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

Click the happiest potato.
Click the bus that looks like it missed its stop.
Select the chair that has the most emotional damage.
Choose the printer that owes you money.
Select the potato that your mother would trust.
Click the bus that knows what you did last summer.
Select the chair that has seen your browser history.
Type the sound of a disappointed calculator.
Identify which potato has been paying taxes.
Prove that you are not secretly a potato.
