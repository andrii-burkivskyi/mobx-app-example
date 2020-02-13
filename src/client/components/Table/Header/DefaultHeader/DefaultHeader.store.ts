import { observable, set } from "mobx";
import { ObservableString } from "../../../../utils/types";
import { Order } from "../../../../../server/models/app/filter/filter.types";
import { HeaderType } from "../../Column/Column.store";


export interface DefaultHeaderInitProps {
    type: HeaderType.DEFAULT_HEADER;
    title?: DefaultHeaderStore["title"];
    sortOrder?: DefaultHeaderStore["sortOrder"];
}

export const isDefaultHeaderInitProps = (props: any): props is DefaultHeaderInitProps  => {
    return props.type === HeaderType.DEFAULT_HEADER;
}

export default class DefaultHeaderStore {
    constructor(props: DefaultHeaderInitProps) {
        set(this, props);
    }

    @observable type = HeaderType.DEFAULT_HEADER;
    @observable title?: ObservableString;
    @observable sortOrder: Nullable<Order> = null;

}