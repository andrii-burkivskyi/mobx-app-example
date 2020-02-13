import * as React from "react";
import { observer } from "mobx-react";
import RouteStore from "./Route.store";

@observer
export default class Route extends React.Component<ViewOf<RouteStore>> {
    componentDidMount() {
        this.props.model.load();
    }

    componentDidUpdate() {
        this.props.model.load();
    }

    render() {
        const Component = this.props.model.loadedComponent;
        const model = this.props.model.loadedModel;

        if (Component && model) {
            return <Component model={model} routes={this.props.model.children} />;
        }

        return null;
    }
}
