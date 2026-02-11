const input = document.querySelector(".input");
const buttons = document.querySelectorAll(".button");

let expression = "";

input.readOnly = true;

buttons.forEach(button => {
    button.addEventListener("click", () => {
        let value = button.innerText;
        if (value === "A") {
            expression = "";
            input.value = "";
        }
        else if (value === "D") {
            expression = expression.slice(0, -1);
            input.value = expression;
        }
        else if (value === "=") {
            try {
                let finalExpression = expression.replace(/"*"/g, "*");

                let result = eval(finalExpression);

                input.value = result;
                expression = result.toString();
            } catch {
                input.value = "Error";
                expression = "";
            }
        }
        else {
            expression += value;
            input.value = expression;
        }
    });
});
