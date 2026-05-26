import heroPoster from '../assets/fondo/image.png';
import logoImage from '../assets/icon/Icono.png';
import baoMaestroImage from '../assets/platos/BaoMaestro.png';
import bibimbapImage from '../assets/platos/Bibimbap.png';
import bokkeumUdonImage from '../assets/platos/BokkeumUdon.png';
import bulgogiDeobapImage from '../assets/platos/BulgogiDeobap.png';
import camaronApanadoImage from '../assets/platos/CamaronApanad.png';
import gyozasCerdoImage from '../assets/platos/Gyozascerdo.png';
import gyozasVegetalesImage from '../assets/platos/Gyozasvegetales.png';
import jjajangmyeonImage from '../assets/platos/Jjajangmyeon.png';
import kimbapImage from '../assets/platos/Kimbap.png';
import onigiriPolloImage from '../assets/platos/Onigiripollo.png';
import onigiriSalmonImage from '../assets/platos/Onigirisalmon.png';
import padthaiImage from '../assets/platos/Padthai.png';
import polloCoreanoImage from '../assets/platos/PollosCoreanos.png';
import rabokkiImage from '../assets/platos/Rabokki.png';
import ramenResImage from '../assets/platos/RamenRes.png';
import teriyakiNoodlesImage from '../assets/platos/TeriyakiNoodles.png';
import toriRamenImage from '../assets/platos/ToriRamen.png';
import trilogiaBaosImage from '../assets/platos/TrilogiasBaos.png';
import tteokbokkiImage from '../assets/platos/Tteokbokki.png';
import yakimechiImage from '../assets/platos/Yakimechi.png';
import yakiUdonImage from '../assets/platos/YakiUdon.png';

export const brandAssets = {
  heroPoster,
  logoImage,
};

export const dishImages = {
  Tteokbokki: tteokbokkiImage,
  'Pollo coreano (5 un.)': polloCoreanoImage,
  'Camaron apanado (6 un.)': camaronApanadoImage,
  Kimbap: kimbapImage,
  'Gyozas de cerdo (4/8 un.)': gyozasCerdoImage,
  'Gyozas vegetales (4/8 un.)': gyozasVegetalesImage,
  'Onigiri salmon': onigiriSalmonImage,
  'Onigiri pollo': onigiriPolloImage,
  'Bao Maestro': baoMaestroImage,
  'Trilogia de baos': trilogiaBaosImage,
  Rabokki: rabokkiImage,
  Bibimbap: bibimbapImage,
  Padthai: padthaiImage,
  'Yaki Udon': yakiUdonImage,
  'Teriyaki Noodles': teriyakiNoodlesImage,
  Yakimechi: yakimechiImage,
  'Bulgogi Deobap': bulgogiDeobapImage,
  'Bokkeum Udon': bokkeumUdonImage,
  Jjajangmyeon: jjajangmyeonImage,
  'Tori Ramen': toriRamenImage,
  'Ramen Res': ramenResImage,
};

export function getDishImage(name) {
  return dishImages[name] ?? null;
}

export const featuredDishes = [
  {
    id: 'pollo-coreano',
    name: 'Pollo coreano',
    price: 7800,
    description: 'Crujiente, glaseado y listo para abrir el apetito.',
    image: getDishImage('Pollo coreano (5 un.)'),
  },
  {
    id: 'ramen-res',
    name: 'Ramen Res',
    price: 13500,
    description: 'Caldo potente, carne y ajitama con perfil mas intenso.',
    image: getDishImage('Ramen Res'),
  },
  {
    id: 'tori-ramen',
    name: 'Tori Ramen',
    price: 11500,
    description: 'Version de pollo con noodle, nori y ajitama.',
    image: getDishImage('Tori Ramen'),
  },
  {
    id: 'trilogia-baos',
    name: 'Trilogia de baos',
    price: 9000,
    description: 'Formato perfecto para probar y compartir.',
    image: getDishImage('Trilogia de baos'),
  },
];
