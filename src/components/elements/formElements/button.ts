import { CreateElement } from "../../core/createElement";

export class Button extends CreateElement<"button"> {
    constructor() {
        super("button");
    } /*

    public setAttr(onclicks: any) {
        if (typeof onclicks === "function") {
            this._element.setAttribute("onclick", onclicks);
        }
    }
 */

    public setButton(
        type: { submit?: string; reset?: string; button?: string },
        btnopts?: { id?: string; class?: string },
    ): this {
        if (type) {
            if (type.submit) {
                this.setAttributesTag("type", type.submit);
            }
            if (type.reset) {
                this.setAttributesTag("type", type.reset);
            }
            if (type.button) {
                this.setAttributesTag("type", type.button);
            }
        }
        if (btnopts) {
            if (btnopts.id) {
                this.setAttributesTag("id", btnopts.id);
            }
            if (btnopts.class) {
                this.setAttributesTag("class", btnopts.class);
            }
        }

        return this;
    }
}
