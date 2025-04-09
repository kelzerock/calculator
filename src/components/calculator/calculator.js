import { createElement } from '../../utils/createElement';
import styles from './calculator.module.scss';
import { createDisplay } from './display/display';
import { createKeyboard } from './keyboard/keyboard';

export const createCalculator = (parent) => {
  const calculatorBox = createElement({
    tag: 'div',
    parent,
    cls: styles.calculator,
  });

  createDisplay(calculatorBox);
  createKeyboard(calculatorBox);
};
