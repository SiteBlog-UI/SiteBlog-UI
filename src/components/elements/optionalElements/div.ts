import { CreateElement } from "@/components/core/createElement";
import { Globals } from "@/components/helpers/types/globalTypes";

/**
 * @marcostonfor
 * Clase que representa una divisíon 
 * en la estructura html o 
 * tag [`<div></div>`].
 * 
 * @exports
 * @class Div
 * @extends {CreateElement<"div">}
 * @see - Extíende {@link CreateElement}
 */
export class Div extends CreateElement<"div"> {
    /**
     * @marcostonfor
     * Constructor vacío, su único parametro
     * es el que se hereda por extends.
     * @see
     *
     * @constructor
     */
    constructor() {
        super("div");
    }

    /**
     * @marcostonfor
     * Metodo para establecer 
     * internamente los atributos 
     * globales al tag.
     * 
     * @public
     * @method setDiv
     * @param {Globals} attr 
     * @see {@link Globals} 
     * @see - Ver {@link CreateElement.setUsualAttributes}
     */
    public setDiv(attr: Globals){
        if(attr){
            this.setUsualAttributes(attr);
        }
    }
  
    /**
     * @marcostonfor
     * Metodo que ayuda al tag [`<div></div>`]
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
     * @method getDiv
     * @returns {Node}
     * @see - Ver {@link CreateElement.getElement}
     */
    public getDiv(): Node {
        return this.getElement();
    }
}
