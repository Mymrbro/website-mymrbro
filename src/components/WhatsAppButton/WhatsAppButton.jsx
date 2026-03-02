import "./WhatsAppButton.css";

export default function WhatsAppButton() {
  const phoneNumber = "5531997678637"; // coloque seu número com DDI + DDD
  const message = "Olá! Gostaria de mais informações.";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      className="whatsapp-button"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
        alt="WhatsApp"
      />
    </a>
  );
}