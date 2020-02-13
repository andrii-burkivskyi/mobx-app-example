import { observable, computed } from "mobx";
import RouteStore from "client/components/Router/Route/Route.store";
import { matchUrl } from "client/utils/url"

export default class RouteSwitchStore {
    constructor(routes: RouteStore[]) {
        this.routes = routes;
    }

    @observable routes: RouteStore[] = [];

    @computed get selectedRoute(): RouteStore | undefined {
        return this.routes.find((route) => {
            return Boolean(matchUrl(RouteStore.location.pathname, route.path, { end: route.end }));
        })
    }
}