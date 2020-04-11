import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class NavComponent extends Component {
  @tracked isExpanded = false;

  @action toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }
}
