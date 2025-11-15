'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-[#0a1929]">
      <Header />
      
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-8">سياسة ملفات الارتباط</h1>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 space-y-6 text-white/80">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">ما هي ملفات الارتباط؟</h2>
              <p>
                ملفات الارتباط هي ملفات نصية صغيرة يتم تخزينها على جهازك عند زيارة موقعنا.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">كيف نستخدم ملفات الارتباط</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>للتذكر تفضيلاتك</li>
                <li>لتحسين تجربة المستخدم</li>
                <li>لتحليل استخدام الموقع</li>
                <li>لضمان أمان المنصة</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">إدارة ملفات الارتباط</h2>
              <p>
                يمكنك إدارة ملفات الارتباط من خلال إعدادات المتصفح الخاص بك. قد يؤثر تعطيل ملفات الارتباط على وظائف الموقع.
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

