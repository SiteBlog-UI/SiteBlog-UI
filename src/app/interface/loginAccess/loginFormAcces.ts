import { NewFieldset } from "../utils/forms/newFieldset";
import { NewForm } from "../utils/forms/newForm";
import { NewInput } from "../utils/forms/newInput";
import { AttrForm } from "../types/attrForm";
import { Button } from "../../components/elements/formElements/button";
import { Label } from "../../components/elements/formElements/label";
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

const inputName = new NewInput();
inputName.setInputBuild({ text: "text" }, "Escriba su nombre");
const inputPassword = new NewInput();
inputPassword.setInputBuild({ password: "password" }, "Indíque su contraseña");

const iconCheck = new InlineContainer();
const iconChck = `<i class="icons iconCheck">&#x1f5f6;</i>`;
iconCheck.setContainer(iconChck);
const check = new NewInput();
check.setInputBuild({ checkbox: "checkbox" });
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

const inputsBox = new NewFieldset();
inputsBox.setLegend("Datos de Acceso:");
inputsBox.appendContent(iconName.getContainer());
inputsBox.appendContent(inputName.getNewInput());
inputsBox.appendContent(lpassword.getLabel());
inputsBox.appendContent(inputPassword.getNewInput());
inputsBox.appendContent(check.getNewInput());
inputsBox.appendContent(checkLabel.getLabel());
const buildBoxInputs = inputsBox.getElement();

const acceder = new Button();
acceder.setButton({ submit: "submit" }, { id: "acceso" });
acceder.appendContent("Acceder");
const borrar = new Button();
borrar.setButton({ reset: "reset" });
borrar.appendContent("Borrar");

const buttonsBox = new NewFieldset();
buttonsBox.setLegend("Procesar acceso.");
buttonsBox.appendContent(acceder.getElement());
buttonsBox.appendContent(borrar.getElement());
const buildBoxButtons = buttonsBox.getElement();

export function accessLogin() {
    const elForm = new NewForm();
    elForm.getForm(
        iconTitle.getContainer(),
        {
            action: "./formAction.html",
            method: "post",
            enctype: true,
            enctypeURL: "text/plain",
            name: "formstandard",
        } as AttrForm,
        "contenidos",
        { attribute: "id", attributeName: "boxstandard" },
    );
    elForm.setContent(buildBoxInputs);
    elForm.setContent(buildBoxButtons);
}
