import { createElement } from '../../../utils/createElement';
import { saveToLocalStorage } from '../../../utils/saveDataToLocalstorage';
import styles from './display.module.scss';

export const createDisplay = (parent) => {
  const theme = JSON.parse(localStorage.getItem('theme'));
  if (theme === 'dark') {
    document.body.classList.add('dark');
  } else {
    document.body.classList.remove('dark');
  }

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
      { data: 'type', value: 'text' },
    ],
  });
  displayInput.addEventListener('input', () => {
    const displayMessage = displayInput.value;
    if (displayMessage.length > 12) {
      displayInput.value = displayMessage.slice(-4);
    }
  });
  const themeForIndicator =
    theme !== 'dark' ? `${styles.theme} ${styles.themeDark}` : styles.theme;
  const darkThemeIndicator = createElement({
    tag: 'span',
    parent: displayWrapper,
    cls: themeForIndicator,
  });
  darkThemeIndicator.addEventListener('click', () => {
    if (document.body.classList.contains('dark')) {
      document.body.classList.remove('dark');
      darkThemeIndicator.classList.add(styles.themeDark);
      saveToLocalStorage('theme', '');
    } else {
      document.body.classList.add('dark');
      darkThemeIndicator.classList.remove(styles.themeDark);
      saveToLocalStorage('theme', 'dark');
    }
  });
  return displayInput;
};
