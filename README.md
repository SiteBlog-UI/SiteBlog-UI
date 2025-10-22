# SiteBlog-UI

Software escrito en typescript que genera interfaces de usuario. Front-End
generator. Es imprescindible utilízar `typescript` para usarlo y el uso del
paradigma de programacíon orientado a objetos, ya que el codigo base o core es
100% clases y orientado a objetos.

> En resumen:\
> Este software, `SiteBlog-UI` en principío solo interesa a desarrolladores en
> `typescript` que quíeran desarrollar un front-end, orientado a objetos y hábil
> por si mismo. Por hábil entíendo capaz de ser dinámico tambíen."`nadíe díjo`
> que el resultado de usar `SiteBlog-UI` tenga que ser estático" aúnque ahora
> mísmo es lo que es el resultado una web estática sin más.

## ¿Qué és?

> ### `SiteBlog-UI` es un simple software capaz de generar interfaces de usuario y gracias a la magia de `webpack` lo que define es un front-end completo o `site`, `blog`, `web` tal front-end que queda configurado como un `sitio estático`

## ¿Cómo se úsa?

> ### La forma idónea u optíma de usar `SiteBlog-UI` -en adelante este software- depende de lo que decída el desarrollador crear y cómo estructura el código de lo nque este desarrollando, -síempre un front-end "por lo menos de momento"-.

Está/s forma/s de instánciar o usar el core o código base de este software, es
algo en definicíon todavía, es decír lo estoy probando aún. Sin embargo el
proceso requíere bíen `crear clases` bíen `instánciar clases`.\
Explicańdolo:

1. opcíon `crear clases`
   - Core = clases y tipos.\
     mi código, el que genero\
     tambíen son clases. En ú_\
     ltima instáncia la invoc_\
     acíon se hace mediante la\
     llamada al metodo que en_\
     capsula un contenído dado\
     por la clase que hemos cr_\
     eado.
2. opcíon `instánciar clases`
   - Core = clases y tipos.\
     mi código, el que genero\
     son instáncias de estás\
     clases, y del mísmo modo\
     se úsan llamando al metodo\
     que crea el contenído.
3. Ejemplos:

```typescript
// Ejemplo con la creacíon de
// un header que usa una clase
// para generar contenído

export class FirstSection extends Section {
    constructor() {
        super();
    }

    public firstColumn() {
        const container = new Div();
        const encabezado = new H1();
        const logoimage = new Img();
        const logo = new Figure();
        logoimage.setImg("./assets/img/rocketride.png", "logo", {});
        encabezado.setContent("SiteBlog-UI");
        logo.setFigcaption(encabezado.getHeading());
        logo.appendContent(logoimage.getImg());
        container.setContent(logo.getFigure());
        return this.appendContent(container.getDiv());
    }
    /**
     * Aquí
     */
    // Más metodos o seccíones
    // para la 1ª seccíon del
    // header.
}
```

```typescript
// Creacíon e insercíon del header

const firstSection = new FirstSection();

export function header() {
    const header = new Header();
    header.appendContent(firstSection.firstColumn());
    document.addEventListener("DOMContentLoaded", () => {
        CreateElement.setElement(header.getHeader(), "ofRender"); // ofRender es un id que debe existír en el index.html y que es dónde va a incluírse el contenído del metodo al invocarlo. Obvía decír que es un id aleatorío y que debe escribirse con la redaccíon del metodo que genera un header con contenido.
    });
}
```
