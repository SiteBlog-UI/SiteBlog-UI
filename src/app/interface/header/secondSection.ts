import { CreateElement } from "@/components/core/createElement";
import { Section } from "@/components/elements/semanticElements/section";
import { ofFirstArticleTitle, ofH2 } from "./hedingsHeader";
import { Div } from "@/components/elements/optionalElements/div";
import { Article } from "@/components/elements/semanticElements/article";

function contents() {
    function articleOne() {
        const firstArticle = new Article();
        firstArticle.setArticle({ id: "articleone" });
        const ofFirstArticle = firstArticle.getArticle();
        document.addEventListener("DOMContentLoaded", () => {
            CreateElement.setElement(ofFirstArticle, "secondSection");
        });
        ofFirstArticleTitle();
    }
    articleOne();
}

function inSecondSection() {
    const divFlex = new Div();
    divFlex.setDiv({ id: "contentSecondSectionHeader" });
    const ofDivFlex = divFlex.getElement();
    document.addEventListener("DOMContentLoaded", () => {
        CreateElement.setElement(ofDivFlex, "secondSection");
    });
    contents();
}

export function secondSection() {
    const section = new Section();
    section.setAttributesTag("id", "secondSection");
    const ofSection = section.getElement();
    document.addEventListener("DOMContentLoaded", () => {
        CreateElement.setElement(ofSection, "soy-el-header");
    });
    ofH2();
    inSecondSection();
}
