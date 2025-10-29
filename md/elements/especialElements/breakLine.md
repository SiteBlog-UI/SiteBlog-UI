# `elements/especialElements/`

> ## BreakLine

```typescript
class BreakLine extends CreateElement<"br"> {
    constructor() {
        super("br");
    }
}
```
---

### Clase muy simple que representa un salto de línea y por lo tanto no requíere atributos o contenídos.

Su uso es muy simple tambíen:
```typescript
export function breakLine(): Node {
    const br = new BreakLine();
    return br.getElement();
}

const br_ = new BreakLine();
export const insert_br = br_.getElement();
/**
 * Ambas expreesiones usan export por que
 * es posible en princípio instánciar la
 * clase `BreakLine` de las 2 maneras.
*/
```
---

### Una manera es posible que no funcíone, la llamada al metodo por no ser un `node del dom`, para eso he inventado los helper `inlineBlock` y `blockContainer` usando uno u otro, un `span` o un `div` que por debajo usan `innerHTML` es posible configurar un template string que renderíza el metodo. Si es útil con `BreakLine` es aplicable al resto.

---
