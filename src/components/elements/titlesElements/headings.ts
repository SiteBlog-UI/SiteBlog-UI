import { CreateElement } from "@/components/core/createElement";
import { UsualAttributes } from "@/components/helpers/types/usualTypes";

/**
 * Clase que extíende y replica la base,
 * sirve para generar el encabezado o heading necesarío.
 * Crea tags heading según el nivel de encabezado que
 * especifiques.
 * @author marcos tonfor 
 *
 * @class Headings
 * @typedef {Headings}
 * @template {keyof HTMLElementTagNameMap} T
 * @extends {CreateElement<T>}
 */
class Headings<T extends keyof HTMLElementTagNameMap> extends CreateElement<T> {
    /**
     * Propiedad que determina
     * el encabezado que se va a generar.
     * @author marcos tonfor
     *
     * @protected
     * @name level
     * @type {T}
     */
    protected level: T;

    /**
     * Creates an instance of {CreateElement}
     * su parametro _level equivale a la pro
     * piedad level que equivale a algun nivel 
     * de encabezado.
     * @author marcos tonfor
     *
     * @constructor
     * @param {T} _level - Equivale a level.
     */
    constructor(_level: T) {
        super(_level);
        this.level = _level;
    }

    /**
     * Description placeholder
     * @date Th-42-2025
     * @author marcos tonfor
     *
     * @public
     * @method setAttributes - Establece atributos
     * a los encabezados que genera.
     * @param {UsualAttributes} attr
     * @returns {*}
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
     * Description placeholder
     * @date Th-44-2025
     * @author marcos tonfor
     *
     * @public
     * @method setContent - Incluye contenidos en el encabezado.
     * @param {(string | Node)} content
     * @returns {*}
     */
    public setContent(content: string | Node): any {
        return this.appendContent(content);
    }

    /**
     * Description placeholder
     * @date Th-46-2025
     * @author marcos tonfor
     *
     * @public
     * @method getHeading - Devuelve un elemento de tipo encabezado.
     * @returns {Node}
     */
    public getHeading(): Node {
        return this.getElement();
    }
}

/**
 * Description placeholder
 * @date Th-47-2025
 * @author marcos tonfor
 * @description Clase encabezado,
 * vacía con solo el constructor
 * y su parametro heredado. Aquí
 * h1.
 *
 * @export
 * @class H1
 * @typedef {H1}
 * @extends {Headings<"h1">}
 */
export class H1 extends Headings<"h1"> {
    /**
     * Creates an instance of {Headings}.
     * @date Th-48-2025
     * @author marcos tonfor
     *
     * @constructor
     */
    constructor() {
        super("h1");
    }
}

/**
 * Description placeholder
 * @date Th-55-2025
 * @author marcos tonfor
 * @description Clase encabezado,
 * vacía con solo el constructor
 * y su parametro heredado. Aquí
 * h2.
 *
 * @export
 * @class H2
 * @typedef {H2}
 * @extends {Headings<"h2">}
 */
export class H2 extends Headings<"h2"> {
    /**
     * Creates an instance of {Headings}.
     * @date Th-57-2025
     * @author marcos tonfor
     *
     * @constructor
     */
    constructor() {
        super("h2");
    }
}

/**
 * Description placeholder
 * @date Th-58-2025
 * @author marcos tonfor
 * @description Clase encabezado,
 * vacía con solo el constructor
 * y su parametro heredado. Aquí
 * h3.
 *
 * @export
 * @class H3
 * @typedef {H3}
 * @extends {Headings<"h3">}
 */
export class H3 extends Headings<"h3"> {
    /**
     * Creates an instance of {Headings}.
     * @date Th-59-2025
     * @author marcos tonfor
     *
     * @constructor
     */
    constructor() {
        super("h3");
    }
}

/**
 * Description placeholder
 * @date Th-00-2025
 * @author marcos tonfor
 * @description Clase encabezado,
 * vacía con solo el constructor
 * y su parametro heredado. Aquí
 * h4.
 *
 * @export
 * @class H4
 * @typedef {H4}
 * @extends {Headings<"h4">}
 */
export class H4 extends Headings<"h4"> {
    /**
     * Creates an instance of {Headings}.
     * @date Th-00-2025
     * @author marcos tonfor
     *
     * @constructor
     */
    constructor() {
        super("h4");
    }
}

/**
 * Description placeholder
 * @date Th-01-2025
 * @author marcos tonfor
 * @description Clase encabezado,
 * vacía con solo el constructor
 * y su parametro heredado. Aquí
 * h5.
 *
 * @export
 * @class H5
 * @typedef {H5}
 * @extends {Headings<"h5">}
 */
export class H5 extends Headings<"h5"> {
    /**
     * Creates an instance of {Headings}.
     * @date Th-01-2025
     * @author marcos tonfor
     *
     * @constructor
     */
    constructor() {
        super("h5");
    }
}

/**
 * Description placeholder
 * @date Th-01-2025
 * @author marcos tonfor
 * @description Clase encabezado,
 * vacía con solo el constructor
 * y su parametro heredado. Aquí
 * h6.
 *
 * @export
 * @class H6
 * @typedef {H6}
 * @extends {Headings<"h6">}
 */
export class H6 extends Headings<"h6"> {
    /**
     * Creates an instance of {Headings}.
     * @date Th-02-2025
     * @author marcos tonfor
     *
     * @constructor
     */
    constructor() {
        super("h6");
    }
}
