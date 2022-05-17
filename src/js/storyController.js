import storyText from "../json/story.json"

function nextDialogue() {
    const storyContentDiv = document.getElementById("storyContent");

    for (let i = 0; i < storyText.length; i++) {
        if (storyText[i].branch_id != global.dialogueBranch) {
            continue;
        }

        let phraseTag = document.createElement("p");
        if (storyText[i].text.length) {
            let text;
            if (storyText[i].author == "player") {
                text = document.createTextNode(`Ты: ${storyText[i].text}\n`);
            } else {
                text = document.createTextNode(`${storyText[i].author}: ${storyText[i].text}\n`);
            }
            
            phraseTag.appendChild(text);
            storyContentDiv.appendChild(phraseTag);
        }

        if (storyText[i].answers && storyText[i].answers.length) {
            for (let j = 0; j < storyText[i].answers.length; j++) {
                phraseTag = document.createElement("p");
                let buttonTag = document.createElement("button");
                buttonTag.className = "dialogueButton";
                buttonTag.innerHTML =`${storyText[i].answers[j].text}\n`;
                buttonTag.onclick = () => {
                    global.dialogueBranch = storyText[i].answers[j].id;

                    const buttons = document.getElementsByClassName("dialogueButton");
                    while (buttons.length) {
                        buttons[0].remove();
                    }

                    let phraseTag = document.createElement("p");
                    let text;
                    if (!storyText[i].answers[j].actionDescription) {
                        text = document.createTextNode(`Ты: ${storyText[i].answers[j].text}\n`);
                    } else {
                        text = document.createTextNode(storyText[i].answers[j].actionDescription);
                    }
                    phraseTag.appendChild(text);
                    storyContentDiv.appendChild(phraseTag);

                    nextDialogue();
                }
                phraseTag.appendChild(buttonTag);
                storyContentDiv.appendChild(phraseTag);
            }

            break;
        }
    }
}

function makeStory() {
    global.dialogueBranch = 0;

    const buttonTag = document.getElementById("startGame");
    buttonTag.onclick = () => {
        nextDialogue();
        const startBlockTag = document.getElementById("startContent");
        startBlockTag.remove();
    };
}

export default makeStory;
