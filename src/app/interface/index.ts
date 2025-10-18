import { CreateElement } from "@/components/core/createElement";
import { Header } from "@/components/elements/semanticElements/header";
import { ofFirstSection } from "./header/firstSection";
import { secondSection } from "./header/secondSection";

export function headers() {
    const header = new Header();
    header.setHeader({ id: "soy-el-header" });
    const ofHeader = header.getElement();
    CreateElement.setElement(ofHeader, "ofRender");
    ofFirstSection();
    secondSection();
}
