import { Div } from "@/components/elements/optionalElements/div";
import { Figure, Img } from "@/components/elements/semanticElements/figure";
import { Section } from "@/components/elements/semanticElements/section";
import { H1 } from "@/components/elements/titlesElements/headings";


export class FirstSection extends Section {
    constructor(){
        super();
    }

    public firstColumn(){
        const container = new Div();
        const encabezado = new H1();
        const logoimage = new Img();
        const logo = new Figure();
        logoimage.setImg("./assets/img/rocketride.png", "logo", {});
        encabezado.setContent("SiteBlog-UI");
        logo.setFigcaption(encabezado.getHeading());
        logo.appendContent(logoimage.getImg());
        container.setContent(logo.getFigure());
        return this.appendContent(container.getDiv());
    }
}