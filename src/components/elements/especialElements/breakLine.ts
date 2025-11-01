import { CreateElement } from "@/components/core/createElement";


/**
 * @marcostonfor
 * Es simplemente 
 * una clase que representa un 
 * salto de línea. No contenído
 * no atributos, clase vacía.
 *
 * @export
 * @class BreakLine
 * @typedef {BreakLine}
 * @extends {CreateElement<"br">}
 */
export class BreakLine extends CreateElement<"br"> {
    /**
     * @marcostonfor
     * Crea una instáncia de {@link CreateElement}
     * generando un salto de linea, ['&lt;br&gt;']
     * 
     * @constructor
     * @see
     */
    constructor() {
        super("br");
    }
}


/**
 * @marcostonfor
 * Funcíon usada para poder 
 * repetír los saltos de línea.
 *
 * @export
 * @function
 * @name breakLine
 * @returns {Node} - Devuelve literal un tag ['&lt;br&gt;'] 
 */
export function breakLine(): Node {
    const br = new BreakLine();
    return br.getElement();
}


/**
 * @marcostonfor
 * Es un salto de línea,
 * instáncia de la clase {@link BreakLine}
 *
 * @constant
 * @name br_
 * @type {BreakLine}
 */
const br_: BreakLine = new BreakLine();

/**
 * @marcostonfor
 * 
 *
 * @export 
 * @constant
 * @name insert_br - Constante que guarda el salto de linea de la constante {@link br_}
 * @type {*}
 */
export const insert_br: any = br_.getElement();
