import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

const events = { CLICK: 'click', KEYDOWN: 'keydown' }
const keys = { ESCAPE: 27, TAB: 9 }

export default class NavbarComponent extends Component {
  @tracked
  isOpen = false;

  @action
  closeMenuOnEvent(e) {
    if (!this.isOpen) {
      return
    }

    switch (e.type) {
      case events.CLICK:
        return this.closeMenuOnClickEvent(e)
      case events.KEYDOWN:
        return this.closeMenuOnKeydownEvent(e)
      default:
        // No other cases.
        break
    }
  }

  closeMenuOnClickEvent(e) {
    if (!this.menuElement.contains(e.target) && !this.menuTrigger.contains(e.target)) {
      this.isOpen = false;
      e.preventDefault(); // Prevent click through.
    }
  }

  closeMenuOnKeydownEvent(e) {
    if (e.keyCode === keys.ESCAPE) {
      this.isOpen = false;
      return
    }

    if (e.keyCode !== keys.TAB) {
      return
    }

    if (e.target === this.menuStart && e.shiftKey) {
      this.repeatMenu({ reverse: true })
      e.preventDefault() // Prevent extra tab.
      return
    }

    if (e.target === this.menuEnd && !e.shiftKey) {
      this.repeatMenu()
      e.preventDefault()
    }
  }

  repeatMenu({ reverse = false } = {}) {
    reverse
      ? this.menuEnd.focus()
      : this.menuElement.querySelector('.navbar-mobile__link').focus()
  }

  @action
  toggleMenu() {
    this.isOpen = !this.isOpen;
  }

  @action
  addListeners() {
    Object
      .values(events)
      .forEach(e => document.addEventListener(e, this.closeMenuOnEvent));
  }

  @action
  removeListeners() {
    Object
      .values(events)
      .forEach(e => document.removeEventListener(e, this.closeMenuOnEvent));
  }
}
