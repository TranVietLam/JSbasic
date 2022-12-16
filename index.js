const jobs = [
    {
        name: "Quét Nhà"
    },
    {
        name: "Lau Nhà"
    },
    {
        name: "Quét Sân"
    },
]

const elJobs = document.getElementsByClassName("job-list");

const renderJobsTodo = () => {
    removeAllChildNodes(elJobs);
    jobs.forEach((currentItems, index) => {
        const todo = document.createElement("li");
        todo.className = "job-items";
        todo.textContent = currentItems.name;
        elJobs[0].appendChild(todo);
    });
};
renderJobsTodo();

function removeAllChildNodes(parent) {
    while (parent[0].firstChild) {
        parent[0].removeChild(parent[0].firstChild);
    }
}

const jobItems = document.getElementsByClassName("job-items");

const doingJobs = document.getElementsByClassName("job-doing");
const doing = [];

const doneJobs = document.getElementsByClassName("job-done");
const done = [];



for ( let i = 0; i < jobItems.length; i++) {
    jobItems[i].addEventListener("click", () =>{
        console.log(jobItems[i]);
        doing.push(jobs[i]);
        jobs.splice(i, 1);
        renderJobsTodo()

        doing.forEach((currentItems, index) => {
            const todo = document.createElement("li");
            todo.className = "job-doing";
            todo.textContent = currentItems.name;
            doingJobs[0].appendChild(todo);
        });
    });
};
