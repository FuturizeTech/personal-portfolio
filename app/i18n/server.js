import { createInstance } from 'i18next';
import { initReactI18next } from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';

const initI18next = async (locale, namespaces) => {
  const i18nInstance = createInstance();

  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((language, namespace) => import(`../../locales/${language}/${namespace}.json`)))
    .init({
      lng: locale,
      fallbackLng: 'en',
      supportedLngs: ['en'],
      defaultNS: namespaces[0],
      fallbackNS: namespaces[0],
      ns: namespaces,
      preload: typeof window !== 'undefined' ? [] : ['en'],
    });

  return i18nInstance;
};

export async function createTranslation(locale, namespaces, options = {}) {
  const i18nextInstance = await initI18next(locale, namespaces);

  return {
    t: i18nextInstance.getFixedT(locale, namespaces[0], options.keyPrefix),
    i18n: i18nextInstance,
  };
}