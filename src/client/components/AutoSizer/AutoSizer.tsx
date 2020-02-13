import * as React from "react";
import { observer } from "mobx-react";
import { AutoSizer as Sizer } from 'react-virtualized/dist/commonjs/AutoSizer';
import { AutoSizerStore } from "./AutoSizer.store";

@observer
export default class AutoSizer extends React.Component<ViewOf<AutoSizerStore>> {
    render() {
        return (
            <Sizer onResize={this.props.model.changeSize}>{() => null}</Sizer>
        )
    }
}