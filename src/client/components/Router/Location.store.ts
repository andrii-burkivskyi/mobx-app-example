import { observable, action } from "mobx";
import { History } from "history";

export default class LocationStore {
    constructor(public history: History) {
        history.listen(this.historyListener)

        this.pathname = history.location.pathname;
        this.search = history.location.search;
        this.hash = history.location.hash;
        this.state = history.location.state;
    }

    @observable pathname: string;
    @observable search: string;
    @observable hash: string;
    @observable state: any;

    @action private historyListener = (location, action) => {
        this.pathname = location.pathname;
        this.search = location.search;
        this.hash = location.hash;
        this.state = location.state;
    }

    @action push = (to: string, state?: any)  => {
        this.history && this.history.push(to, state);
    }

    @action pushQuery = (query: string) => {
        this.history && this.history.push(`${this.pathname}?${query}`);
    }
}
