'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#0a1929]">
      <Header />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">شروط الخدمة</h1>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 space-y-6 text-white/80">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">قبول الشروط</h2>
              <p>
                باستخدام منصة Favle، فإنك توافق على الالتزام بهذه الشروط والأحكام.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">استخدام المنصة</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>يجب أن تكون 18 عاماً أو أكثر لاستخدام المنصة</li>
                <li>أنت مسؤول عن الحفاظ على سرية حسابك</li>
                <li>يجب عدم مشاركة محتوى غير قانوني أو مسيء</li>
                <li>كل دائرة يمكن أن تحتوي على حد أقصى 5 أعضاء</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">المسؤولية</h2>
              <p>
                Favle لا تتحمل مسؤولية عن أي خسائر أو أضرار ناتجة عن استخدام المنصة أو التعاون بين المطورين.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

