import { CreateElement } from "@/components/core/createElement";
import { InputTypes } from "@/components/helpers/types/usualTypes";

export class Input extends CreateElement<"input"> {
    constructor() {
        super("input");
    }

    public setPlaceholder(placeholder: string) {
        return this.setAttributesTag("placeholder", placeholder);
    }

    public setType(opts: InputTypes) {
        if (opts) {
            if (opts.button) {
                this.setAttributesTag("type", opts.button);
            }
            if (opts.checkbox) {
                this.setAttributesTag("type", opts.checkbox);
            }
            if (opts.color) {
                this.setAttributesTag("type", opts.color);
            }
            if (opts.date) {
                this.setAttributesTag("type", opts.date);
            }
            if (opts["datetime-local"]) {
                this.setAttributesTag("type", opts["datetime-local"]);
            }
            if (opts.email) {
                this.setAttributesTag("type", opts.email);
            }
            if (opts.file) {
                this.setAttributesTag("type", opts.file);
            }
            if (opts.hidden) {
                this.setAttributesTag("type", opts.hidden);
            }
            if (opts.image) {
                this.setAttributesTag("type", opts.image);
            }
            if (opts.month) {
                this.setAttributesTag("type", opts.month);
            }
            if (opts.number) {
                this.setAttributesTag("type", opts.number);
            }
            if (opts.password) {
                this.setAttributesTag("type", opts.password);
            }
            if (opts.radio) {
                this.setAttributesTag("type", opts.radio);
            }
            if (opts.range) {
                this.setAttributesTag("type", opts.range);
            }
            if (opts.reset) {
                this.setAttributesTag("type", opts.reset);
            }
            if (opts.search) {
                this.setAttributesTag("type", opts.search);
            }
            if (opts.submit) {
                this.setAttributesTag("type", opts.submit);
            }
            if (opts.tel) {
                this.setAttributesTag("type", opts.tel);
            }
            if (opts.text) {
                this.setAttributesTag("type", opts.text);
            }
            if (opts.time) {
                this.setAttributesTag("type", opts.time);
            }
            if (opts.url) {
                this.setAttributesTag("type", opts.url);
            }
            if (opts.week) {
                this.setAttributesTag("type", opts.week);
            }
        }
    }

    public setAttr(
        opts?: { id?: string; class?: string; name?: string },
    ): this {
        if (opts) {
            if (opts.id) {
                this.setAttributesTag("id", opts.id);
                return this;
            }
            if (opts.class) {
                this.setAttributesTag("class", opts.class);
                return this;
            }
            if (opts.name) {
                this.setAttributesTag("name", opts.name);
                return this;
            }
            return this;
        }
        return this;
    }

    public getInput() {
        return this.getElement();
    }
}
