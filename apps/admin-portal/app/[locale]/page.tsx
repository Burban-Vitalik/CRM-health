import { useTranslations } from 'next-intl';

export default function WelcomeSection() {
  const t = useTranslations('Index');

  return (
    <div>
      <p>
        {t('descritpion', { 
          type: t('admin'), 
          portal: t('portal')
        })}
      </p>
    </div>
  );
}