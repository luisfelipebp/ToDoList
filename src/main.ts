import newTask from "./newTask.js";
import closeTask from "./closeTask.js";
import checkBox from "./checkBox.js";
import saveLocalStorage from "./saveLocalStorage.js";

saveLocalStorage();
closeTask();
checkBox();

const formTask = document.querySelector<HTMLFormElement>(".new-task");

formTask?.addEventListener("submit", newTask);
