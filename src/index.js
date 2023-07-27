import { DOM_CONTENT } from './InitialDOM';
import { DOM_EVENTS } from './DOMEvents';
//import {getTasks, getProjects} from './local_storage';

window.addEventListener('DOMContentLoaded', () => {
  //getTasks();
  //getProjects();
});
document.addEventListener('DOMContentLoaded', () => {
  DOM_CONTENT();
  DOM_EVENTS();
});
