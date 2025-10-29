import { CreateElement } from "@/components/core/createElement";


/**
 * Description placeholder
 * @date We-33-2025
 * @author marcos tonfor
 * @description Es simplemente 
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
    constructor() {
        super("br");
    }
}


/**
 * Description placeholder
 * @date We-36-2025
 * @author marcos tonfor
 * @description Funcíon usada para poder repetír los saltos de línea.
 *
 * @export
 * @returns {Node} 
 */
export function breakLine(): Node {
    const br = new BreakLine();
    return br.getElement();
}


/**
 * Description placeholder
 * @date We-42-2025
 * @author marcos tonfor
 *
 * @constant
 * @name br_ - Es un salto de línea
 * @type {BreakLine}
 */
const br_ = new BreakLine();


/**
 * Description placeholder
 * @date We-43-2025
 * @author marcos tonfor
 *
 * @export 
 * @constant
 * @name insert_br - Constante que guarda el salto de linea @name {br_}
 * @type {*}
 */
export const insert_br = br_.getElement();
