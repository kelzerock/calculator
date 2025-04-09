import { KEYS_FOR_KEYBOARD } from '../../../constants/array-with-symbol';
import { createElement } from '../../../utils/createElement';
import styles from './keyboard.module.scss';

export const createKeyboard = (parent, display) => {
  const wrapper = createElement({ tag: 'div', parent, cls: styles.wrapper });
  KEYS_FOR_KEYBOARD.forEach((key) => {
    let newStyles;
    if (key.color === 'gray') {
      newStyles = `${styles.key} ${styles.keyGray}`;
    }
    if (key.color === 'black') {
      newStyles = `${styles.key} ${styles.keyBlack}`;
    }
    if (key.color === 'orange') {
      newStyles = `${styles.key} ${styles.keyOrange}`;
    }
    if (key.text === '0') {
      newStyles = `${styles.keyZero} ${styles.key} ${styles.keyGray}`;
    }
    const keyButton = createElement({
      tag: 'span',
      parent: wrapper,
      cls: newStyles,
      text: key.text,
    });
    console.log(keyButton);
  });
  console.log(display);
};
