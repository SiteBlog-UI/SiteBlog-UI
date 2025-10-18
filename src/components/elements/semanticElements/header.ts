import { CreateElement } from "@/components/core/createElement";
import { UsualAttributes } from "@/components/helpers/types/usualTypes";

export class Header extends CreateElement<"header"> {
    constructor() {
        super("header");
    }

    public getHeader() {
        return this.getElement();
    }

    public setHeader(attr?: UsualAttributes) {
        if (attr) {
            if (attr.id) {
                this.setAttributesTag("id", attr.id);
            }
            if (attr.class) {
                this.setAttributesTag("class", attr.class);
            }
            if (attr.title) {
                this.setAttributesTag("title", attr.title);
            }
        }
    }
}
