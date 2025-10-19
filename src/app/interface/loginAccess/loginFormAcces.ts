import { Button } from "@/components/elements/formElements/button";
import { Fieldset } from "@/components/elements/formElements/fieldset";
import { Form } from "@/components/elements/formElements/form";
import { Input } from "@/components/elements/formElements/input";
import { Label } from "@/components/elements/formElements/label";
import { H2 } from "@/components/elements/titlesElements/headings";
import { InlineContainer } from "@/components/helpers/helper/inlineContainer";

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
inputName.setType({ text: "text" });
const inputPassword = new Input();
inputPassword.setType({ password: "password" });

const iconCheck = new InlineContainer();
const iconChck = `<i class="icons iconCheck">&#x1f5f6;</i>`;
iconCheck.setContainer(iconChck);
const check = new Input();
check.setType({ checkbox: "checkbox" });
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
buttonsBox.appendContent(acceder.getElement());
buttonsBox.appendContent(borrar.getElement());
const buildBoxButtons = buttonsBox.getElement();

export function accessLogin() {
    const elForm = new Form();
    elForm.setAction("");
    elForm.setMethod("get");
    elForm.encType(false);
    elForm.setAttributesTag("id", "elFormLogin");
    elForm.appendContent(buildBoxInputs);
    elForm.appendContent(buildBoxButtons);
}
