/** 
 * @marcostonfor
 * @categoryDescription Modulo encargado de obtener listas,
 * listas desordenadas, listas ordenadas, además obtíene menus
 * con sus links.
 * 
 * @showCategorys
 * @module
 */

import { CreateElement } from "@/components/core/createElement";
import { Div } from "./div";
import { Anchor } from "./anchor";
import { Globals } from "@/components/helpers/types/globalTypes";

/**
 * @marcostonfor
 * @category Clase que genera un tag [`<li></li>`]
 * 
 * @class Li
 * @extends {CreateElement<"li">}
 * @see - Extíende {@link CreateElement}
 */
export class Li extends CreateElement<"li"> {
    /**
     * @marcostonfor
     * Constructor vacío, su único parametro
     * es el que se hereda por extends.
     * @see
     *
     * @constructor
     */
    constructor() {
        super("li");
    }

    /**
     * @marcostonfor
     * Este metodo es usado para generar 
     * la estructura base de un tag [`<li></li>`]
     * @see {@link CreateElement.setElement} - Es la forma
     * natural de la clase para insertarse en su destino.
     * 
     * 
     * @public
     * @method createLi
     * @param {string | Node} content 
     * @param {string} insert 
     * @param {Globals} liAttr 
     * @see - Ver {@link Globals}
     */
    public createLi(
        content: string | Node,
        insert: string,
        liAttr?: Globals,
    ) {
        const li = new Li();
        if (liAttr) {
            li.setUsualAttributes(liAttr);
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
        aAttr?: Globals,
        target?: string,
        liAttr?: Globals,
    ) {
        const li = new Li();
        const a = new Anchor();
        if (target) {
            a.setHiperReference(targeter, target);
        } else {
            a.setHiperReference(targeter);
        }
        if (aAttr) {
            a.setUsualAttributes(aAttr);
        }
        if (liAttr) {
            li.setUsualAttributes(liAttr);
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
        attr?: Globals,
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
