import { CreateElement } from "@/components/core/createElement";
import { Globals } from "@/components/helpers/types/globalTypes";

export class Aside extends CreateElement<"aside"> {
    constructor() {
        super("aside");
    }

    public setAside(attr?: Globals) {
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
