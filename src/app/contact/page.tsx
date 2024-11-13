'use client';

import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
  const { t } = useTranslation('common');

  const [mounted, setMounted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [containerHeight, setContainerHeight] = useState('80vh'); // Estado para la altura del contenedor

  // Función para ajustar la altura del contenedor
  const adjustContainerHeight = () => {
    const screenHeight = window.innerHeight;
    let calculatedHeight = '80vh';

    if (screenHeight > 1000) {
      calculatedHeight = '65vh';
    } else if (screenHeight < 600) {
      calculatedHeight = '90vh';
    }

    setContainerHeight(calculatedHeight);
  };

  useEffect(() => {
    setMounted(true);
    const storedLang = localStorage.getItem('language');
    if (storedLang) {
      i18next.changeLanguage(storedLang);
    }

    // Llamar a la función de ajuste de altura inicialmente
    adjustContainerHeight();

    // Agregar el event listener para cambiar el tamaño de la ventana
    window.addEventListener('resize', adjustContainerHeight);

    // Limpiar el listener cuando el componente se desmonte
    return () => window.removeEventListener('resize', adjustContainerHeight);
  }, []);

  // Llamar a adjustContainerHeight después de enviar el formulario para ajustar la altura correctamente
  useEffect(() => {
    if (formSubmitted) {
      adjustContainerHeight();
    }
  }, [formSubmitted]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/sendemail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: formData.email,
          subject: `Nuevo mensaje de ${formData.name}`,
          text: formData.message,
          html: `<p>${formData.message}</p>`,
        }),
      });

      if (response.ok) {
        console.log('Email sent successfully');
        setFormSubmitted(true);
      } else {
        console.error('Error sending email:', await response.text());
      }
    } catch (error) {
      console.error('Request failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = '1234567890'; // Número de WhatsApp de destino
    const message = `Hola, mi nombre es ${formData.name}. ${formData.message ? `Mensaje: ${formData.message}` : ''}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="" style={{ minHeight: containerHeight }}>
      <div className="flex flex-col container mx-auto px-4 py-8">
        <div className="header-section2">
          <h1 className="contact-title">{t('contact1')}</h1>
          <p className="contact-intro">{t('contact_intro1')}</p>
        </div>
        
        {formSubmitted ? (
          <div className="text-center">
            <p className="success-message">{t('contact_success_message')}</p>
            <button
              onClick={handleWhatsAppClick}
              className="whatsapp-button"
              aria-label="Contactar por WhatsApp"
            >
           
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form-fields">
            <div className="form-group">
              <label htmlFor="name" className="form-label">{t('contact_name')}</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">{t('contact_email')}</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">{t('contact_message')}</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                rows={4}
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? t('contact_sending') : t('contact_send')}
            </button>

            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="whatsapp-button"
              aria-label="Contactar por WhatsApp"
            >
              <FaWhatsapp className="whatsapp-icon" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
