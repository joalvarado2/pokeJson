import { LitElement, html } from 'lit-element';

class EvolutionList extends LitElement {
  static get properties() {
    return {
      evolutions: { type: Array }
    };
  }

  render() {
    return html`
      <ul>
        ${this.evolutions.map(evolution => html`
          <li>
            <img src="${evolution.image}" alt="${evolution.name}">
            <span>${evolution.name}</span>
            <span>Type: ${evolution.type}</span>
          </li>
        `)}
      </ul>
    `;
  }
}

customElements.define('evolution-list', EvolutionList);
