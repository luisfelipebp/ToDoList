export default function closeTask(): void {
  const btnCloses = document.querySelectorAll<HTMLButtonElement>(".btn-close");
  if (btnCloses) {
    btnCloses.forEach((btnClose) => {
      btnClose?.addEventListener("click", () => {
        const taskBox = btnClose.parentNode as HTMLDivElement;
        const containerList = document.querySelector(".container-list");
        if (containerList && taskBox) {
          containerList.removeChild(taskBox);
          localStorage.removeItem(taskBox.id);
        }
      });
    });
  }
}
