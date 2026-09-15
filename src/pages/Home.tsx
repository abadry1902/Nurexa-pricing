import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/Button';
import { ArrowLeft, Bot, Sparkles, Zap } from 'lucide-react';

export const Home = () => {
  return (
    <div className="bg-nurexa-white min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32">
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-[800px] h-[800px] bg-nurexa-green-light rounded-full blur-3xl opacity-50 -z-10 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-nurexa-green-light text-nurexa-green font-bold text-sm mb-8">
              <Sparkles size={16} />
              <span>شريكك الأنسب في التحول الرقمي</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-nurexa-navy tracking-tight mb-8 leading-[1.15]">
              نصمم ونبني <span className="text-nurexa-green">حلول ذكية</span> لمستقبل اعمالك
            </h1>
            <p className="text-lg md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              نساعد الشركات على تصميم، بناء وتشغيل أنظمة ذكية تحسن العمليات، وتؤتمت المهام المتكررة لدعم نمو ملموس.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/new-client" className="w-full sm:w-auto">
                <Button size="lg" fullWidth className="text-lg px-8">
                  ابدأ رحلتك معنا
                  <ArrowLeft size={20} className="mr-2" />
                </Button>
              </Link>
              <Link to="/solutions" className="w-full sm:w-auto">
                <Button variant="secondary" size="lg" fullWidth className="text-lg px-8">
                  اكتشف الحلول
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-nurexa-gray-light border-y border-nurexa-gray-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-nurexa-white p-8 rounded-3xl border border-nurexa-gray-border shadow-sm text-center">
              <div className="w-16 h-16 bg-nurexa-green-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Bot size={32} className="text-nurexa-green" />
              </div>
              <h3 className="text-xl font-bold text-nurexa-navy mb-4">وكلاء أذكياء</h3>
              <p className="text-gray-600 leading-relaxed">
                وكلاء نصيين وصوتيين متطورين لخدمة عملائك على مدار الساعة بكفاءة واحترافية.
              </p>
            </div>
            
            <div className="bg-nurexa-white p-8 rounded-3xl border border-nurexa-gray-border shadow-sm text-center">
              <div className="w-16 h-16 bg-nurexa-green-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Zap size={32} className="text-nurexa-green" />
              </div>
              <h3 className="text-xl font-bold text-nurexa-navy mb-4">أتمتة العمليات</h3>
              <p className="text-gray-600 leading-relaxed">
                ربط الأنظمة وتقليل العمل اليدوي بشكل جذري باستخدام مسارات الذكاء الاصطناعي.
              </p>
            </div>
            
            <div className="bg-nurexa-white p-8 rounded-3xl border border-nurexa-gray-border shadow-sm text-center">
              <div className="w-16 h-16 bg-nurexa-green-light rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nurexa-green"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><line x1="12" y1="22" x2="12" y2="12"></line></svg>
              </div>
              <h3 className="text-xl font-bold text-nurexa-navy mb-4">تحول رقمي شامل</h3>
              <p className="text-gray-600 leading-relaxed">
                بنية تحتية متطورة تضمن لك الجاهزية للمستقبل وتوسع مستدام في السوق.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-extrabold text-nurexa-navy mb-8">جاهز لتطوير أعمالك؟</h2>
          <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            احصل على استشارة مجانية وتحليل لعمليات شركتك لاكتشاف فرص الأتمتة المتاحة.
          </p>
          <Link to="/new-client">
            <Button size="lg" className="px-12 py-5 text-xl">اطلب تحليلاً مجانياً</Button>
          </Link>
        </div>
      </section>
    </div>
  );
};
