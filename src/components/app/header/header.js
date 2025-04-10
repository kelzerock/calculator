import { createElement } from '../../../utils/createElement';
import styles from './header.module.scss';

export const createHeader = (parent) => {
  createElement({ tag: 'h1', parent, cls: styles.title, text: 'Calculator' });
};
