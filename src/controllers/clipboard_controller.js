import { Controller } from 'stimulus';

export default class extends Controller {
    static targets = ['pin'];

    connect() {
        if (document.queryCommandSupported('copy')) {
            this.element.classList.add('clipboard-button--supported');
        }
    }

    copy() {
        this.pinTarget.select();
        document.execCommand('copy');
    }

    get pin() {
        return this.pinTarget.value;
    }
}