'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CookiesPage() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen bg-[#0a1929]">
      <Header />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">{t('cookies.title')}</h1>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 space-y-6 text-white/80">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('cookies.whatAre')}</h2>
              <p>
                {t('cookies.whatAreText')}
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('cookies.howWeUse')}</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>{t('cookies.howWeUseList1')}</li>
                <li>{t('cookies.howWeUseList2')}</li>
                <li>{t('cookies.howWeUseList3')}</li>
                <li>{t('cookies.howWeUseList4')}</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">{t('cookies.management')}</h2>
              <p>
                {t('cookies.managementText')}
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

