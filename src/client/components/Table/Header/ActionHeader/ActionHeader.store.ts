import { observable, set } from "mobx";
import { ObservableString } from "../../../../utils/types";
import { HeaderType } from "../../Column/Column.store"; 

export interface ActionHeaderInitProps {
    type: HeaderType.ACTION_HEADER;
    title?: ActionHeaderStore["title"];
    icon?: ActionHeaderStore["icon"];
    action?: ActionHeaderStore["action"];
}

export const isActionHeaderInitProps = (props: any): props is ActionHeaderInitProps  => {
    return props.type === HeaderType.ACTION_HEADER;
}

export default class ActionHeaderStore {
    constructor(props: ActionHeaderInitProps) {
        set(this, props);
    }

    @observable type = HeaderType.DEFAULT_HEADER;
    @observable title?: ObservableString;
    @observable icon?: string;
    @observable action?: () => void;

}