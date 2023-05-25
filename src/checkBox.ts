export default function checkBox(): void {
  const checkboxes = document.querySelectorAll<HTMLInputElement>(".btn-check");
  checkboxes?.forEach((checkbox) => {
    checkbox?.addEventListener("change", () => {
      const taskBox = checkbox.parentNode as HTMLDivElement;

      if (checkbox.checked) {
        taskBox?.classList.add("marked");
      } else {
        taskBox?.classList.remove("marked");
      }
    });
  });
}
