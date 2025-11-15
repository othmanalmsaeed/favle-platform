'use client';
import { Suspense } from "react";
import NewCampaignClient from "./NewCampaignClient";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function NewCampaignPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-[#0a1929]">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center justify-center py-12">
                <div className="text-white/70">جاري التحميل...</div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    }>
      <NewCampaignClient />
    </Suspense>
  );
}

