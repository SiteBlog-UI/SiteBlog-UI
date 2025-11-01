/**
 * @categoryDescription Modulo que representa 
 * la clase para generar un tag br de salto de 
 * linea. Clase más instáncias.
 * @marcostonfor
 * @showCategorys
 * @module
 */

import { CreateElement } from "@/components/core/createElement";

/**
 * @marcostonfor
 * @category Es simplemente 
 * una clase que representa un 
 * salto de línea. No contenído
 * no atributos, clase vacía.
 *
 * @export
 * @class BreakLine
 * @extends {CreateElement<"br">}
 */
export class BreakLine extends CreateElement<"br"> {
    /**
     * @marcostonfor
     * Crea una instáncia de {@link CreateElement}
     * generando un salto de linea, [`<br>`]
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
 * @category Funcíon usada para poder 
 * repetír los saltos de línea.
 *
 * @export
 * @function breakLine
 * @returns {Node} - Devuelve literal un tag [`<br>`] 
 */
export function breakLine(): Node {
    const br = new BreakLine();
    return br.getElement();
}


/**
 * @marcostonfor
 * @category Es un salto de línea,
 * instáncia de la clase [BreakLine]
 * @see {@link BreakLine}
 *
 * @constant
 * @name br_
 * @type {BreakLine}
 */
export const br_: BreakLine = new BreakLine();

/**
 * @marcostonfor
 * @category Constante que guarda 
 * el salto de linea de la constante [br_]
 * @see {@link br_}
 *
 * @export 
 * @constant
 * @name insert_br
 * @type {*}
 */
export const insert_br: any = br_.getElement();
