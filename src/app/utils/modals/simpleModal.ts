import { Anchor } from "@/components/elements/optionalElements/anchor";
import { Div } from "@/components/elements/optionalElements/div";
import { Aside } from "@/components/elements/semanticElements/aside";
import { UsualAttributes } from "@/components/helpers/types/usualTypes";

export class SimpleModal extends Aside {
    private targeter: Anchor;
    private box: Div;
    private boxContent: Div;
    private close: Anchor;
    constructor(meta: string) {
        super();
        this.targeter = new Anchor();
        this.targeter.setHiperReference(meta);
        this.box = new Div();
        this.boxContent = new Div();
        this.close = new Anchor();
    }

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
}
