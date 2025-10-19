
import { Link } from "@/components/elements/especialElements/link";
import { Anchor } from "@/components/elements/optionalElements/anchor";
import { Div } from "@/components/elements/optionalElements/div";
import { Section } from "@/components/elements/semanticElements/section";
import { H1 } from "@/components/elements/titlesElements/headings";
import { boxLogin } from "../loginAccess/boxLogin";

// Construccíon del menu
const home = new Anchor();
home.setHiperReference("#");
home.appendContent("HOME");
const contacto = new Anchor();
contacto.setHiperReference("#");
contacto.appendContent("CONTACTO");
const about = new Anchor();
about.setHiperReference("#");
about.appendContent("ABOUT");

const menu = new Div();
menu.setDiv({ id: "menu" });
menu.appendContent(home.getElement());
menu.appendContent(contacto.getElement());
menu.appendContent(about.getElement());
// Fin construccíon del menu

const h1 = new H1();
h1.setAttributes({ id: "encabezadoPrincipal" });
h1.appendContent("Esto es una prueba del software");

const div = new Div();
div.setDiv({ id: "cajaBoxLogin" });

export function ofFirstSection() {
    const firstSection = new Section();
    firstSection.setAttributesTag("id", "barraMenus");
    firstSection.appendContent(menu.getDiv());
    firstSection.appendContent(h1.getHeading());
    firstSection.appendContent(div.getDiv());
    const insert = document.getElementById("soy-el-header");
    insert?.appendChild(firstSection.getElement());

    boxLogin();

    const headerSectionFirstStyles = new Link();
    const urls = new URL("/public/css/sectionMenus.css", import.meta.url);
    headerSectionFirstStyles.setLink("stylesheet", urls.href, {
        css: "text/css",
    });
    document.addEventListener("DOMContentLoaded", () => {
        document.head.appendChild(headerSectionFirstStyles.getElement());
    });
}
