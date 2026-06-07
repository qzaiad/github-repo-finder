import { loaderElement } from "./elements";

export default function (loadingState) {
  /**
   * @param loadingState if false <=> set hidden class
   */
  loaderElement.classList.toggle("hidden", !loadingState);
}