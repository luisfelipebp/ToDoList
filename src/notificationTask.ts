export default function notificationTask(text: string): void {
  const notificationBox = document.createElement("div");
  if (notificationBox && document.body) {
    notificationBox.classList.add("notification");
    notificationBox.innerHTML = `<p>${text}</p>`;
    document.body.appendChild(notificationBox);
    setTimeout(() => {
      document.body.removeChild(notificationBox);
    }, 2000);
  }
}
