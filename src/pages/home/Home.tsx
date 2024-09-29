import { Layout } from "../../components/Layout/Layout";
import familyImage from "../../assets/hero_image.png";
import { Divider } from "../../components/Divider/Divider";
import { Form } from "./components/Form/Form";
import "./styles.scss";

function Home() {
  return (
    <Layout>
      <div className="home-container">
        <div className="home-container__right">
          <img src={familyImage} alt="Family Image" className="home-container__image" />
          <div className="right__texts">
            <h2 className='chip-form'>Seguro Salud Flexible</h2>
            <h1 className='title-form'>Creado para ti y tu familia</h1>
          </div>
        </div>
        <div className="home-container__divider">
          <Divider />
        </div>
        <div className="home-container__left">
          <div className="left__texts">
            <h2 className='chip-form'>Seguro Salud Flexible</h2>
            <h1 className='title-form'>Creado para ti y tu familia</h1>
          </div>
          <h3 className='description-form'>
            Tú eliges cuánto pagar. Ingresa tus datos, cotiza y recibe nuestra
            asesoría. 100% online.
          </h3>
          <div className="left__form-container">
            <Form />
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
