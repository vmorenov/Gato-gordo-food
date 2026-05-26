import Container from '../../components/common/Container/Container';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import { restaurantInfo } from '../../data/restaurant.data';

function ContactSection() {
  const mapEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(restaurantInfo.location.address)}&z=16&output=embed`;

  return (
    <section className="contact-section" id="contacto">
      <Container wide>
        <div className="contact-section__layout">
          <div className="contact-section__block contact-section__block--hours">
            <div className="contact-section__header">
              <p className="menu-panel__eyebrow">Horarios</p>
              <h3>Abierto en los momentos que importan.</h3>
            </div>
            <ul className="schedule-list">
              {restaurantInfo.location.hours.map((slot) => (
                <li key={slot.days}>
                  <span>{slot.days}</span>
                  <strong>{slot.value}</strong>
                </li>
              ))}
            </ul>
          </div>

          <div className="contact-section__block contact-section__block--location" id="ubicacion">
            <SectionTitle
              eyebrow="Ubicacion"
              title="Ven por la experiencia completa en San Felipe."
              description="La ubicacion queda clara, directa y con el mapa visible para llegar sin vueltas."
            />
            <div className="contact-section__location-grid">
              <div className="contact-meta">
                <div>
                  <span>Direccion</span>
                  <strong>{restaurantInfo.location.address}</strong>
                </div>
                <a href={restaurantInfo.location.mapUrl} target="_blank" rel="noreferrer">
                  Abrir en Google Maps
                </a>
              </div>
              <div className="contact-map">
                <iframe
                  title="Mapa de Gato Gordo"
                  src={mapEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default ContactSection;
