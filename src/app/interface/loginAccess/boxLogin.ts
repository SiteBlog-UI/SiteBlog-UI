import { H2 } from "@/components/elements/titlesElements/headings";
import { InlineContainer } from "@/components/helpers/helper/inlineContainer";
import { Label } from "@/components/elements/formElements/label";
import { Link } from "@/components/elements/especials/link";
import { Button } from "@/components/elements/formElements/button";
import { Form } from "@/components/elements/formElements/form";
import { Aside } from "@/components/elements/semanticElements/aside";
import { Input } from "@/components/elements/formElements/input";
import { Fieldset } from "@/components/elements/formElements/fieldset";
import { SimpleModal } from "@/app/utils/modals/simpleModal";

const encabezado = new H2();
encabezado.setAttributes({ id: "tituloFormularioLogin" });
encabezado.setContent("Acceder");
const iconTitle = new InlineContainer();
const icon = `<strong class="icons">&#x1f679;</strong>`;
let render = document.createElement("i");
render.innerHTML = icon;
encabezado.setContent(render);
iconTitle.setContainerHelper(encabezado.getHeading());

const inputName = new Input();
inputName.setAttr({ id: "nombre", name: "nombre" });
inputName.setType({ text: "text" });
inputName.setPlaceholder("Escriba su nombre");
const inputPassword = new Input();
inputPassword.setType({ password: "password" });
inputPassword.setAttr({ id: "password", name: "password" });

const iconCheck = new InlineContainer();
const iconChck = `<i class="icons iconCheck">&#x1f5f6;</i>`;
iconCheck.setContainer(iconChck);
const check = new Input();
check.setType({ checkbox: "checkbox" });
check.setAttr({ id: "persistbtn", name: "persistbtn" });
const checkLabel = new Label();
checkLabel.appendContent(iconCheck.getContainer());
checkLabel.setLabel("Recordarme", "persistbtn");

const lname = new Label();
lname.setLabel("Nombre de usuario:", "user");
const lpassword = new Label();
lpassword.setLabel("Clave de acceso.", "contrasenya");

const iconName = new InlineContainer();
const icon2 = `<strong class="icons">&#x1f610;</strong>`;
const render2 = document.createElement("i");
render2.innerHTML = icon2;
iconName.setContainerHelp(lname.getLabel(), render2);

const inputsBox = new Fieldset();
inputsBox.setLegend("Datos de Acceso:");
inputsBox.appendContent(iconName.getContainer());
inputsBox.appendContent(inputName.geInput());
inputsBox.appendContent(lpassword.getLabel());
inputsBox.appendContent(inputPassword.geInput());
inputsBox.appendContent(check.geInput());
inputsBox.appendContent(checkLabel.getLabel());
const buildBoxInputs = inputsBox.getElement();

const acceder = new Button();
acceder.setButton({ submit: "submit" }, { id: "acceso" });
acceder.appendContent("Acceder");
const borrar = new Button();
borrar.setButton({ reset: "reset" });
borrar.appendContent("Borrar");

const buttonsBox = new Fieldset();
buttonsBox.setLegend("Procesar acceso.");
buttonsBox.setAttributesTag("class", "btn");
buttonsBox.appendContent(acceder.getElement());
buttonsBox.appendContent(borrar.getElement());
const buildBoxButtons = buttonsBox.getElement();

const formLogin = new Form();
formLogin.setAction("./formAction.html");
formLogin.setMethod("get");
formLogin.appendContent(iconTitle.getContainer());
formLogin.appendContent(buildBoxInputs);
formLogin.appendContent(buildBoxButtons);

/*
export function acceso(){
const newModal = new SimpleModal("#miModal");
newModal.setModal(formLogin.getElement(), {id: "unaModal"},{content: "MODAL", id: "open"},{id: "miModal", class: "modal"}, {id: "contenidos",class: "modal-content"});

const view = document.getElementById("examples");
view?.appendChild(newModal.getAside());
} */
/*
export function acceso(){
const newModal = new SimpleModal("#miModal");
newModal.setModal(formLogin.getElement(), {id: "unaModal"},{content: "MODAL", id: "open"},{id: "miModal", class: "modal"}, {id: "contenidos",class: "modal-content"});
}
 */

const newModal = new SimpleModal("#miModal");
newModal.setModal(
    formLogin.getElement(),
    { id: "unaModal" },
    { content: "LOGIN", id: "open" },
    { id: "miModal", class: "modal" },
    { id: "contenidos", class: "modal-content" },
);
/*
const view = document.getElementById("examples");
view?.appendChild(newModal.getAside()); */

const linkAtom = new Link();
linkAtom.setLink("alternate", "", { atom: "application/atom+xml" }, "Atom");
document.head.appendChild(linkAtom.getElement());

const linkCss = new Link();
const elHREF = new URL("/public/css/modal.css", import.meta.url);
linkCss.setLink("stylesheet", elHREF.href, { css: "text/css" }, "");
document.addEventListener("DOMContentLoaded", () => {
    document.head.appendChild(linkCss.getElement());
});

export function boxLogin() {
    const ofLogin = new Aside();
    ofLogin.setAside({ id: "login" });
    ofLogin.setContent(newModal.getAside());
    const view = document.getElementById("cajaBoxLogin");
    view?.appendChild(ofLogin.getAside());
}
