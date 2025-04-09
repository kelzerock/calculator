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
      { data: 'value', value: '10923' },
    ],
  });

  return displayInput;
};
