export class InlineContainer {
    private span: HTMLElement;
    constructor() {
        this.span = document.createElement("span");
    }

    public setContainer(content: string) {
        this.span.innerHTML = content;
    }

    public setContainerHelp(content: Node, more: Node) {
        this.span.appendChild(content);
        this.span.appendChild(more);
    }

    public setContainerHelper(content: Node) {
        this.span.appendChild(content);
    }

    public getContainer(): Node {
        return this.span;
    }
}
