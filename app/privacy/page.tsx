'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

export default function PrivacyPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0a1929]">
      <Header />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">{t('privacy.title')}</h1>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 space-y-6 text-white/80">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.intro')}</h2>
              <p>
                {t('privacy.introText')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.infoCollected')}</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>{t('privacy.infoCollectedList1')}</li>
                <li>{t('privacy.infoCollectedList2')}</li>
                <li>{t('privacy.infoCollectedList3')}</li>
                <li>{t('privacy.infoCollectedList4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.howWeUse')}</h2>
              <p>
                {t('privacy.howWeUseText')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('privacy.protection')}</h2>
              <p>
                {t('privacy.protectionText')}
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

