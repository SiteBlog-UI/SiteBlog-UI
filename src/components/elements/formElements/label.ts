import { CreateElement } from "@/components/core/createElement";

export class Label extends CreateElement<"label"> {
    constructor() {
        super("label");
    }

    private setLabelFor(labelFor: string): this {
        this.setAttributesTag("for", labelFor);
        return this;
    }
    public setLabel(content: string, labelFor: string): this {
        this.setLabelFor(labelFor);
        this.appendContent(content);
        return this;
    }

    public getLabel() {
        return this.getElement();
    }
}
