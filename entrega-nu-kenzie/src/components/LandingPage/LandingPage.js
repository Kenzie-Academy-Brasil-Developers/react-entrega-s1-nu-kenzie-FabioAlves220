import Logo2 from "../../assests/Logo2.png";
import Illustration from "../../assests/Illustration.png";
export const LandingPage = ({ setLandingPage }) => {
  return (
    <div className="landing">
      <div className="landingBox1">
        <img src={Logo2} />
        <h1>Centralize o controle das suas finanças</h1>
        <p>de forma rápida e segurança</p>
        <button onClick={() => setLandingPage(false)} className="landingButton">
          Iniciar
        </button>
      </div>
      <div className="landingBox2">
        <img src={Illustration} />
      </div>
    </div>
  );
};
