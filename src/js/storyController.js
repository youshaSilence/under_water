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
    const descTag = document.createElement("span");

    if (storyTextObj.text.length) {
        let text;
        let text2;
        if (storyTextObj.author) {
            const splitted = storyTextObj.text.split(' - ');
            
            text = document.createTextNode(`- ${splitted[0]}\n`);

            if (splitted[1]) {
                const descText = document.createTextNode(` *${splitted[1]}* `);
                descTag.appendChild(descText);
                descTag.className = "dialogueDesc";
            }

            if (splitted[2]) {
                text2 = document.createTextNode(` ${splitted[2]}\n`);
            }

            phraseTag.className = storyTextObj.author;
        } else {
            text = document.createTextNode(`${storyTextObj.text}\n`);
            phraseTag.className = "normalText";
        }
        
        phraseTag.appendChild(text);
        phraseTag.appendChild(descTag);
        if (text2) {
            phraseTag.appendChild(text2);
        }
        storyContentDiv.appendChild(phraseTag);
    }

    if (storyTextObj.answers && storyTextObj.answers.length) {
        for (let j = 0; j < storyTextObj.answers.length; j++) {
            phraseTag = document.createElement("p");
            let buttonTag = document.createElement("button");
            buttonTag.className = "dialogueButton";
            buttonTag.innerHTML =`${storyTextObj.answers[j].text}\n`;
            buttonTag.onclick = (event) => {
                global.dialogueBranch = storyTextObj.answers[j].id;
                global.dialogueBranchCounter = 0;

                const buttons = document.getElementsByClassName("dialogueButton");
                while (buttons.length) {
                    buttons[0].remove();
                }

                let phraseTag = document.createElement("p");
                let text;
                if (storyTextObj.author) {
                    text = document.createTextNode(`- ${storyTextObj.answers[j].text}`);
                    phraseTag.className = storyTextObj.author;
                } else {
                    if (storyTextObj.answers[j].displayText) {
                        text = document.createTextNode(storyTextObj.answers[j].displayText);
                    } else {
                        text = document.createTextNode(storyTextObj.answers[j].text);
                    }
                    phraseTag.className = "normalText";
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

    if (storyTextObj.next_id) {
        global.dialogueBranch = storyTextObj.next_id;
        global.dialogueBranchCounter = 0;
    }
}

function setNextClicker() {
    const dialogueButton = document.getElementsByClassName("dialogueButton");
    if (!dialogueButton.length) {
        nextDialogue();
        const storyContent = document.getElementById("storyContent");
        // window.scroll(0, document.body.clientHeight);
        storyContent.scroll(0, storyContent.scrollHeight);
    }
}

function makeStory() {
    global.dialogueBranch = 0;
    global.dialogueBranchCounter = 0;

    // Space in the bottom of the page
    const fool = document.getElementById("fool");
    fool.id = undefined;

    const storyContent = document.getElementById("storyContent");
    storyContent.id = undefined;

    const buttonTag = document.getElementById("startGame");
    buttonTag.onclick = () => {
        const startBlockTag = document.getElementById("startContent");
        startBlockTag.remove();

        fool.id = "fool";
        storyContent.id = "storyContent";

        window.onclick = setNextClicker;
    };
}
export default makeStory;
