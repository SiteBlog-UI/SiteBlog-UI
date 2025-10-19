// import { CreateElement } from "@/components/core/createElement";
import { Li, Menus, UL } from "@/components/elements/optionalElements/lists";
import { Nav } from "@/components/elements/semanticElements/nav";

const barra = new Nav();
barra.setAttributesTag("id", "menuBack");
const ul = new UL();
const LIST = ul.getElement();
const backLink = new Menus();
const item = new Li();
    backLink.createMenu("navInserter", LIST, { id: "backLink" }, {
        id: "fromBack",
    });


item.createLi("Soy un item sin Link.", "fromBack", { class: "itemNormal" });
item.createLiLink("back <--", "fromBack", "./index.html");
const frutas = ["naranja", "manzana", "pera", "sandia", "melon", "granada"];
/* frutas.forEach((fruta) => {
    item.createLiLink(fruta, "fromBack", "#");
}); */
const links = ["linkNaranja", "linkManzana", "linkPera", "linkSandia", "linkMelon", "linkGranada"];
links.forEach((e) => {
backLink.recursividadLiLink(frutas, "fromBack", e, 0);
});
/* document.addEventListener("DOMContentLoaded", () => {
    CreateElement.setElement(barra.getElement(), "navInserter");
}); */

