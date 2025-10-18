import { CreateElement } from "../../core/createElement";

class Option extends CreateElement<"option"> {
    constructor() {
        super("option");
    }

    public setOption(value: string | Node) {
        this.appendContent(value);
    }

    public getOption() {
        return this.getElement();
    }
}

class Optgroup extends CreateElement<"optgroup"> {
    constructor() {
        super("optgroup");
    }

    public setOptgroup(item: string | Node) {
        this.appendContent(item);
    }

    public getOptgroup() {
        return this.getElement();
    }
}

export class Select extends CreateElement<"select"> {
    /**
     * Esta propiedad guardará el Optgroup que está siendo construido actualmente.
     * Si es `null`, las opciones se añaden directamente al <select>.
     */
    private currentOptgroup: Optgroup | null = null;

    constructor() {
        super("select");
    }

    /**
     * Inicia un nuevo grupo de opciones.
     * Todas las llamadas a addOption posteriores se añadirán a este grupo
     * hasta que se llame de nuevo a startOptgroup.
     * @param label La etiqueta visible para el grupo.
     */
    public startOptgroup(label: string): this {
        // 1. CREA UNA NUEVA INSTANCIA de Optgroup. ¡La clave!
        const newOptgroup = new Optgroup();
        newOptgroup.setAttributesTag("label", label);

        // 2. AÑADE el nuevo optgroup al <select>.
        this.appendContent(newOptgroup.getOptgroup());

        // 3. ESTABLECE el nuevo optgroup como el "activo".
        this.currentOptgroup = newOptgroup;

        return this;
    }

    /**
     * Añade una opción.
     * Es "inteligente": la añade al optgroup activo si existe,
     * o directamente al select si no.
     */
    public addOption(
        text: string,
        value?: string,
        selected: boolean = false,
    ): this {
        const newOption = new Option();
        newOption.setOption(text);
        newOption.setAttributesTag("value", value ?? text);
        if (selected) {
            newOption.setAttributesTag("selected", "");
        }

        // 4. LÓGICA DE ESTADO: ¿Dónde la añado?
        if (this.currentOptgroup) {
            // Si hay un grupo activo, la opción va dentro de él.
            this.currentOptgroup.appendContent(newOption.getOption());
        } else {
            // Si no, va directamente al select.
            this.appendContent(newOption.getOption());
        }

        return this;
    }

    /**
     * Simplemente devuelve el elemento <select> final.
     */
    public getSelect(): HTMLSelectElement {
        return this.getElement();
    }
}
