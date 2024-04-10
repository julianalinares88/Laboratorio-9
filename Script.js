const messageContainer= document.getElementById ("message-container");
const inputs = document.querySelectorAll (".text-field");
const buttons = document.querySelectorAll (".send-button");


const buttonsArray = Array.from(buttons);
const inputsArray = Array.from(inputs);

buttons.forEach((button)=>{
    button.addEventListener("click", () => {
        const message = document.createElement("p");
        message.textContent = inputs [buttonsArray.indexOf(button)].value;
        messageContainer.appendChild(message);
        inputs [buttonsArray.indexOf(button)].value = "";
        message.style.color = messageColor(buttonsArray.indexOf(button));

    })
})

function messageColor(inputIndex) {
    switch (inputIndex) {
        case 0:
        return "blue";
        break;

        case 1:
        return "red";
        break;
    }
}