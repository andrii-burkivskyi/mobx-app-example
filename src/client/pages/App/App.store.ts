import "reflect-metadata";
import { Service } from "../../core/decorators/service/service.decorator";
import { LocationService } from "../../core/services/Location.service";
import { AppModule } from ".";


@Service("AppStore")
export class AppStore {
    constructor(
        public module: AppModule,
        public location: LocationService,
    ) {};
}

