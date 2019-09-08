const template = `
<style>
:host {
    box-sizing: border-box;
}
</style>
<div class="container">
    <slot></slot>
</div>
`;

class Box extends HTMLElement {
  static name = 'lambda-box';

  static get observedAttributes() {
    return ['display', 'width', 'height', 'style'];
  }

  constructor() {
    super();

    const shadowRoot = this.attachShadow({ mode: 'open' });

    this.render(shadowRoot);
  }

  attributeChangeCallback(attr, ov, nv) {
    if (ov !== nv) {
      this[attr] = this.hasAttribute(attr);
    }
  }

  connectedCallback() {
    this.rect = this.getBoundingClientRect();
    this.display = this.display;
  }

  get container() {
    return this.shadowRoot.querySelector('.container');
  }

  get display() {
    return this.getAttribute('display');
  }

  set display(value) {
    this.setAttribute('display', value);

    this.container.style.display = value;
  }

  get width() {
    const { rect } = this;

    return rect.width;
  }

  set width(value) {
    this.container.style.width = width;
  }

  get height() {
    const { rect } = this;

    return rect.height;
  }

  set height(value) {
    this.container.style.height = height;
  }

  get style() {
    return this.container.style;
  }

  set style(value) {
    if (typeof value !== 'object') return;

    Object.entries(value).forEach(entry => {
      const [name, value] = entry;
      this.container[name] = value;
    });
  }

  render(shadowRoot) {
    shadowRoot.innerHTML = template;
  }
}

export default Box;
