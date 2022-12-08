export class Condition {

    readonly text: string;
    accepted: boolean;
    required: boolean;

    constructor(text: string, accepted: boolean, required: boolean) {
        this.text = text;
        this.accepted = accepted;
        this.required = required;
    }
}
