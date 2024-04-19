import { LitElement, html } from 'lit-element';

class PokemonList extends LitElement {
  static get properties() {
    return {
      pokemonData: { type: Array }
    };
  }

  constructor() {
    super();
    this.pokemonData = [];
    this.loadPokemonData();
  }

  loadPokemonData() {
    fetch('data/pokemon-data.json')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.pokemonData = data.pokemon;
      })
      .catch(error => {
        console.error('Error fetching Pokemon data:', error);
      });
  }

  render() {
    return html`
      <ul>
        ${this.pokemonData.map(pokemon => html`
          <li @click="${() => this._handlePokemonClick(pokemon)}">
            <img src="${pokemon.image}" alt="${pokemon.name}">
            <span>${pokemon.name}</span>
            <span>Type: ${pokemon.type}</span>
          </li>
        `)}
      </ul>
    `;
  }

  _handlePokemonClick(pokemon) {
    // Implementar lógica para mostrar las evoluciones del Pokémon seleccionado
  }
}

customElements.define('pokemon-list', PokemonList);
