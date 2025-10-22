import { AttrForm } from "@/components/helpers/types/attrForm";
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

    public setForm(attr: AttrForm){
        if(attr){            
            if(attr.name && attr.title){
                this.setAttributesTag("name", attr.name);
                this.setAttributesTag("title", attr.title);
            }
            if(attr.id){
                this.setAttributesTag("id", attr.id);
            }
            if(attr.class){
                this.setAttributesTag("class", attr.class);
            }
        }
    }
}
