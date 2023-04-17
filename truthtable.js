const OPERATORS = ["∧", "~", "∨", "→", "↔", "(", ")"];
let inputForm = {};
window.addEventListener("load", () => {
    inputForm = document.getElementById("logic-input");
})

function addSymbol(char) {
    inputForm.value += char;
    inputForm.focus();
};

function getTokens(string) {
    let variables = [];
    for (let char of string) {
        if (!OPERATORS.includes(char) && char !== " " && !variables.includes(char)) {
            variables.push(char);
        };
    };
    return variables;
};

function evaluateLogicString(event) {
    let logicString = inputForm.value.toLowerCase();
    let variables = getTokens(logicString);
    console.log(variables);
}