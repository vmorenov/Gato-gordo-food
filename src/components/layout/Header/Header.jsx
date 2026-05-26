import Button from '../../common/Button/Button';
import Container from '../../common/Container/Container';
import { brandAssets } from '../../../data/assets.data';
import { navigationLinks } from '../../../data/navigation.data';
import { restaurantInfo } from '../../../data/restaurant.data';

function Header() {
  return (
    <header className="site-header">
      <Container>
        <div className="site-header__content">
          <a className="site-header__brand" href="#inicio">
            <img src={brandAssets.logoImage} alt="Logo Gato Gordo" />
            <span>
              <strong>Gato Gordo</strong>
              <small>Asian food</small>
            </span>
          </a>
          <nav aria-label="Principal" className="site-header__nav-wrap">
            <ul className="site-header__nav">
              {navigationLinks.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="site-header__actions">
            <Button href={restaurantInfo.contact.whatsappUrl}>Pedir por WhatsApp</Button>
          </div>
        </div>
      </Container>
    </header>
  );
}

export default Header;
