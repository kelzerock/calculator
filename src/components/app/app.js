import { createElement } from '../../utils/createElement';
import { createCalculator } from '../calculator/calculator';
import styles from './app.module.scss';
import { createFooter } from './footer/footer';
import { createHeader } from './header/header';

const mainContainers = [
  {
    tag: 'header',
    cls: styles.header,
  },
  {
    tag: 'main',
    cls: styles.main,
  },
  {
    tag: 'footer',
    cls: styles.footer,
  },
];

export const app = () => {
  const wrapper = createElement({
    tag: 'div',
    cls: styles.wrapper,
    parent: document.body,
  });
  const [header, main, footer] = mainContainers.map((el) =>
    createElement({ tag: el.tag, parent: wrapper, cls: el.cls, text: el.text })
  );

  createHeader(header);
  createCalculator(main);
  createFooter(footer);
};
