import { createElement } from '../../utils/createElement';
import { State } from '../state/state';
import styles from './calculator.module.scss';
import { createDisplay } from './display/display';
import { createKeyboard } from './keyboard/keyboard';

export const createCalculator = (parent) => {
  const calculatorBox = createElement({
    tag: 'div',
    parent,
    cls: styles.calculator,
  });

  const display = createDisplay(calculatorBox);
  const stateCalc = new State(display);
  createKeyboard(calculatorBox, stateCalc);
};
