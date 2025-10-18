import { CreateElement } from "../../core/createElement";

export class Fieldset extends CreateElement<"fieldset"> {
    constructor() {
        super("fieldset");
    }
    public setLegend(content: string | Node) {
        const legend: CreateElement<"legend"> = new CreateElement("legend");
        legend.appendContent(content);
        const insert = legend.getElement();
        return this.appendContent(insert);
    }
}
