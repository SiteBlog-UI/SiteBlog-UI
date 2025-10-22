import { CreateElement } from "@/components/core/createElement";
import { UsualAttributes } from "@/components/helpers/types/usualTypes";

export class Img extends CreateElement<"img"> {
    constructor(){
        super("img");
    }

    public setImg(src: string, alt: string, attr: UsualAttributes){
        if(src){
            this.setAttributesTag("src", src);
        }
        if(alt){
            this.setAttributesTag("alt", alt);
        }
        if(attr){
            if(attr.id){
                this.setAttributesTag("id", attr.id);
            }
            if(attr.class){
                this.setAttributesTag("class", attr.class);
            }
            if(attr.title){
                this.setAttributesTag("title", attr.title);
            }
        }
    }

    public getImg(){
        return this.getElement();
    }
}

class Figcaption extends CreateElement<"figcaption">{
    constructor(){
        super("figcaption");
    }
}

export class Figure extends CreateElement<"figure"> {
    constructor() {
        super("figure");
    }

    public setFigcaption(content: string | Node){
        const caption = new Figcaption();
        caption.appendContent(content);
        this.appendContent(caption.getElement());
    }

    public getFigure(){
        return this.getElement();
    }
}
