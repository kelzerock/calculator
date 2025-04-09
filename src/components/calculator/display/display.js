import { createElement } from '../../../utils/createElement';
import styles from './display.module.scss';

export const createDisplay = (parent) => {
  const displayWrapper = createElement({
    tag: 'div',
    parent,
    cls: styles.wrapper,
  });
  const displayInput = createElement({
    tag: 'input',
    parent: displayWrapper,
    cls: styles.display,
    attr: [
      { data: 'readonly', value: '' },
      { data: 'type', value: 'number' },
    ],
  });
  displayInput.addEventListener('input', () => {
    console.log('dd');
    const displayMessage = displayInput.value;
    if (displayMessage.length > 12) {
      displayInput.value = displayMessage.slice(-4);
    }
  });

  return displayInput;
};
