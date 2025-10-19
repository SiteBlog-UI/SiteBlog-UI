import { CreateElement } from "@/components/core/createElement";
import { UsualAttributes } from "@/components/helpers/types/usualTypes";
import { Div } from "./div";
import { Anchor } from "./anchor";

export class Li extends CreateElement<"li"> {
    constructor() {
        super("li");
    }

    public createLi(
        content: string | Node,
        insert: string,
        liAttr?: UsualAttributes,
    ) {
        const li = new Li();
        if (liAttr) {
            if (liAttr.id) {
                li.setAttributesTag("id", liAttr.id);
            }
            if (liAttr.class) {
                li.setAttributesTag("class", liAttr.class);
            }
            if (liAttr.title) {
                li.setAttributesTag("title", liAttr.title);
            }
        }
        li.appendContent(content);
        document.addEventListener("DOMContentLoaded", () => {
            CreateElement.setElement(li.getElement(), insert);
        });
    }

    public createLiLink(
        content: string,
        insert: string,
        targeter: string,
        aAttr?: UsualAttributes,
        target?: string,
        liAttr?: UsualAttributes,
    ) {
        const li = new Li();
        const a = new Anchor();
        if (target) {
            a.setHiperReference(targeter, target);
        } else {
            a.setHiperReference(targeter);
        }
        if (aAttr) {
            if (aAttr.id) {
                a.setAttributesTag("id", aAttr.id);
            }
            if (aAttr.class) {
                a.setAttributesTag("class", aAttr.class);
            }
            if (aAttr.title) {
                a.setAttributesTag("title", aAttr.title);
            }
        }
        if (liAttr) {
            if (liAttr.id) {
                li.setAttributesTag("id", liAttr.id);
            }
            if (liAttr.class) {
                li.setAttributesTag("class", liAttr.class);
            }
            if (liAttr.title) {
                li.setAttributesTag("title", liAttr.title);
            }
        }
        a.appendContent(content);
        li.appendContent(a.getElement());
        document.addEventListener("DOMContentLoaded", () => {
            CreateElement.setElement(li.getElement(), insert);
        });
    }
}

export class OL extends CreateElement<"ol"> {
    constructor() {
        super("ol");
    }
}

export class UL extends CreateElement<"ul"> {
    constructor() {
        super("ul");
    }
}

export class Menus {
    private box: Div;
    constructor() {
        this.box = new Div();
    }

    public createMenu(
        inserter: string,
        content: Node,
        attr?: UsualAttributes,
        attrUl?: { id?: string; class?: string },
    ) {
        const listaUl = new UL();
        if (attrUl) {
            if (attrUl.id) {
                listaUl.setAttributesTag("id", attrUl.id);
            }
            if (attrUl.class) {
                listaUl.setAttributesTag("class", attrUl.class);
            }
        }

        content = listaUl.getElement();
        if (attr) {
            if (attr.id) {
                this.box.setAttributesTag("id", attr.id);
            }
            if (attr.class) {
                this.box.setAttributesTag("class", attr.class);
            }
            if (attr.title) {
                this.box.setAttributesTag("title", attr.title);
            }
        }
        this.box.appendContent(content);
        document.addEventListener("DOMContentLoaded", () => {
            CreateElement.setElement(this.box.getDiv(), inserter);
        });
    }

    public recursiveMenu(
        content: string | Node,
        insert: string,
        hrefs: string,
        items: number,
    ) {
        const li = new Li();
        const a = new Anchor();

        for (let i = 0; i <= items; i++) {
            for (let j = 0; j <= i; j++) {
                a.appendContent(content);
            }
            for (let l = 0; l <= items; l++) {
                a.setHiperReference(hrefs);
            }
            li.appendContent(a.getElement());
            document.addEventListener("DOMContentLoaded", () => {
                CreateElement.setElement(li.getElement(), insert);
            });
        }
    }

    public recursividadLiLink(
        links: string[],
        insert: string,
        hrefs: string,
        rec: number,
    ) {
        for (let i = 0; i <= links.length; i++) {
            const link = links[i];
            if(hrefs){
            this.recursiveMenu(link, insert, hrefs, rec);
        }}
    }
}
