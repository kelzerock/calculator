export const createElement = ({ tag, parent, cls, text, attr }) => {
  if (!tag) return null;

  const element = document.createElement(tag);
  if (cls) {
    element.className = cls;
  }

  if (parent) {
    parent.append(element);
  }

  if (text) {
    element.textContent = text;
  }

  if (attr) {
    attr.forEach((attribute) => {
      const { data, value } = attribute;
      element.setAttribute(data, value);
    });
  }

  return element;
};
