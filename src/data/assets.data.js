import heroPoster from '../../.local/.resource/fondo/image.png';
import logoImage from '../../.local/.resource/icon/Icono.png';
import baoMaestroImage from '../../.local/.resource/platos/BaoMaestro.png';
import bibimbapImage from '../../.local/.resource/platos/Bibimbap.png';
import bokkeumUdonImage from '../../.local/.resource/platos/BokkeumUdon.png';
import bulgogiDeobapImage from '../../.local/.resource/platos/BulgogiDeobap.png';
import camaronApanadoImage from '../../.local/.resource/platos/CamaronApanad.png';
import gyozasCerdoImage from '../../.local/.resource/platos/Gyozascerdo.png';
import gyozasVegetalesImage from '../../.local/.resource/platos/Gyozasvegetales.png';
import jjajangmyeonImage from '../../.local/.resource/platos/Jjajangmyeon.png';
import kimbapImage from '../../.local/.resource/platos/Kimbap.png';
import onigiriPolloImage from '../../.local/.resource/platos/Onigiripollo.png';
import onigiriSalmonImage from '../../.local/.resource/platos/Onigirisalmon.png';
import padthaiImage from '../../.local/.resource/platos/Padthai.png';
import polloCoreanoImage from '../../.local/.resource/platos/PollosCoreanos.png';
import rabokkiImage from '../../.local/.resource/platos/Rabokki.png';
import ramenResImage from '../../.local/.resource/platos/RamenRes.png';
import teriyakiNoodlesImage from '../../.local/.resource/platos/TeriyakiNoodles.png';
import toriRamenImage from '../../.local/.resource/platos/ToriRamen.png';
import trilogiaBaosImage from '../../.local/.resource/platos/TrilogiasBaos.png';
import tteokbokkiImage from '../../.local/.resource/platos/Tteokbokki.png';
import yakimechiImage from '../../.local/.resource/platos/Yakimechi.png';
import yakiUdonImage from '../../.local/.resource/platos/YakiUdon.png';

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
