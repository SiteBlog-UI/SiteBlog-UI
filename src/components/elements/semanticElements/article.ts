import { CreateElement } from "@/components/core/createElement";
import { Globals } from "@/components/helpers/types/globalTypes";

export class Article extends CreateElement<"article"> {
    constructor() {
        super("article");
    }

    public getArticle() {
        return this.getElement();
    }

    public setArticle(attr?: Globals) {
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
