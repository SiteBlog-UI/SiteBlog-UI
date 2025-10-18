import { CreateElement } from "@/components/core/createElement";
import { UsualAttributes } from "@/components/helpers/types/usualTypes";

export class Aside extends CreateElement<"aside"> {
    constructor() {
        super("aside");
    }

    public setAside(attr?: UsualAttributes) {
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

    public setContent(content: string | Node) {
        this.appendContent(content);
    }

    public getAside() {
        return this.getElement();
    }
}
