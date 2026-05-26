import Badge from '../../components/common/Badge/Badge';
import Container from '../../components/common/Container/Container';
import SectionTitle from '../../components/common/SectionTitle/SectionTitle';
import { featuredDishes, getDishImage } from '../../data/assets.data';
import { menuCategories } from '../../data/menu.data';
import { formatCurrency } from '../../utils/formatCurrency';

function MenuSection() {
  return (
    <section className="menu-section" id="menu">
      <Container>
        <SectionTitle
          eyebrow="Carta"
          title="El menu es la pieza principal."
        />

        <div className="featured-grid" id="destacados">
          {featuredDishes.map((dish) => (
            <article className="featured-card" key={dish.id}>
              <img src={dish.image} alt={dish.name} />
              <div className="featured-card__body">
                <p className="featured-card__eyebrow">Destacado</p>
                <h3>{dish.name}</h3>
                <p>{dish.description}</p>
                <strong>{formatCurrency(dish.price)}</strong>
              </div>
            </article>
          ))}
        </div>

        <div className="category-pills" aria-label="Categorias del menu">
          {menuCategories.map((category) => (
            <a className="category-pill" href={`#${category.id}`} key={category.id}>
              {category.name}
            </a>
          ))}
        </div>

        <div className="menu-stack">
          {menuCategories.map((category) => (
            <article className="menu-panel" id={category.id} key={category.id}>
              <div className="menu-panel__header">
                <div>
                  <p className="menu-panel__eyebrow">Categoria</p>
                  <h3>{category.name}</h3>
                </div>
                {category.note ? <small>{category.note}</small> : null}
              </div>
              <p className="menu-panel__description">{category.description}</p>
              <div className="menu-list">
                {category.items.map((item) => {
                  const image = getDishImage(item.name);

                  return (
                    <div className="menu-row" key={`${category.id}-${item.name}`}>
                      {image ? <img className="menu-row__image" src={image} alt={item.name} /> : null}
                      <div className="menu-row__copy">
                        <div className="menu-row__heading">
                          <h4>{item.name}</h4>
                          <strong>{formatCurrency(item.price)}</strong>
                        </div>
                        {item.description ? <p>{item.description}</p> : null}
                      </div>
                      {item.tags?.length ? (
                        <div className="menu-row__tags">
                          {item.tags.map((tag) => (
                            <Badge key={tag}>{tag}</Badge>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}

export default MenuSection;
