import { CreateElement } from "@/components/core/createElement";

/**
 * @marcostonfor
 * @description Clase que representa
 * un tag mark para el resaltado de
 * textos. Extíende {@link CreateElement}
 * Clase vacía con solo un constructor
 * que genera un tag {'&lt;mark&gt;&lt;/mark&gt;'}
 * Es probable que le añada capacídad de
 * establecer atributos como [class, id, etc.],
 * así mísmo algún metodo getter de renderízado.
 *
 * @exports
 * @class Mark
 */
export class Mark extends CreateElement<"mark"> {
    /**
     * @marcostonfor
     * @description Instáncia de CreateElement<"mark">
     *
     * @constructor
     */
    constructor() {
        super("mark");
    }
}
