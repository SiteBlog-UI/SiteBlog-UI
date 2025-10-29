import { CreateElement } from "../../core/createElement";
import { TypesLink } from "../../helpers/types/linkTypes";


/**
 * Description placeholder
 * @date Th-10-2025
 * @author marcos tonfor
 * @description Clase que establece un link 
 * del head tal como un enlace a hojas de 
 * estilo css.
 *
 * @export
 * @class Link
 * @typedef {Link}
 * @extends {CreateElement<"link">}
 */
export class Link extends CreateElement<"link"> {
    
    /**
     * Creates an instance of {CreateElement}.
     * @date Th-12-2025
     * @author marcos tonfor
     *
     * @constructor - Constructor vacío, 
     * unicamente la llamada al padre y 
     * su parametro obligatorio.
     */
    constructor() {
        super("link");
    }

    
    /**
     * Description placeholder
     * @date Th-13-2025
     * @author marcos tonfor
     *
     * @public
     * @param {string} rels 
     * @param {string} hrefs 
     * @param {?TypesLink} [linkType] 
     * @param {?string} [title] 
     */
    public setLink(
        rels: string,
        hrefs: string,
        linkType?: TypesLink,
        title?: string,
    ) {
        if (linkType) {
            if (linkType.atom) {
                this.setAttributesTag("rel", rels);
                this.setAttributesTag("href", hrefs);
                this.setAttributesTag("type", linkType.atom);
                this.setAttributesTag("title", title!);
            }
            if (linkType.css) {
                this.setAttributesTag("rel", rels);
                this.setAttributesTag("href", hrefs);
                this.setAttributesTag("type", linkType.css);
            }
            if(linkType.favicon) {
                this.setAttributesTag("rel", rels);
                this.setAttributesTag("href", hrefs);
                this.setAttributesTag("type", linkType.favicon);
            }
            if(linkType.manifest){
                this.setAttributesTag("rel", rels);
                this.setAttributesTag("href", hrefs);
            }
            if(linkType.print){
                this.setAttributesTag("rel", rels);
                this.setAttributesTag("href", hrefs);
                this.setAttributesTag("media", linkType.print);
            }
            if(linkType.rss){
                this.setAttributesTag("rel", rels);
                this.setAttributesTag("href", hrefs);
                this.setAttributesTag("type", linkType.rss);
                this.setAttributesTag("title", title!);
            }
        }
    }

    
    /**
     * Description placeholder
     * @date Th-14-2025
     * @author marcos tonfor
     *
     * @public
     * @name getLink
     * @returns {*} 
     */
    public getLink(){
        return this.getElement();
    }
}
