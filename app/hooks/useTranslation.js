import { useEffect, useState } from 'react';
import { useTranslation as useI18nTranslation } from '@/app/i18n/client';

export function useTranslation(namespace = 'en') {
  const [t, setT] = useState(() => (key) => key);

  useEffect(() => {
    useI18nTranslation('en', [namespace]).then(({ t: translationFn }) => {
      setT(() => translationFn);
    });
  }, [namespace]);

  return { t };
}