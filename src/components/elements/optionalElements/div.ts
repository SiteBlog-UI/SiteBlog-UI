import { CreateElement } from "@/components/core/createElement";
import { UsualAttributes } from "@/components/helpers/types/usualTypes";

export class Div extends CreateElement<"div"> {
    constructor() {
        super("div");
    }

    public setDiv(attr?: UsualAttributes) {
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

    public getDiv() {
        return this.getElement();
    }
}
