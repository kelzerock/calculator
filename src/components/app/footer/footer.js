import { createElement } from '../../../utils/createElement';
import styles from './footer.module.scss';

export const createFooter = (parent) => {
  createElement({
    tag: 'a',
    parent,
    cls: styles.link,
    text: 'Created by Aleksei Zhuchkov, 2025',
    attr: [
      { data: 'href', value: 'https://github.com/kelzerock' },
      { data: 'target', value: '_blank' },
    ],
  });
};
