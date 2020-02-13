import * as React from"react";
import { observer } from "mobx-react";

import { ComponentProps } from "./IconTypes.d";

import styles from "./icon.scss"

const Icon: React.SFC<ComponentProps> = ({ className, svg, style }) => (
    <span aria-disabled style={style} className={`${styles.icon} ${className}`} dangerouslySetInnerHTML={{__html: svg}} />
);

export default observer(Icon);
