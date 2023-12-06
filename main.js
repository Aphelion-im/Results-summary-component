import './styles.scss';
import records from './data.json' assert {type: 'json'}; // Or with fetch()

window.addEventListener("load", () => {

    const summary = document.querySelector(".summary");

    const header = document.createElement("h2");
    summary.appendChild(header);
    header.append("Summary");

    // Dynamic content from the JSON file:
    for (let i = 0; i < records.length; i++) {
        const paragraph = document.createElement("p");
        paragraph.classList.add(`${records[i].category.toLowerCase()}`);
        const image = document.createElement("img");
        image.src = `${records[i].icon}`;
        image.alt = `${records[i].category} icon`;
        paragraph.appendChild(image);
        paragraph.append(`${records[i].category}`);
        const score = document.createElement("span");
        paragraph.appendChild(score);
        const emphasis = document.createElement("strong");
        score.appendChild(emphasis);
        emphasis.append(`${records[i].score}`);
        score.append(" / 100");
        summary.appendChild(paragraph)
    }

    const bigButton = document.createElement("button");
    bigButton.type = "button";
    bigButton.append("Continue");
    summary.appendChild(bigButton);
});

