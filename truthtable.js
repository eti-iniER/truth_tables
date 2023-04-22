const OPERATORS = ["∧", "~", "∨", "→", "↔"];
const NEGATION = "~";
const CONJUNCTION = "∧";
const DISJUNCTION = "∨";
const IMPLICATION = "→";
const BICONDITIONAL = "↔";

let inputForm = {};
let logicOperatorContainer = {}

window.addEventListener("load", () => {
    // initializes the app
    inputForm = document.getElementById("logic-input");
    inputForm.addEventListener("change", () => {
        inputForm.value = inputForm.value.toLowerCase();
        console.log("Changed!")
    });
    logicOperatorContainer = document.getElementById("logic-operator-container");
})

function addSymbol(char) {
    // adds a logical symbol to the input form
    inputForm.value += char;
    inputForm.focus();
};

function makeLowercase(element, event) {
    // converts everything inn the imput form to lowercase
    element.value = element.value.toLowerCase();
}

function doLogic(a, b, operator) {
    /* 
        This function works when A and B are in 1s and 0s. 
        It evaluates the logic for every symbol except NOT
    */
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

function getLogicVariables(string) {
    // gets all the logical variables in the string
    let variables = [];
    for (let char of string) {
        if (!OPERATORS.includes(char) && char !== " " && !variables.includes(char)) {
            variables.push(char);
        };
    };
    return variables;
};

logicOperatorContainer.style.display = "None";
function evaluateLogicString(event) {
    // The main function of the program
    let logicString = inputForm.value
    let variables = getLogicVariables(logicString);
    console.log(variables);
    let simplified = simplify(logicString);
    console.log(simplified);
}