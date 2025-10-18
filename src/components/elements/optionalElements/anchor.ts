import { CreateElement } from "@/components/core/createElement";

export class Anchor extends CreateElement<"a"> {
    constructor() {
        super("a");
    }

    public setHiperReference(href: string, target?: string) {
        if (target) {
            this.setAttributesTag("href", href);
            this.setAttributesTag("target", target);
        } else {
            this.setAttributesTag("href", href);
        }
    }
}
