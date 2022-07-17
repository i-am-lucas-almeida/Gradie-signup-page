import styles from "../styles/components/FormSection.module.css";

import { ChangeEvent, FormEvent, useState } from "react";
import { IForm, IErrors } from "../interfaces/form";

const Form = () => {

    const initState: IForm = {

        email: "",
        password: "",
        terms: false,
        touched: {
            email: false,
            password: false
        }

    };

    const [formData, setFormData] = useState(initState);

    const { email, password, terms } = formData;

    function onChange(e: ChangeEvent<HTMLInputElement>) {

        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

    }

    function onBlur(e: ChangeEvent<HTMLInputElement>) {

        const { name } = e.target;
        setFormData({ ...formData, touched: { ...formData.touched, [name]: true } });

    }

    function validate() {

        const errors: IErrors = {
            email: false,
            password: false
        };

        const validEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{3,4}$/i;

        if (formData.touched.email && !formData.email.match(validEmail)) {
            errors.email = true;
        }

        if (formData.touched.password && formData.password.length < 8) {
            errors.password = true;
        }

        return errors;

    }

    const errors = validate();

    function onSubmit(e: FormEvent<HTMLFormElement>) {

        e.preventDefault();

        if (!errors.email && !errors.password) {

            // enviar para o back end.
            alert("Cadastro concluído!!!");
            setFormData(initState);
        }

    }

    return (

        <form onSubmit={onSubmit}
            className={styles.form}>

            <h2 className={styles.form__title}>
                Crie uma conta
            </h2>

            <fieldset>

                <label htmlFor="email">Email</label>

                <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={onChange}
                    onBlur={onBlur}
                    placeholder="email@exemplo.com"
                    required
                    className={errors.email ? styles.form__error : ""}
                />

            </fieldset>

            <fieldset>

                <label htmlFor="password">Senha</label>

                <input
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={onChange}
                    onBlur={onBlur}
                    minLength={8}
                    maxLength={20}
                    size={20}
                    placeholder="Senha com 8 caracteres"
                    required
                    className={errors.password ? styles.form__error : ""}
                />

            </fieldset>

            <fieldset className={styles.form__terms}>

                <input
                    type="checkbox"
                    name="terms"
                    id="terms"
                    checked={terms}
                    onChange={onChange}
                    required
                />

                <p>
                    Para criar uma conta você deve concordar com os <a href="https://example.com/" target="_blank" rel="noreferrer">Termos &amp; Condições</a>.
                </p>

            </fieldset>

            <button type="submit">
                Sign up
            </button>

        </form>

    );

};

export default Form;