import { useNavigate } from 'react-router-dom';
import QRCode from 'react-qr-code';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  // URL de la galería - Se adapta automáticamente
  // En producción (Vercel): usará tu dominio de Vercel
  // En desarrollo: usará localhost o tu IP local
  const galleryUrl = window.location.origin + '/gallery';

  return (
    <div className="home-container">
      <div className="home-content">
        <div className="header-section">
          <h1 className="main-title">Menú Saludable</h1>
          <p className="subtitle">Opciones Nutritivas para el Bienestar</p>
        </div>

        <div className="qr-section">
          <div className="qr-wrapper">
            <QRCode
              value={galleryUrl}
              size={280}
              fgColor="#000000"
              bgColor="#ffffff"
            />
          </div>
          <p className="qr-instruction">Escanea para ver el menú completo</p>
        </div>

        <div className="info-section">
          <div className="info-item author">
            <p className="info-value">Lic. Aylen Cetina López</p>
          </div>
          <div className="info-item institution">
            <p className="info-value institution-name">
              Instituto Tecnológico
              <br />
              Superior de Comalcalco
            </p>
          </div>
        </div>

        <button
          className="enter-button"
          onClick={() => navigate('/gallery')}
        >
          Ver Menú
        </button>
      </div>

      <footer className="home-footer">
        <p>Desarrollado por VBCR</p>
      </footer>
    </div>
  );
}

export default Home;
