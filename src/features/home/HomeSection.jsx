import Button from '../../components/common/Button/Button';
import Container from '../../components/common/Container/Container';
import { brandAssets } from '../../data/assets.data';
import { restaurantInfo } from '../../data/restaurant.data';

function HomeSection() {
  return (
    <section className="hero" id="inicio">
      <Container wide>
        <div className="hero__layout">
          <div className="hero__media">
            <div className="hero__poster">
              <img src={brandAssets.heroPoster} alt="Ilustracion de Gato Gordo" />
            </div>
          </div>
          <div className="hero__content">
            <p className="hero__eyebrow">Gato Gordo Asian Food</p>
            <h1>{restaurantInfo.heroTitle}</h1>
            <p className="hero__description">{restaurantInfo.heroDescription}</p>
            <div className="hero__actions">
              <Button href="#menu" size="large">
                Ir directo al menu
              </Button>
              <Button href={restaurantInfo.contact.instagramUrl} size="large" variant="secondary">
                Ver Instagram
              </Button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HomeSection;
