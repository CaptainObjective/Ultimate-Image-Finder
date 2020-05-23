import store from '../Store';
import axios from 'axios';

class Token extends HTMLElement {
  connectedCallback() {
    store.token = localStorage.getItem('token') == null ? null : localStorage.getItem('token');
    this.getEmail();
    this.render();
  }

  async getEmail() {
    try {
      const response = await axios.get('/api/me', {
        headers: {
          'x-auth': `${store.token}`,
        },
      });
      store.user = response.data.user;
      console.log(store.user);
    } catch (ex) {
      // $('body').toast({
      //   message: ex.response.data.error,
      // });
      console.error(ex);
    }
  }

  render() {
    if (store.token == null) {
      this.innerHTML = `<app-loginbutton class="toAction column five wide Images userPlace choose-box"></app-loginbutton>`;
    } else {
      this.innerHTML = `
    <div class="toAction column five wide Images userPlace choose-box">
        <app-settingsbutton></app-settingsbutton>
        <label>${store.user.email}</label>
    </div>`;
    }
  }
}
export default Token;
