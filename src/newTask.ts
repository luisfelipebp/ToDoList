import checkBox from "./checkBox.js";
import closeTask from "./closeTask.js";
import notificationTask from "./notificationTask.js";

const containerList = document.querySelector<HTMLDivElement>(".container-list");

function clearText(el: HTMLInputElement): void {
  el.value = "";
}

export default function newTask(event: SubmitEvent): void {
  event?.preventDefault();
  const taskText = document.querySelector<HTMLInputElement>("#task-text");

  if (containerList && taskText && taskText.value.trim() !== "") {
    containerList.innerHTML += `
    <div class="task-box" id="task-${containerList.childElementCount}">
      <input type="checkbox" class="btn-check"/>
      <p>${taskText.value}</p>
      <button class="btn-close">X</button>
    </div>
  `;

    const tasks = document.querySelectorAll(".task-box");
    tasks.forEach((task, index) => {
      if (index === +task.id.replace("task-", "")) {
        localStorage.setItem(`task-${index}`, task.outerHTML);
      }
    });
    notificationTask("Você adicionou uma nova tarefa.");
  }

  checkBox();
  closeTask();

  if (taskText) {
    clearText(taskText);
  }
}
