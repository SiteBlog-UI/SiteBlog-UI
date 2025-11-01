import { CreateElement } from "@/components/core/createElement";
import { Globals } from "@/components/helpers/types/globalTypes";
/**
 * @marcostonfor
 * Clase que representa un ancla html
 * o tag [`<a></a>`].
 * Posee la capacídad de generar la
 * hiperreferéncia con su metodo própio:
 * @see {@link Anchor#setHiperReference}.
 *
 * @exports
 * @class Anchor
 * @extends {CreateElement<"a">}
 * @see - Extíende {@link CreateElement}
 */
export class Anchor extends CreateElement<"a"> {
    /**
     * @marcostonfor
     * Constructor vacío, su único parametro
     * es el que se hereda por extends.
     * @see
     *
     * @constructor
     */
    constructor() {
        super("a");
    }

    /**
     * @marcostonfor
     * Metodo para establecer
     * internamente los atributos
     * globales al tag.
     *
     * @public
     * @method setAnchor
     * @param {Globals} attr
     * @see {@link Globals}
     */
    public setAnchor(attr: Globals) {
        if (attr) {
            this.setUsualAttributes(attr);
        }
    }

    /**
     * @marcostonfor
     * Este metodo actúa establecíendo
     * la hiperreferéncia y además si
     * precísa su destíno.
     *
     * @method setHiperReference
     * @param href - Atributo [href] que debe incluír todo tag a.
     * @param target - Atributo target, para disponer como funcíona el link.
     * @see - Ver {@link CreateElement.setAttributesTag}
     */
    public setHiperReference(href: string, target?: string) {
        if (target) {
            this.setAttributesTag("href", href);
            this.setAttributesTag("target", target);
        } else {
            this.setAttributesTag("href", href);
        }
    }

    /**
     * @marcostonfor
     * Metodo que ayuda al tag [`<a></a>`]
     * a obtener contenído.
     *
     * @public
     * @method setContent
     * @param {string | Node} content
     * @see - Ver {@link CreateElement.appendContent}
     */
    public setContent(content: string | Node) {
        this.appendContent(content);
    }

    /**
     * @marcostonfor
     * Getter, metodo que obtíene el tag
     * resultante con o sin contenído.
     *
     * @public
     * @method getAnchor
     * @returns {Node}
     * @see - Ver {@link CreateElement.getElement}
     */
    public getAnchor(): Node {
        return this.getElement();
    }
}
