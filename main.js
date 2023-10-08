let addNotesBtn = document.querySelector("button.add");
let notesContainer = document.querySelector(".notes-container");
let pText = Array.from(document.getElementsByClassName("p-text"));


addNotesBtn.onclick = () => {
addNotesToPage();
}
function addNotesToPage() {
    let div = document.createElement("div");
    div.className = 'input-box';
    let noteText = document.createElement("p");
    noteText.className = "p-text";
    noteText.setAttribute('contenteditable',"true");
    let del = document.createElement("i");
    del.className = "fa-solid fa-trash trash";
    div.appendChild(noteText);
    div.appendChild(del);
    notesContainer.appendChild(div);
    updataStorage();
}
notesContainer.addEventListener("click", (e) => {
    if(e.target.classList.contains('trash')) {
    e.target.parentElement.remove();
    updataStorage();
    }else if(e.target.tagName === "P") {
        pText = Array.from(document.getElementsByClassName("p-text"));
        console.log(pText);
        pText.forEach(nt =>{
            nt.onkeyup = () => {
                console.log("up");
                updataStorage();
               
            }
        })
    }
})
function updataStorage() {
    localStorage.setItem("notesContent",notesContainer.innerHTML);
}
function getFromLocalStorage() {
    notesContainer.innerHTML =localStorage.getItem("notesContent");
}
getFromLocalStorage();

document.addEventListener('keydown', event => {
    if(event.key === "Enter") {
        document.execCommand("insertLineBreak");
        event.preventDefault();
    }
})

