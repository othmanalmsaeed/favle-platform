'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-[#0a1929]">
      <Header />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">سياسة الخصوصية</h1>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 space-y-6 text-white/80">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">مقدمة</h2>
              <p>
                نحن في Favle نلتزم بحماية خصوصيتك. توضح هذه السياسة كيفية جمع واستخدام وحماية معلوماتك الشخصية.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">المعلومات التي نجمعها</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>معلومات الحساب (الاسم، البريد الإلكتروني)</li>
                <li>معلومات الألعاب التي تضيفها</li>
                <li>معلومات الدوائر التي تنضم إليها</li>
                <li>بيانات الاستخدام والتفاعل مع المنصة</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">كيف نستخدم معلوماتك</h2>
              <p>
                نستخدم معلوماتك لتوفير وتحسين خدماتنا، وتسهيل التواصل بين المطورين، وإدارة الدوائر والحملات.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">حماية المعلومات</h2>
              <p>
                نتخذ إجراءات أمنية مناسبة لحماية معلوماتك من الوصول غير المصرح به أو التغيير أو الكشف.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

