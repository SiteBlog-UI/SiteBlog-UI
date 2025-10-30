import { CreateElement } from "@/components/core/createElement";
/**
 * @marcostonfor
 * Clase que representa un ancla html
 * o tag {'&lt;a&gt;&lt;/a&gt;'}.
 * @see - Extíende {@link CreateElement},
 * posee la capacídad de generar la
 * hiperreferéncia con su metodo própio:
 * @see {@link Anchor#setHiperReference}.
 * 
 * @exports
 * @class Anchor - CreateElement<"a">
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
     * Este metodo actúa establecíendo 
     * la hiperreferéncia y además si 
     * precísa su destíno.
     * 
     * @method setHiperReference
     * @param href - Atributo [href] que debe incluír todo tag a.
     * @param target - Atributo target, para disponer como funcíona el link.
     */
    public setHiperReference(href: string, target?: string) {
        if (target) {
            this.setAttributesTag("href", href);
            this.setAttributesTag("target", target);
        } else {
            this.setAttributesTag("href", href);
        }
    }
}
