import { CreateElement } from "../../core/createElement";
import { TypesLink } from "../../helpers/types/linkTypes";

export class Link extends CreateElement<"link"> {
    constructor() {
        super("link");
    }

    public setLink(
        rels: string,
        hrefs: string,
        linkType: TypesLink,
        title?: string,
    ) {
        if (linkType) {
            if (linkType.atom) {
                this.setAttributesTag("rel", rels);
                this.setAttributesTag("href", hrefs);
                this.setAttributesTag("type", linkType.atom);
                this.setAttributesTag("title", title!);
            }
            if (linkType.css) {
                this.setAttributesTag("rel", rels);
                this.setAttributesTag("href", hrefs);
                this.setAttributesTag("type", linkType.css);
            }
        }
    }
}
