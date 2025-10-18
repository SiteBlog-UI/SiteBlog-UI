import { CreateElement } from "@/components/core/createElement";
import { UsualAttributes } from "@/components/helpers/types/usualTypes";

export class Article extends CreateElement<"article"> {
    constructor() {
        super("article");
    }

    public getArticle() {
        return this.getElement();
    }

    public setArticle(attr?: UsualAttributes) {
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
