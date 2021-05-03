const notificationDivElement = document.querySelector('.notification-container');

export function showNotification(type, message) {

    notificationDivElement.innerHTML = message;
    notificationDivElement.classList.add(type);
    notificationDivElement.style.display = "block";

    setTimeout( () => {
        notificationDivElement.classList.remove(type);
        notificationDivElement.style.display = "none";
      }, 2000)
}