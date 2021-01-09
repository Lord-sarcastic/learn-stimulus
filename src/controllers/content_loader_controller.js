import { Controller } from 'stimulus';

export default class extends Controller {
    static values = { url: String, refreshInterval: Number };

    connect() {
        this.load();

        if (this.hasRefreshIntervalValue) {
            this.refreshMessages();
        }
    }

    disconnect() {
        this.stopRefresh();
    }

    load() {
        fetch(this.urlValue)
        .then(response => response.text())
        .then(html => this.element.innerHTML = html)
    }

    refreshMessages() {
        this.refreshTimer =  setInterval(() => {
            this.load();
        }, this.refreshIntervalValue)
    }

    stopRefresh() {
        if (this.refreshTimer) {
            clearInterval(this.refreshTimer);
        }
    }
}