import styles from "../styles/components/Container.module.css";

import FormSection from "./FormSection";
import ImageSection from "./ImageSection";

const Container = () => {

    return (

        <div className={styles.container}>

            <ImageSection />

            <FormSection />

        </div>

    );

};

export default Container;