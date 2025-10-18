import { CreateElement } from "@/components/core/createElement";
import { H2, H3 } from "@/components/elements/titlesElements/headings";

export function ofH2() {
    const h2 = new H2();
    h2.appendContent("Soy un h2, estoy mal colocado");
    h2.setAttributes({ class: "h2" });
    const elH2 = h2.getHeading();
    document.addEventListener("DOMContentLoaded", () => {
        CreateElement.setElement(elH2, "secondSection");
    });
}

export function ofFirstArticleTitle() {
    const h3 = new H3();
    h3.appendContent("Soy el titulo de un articulo");
    h3.setAttributes({ class: "h3" });
    const elH3 = h3.getElement();
    document.addEventListener("DOMContentLoaded", () => {
        CreateElement.setElement(elH3, "articleone");
    });
}
