import { Anchor } from "@/components/elements/optionalElements/anchor";
import { Div } from "@/components/elements/optionalElements/div";
import { Aside } from "@/components/elements/semanticElements/aside";
import { UsualAttributes } from "@/components/helpers/types/usualTypes";

/**
 * Description placeholder
 * @date Th-04-2025
 * @author marcos tonfor
 * @description Clase que genera un aside
 * para contener una ventana modal simple
 * usando html, css y la propiedad o
 * atributo target de las hiperreferencias.
 *
 * @export
 * @class SimpleModal
 * @typedef {SimpleModal}
 * @extends {Aside}
 */
export class SimpleModal extends Aside {
    /**
     * Description placeholder
     * @date Th-06-2025
     * @author marcos tonfor
     * @description Propiedad que representa
     * una instancia de la clase Anchor que a
     * su vez representa un ancla html o tag a
     * es el ancla que recibe como hiperreferéncia
     * la identidad de la ventana que debe accíonar
     * Está o permanece fuera de la ventana, debe 
     * llamarla.
     *
     * @private
     * @name targeter - [href="#idElementoModal"]
     * @type {Anchor}
     */
    private targeter: Anchor;
    /**
     * Description placeholder
     * @date Th-09-2025
     * @author marcos tonfor
     * @description Está propiedad de la clase
     * es el elemento o caja en si, su contenído
     * son los elementos html necesaríos para
     * obtener la ventana.
     *
     * @private
     * @name box
     * @type {Div}
     */
    private box: Div;
    /**
     * Description placeholder
     * @date Th-13-2025
     * @author marcos tonfor
     * @description 
     *
     * @private
     * @name boxContent 
     * @type {Div}
     */
    private boxContent: Div;    
    /**
     * Description placeholder
     * @date Th-13-2025
     * @author marcos tonfor
     *
     * @private
     * @name close 
     * @type {Anchor}
     */
    private close: Anchor;

    
    /**
     * Creates an instance of {CreateElement}.
     * @date Th-40-2025
     * @author marcos tonfor
     * @description Gracias al constructor 
     * se obtienen los elementos html esencíales
     * para montar la ventana modal. Cada 
     * propiedad aquí es una instáncia de 
     * la clase que representa, a, o div.
     * Así mísmo, el a que accíona el modal
     * recoge el parametro id que la accíona
     * meta para targeter.
     *
     * @constructor
     * @param {string} meta - Valor de targeter, 
     * id del modal y contenido de href: '#identidad'.
     */
    constructor(meta: string) {
        super();
        this.targeter = new Anchor();
        this.targeter.setHiperReference(meta);
        this.box = new Div();
        this.boxContent = new Div();
        this.close = new Anchor();
    }

    
    /**
     * Description placeholder
     * @date Th-48-2025
     * @author marcos tonfor
     * @description Metodo que establece 
     * la ventana modal en su jerarquía 
     * de elementos. Monta el modal y 
     * recoge el contenído y atributos 
     * de sus elementos.
     *
     * @public
     * @method setModal
     * @param {(string | Node)} modalContent 
     * @param {?UsualAttributes} [asideAttr] 
     * @param {?{ content: string; id: string }} [enTarget] 
     * @param {?UsualAttributes} [boxAttr] 
     * @param {?UsualAttributes} [boxContAttr] 
     */
    public setModal(
        modalContent: string | Node,
        asideAttr?: UsualAttributes,
        enTarget?: { content: string; id: string },
        boxAttr?: UsualAttributes,
        boxContAttr?: UsualAttributes,
    ) {
        if (asideAttr) {
            this.setAside(asideAttr);
        }
        if (enTarget) {
            this.targeter.appendContent(enTarget.content);
            this.targeter.setAttributesTag("id", enTarget.id);
        }
        this.setContent(this.targeter.getElement());

        if (boxAttr) {
            this.box.setDiv(boxAttr);
        }

        if (boxContAttr) {
            this.boxContent.setDiv(boxContAttr);
        }

        this.close.setHiperReference("#");
        this.close.setAttributesTag("class", "close");
        const closebtn = document.createElement("b");
        closebtn.setAttribute("class", "cerrar");
        closebtn.innerHTML = `&times;`;
        this.close.appendContent(closebtn);
        this.boxContent.appendContent(this.close.getElement());
        this.boxContent.appendContent(modalContent);
        this.box.appendContent(this.boxContent.getDiv());

        this.setContent(this.box.getDiv());
    }

    
    /**
     * Description placeholder
     * @date Th-54-2025
     * @author marcos tonfor
     * @description Devuelve el elemento 
     * aside generado con su contenído.
     *
     * @public
     * @method getModal
     * @returns {*} 
     */
    public getModal(): any{
        return this.getAside();
    }
}
