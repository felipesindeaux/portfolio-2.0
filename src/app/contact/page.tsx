'use client';

import { useState } from 'react';

import Notification from '@/components/Notification';
import emailjs from '@emailjs/browser';
import { FadeInOnScreen } from '@/components/FadeInOnScreen';
import { useTranslations } from 'next-intl';

const Contact = () => {
  const t = useTranslations('contact');
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
        handleNotification(true, t('success'), 'green');
        myForm.reset();
      } else {
        throw new Error(`An error ocurred => ${formData}`);
      }
    } catch (error) {
      handleNotification(true, t('error'), 'red');
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="h-screen bg-(--primary) px-8">
      <div className="container mx-auto flex h-full items-center justify-center py-32 text-center xl:text-left">
        <div className="flex w-full max-w-[700px] flex-col">
          <FadeInOnScreen delay={0.2} className="flex flex-col items-center">
            <h2 className="mb-12 text-center text-[35px] md:text-[54px] font-bold">
              {t.rich('title', {
                highlight: (chunks) => (
                  <span className="text-orange-400">{chunks}</span>
                ),
              })}
            </h2>
          </FadeInOnScreen>

          <FadeInOnScreen delay={0.4}>
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
                  placeholder={t('namePlaceholder')}
                  className="input"
                  disabled={isLoading}
                  aria-disabled={isLoading}
                  required
                  aria-required
                />
                <input
                  type="email"
                  name="email"
                  placeholder={t('emailPlaceholder')}
                  className="input"
                  disabled={isLoading}
                  aria-disabled={isLoading}
                  required
                  aria-required
                />
              </div>
              <textarea
                name="message"
                placeholder={t('messagePlaceholder')}
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
                <span>{t('submit')}</span>
              </button>
            </form>
          </FadeInOnScreen>

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
