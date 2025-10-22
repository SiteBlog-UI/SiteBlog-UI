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
}
