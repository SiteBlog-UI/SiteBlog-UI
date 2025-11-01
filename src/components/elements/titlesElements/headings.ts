/** 
 * @marcostonfor
 * @categoryDescription Generador de 
 * encabezados html. Modulo del que 
 * se obtíenen los 6 niveles de 
 * encabezado que exísten en html.
 * @showCategories
 * @module
 */

import { CreateElement } from "@/components/core/createElement";
import { UsualAttributes } from "@/components/helpers/types/usualTypes";

/**
 * @marcostonfor
 * Clase que extíende y replica la base,
 * sirve para generar el encabezado o heading necesarío.
 * Crea tags heading según el nivel de encabezado que
 * especifiques. Extíende {@link CreateElement}
 * Al ser una réplica no pasa parámetro si no la 
 * llave que firma la clase. 
 * Así CreateElement obtine T cómo valor válido 
 * en lugar del tag, que recíbe la clase Headings
 * está mísma.
 *
 * @class Headings
 * @template {keyof HTMLElementTagNameMap} T
 * @extends {CreateElement<T>}
 */
class Headings<T extends keyof HTMLElementTagNameMap> extends CreateElement<T> {
    /**
     * @marcostonfor
     * Propiedad que determina
     * el encabezado que se va a generar. 
     *
     * @protected
     * @type {T} 
     * @name level
     */
    protected level: T;

    /**
     * Creates an instance of {CreateElement}
     * su parametro _level equivale a la pro
     * piedad level que equivale a algun nivel
     * de encabezado.
     *
     * @constructor
     * @param {T} _level - Equivale a level.
     * @see
     */
    constructor(_level: T) {
        super(_level);
        this.level = _level;
    }

    /**
     * @marcostonfor
     * Establece atributos
     * a los encabezados que genera.
     *
     * @public
     * @method setAttributes
     * @param {UsualAttributes} attr
     * @returns {*}
     * @see - Visítar {@link UsualAttributes} -
     * @see - Ver {@link CreateElement.setAttributesTag}
     */
    public setAttributes(attr: UsualAttributes): any {
        if (attr) {
            if (attr.id) {
                return this.setAttributesTag("id", attr.id);
            }
            if (attr.class) {
                return this.setAttributesTag("class", attr.class);
            }
            if (attr.title) {
                return this.setAttributesTag("title", attr.title);
            }
        }
    }

    /**
     * @marcostonfor
     * Incluye contenidos en el encabezado.
     * @summary
     * El parámetro - content - representa
     * bíen html, bíen strings. No sírve 
     * cualquíer string ya que debe ser 
     * texto o html.
     * @see - Ver {@link CreateElement.appendContent}
     *
     * @public
     * @method setContent
     * @param {(string | Node)} content
     * @returns {*}
     */
    public setContent(content: string | Node): any {
        return this.appendContent(content);
    }

    /**
     * @marcostonfor
     * Devuelve un elemento de tipo encabezado.
     *
     * @public
     * @method getHeading
     * @returns {Node}
     * @see - Ver {@link CreateElement.getElement}
     */
    public getHeading(): Node {
        return this.getElement();
    }
}

/**
 * @marcostonfor
 * @category h1
 *
 * @export
 * @class H1
 * @extends {Headings<"h1">}
 */
export class H1 extends Headings<"h1"> {
    /**
     * Instáncia de {@link Headings}
     * 
     * @constructor
     * @see
     */
    constructor() {
        super("h1");
    }
}

/**
 * @marcostonfor
 * @category h2
 *
 * @export
 * @class H2
 * @extends {Headings<"h2">}
 */
export class H2 extends Headings<"h2"> {
    /**
     * Instáncia de {@link Headings}
     *
     * @constructor
     * @see
     */
    constructor() {
        super("h2");
    }
}

/**
 * @marcostonfor
 * @category h3
 *
 * @export
 * @class H3
 * @extends {Headings<"h3">}
 */
export class H3 extends Headings<"h3"> {
    /**
     * Instáncia de {@link Headings} 
     *
     * @constructor
     * @see
     */
    constructor() {
        super("h3");
    }
}

/**
 * @marcostonfor
 * @category h4
 *
 * @export
 * @class H4
 * @extends {Headings<"h4">}
 */
export class H4 extends Headings<"h4"> {
    /**
     * Instáncia de {@link Headings}
     *
     * @constructor
     * @see
     */
    constructor() {
        super("h4");
    }
}

/**
 * @marcostonfor
 * @category h5
 *
 * @export
 * @class H5
 * @extends {Headings<"h5">}
 */
export class H5 extends Headings<"h5"> {
    /**
     * Instáncia de {@link Headings}
     *
     * @constructor
     */
    constructor() {
        super("h5");
    }
}

/**
 * @marcostonfor
 * @category h6
 *
 * @export
 * @class H6
 * @extends {Headings<"h6">}
 */
export class H6 extends Headings<"h6"> {
    /**
     * Instáncia de {@link Headings}
     *
     * @constructor
     * @see
     */
    constructor() {
        super("h6");
    }
}
