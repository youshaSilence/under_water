import storyText from "../json/story.json"

function nextDialogue() {
    const storyContentDiv = document.getElementById("storyContent");

    for (let i = 0; i < storyText.length; i++) {
        if (storyText[i].branch_id != global.dialogueBranch) {
            continue;
        }

        let phraseTag = document.createElement("p");
        if (storyText[i].text.length) {
            let text = document.createTextNode(`${storyText[i].author}: ${storyText[i].text}\n`);
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
                    let text = document.createTextNode(`${storyText[i].author}: ${storyText[i].answers[j].text}\n`);
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

    nextDialogue();
}

export default makeStory;
