import { CreateElement } from "./createElement";

describe("Test a la clase genérica CraeteElement<T>", () => {
    it("debería crear un elemento html correcto en el constructor", () => {
        const unElemento = new CreateElement("div");
        const elemento = unElemento.getElement();

        expect(elemento).toBeDefined();
        expect(elemento.tagName).toBe("DIV");
        expect(elemento).toBeInstanceOf(HTMLDivElement);
    });
    it("debería asignar un atributo al tag que se genera pero usando cualquíer atributo posíble, setAttributesTag()", () => {
        const unInput = new CreateElement("input");
        unInput.setAttributesTag("type", "text");
        unInput.setAttributesTag("placeholder", "placeholder");
        const elemento = unInput.getElement();

        expect(elemento.getAttribute("type")).toBe("text");
        expect(elemento.getAttribute("placeholder")).toBe("placeholder");
    });
    it("debería hacer lo mísmo que el metodo anteríor pero usando solo los atributos globales de html, setUsualAttributes()", () => {
        const mockGlobals = {
            id: "test-id",
            class: "test-class",
            popover: true,
        };
        const otroElemento = new CreateElement("a");
        otroElemento.setUsualAttributes(mockGlobals as any);
        const elemento = otroElemento.getElement();

        expect(elemento.id).toBe("test-id");
        expect(elemento.className).toBe("test-class");
        expect(elemento.hasAttribute("popover")).toBe(true);
    });
    it("en este caso el metodo propío de la clase es appendContent(), debería insertar el contenído pasado como parámetro.", () => {
        const unParrafo = new CreateElement("p");
        unParrafo.appendContent("Hola mundo!¡ Soy marcos.");

        expect(unParrafo.getElement().textContent).toBe("Hola mundo!¡ Soy marcos.");
        const unStrong = new CreateElement("strong");
        unStrong.appendContent("Más contenído para el párrafo. Soy html tag strong.");
        const insertaNodo = unStrong.getElement();
        unParrafo.appendContent(insertaNodo);
        expect(unParrafo.getElement().children.length).toBe(1);
        expect(unParrafo.getElement().querySelector("strong")).not.toBeNull();
    });
    describe("static, setElement(),", () => {
        afterEach(() => {
            document.body.innerHTML = "";
        });
        it("debería insertar el contenído en un ID exístente.", () => {
            const inserter = new CreateElement("div");
            inserter.setAttributesTag("id", "inserto");
            document.body.appendChild(inserter.getElement());

            const unBoton = new CreateElement("button");
            unBoton.appendContent("Soy un botón insertado por setElement()");
            const boton = unBoton.getElement();
            CreateElement.setElement(boton, "inserto");

            const comprueba = document.getElementById("inserto");
            expect(comprueba).not.toBeNull();
            expect(comprueba?.children.length).toBe(1);
            expect(comprueba?.textContent).toBe("Soy un botón insertado por setElement()");
        });
        it("no debería fallar si no se pasa un 'insert (ID)'", () => {
            
        });
    });
});
