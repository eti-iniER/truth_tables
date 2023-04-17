const OPERATORS = ["∧", "~", "∨", "→", "↔", "(", ")"];
let inputForm = {};
window.addEventListener("load", () => {
    inputForm = document.getElementById("logic-input");
})

function addSymbol(char) {
    inputForm.value += char;
    inputForm.focus();
};

function doLogic(a, b, operator) {
    if (operator === "OR") {
        return (a || b);
    } else if (operator === "AND") {
        return (a && b);
    } else if (operator === "CONDITIONAL") {
        // only false when T -> F
        if (a === 1 && b === 0) {
            return 0;
        } else {
            return 1;
        }
    } else if (operator === "BICONDITIONAL") {
        // T when both are the same, false otherwise
        if (a == b) {
            return 1;
        } else {
            return 0;
        }
    }
};

function evaluate(string) {
    if (string.length == 1) {
        return Number(string);
    } else {
        ;
    }
}

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