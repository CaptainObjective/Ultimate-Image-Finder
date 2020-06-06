import store from '../Store';
import $ from 'jquery';

class SettingsButton extends HTMLElement {
  connectedCallback() {
    this.render();
    this.querySelector('#wrenchIcon').addEventListener('click', () => {
      this.openDropDown();
    });
    this.querySelector('#setAvatar').addEventListener('click', () => {
      this.openAvatarModal();
    });
    this.querySelector('#logOut').addEventListener('click', () => {
      this.logOut();
    });
    this.querySelector('#resetPassword').addEventListener('click', () => {
      this.resetPassword();
    });
  }

  logOut() {
    localStorage.removeItem('token');
    store.token.next(null);
  }

  openDropDown() {
    $('.ui.dropdown').dropdown('refresh');
  }

  render() {
    this.innerHTML = `
    <div class="ui icon top left pointing dropdown button">
     <i class="wrench icon" id = "wrenchIcon"></i>
     <div class="menu">
      <div class="item" id = "favourites">Favourites</div>
      <div class="item" id = "setAvatar">Set avatar</div>
      <div class="item" id = "resetPassword">Reset password</div>
      <div class="item" id = "logOut">Log out</div>
     </div>
    </div>`;
  }
  openAvatarModal() {
    const content = this.avatarModalContent;
    store.modal.next({ type: 'OPEN', content });
  }
  get avatarModalContent() {
    return `
      <app-avatar class="content"></<app-avatar>
    `;
  }

  resetPassword() {
    const content = this.resetPasswordModalContent;
    store.modal.next({ type: 'OPEN', content });
  }
  get resetPasswordModalContent() {
    return `
    <div class="ui tiny modal">
      <app-resetpassword class="content"></<app-resetpassword>
    </div>
    `;
  }
}
export default SettingsButton;
