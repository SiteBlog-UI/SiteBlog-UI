import { CreateElement } from "@/components/core/createElement";

class BreakLine extends CreateElement<"br"> {
    constructor() {
        super("br");
    }
}

export function breakLine(): Node {
    const br = new BreakLine();
    return br.getElement();
}

const br_ = new BreakLine();
export const insert_br = br_.getElement();
