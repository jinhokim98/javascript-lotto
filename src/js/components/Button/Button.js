export default class Button {
  constructor({
    id,
    classes = [],
    type = 'button',
    text = '',
    disabled = false,
  }) {
    this.id = id;
    this.classes = classes;
    this.type = type;
    this.text = text;
    this.disabled = disabled;
  }

  getTemplate() {
    return `<button ${this.id ? `id=${this.id}` : ''} type="${
      this.type
    }" class="${this.classes.join(' ')}" ${this.disabled ? 'disabled' : ''}>${
      this.text
    }</button>`;
  }
}