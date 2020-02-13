import "./assets/global.scss";

import * as React from "react";
import * as ReactDOM from "react-dom";
import { AppModule } from "./pages/App";
import { ModuleView } from "./core/decorators/module/Module.view";

const app = new AppModule();

ReactDOM.render(
    <ModuleView module={app} />,
    document.getElementById('root')
);

