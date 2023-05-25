export default function saveLocalStorage(): void {
  const containerList =
    document.querySelector<HTMLDivElement>(".container-list");
  const taskLocalStorage = Object.keys(localStorage);
  if (taskLocalStorage && containerList) {
    taskLocalStorage.forEach((taskLocalIndex) => {
      if (taskLocalIndex.startsWith("task-")) {
        const saveTaks = localStorage.getItem(taskLocalIndex);
        containerList.innerHTML += saveTaks;
      }
    });
  }
}
