import { action, observable } from "mobx";

export class AutoSizerStore {
    @observable width: number = 0;
    @observable height: number = 0;

    @action changeSize = (props: { width: number, height: number}) => {
        this.width = props.width;
        this.height = props.height;
    }
}
