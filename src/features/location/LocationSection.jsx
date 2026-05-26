import Button from '../../components/common/Button/Button';
import Container from '../../components/common/Container/Container';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import { restaurantInfo } from '../../data/restaurant.data';

function LocationSection() {
  return (
    <section className="section section--soft" id="ubicacion">
      <Container>
        <div className="location-grid">
          <div>
            <SectionTitle
              eyebrow="Ubicación y horarios"
              title="Información clara para llegar sin fricción."
              description="La sección queda preparada para incorporar un mapa embebido más adelante."
            />
            <div className="location-card">
              <p className="location-card__label">Dirección</p>
              <strong>{restaurantInfo.location.address}</strong>
              <p>{restaurantInfo.location.reference}</p>
              <Button href={restaurantInfo.location.mapUrl}>Abrir en mapa</Button>
            </div>
          </div>
          <div className="schedule-card">
            <p className="location-card__label">Horarios</p>
            <ul>
              {restaurantInfo.location.hours.map((slot) => (
                <li key={slot.days}>
                  <span>{slot.days}</span>
                  <strong>{slot.value}</strong>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default LocationSection;
