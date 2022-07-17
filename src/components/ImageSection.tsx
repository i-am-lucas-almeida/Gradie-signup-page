import image from "../assets/iphone-mockup.png";
import styles from "../styles/components/ImageSection.module.css";

const ImageSection = () => {

    return (

        <div className={styles.container__image}>

            <div className={styles.container__image_text}>

                <h1>Gradie</h1>

                <p>Use gradients em segundos.</p>

            </div>

            <img
                src={image}
                alt="imagem página principal"
                className={styles.container__image_image}
            />

        </div>

    );

};

export default ImageSection;