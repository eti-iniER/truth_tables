const OPERATORS = ["∧", "~", "∨", "→", "↔", "(", ")"];
const NEGATION = "~";
const CONJUNCTION = "∧";
const DISJUNCTION = "∨";
const IMPLICATION = "→";
const BICONDITIONAL = "↔";

let inputForm = {};
window.addEventListener("load", () => {
    inputForm = document.getElementById("logic-input");
    inputForm.addEventListener("change", () => {
        inputForm.value = inputForm.value.toLowerCase();
        console.log("Changed!")
    });
})
function addSymbol(char) {
    inputForm.value += char;
    inputForm.focus();
};

function enteredLogic(element, event) {
    element.value = element.value.toLowerCase();
}

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

function simplify(string) {
    /* 
        This function will split the string based on parentheses
    */
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