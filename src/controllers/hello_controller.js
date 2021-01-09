import { Controller } from 'stimulus';

export default class extends Controller {
    static targets = ["name"]

    greet() {
        console.log(`You typed: ${this.name}`);
        // console.log("Hello world", this.element);
    }

    get name() {
        return this.nameTarget.value;
    }
}