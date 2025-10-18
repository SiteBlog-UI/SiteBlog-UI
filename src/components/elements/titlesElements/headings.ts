import { CreateElement } from "@/components/core/createElement";
import { UsualAttributes } from "@/components/helpers/types/usualTypes";

class Headings<T extends keyof HTMLElementTagNameMap> extends CreateElement<T> {
    protected level: T;
    constructor(_level: T) {
        super(_level);
        this.level = _level;
    }

    public setAttributes(attr: UsualAttributes) {
        if (attr) {
            if (attr.id) {
                return this.setAttributesTag("id", attr.id);
            }
            if (attr.class) {
                return this.setAttributesTag("class", attr.class);
            }
            if (attr.title) {
                return this.setAttributesTag("title", attr.title);
            }
        }
    }

    public setContent(content: string | Node) {
        return this.appendContent(content);
    }

    public getHeading(): Node {
        return this.getElement();
    }
}

export class H1 extends Headings<"h1"> {
    constructor() {
        super("h1");
    }
}

export class H2 extends Headings<"h2"> {
    constructor() {
        super("h2");
    }
}

export class H3 extends Headings<"h3"> {
    constructor() {
        super("h3");
    }
}

export class H4 extends Headings<"h4"> {
    constructor() {
        super("h4");
    }
}

export class H5 extends Headings<"h5"> {
    constructor() {
        super("h5");
    }
}

export class H6 extends Headings<"h6"> {
    constructor() {
        super("h6");
    }
}
