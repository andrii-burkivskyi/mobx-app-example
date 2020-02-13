import { observable, action, computed } from "mobx";
import { DEFAULT_STRING, DEFAULT_ASYNC_FUNCTION, DEFAULT_OBJECT } from "client/utils/constants";
import LocationStore from "client/components/Router/Location.store";
import RouteSwitchStore from "client/components/Router/RouteSwitch/RouteSwitch.store";
import { matchUrl } from "client/utils/url";

interface InitProps {
    path: RouteStore["path"];
    isEnd?: RouteStore["isEnd"];
    component: RouteStore["component"];
    model?: RouteStore["model"];
    children?: RouteStore[];
}

enum RouteState {
    INIT = "init",
    LOADING = "loading",
    LOADED = "loaded",
}

enum Routes {
    HOME = "/",
    PROJECT = "/project/:projectId",
    FRONTEND = "/project/:projectId/frontend",
    BACKEND = "/project/:projectId/backend",
    BACKEND_ENTITY = "/project/:projectId/backend/entity",
}

export default class RouteStore {
    static routes = Routes;
    static location: LocationStore;
    static state = RouteState;

    constructor(props: InitProps) {
        this.path = props.path;
        this.component = props.component ?? this.component;
        this.model = props.model ?? this.model;
        this.isEnd = props.isEnd ?? this.isEnd;
        this.children = props.children ? new RouteSwitchStore(props.children) : this.children;
    }

    @observable private component: () => Promise<any> = DEFAULT_ASYNC_FUNCTION;
    @observable private model: () => Promise<any> = DEFAULT_ASYNC_FUNCTION;
    @observable private state: RouteState = RouteStore.state.INIT;

    @observable path: string = DEFAULT_STRING;
    @observable isEnd: boolean = true;
    @observable children: Nullable<RouteSwitchStore> = null;
    @observable loadedComponent: any = null; 
    @observable loadedModel: any = null; 

    @computed get end(): boolean {
        return !Boolean(this.children) && this.isEnd;
    }

    @computed get params(): CommonMap | undefined {
        return matchUrl(RouteStore.location.pathname, this.path, { end: false })
    }

    @computed get isLoading(): boolean {
        return this.state === RouteStore.state.LOADING;
    }

    @action load = async () => {
        if (!this.isLoading) {
            this.state = RouteStore.state.LOADING;

            if (!this.loadedComponent){
                this.loadedComponent = await this.component().then((m) => m.default);
            }
            if (!this.loadedModel){
                this.loadedModel = await this.model().then((m) => m ? new m.default(this) : DEFAULT_OBJECT);
            }

            this.state = RouteStore.state.LOADED;
        }
    }
}
