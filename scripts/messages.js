import { messageElement } from "./elements";

const getErrorMessage = () => {
  return messageElement.textContent;
}

const setErrorMessage = (e) => {
  messageElement.textContent = e;
}

export {
  getErrorMessage,
  setErrorMessage,
}