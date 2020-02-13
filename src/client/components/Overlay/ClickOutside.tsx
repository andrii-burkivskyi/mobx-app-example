import * as React from 'react';
import { findDOMNode } from 'react-dom';
import throttle from "lodash.throttle"

export type ComponentProps = {
    children: React.ReactNode,
    onClick: (event?: MouseEvent) => void,
};

class ClickOutside extends React.Component<ComponentProps> {
    handleClickOutside = throttle((event: any) => {
        const { onClick } = this.props;
        const node = findDOMNode(this);
        if (node && node.contains(event.target)) return; 

        onClick(event);
    }, 16);

    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
        document.addEventListener('touchend', this.handleClickOutside, true);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
        document.removeEventListener('touchend', this.handleClickOutside, true);

        if (this.handleClickOutside && this.handleClickOutside.cancel) {
            this.handleClickOutside.cancel();
        }
    }

    render() {
        const { children } = this.props;
        return children;
    }
}

export default ClickOutside;