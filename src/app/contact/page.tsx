'use client';

import { useState } from 'react';

import Notification from '@/components/Notification';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [notificationInfos, setNotificationInfos] = useState({
    text: '',
    color: '',
  });

  const handleNotification = (show: boolean, text: string, color: string) => {
    setNotificationInfos({
      text: show ? text : '',
      color,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoading(true);

    const myForm = event.target as HTMLFormElement;

    try {
      const formData = await emailjs.sendForm(
        process.env.EMAIL_SERVICE_ID || '',
        process.env.EMAIL_TEMPLATE_ID || '',
        myForm,
        process.env.EMAIL_PUBLIC_KEY || '',
      );

      if (formData.status === 200) {
        handleNotification(true, 'Email enviado com sucesso!', 'green');
        myForm.reset();
      } else {
        throw new Error(`An error ocurred => ${formData}`);
      }
    } catch (error) {
      handleNotification(true, 'Ops, ocorreu um erro ao enviar o email! Por favor, tente novamente', 'red');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="h-screen bg-(--primary) px-8">
      <div className="container mx-auto flex h-full items-center justify-center py-32 text-center xl:text-left">
        <div className="flex w-full max-w-[700px] flex-col">
          <h2 className="mb-12 text-center text-[35px] md:text-[54px] font-bold">Entre em <span className="text-orange-400">contato</span></h2>

          <form
            className="mx-auto flex w-full flex-1 flex-col gap-6"
            onSubmit={handleSubmit}
            autoComplete="off"
            autoCapitalize="off"
          >
            <div className="flex w-full gap-x-6">
              <input
                type="text"
                name="name"
                placeholder='Nome'
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
              <input
                type="email"
                name="email"
                placeholder='Seu email'
                className="input"
                disabled={isLoading}
                aria-disabled={isLoading}
                required
                aria-required
              />
            </div>
            <textarea
              name="message"
              placeholder='Mensagem...'
              className="textarea"
              disabled={isLoading}
              aria-disabled={isLoading}
              required
              aria-required
            />

            <button
              type="submit"
              className="btn group flex max-w-[170px] items-center justify-center rounded-full border-1 border-white px-8 transition-all duration-300 hover:border-accent hover:text-accent cursor-pointer"
              disabled={isLoading}
              aria-disabled={isLoading}
            >
              <span>Enviar</span>
            </button>
          </form>

          <Notification
            message={notificationInfos.text}
            color={notificationInfos.color}
            onClose={() => handleNotification(false, '', '')}
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
