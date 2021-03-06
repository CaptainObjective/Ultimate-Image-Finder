import { fromEvent } from 'rxjs';
import store from '../Store';
class SearchBar extends HTMLElement {
  connectedCallback() {
    this.render();
    this.input = this.querySelector('.input-legit');
    store.searchTextInput = fromEvent(this.input, 'input');
  }

  render() {
    this.innerHTML = `
    <div class="ui big right icon input four wide column searchBarMain">
      <i class="search icon"></i>
      <input class="input-legit" type="text" placeholder="Search big...">
    </div>`;
  }
}

export default SearchBar;
