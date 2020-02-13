import * as React from "react";
import { observer } from "mobx-react";

import Route from "client/components/Router/Route/Route";
import RouterSwitchStore from "client/components/Router/RouteSwitch/RouteSwitch.store";

@observer
export default class RouteSwitch extends React.Component<ViewOf<RouterSwitchStore>> {
    render() {
        if (!this.props.model) {
            try { throw new Error("Model of RouteSwitch is undefined"); }
            catch(error) { console.error(error); }
            return null;
        };


        return this.props.model.selectedRoute 
            ? <Route model={this.props.model.selectedRoute} />
            : null;
    }
}
