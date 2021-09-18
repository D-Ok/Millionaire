export interface IApp {
    name: string;
    currency: string;
    questions: {
        key: string; score: number; question: string; correct: string[];
        options: { id: string; text: string; }[];
    }[];
}

export interface IOption {
    text: string;
    id: string;
}

export interface IQuestion {
    key: string,
    score: number,
    question: string,
    options: IOption[],
    correct: string[]
}

export interface IActResult {
    correct: string[],
    wrong: string[]
}

export interface IScore {
    score: number,
    questions: string[]
}
