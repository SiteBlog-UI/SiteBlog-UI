/**
 * Description placeholder
 * @date We-07-2025
 * @author marcos tonfor
 * @description Clase base. Sirve para
 * al ser extendida generar el tag html
 * que se especifique como parametro y
 * en el constructor, en super durante
 * extends. Dispone de varios metodos
 * propios que ayudan a las clases que
 * la extienden a disponer de atributos
 * y conetnído al tag que representan.
 *
 * @export
 * @class CreateElement
 * @typedef {CreateElement}
 * @template {keyof HTMLElementTagNameMap} T
 */
export class CreateElement<T extends keyof HTMLElementTagNameMap> {
    /**
     * Description placeholder
     * @date We-08-2025
     * @author marcos tonfor
     *
     * @protected
     * @name _tag - Propiedad que recoge el valor
     * a obtener de la clase al ser extendida.
     * @type {T}
     */
    protected _tag: T;

    /**
     * Description placeholder
     * @date We-11-2025
     * @author marcos tonfor
     *
     * @protected
     * @name _element - Propiedad que representa
     * el valor obtenido al extender la clase.
     * @type {HTMLElementTagNameMap[T]}
     */
    protected _element: HTMLElementTagNameMap[T];

    /**
     * Propiedad que hace de ancla
     * para renderízar el valor al obtenerse este.
     * [Ver el metodo estatico setElement]{@link CreateElement.setElement}
     * @author marcos tonfor
     * @private
     */
    private static inserter: HTMLElement | null;

    /**
     * Representa siempre un tag legal html, el pasado por parametro.
     * @date We-20-2025
     * @author marcos tonfor
     *
     * @constructor
     * @param {T} tag
     */
    constructor(tag: T) {
        this._tag = tag;
        this._element = document.createElement(this._tag);
    }

    /**
     * Description placeholder
     * @date We-21-2025
     * @author marcos tonfor
     *
     * @public
     * @name setAttributesTag - Metodo que establece
     * los atributos en el tag resultante.
     * @param {string} attr
     * @param {string} attrValue
     * @returns {this}
     */
    public setAttributesTag(attr: string, attrValue: string): this {
        this._element.setAttribute(attr, attrValue);
        return this;
    }

    /**
     * Description placeholder
     * @date We-22-2025
     * @author marcos tonfor
     *
     * @public
     * @name appendContent - Metodo especíal para insertar contenído
     * en el tag obtenído con extends. Si es un String lo inserta y
     * si no inserta como elemento html.
     * @param {(string | Node)} content
     * @returns {Node}
     */
    public appendContent(content: string | Node): Node {
        if (typeof content === "string") {
            const text = document.createTextNode(content);
            return this._element.appendChild(text);
        } else {
            return this._element.appendChild(content);
        }
    }

    /**
     * Description placeholder
     * @date We-23-2025
     * @author marcos tonfor
     * @description Metodo estático cuya funcíon
     * es la de insertar contenído generado ext_
     * endíendo está clase e instancíando sus resultados.
     *
     * @public
     * @static
     * @name setElement
     * @param {Node} content - Tag legal html con o sin contenído en su interíor.
     * @param {?string} [insert] - Es el elemento dónde se colocará el valor de {@name content}
     * @returns {typeof CreateElement}
     */
    public static setElement(content: Node, insert?: string) {
        if (insert) {
            this.inserter = document.getElementById(insert);
            this.inserter?.appendChild(content);
        }
        return this;
    }

    /**
     * Description placeholder
     * @date We-31-2025
     * @author marcos tonfor
     * @description Sin este metodo sería imposible
     * insertar el contenído. Devuelve el elemento
     * solicitado si coincíde con el esperado. Si
     * Tag == Tag, entonces devuelve el tag esperado
     * si no falla.
     *
     * @public
     * @name getElement
     * @returns {HTMLElementTagNameMap[T]} - [this._element]{@link CreateElement#_element}
     */
    public getElement(): HTMLElementTagNameMap[T] {
        return this._element;
    }
}
