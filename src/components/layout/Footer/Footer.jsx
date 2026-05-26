import Container from '../../common/Container/Container';
import { brandAssets } from '../../../data/assets.data';

function Footer() {
  return (
    <footer className="site-footer">
      <Container>
        <div className="site-footer__content">
          <div className="site-footer__brand-block">
            <a className="site-footer__brand-mark" href="#inicio" aria-label="Ir al inicio">
              <img src={brandAssets.logoImage} alt="Logo Gato Gordo" />
            </a>
            <div>
              <p className="site-footer__brand">Gato Gordo</p>
              <p className="site-footer__copy">Asian food</p>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="site-footer__legal">&copy; 2026 Gato Gordo</p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
