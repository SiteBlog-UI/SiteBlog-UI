import { CreateElement } from "../../core/createElement";

export class Form extends CreateElement<"form"> {
    constructor() {
        super("form");
    }

    public setAction(action: string) {
        return this.setAttributesTag("action", action);
    }

    public setMethod(method: string) {
        return this.setAttributesTag("method", method);
    }

    public encType(enctype: boolean, enctypeURL?: string) {
        const defaultURL = "application/x-www-form-urlencoded";
        if (!enctype) {
            this.encType(false);
        } else {
            this.encType(true, defaultURL);
            if (enctypeURL) {
                this.encType(true, enctypeURL);
            }
        }
    }
}
