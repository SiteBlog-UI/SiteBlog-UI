import { Label } from "@/components/elements/formElements/label";
import { AttrForm } from "../../types/attrForm";
import { NewFieldset } from "../utils/forms/newFieldset";
import { NewForm } from "../utils/forms/newForm";
import { NewInput } from "../utils/forms/newInput";
import { H3 } from "@/components/elements/titlesElements/headings";
import { Fieldset } from "@/components/elements/formElements/fieldset";
import { Input } from "@/components/elements/formElements/input";

/**
 * Creacíon del encabezado
 *  para el formulario de
 *  registro.
 */
const h3 = new H3();
h3.setAttributes({ id: "registerTitle" });
h3.setContent("Formulario de registro");
const title = h3.getHeading();

/**
 * Creacíon del fieldset que contiene
 *  los campos paar los datos necesarios
 *  para el login posterior.
 */
const datosAcceso = new Fieldset();
const subDato = new Fieldset();
// Inputs para el nombre completo + label
const name = new Input();
name.setType({ text: "text" });
const surname = new NewInput();
surname.setInputBuild({ text: "text" }, "Escriba sus apellidos");
const password = new NewInput();
password.setInputBuild({ password: "password" }, "Indíque una contraseña");
const repytePassword = new NewInput();
repytePassword.setInputBuild({ password: "password" }, "Repita la contraseña");
const labelName = new Label();
labelName.setLabel("Indíque su nombre", "name");
labelName.appendContent(name.geInput());
const labelSurname = new Label();
labelSurname.setLabel("Sus apellidos", "apellidos");
labelSurname.appendContent(surname.getNewInput());
const labelPassword = new Label();
labelPassword.setLabel("Indique una contraseña", "password");
labelPassword.setAttributesTag("class", "label-password");
labelPassword.appendContent(password.getNewInput());
const labelPasswordReplay = new Label();
labelPasswordReplay.setLabel("Repita la contraseña", "repitePassword");
labelPasswordReplay.setAttributesTag("class", "label-password");
labelPasswordReplay.appendContent(repytePassword.getNewInput());
subDato.appendContent(labelPassword.getLabel());
subDato.appendContent(labelPasswordReplay.getLabel());
datosAcceso.appendContent(labelName.getLabel());
datosAcceso.appendContent(labelSurname.getLabel());
datosAcceso.setLegend("Datos de acceso");
datosAcceso.setAttributesTag("id", "campoDeAcceso");
datosAcceso.appendContent(subDato.getElement());

export function registerForm() {
    const formRegister = new NewForm();
    formRegister.getForm(
        title,
        {
            action: "./formAction.html",
            method: "get",
            enctype: true,
            name: "register",
        } as AttrForm,
        "loginAccess",
        { attribute: "id", attributeName: "register" },
    );
    formRegister.setContent(datosAcceso.getElement());
}
