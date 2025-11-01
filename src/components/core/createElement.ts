import { Globals } from '@/components/helpers/types/globalTypes';

/**
 * @marcostonfor
 * Clase base. Sirve para
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
 * @template {keyof HTMLElementTagNameMap} T
 * {@label CLASE-BASE}
 */
export class CreateElement<T extends keyof HTMLElementTagNameMap> {
    /**
     * @marcostonfor
     *
     * @protected
     * @name _tag - Propiedad que recoge el valor
     * a obtener de la clase al ser extendida.
     * @typeParam T
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
     * @typeParam {HTMLElementTagNameMap[T]}
     */
    protected _element: HTMLElementTagNameMap[T];

    /**
     * @marcostonfor
     * Propiedad que hace de ancla
     * para renderízar el valor al obtenerse este.
     * [Ver el metodo estatico setElement]{@link CreateElement.setElement}
     *
     * @private
     * @static
     * @name inserter
     * @typeParam {HTMLElement | null}
     */
    private static inserter: HTMLElement | null;

    /**
     * Representa siempre un tag legal html,
     * el pasado por parametro.
     *
     * @constructor
     * @param {T} tag
     * @see
     */
    constructor(tag: T) {
        this._tag = tag;
        this._element = document.createElement(this._tag);
    }

    /**
     * @marcostonfor
     * Metodo que establece
     * los atributos en el tag resultante.
     * {@label HELPER}
     *
     * @public
     * @method
     * @name setAttributesTag
     * @param {string} attr
     * @param {string} attrValue
     * @returns {this}
     */
    public setAttributesTag(attr: string, attrValue: string): this {
        this._element.setAttribute(attr, attrValue);
        return this;
    }

    /**
     * @marcostonfor
     * Metodo que inserta los atributos
     * globales de los tag html.
     * 
     * @public
     * @method setUsualAttributes
     * @param {Globals} global - Atributo global de cualquíer tag html.
     * @see {@link Globals}
     */
    public setUsualAttributes(global: Globals) {
        if (global) {
            if (global.accesskey) {
                this._element.setAttribute("accesskey", global.accesskey);
            }
            if (global.class) {
                this._element.setAttribute("class", global.class);
            }
            if (global.contenteditable) {
                this._element.setAttribute(
                    "contenteditable",
                    global.contenteditable,
                );
            }
            if (global.data) {
                this._element.setAttribute("data", global.data);
            }
            if (global.dir) {
                this._element.setAttribute("dir", global.dir);
            }
            if (global.draggable) {
                this._element.setAttribute("draggable", global.draggable);
            }
            if (global.enterkeyhint) {
                this._element.setAttribute("enterkeyhint", global.enterkeyhint);
            }
            if (global.hidden) {
                if (global.hidden == true) {
                    this._element.setAttribute("hidden", "");
                } else {
                    this._element.setAttribute("", "");
                }
            }
            if (global.id) {
                this._element.setAttribute("id", global.id);
            }
            if (global.inert) {
                if (global.inert == true) {
                    this._element.setAttribute("inert", "");
                } else {
                    this._element.setAttribute("", "");
                }
            }
            if (global.inputmode) {
                this._element.setAttribute("inputmode", global.inputmode);
            }
            if (global.lang) {
                this._element.setAttribute("lang", global.lang);
            }
            if (global.popover) {
                if (global.popover == true) {
                    this._element.setAttribute("popover", "");
                } else {
                    this._element.setAttribute("", "");
                }
            }
            if (global.spellcheck) {
                this._element.setAttribute("spellcheck", global.spellcheck);
            }
            if (global.style) {
                this._element.setAttribute("style", global.style);
            }
            if (global.tabindex) {
                this._element.setAttribute("tabindex", global.tabindex);
            }
            if (global.title) {
                this._element.setAttribute("title", global.title);
            }
            if (global.translate) {
                this._element.setAttribute("translate", global.translate);
            }
        }
    }

    /**
     * @marcostonfor
     * Metodo especíal para insertar contenído
     * en el tag obtenído con extends. Si es un String lo inserta y
     * si no inserta como elemento html.
     *
     * @public
     * @method
     * @name appendContent
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
     * @marcostonfor
     * Metodo estático cuya funcíon
     * es la de insertar contenído generado ext_
     * endíendo está clase e instancíando sus resultados.
     *
     * @public
     * @static
     * @method
     * @name setElement
     * @param {Node} content - Tag legal html con o sin contenído en su interíor.
     * @param {?string} [insert] - Es el elemento dónde se colocará el valor de {@name content}
     * @returns {typeof CreateElement}
     */
    public static setElement(
        content: Node,
        insert?: string,
    ): typeof CreateElement {
        if (insert) {
            this.inserter = document.getElementById(insert);
            this.inserter?.appendChild(content);
        }
        return this;
    }

    /**
     * @marcostonfor
     * Sin este metodo sería imposible
     * insertar el contenído. Devuelve el elemento
     * solicitado si coincíde con el esperado. Si
     * Tag == Tag, entonces devuelve el tag esperado
     * si no falla.
     *
     * @public
     * @method
     * @name getElement
     * @returns {HTMLElementTagNameMap[T]}
     * @see [this._element]{@link CreateElement#_element}
     */
    public getElement(): HTMLElementTagNameMap[T] {
        return this._element;
    }
}
