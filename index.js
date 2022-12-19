window.addEventListener('DOMContentLoaded', (event) => {
// job: status -> todo, doing, done
let jobs = [
  {
    name: "Quét Nhà",
    status: "todo",
  },
  {
    name: "Rửa chén",
    status: "todo",
  },
  {
    name: "Coi phim",
    status: "todo",
  },
  {
    name: "Lau Nhà",
    status: "doing",
  },
  {
    name: "Quét Sân",
    status: "done",
  },
];

const dataJobsFromLT = JSON.parse(localStorage.getItem("listJob"));

if ( dataJobsFromLT && dataJobsFromLT.length > 0) {
  jobs = dataJobsFromLT;
};

const elJobs = document.getElementsByClassName("job-list");

const doingJobs = document.getElementsByClassName("job-doings");
const doing = [];

const doneJobs = document.getElementsByClassName("jobs-done");
const done = [];

const addEventItem = () => {
  const jobItems = document.getElementsByClassName("job-items");

  for (let i = 0; i < jobItems.length; i++) {
    jobItems[i].addEventListener("click", (event) => {
      const indexItem = jobItems[i].getAttribute("data-index");

      if (jobs[indexItem].status === "todo") {
        jobs[indexItem].status = "doing";
        localStorage.setItem("listJob", JSON.stringify(jobs));
        removeAllChildNodes(elJobs);
        removeAllChildNodes(doingJobs);
        renderJobsTodo();
        renderJobDoing();
        addEventItem();
        return;
      } else if (jobs[indexItem].status === "doing") {
        jobs[indexItem].status = "done";
        localStorage.setItem("listJob", JSON.stringify(jobs));
        removeAllChildNodes(doingJobs);
        removeAllChildNodes(doneJobs);
        renderJobDoing();
        renderDone();
        addEventItem();
        return;
      }
    });
  }
};

const renderJobDoing = () => {
  jobs.forEach((currentItems, index) => {
    if (currentItems.status === "doing") {
      const todo = document.createElement("li");
      todo.className = "job-items";
      todo.setAttribute("data-index", index);
      todo.textContent = currentItems.name;
      doingJobs[0].appendChild(todo);
    }
  });
};
renderJobDoing();

const renderJobsTodo = () => {
  jobs.forEach((currentItems, index) => {
    if (currentItems.status === "todo") {
      const todo = document.createElement("li");
      todo.className = "job-items";
      todo.textContent = currentItems.name;
      todo.setAttribute("data-index", index);
      elJobs[0].appendChild(todo);
    }
  });
};
renderJobsTodo();

const renderDone = () => {
  jobs.forEach((currentItems, index) => {
    if (currentItems.status === "done") {
      const todo = document.createElement("li");
      todo.className = "job-items";
      todo.setAttribute("data-index", index);
      todo.textContent = currentItems.name;
      doneJobs[0].appendChild(todo);
    }
  });
};
renderDone();

function removeAllChildNodes(parent) {
  while (parent[0].firstChild) {
    parent[0].removeChild(parent[0].firstChild);
  }
}

addEventItem();

});