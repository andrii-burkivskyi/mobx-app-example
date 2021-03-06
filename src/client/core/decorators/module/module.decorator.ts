import "reflect-metadata";
import { DEFAULT_ARRAY } from "../../../utils/constants";
import { AsyncModuleItem, AsyncLazyConstructor } from "./module.extractor";

interface IModuleDecoratorProps {
    view: () => Promise<Constructable<Object>>;
    model: () => Promise<any>;
    guard?: Constructable<Object>;
    imports?: Array<AsyncModuleItem>;
    services?: Array<AsyncLazyConstructor>;
    modules?: Array<AsyncModuleItem>;
}

export enum MDKeys {
    VIEW = "module_decorator:view",
    MODEL = "module_decorator:model",
    GUARD = "module_decorator:guard",
    IMPORTS = "module_decorator:imports",
    SERVICES = "module_decorator:services",
    MODULES = "module_decorator:modules",
}

export const Module = (props: IModuleDecoratorProps): ClassDecorator => (target) => {
    Reflect.defineMetadata(MDKeys.VIEW, props.view , target.prototype);
    Reflect.defineMetadata(MDKeys.MODEL, props.model , target.prototype);
    Reflect.defineMetadata(MDKeys.GUARD, props.guard , target.prototype);
    Reflect.defineMetadata(MDKeys.IMPORTS, props.imports ?? DEFAULT_ARRAY, target.prototype);
    Reflect.defineMetadata(MDKeys.SERVICES, props.services ?? DEFAULT_ARRAY, target.prototype);
    Reflect.defineMetadata(MDKeys.MODULES, props.modules ?? DEFAULT_ARRAY, target.prototype);
}
