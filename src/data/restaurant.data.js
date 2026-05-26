import { navigationLinks } from './navigation.data';

export const restaurantInfo = {
  name: 'Gato Gordo',
  category: 'Asian food',
  headline: 'Menu coreano y fusion con foco en platos protagonistas, delivery visual y contacto directo.',
  heroTitle: 'Ramen, fuego y cocina asiatica con personalidad propia.',
  heroDescription:
    'Gato Gordo mezcla sabor coreano, street food y platos intensos en una experiencia directa, calida y facil de pedir. Un lugar para volver por el ramen, el pollo crocante y la vibra de la casa.',
  location: {
    address: 'Plaza Colonial Local 4, San Felipe, Region de Valparaiso, Chile',
    mapUrl: 'https://maps.google.com/?q=Plaza+Colonial+Local+4,+San+Felipe,+Region+de+Valparaiso,+Chile',
    hours: [
      { days: 'Lunes', value: 'Cerrado' },
      { days: 'Martes a jueves', value: '12:30 - 15:30 / 18:30 - 22:00' },
      { days: 'Viernes y sabado', value: '12:30 - 15:30 / 18:30 - 22:30' },
      { days: 'Domingo', value: '12:30 - 17:30' },
    ],
  },
  contact: {
    phoneLabel: '+56 9 3425 0319',
    phoneUrl: 'tel:+56934250319',
    whatsappLabel: 'WhatsApp',
    whatsappUrl: 'https://wa.me/56934250319',
    instagramLabel: '@gatogordo.asianfood',
    instagramUrl: 'https://www.instagram.com/gatogordo.asianfood/',
  },
  navigation: {
    menu: navigationLinks.find((item) => item.href === '#menu'),
  },
};
