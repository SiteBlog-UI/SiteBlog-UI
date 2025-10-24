# `core/`

> ## CreateElement

```typescript
  export class CreateElement<T extends keyof HTMLElementTagNameMap> {
  protected _tag: T;
  protected _element: HTMLElementTagNameMap[T];
  private static inserter: HTMLElement | null;
  constructor(tag: T) {
      this._tag = tag;
      this._element = document.createElement(this._tag);
  }

  public setAttributesTag(attr: string, attrValue: string): this {
      this._element.setAttribute(attr, attrValue);
      return this;
  }

  public appendContent(content: string | Node): Node {
      if (typeof content === "string") {
          const text = document.createTextNode(content);
          return this._element.appendChild(text);
      } else {
          return this._element.appendChild(content);
      }
  }

  public static setElement(content: Node, insert?: string) {
      if (insert) {
          this.inserter = document.getElementById(insert);
          this.inserter?.appendChild(content);
      }
      return this;
  }

  public getElement(): HTMLElementTagNameMap[T] {
      return this._element;
  }
```
---

### Clase única o central, superclase o padre y abuelo en el sistema y todo el software.

A su alrededor gira todo y la potencía del software reside en ella. Al extenderla requíere de parametro un tag legal html que genera la clase hija por defecto, es decír la clase hija de `CreateElement` síempre es un tag html legal y estandard. Por lo tanto el software código fuente base se compone de una clase por cada tag, o séa capaz de producír el tag html en cuestíon con todos sus atributos posibles y estado y comportamíento.

---

> ##### Retroceso [Index](../index.md)