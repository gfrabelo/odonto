const DEFAULT_MESSAGE =
  "Olá! Conheci a clínica pelo site e gostaria de agendar uma avaliação.";

export function createWhatsAppUrl(phone: string, message = DEFAULT_MESSAGE) {
  const digits = phone.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
