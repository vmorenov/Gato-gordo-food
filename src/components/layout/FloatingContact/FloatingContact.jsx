import { restaurantInfo } from '../../../data/restaurant.data';

function WhatsAppIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 0 0-8.68 14.97L2 22l5.19-1.28A10 10 0 1 0 12 2Zm0 18.18a8.14 8.14 0 0 1-4.15-1.13l-.3-.18-3.08.76.82-3-.2-.31A8.18 8.18 0 1 1 12 20.18Zm4.48-6.11c-.24-.12-1.42-.7-1.64-.77-.22-.08-.38-.12-.54.12-.16.23-.62.77-.76.92-.14.16-.28.18-.52.06a6.72 6.72 0 0 1-1.98-1.22 7.48 7.48 0 0 1-1.37-1.71c-.14-.24-.01-.37.1-.5.1-.1.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.29-.74-1.76-.2-.48-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.31.98 2.47c.12.16 1.69 2.58 4.1 3.61.57.25 1.02.4 1.36.51.57.18 1.08.16 1.49.1.45-.07 1.42-.58 1.62-1.14.2-.56.2-1.04.14-1.14-.06-.1-.22-.16-.46-.28Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 24 24">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2.2A2.8 2.8 0 0 0 4.2 7v10A2.8 2.8 0 0 0 7 19.8h10a2.8 2.8 0 0 0 2.8-2.8V7A2.8 2.8 0 0 0 17 4.2H7Zm10.25 1.65a1.1 1.1 0 1 1 0 2.2 1.1 1.1 0 0 1 0-2.2ZM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10Zm0 2.2A2.8 2.8 0 1 0 12 14.8 2.8 2.8 0 0 0 12 9.2Z" />
    </svg>
  );
}

function FloatingContact() {
  return (
    <div className="floating-contact" aria-label="Accesos rapidos">
      <a
        className="floating-contact__icon floating-contact__icon--whatsapp"
        href={restaurantInfo.contact.whatsappUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir WhatsApp"
      >
        <WhatsAppIcon />
      </a>
      <a
        className="floating-contact__icon floating-contact__icon--instagram"
        href={restaurantInfo.contact.instagramUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Abrir Instagram"
      >
        <InstagramIcon />
      </a>
    </div>
  );
}

export default FloatingContact;
