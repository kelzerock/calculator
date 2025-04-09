import { createElement } from '../../utils/createElement';

export const app = () => {
  createElement({ tag: 'div', cls: 'wrapper', parent: document.body });
};
