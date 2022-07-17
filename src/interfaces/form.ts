export interface IForm {
    email: string,
    password: string,
    terms: boolean,
    touched: {
        email: boolean,
        password: boolean
    }
}

export interface IErrors {
    email: boolean,
    password: boolean
}