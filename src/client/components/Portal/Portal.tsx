import * as React from "react";
import ReactDOM from "react-dom";
import { canUseDOM } from "../../utils/dom";


class Portal extends React.Component {
    portalNode?: Nullable<HTMLDivElement>;

    componentWillUnmount() {
        if (this.portalNode) {
            document.body.removeChild(this.portalNode);
        }
        this.portalNode = null;
    }

    render() {
        if (!canUseDOM) { return null; }

        if (!this.portalNode) {
            this.portalNode = document.createElement('div');
            this.portalNode.style.maxHeight = "0px";
            this.portalNode.style.lineHeight = "0px";
            this.portalNode.style.overflow = "hidden";
            document.body.appendChild(this.portalNode);
        }

        return ReactDOM.createPortal(
            this.props.children,
            this.portalNode
        );
    }
}

export default Portal;