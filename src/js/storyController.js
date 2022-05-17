import storyText from "../json/story.json"

function nextDialogue() {
    const storyContentDiv = document.getElementById("storyContent");
    const branchObjects = [];
    for (let i = 0; i < storyText.length; i++) {
        if (storyText[i].branch_id == global.dialogueBranch) {
            branchObjects.push(storyText[i]);
        }
    }
    const storyTextObj = branchObjects[global.dialogueBranchCounter];

    let phraseTag = document.createElement("p");
    if (storyTextObj.text.length) {
        let text;
        if (storyTextObj.author == "player") {
            text = document.createTextNode(`Ты: ${storyTextObj.text}\n`);
        } else {
            text = document.createTextNode(`${storyTextObj.author}: ${storyTextObj.text}\n`);
        }
        
        phraseTag.appendChild(text);
        storyContentDiv.appendChild(phraseTag);
    }

    if (storyTextObj.answers && storyTextObj.answers.length) {
        for (let j = 0; j < storyTextObj.answers.length; j++) {
            phraseTag = document.createElement("p");
            let buttonTag = document.createElement("button");
            buttonTag.className = "dialogueButton";
            buttonTag.innerHTML =`${storyTextObj.answers[j].text}\n`;
            buttonTag.onclick = (event) => {
                console.log("button moment")
                global.dialogueBranch = storyTextObj.answers[j].id;
                global.dialogueBranchCounter = 0;

                const buttons = document.getElementsByClassName("dialogueButton");
                while (buttons.length) {
                    buttons[0].remove();
                }

                let phraseTag = document.createElement("p");
                let text;
                if (!storyTextObj.answers[j].actionDescription) {
                    text = document.createTextNode(`Ты: ${storyTextObj.answers[j].text}\n`);
                } else {
                    text = document.createTextNode(storyTextObj.answers[j].actionDescription);
                }
                phraseTag.appendChild(text);
                storyContentDiv.appendChild(phraseTag);

                event.stopPropagation()
            }
            phraseTag.appendChild(buttonTag);
            storyContentDiv.appendChild(phraseTag);
        }
    }

    global.dialogueBranchCounter++;
}

function setNextClicker() {
    console.log(global.dialogueBranchCounter);
    const dialogueButton = document.getElementsByClassName("dialogueButton");
    console.log(dialogueButton);
    if (!dialogueButton.length) {
        console.log("window moment")
        nextDialogue();
    }
}

function makeStory() {
    global.dialogueBranch = 0;
    global.dialogueBranchCounter = 0;

    const buttonTag = document.getElementById("startGame");
    buttonTag.onclick = () => {
        const startBlockTag = document.getElementById("startContent");
        startBlockTag.remove();

        window.onclick = setNextClicker;
    };
}
export default makeStory;
