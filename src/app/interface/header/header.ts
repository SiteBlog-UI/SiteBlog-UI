import { Header } from "@/components/elements/semanticElements/header";
import { FirstSection } from "./firstSection";
import { CreateElement } from "@/components/core/createElement";

const firstSection = new FirstSection();

export function header() {
    const header = new Header();
    header.appendContent(firstSection.firstColumn());
    document.addEventListener("DOMContentLoaded", () => {
        CreateElement.setElement(header.getHeader(), "ofRender");
    });
}
