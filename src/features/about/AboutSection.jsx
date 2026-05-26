import Container from '../../components/common/Container/Container';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import { restaurantInfo } from '../../data/restaurant.data';

function AboutSection() {
  return (
    <section className="section section--soft" id="nosotros">
      <Container>
        <div className="story-grid">
          <SectionTitle
            eyebrow="Sobre nosotros"
            title={restaurantInfo.about.title}
            description="Una narrativa simple y escalable para una marca que necesita verse seria desde su primera versión."
          />
          <div className="story-card">
            {restaurantInfo.about.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default AboutSection;
