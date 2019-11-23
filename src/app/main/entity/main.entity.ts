
interface State {
  counter: number;
}

export class MainEntity {
    user: string;
    initial: string;
    content: string;
    date: number;
    id: string;

    constructor() {
        this.user = undefined;
        this.initial = undefined;
        this.content = undefined;
        this.id = undefined;
    }
}

export class SubmitEntity {
    public cost: number;
    public costOption: string;

    constructor() {
        this.cost = undefined;
        this.costOption = undefined;
    }
}

export interface ConnectTestApiEntity {
    A: string;
    B: string;
}
