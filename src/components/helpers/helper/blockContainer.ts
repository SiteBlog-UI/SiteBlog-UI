export class BlockContainer {
    private div: HTMLElement;
    constructor() {
        this.div = document.createElement("div");
    }

    public setContainer(content: string) {
        this.div.innerHTML = content;
    }

    public getContainer(): Node {
        return this.div;
    }
}
