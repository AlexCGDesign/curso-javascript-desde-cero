const template = document.querySelector("template");
const notification = template.content.cloneNode(true);


notification.firstElementChild.textContent = "Modificado con JS";
notification.firstElementChild.classList.replace("success", "error");

document.body.prepend(notification);
