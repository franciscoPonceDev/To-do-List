// eslint-disable-next-line import/no-cycle
import { listCreate } from './taskAdd.js';

export default (items) => {
  const deleteButtons = document.querySelectorAll('i');
  deleteButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
      items.splice(index, 1);
      items.forEach((item, i) => {
        item.index = (i + 1);
      });
      localStorage.localData = JSON.stringify(items);
      listCreate(items);
    });
  });
};