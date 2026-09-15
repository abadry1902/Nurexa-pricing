import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader';
import { Button, cn } from '../components/Button';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Pricing = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState<'text' | 'voice' | 'automation'>('text');

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab === 'text' || tab === 'voice' || tab === 'automation') {
      setActiveTab(tab);
    }
  }, [location]);

  return (
    <div className="bg-nurexa-gray-light min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader 
          title="الأسعار" 
          subtitle="خطط مرنة تناسب حجم أعمالك وطموحاتك." 
        />

        {/* Tabs */}
        <div className="flex justify-center mb-16">
          <div className="bg-nurexa-white p-2 rounded-full border border-nurexa-gray-border shadow-sm flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <button
              onClick={() => setActiveTab('text')}
              className={cn(
                "px-8 py-3 rounded-full font-bold text-sm transition-all duration-300",
                activeTab === 'text' 
                  ? "bg-nurexa-navy text-nurexa-white shadow-md" 
                  : "text-gray-500 hover:text-nurexa-navy"
              )}
            >
              الوكيل النصي
            </button>
            <button
              onClick={() => setActiveTab('voice')}
              className={cn(
                "px-8 py-3 rounded-full font-bold text-sm transition-all duration-300",
                activeTab === 'voice' 
                  ? "bg-nurexa-navy text-nurexa-white shadow-md" 
                  : "text-gray-500 hover:text-nurexa-navy"
              )}
            >
              الوكيل الصوتي
            </button>
            <button
              onClick={() => setActiveTab('automation')}
              className={cn(
                "px-8 py-3 rounded-full font-bold text-sm transition-all duration-300",
                activeTab === 'automation' 
                  ? "bg-nurexa-navy text-nurexa-white shadow-md" 
                  : "text-gray-500 hover:text-nurexa-navy"
              )}
            >
              أتمتة الذكاء الاصطناعي
            </button>
          </div>
        </div>

        {/* Tab Content */}
        <div>
          {activeTab === 'text' && <TextAgentPricing />}
          {activeTab === 'voice' && <VoiceAgentPricing />}
          {activeTab === 'automation' && <AutomationPricing />}
        </div>
      </div>
    </div>
  );
};

const TextAgentPricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '99',
      features: [
        '700 رسالة / شهرياً',
        'مستخدم واحد (1 member)',
        'وكيل نصي بالذكاء الاصطناعي',
        'قاعدة معرفة أساسية',
        'تحليلات أساسية',
        'ربط مع الموقع الإلكتروني',
        'استخدام لخدمة العملاء',
        'نماذج ذكاء اصطناعي قياسية (Standard AI)'
      ],
      cta: 'ابدأ الآن',
      highlighted: false
    },
    {
      name: 'Growth',
      price: '189',
      features: [
        '2,300 رسالة / شهرياً',
        'مستخدمين (2 members)',
        'نماذج ذكاء اصطناعي متقدمة',
        'تكاملات (Integrations)',
        'تحليلات (Analytics)',
        'المرفقات (Attachments)',
        'تخصيص متقدم (Personalization)',
        'إعادة تدريب تلقائي',
        'تأهيل العملاء المحتملين',
        'مسارات عمل لخدمة العملاء'
      ],
      cta: 'ابدأ الآن',
      highlighted: true,
      badge: 'الأكثر اختياراً'
    },
    {
      name: 'Pro',
      price: '499',
      features: [
        '10,000 رسالة / شهرياً',
        '5 مستخدمين',
        'كل ما في باقة Growth',
        'تحليلات متقدمة',
        'وصول برمجي (API access)',
        'تكاملات متقدمة',
        'أولوية في المعالجة',
        'تخصيص متقدم جداً',
        'مسارات عمل متعددة',
        'تقارير متقدمة'
      ],
      cta: 'ابدأ الآن',
      highlighted: false
    },
    {
      name: 'Enterprise',
      price: 'مخصص',
      priceLabel: 'تواصل معنا',
      features: [
        'حدود استخدام أعلى',
        'فوترة مرنة',
        'أدوار وصلاحيات مخصصة',
        'تسجيل الدخول الموحد (SSO)',
        'خيارات White-label',
        'سجلات التدقيق (Audit logs)',
        'أولوية الدعم الفني',
        'اتفاقية مستوى الخدمة (SLA)',
        'تكاملات مخصصة',
        'تأهيل وتدريب مخصص',
        'أمان على مستوى المؤسسات'
      ],
      cta: 'تحدث معنا',
      highlighted: false,
      isContact: true
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {plans.map((plan, index) => (
        <div 
          key={index} 
          className={cn(
            "bg-nurexa-white rounded-[2rem] p-8 border flex flex-col relative transition-transform duration-300 hover:-translate-y-2",
            plan.highlighted ? "border-nurexa-green shadow-lg ring-1 ring-nurexa-green" : "border-nurexa-gray-border shadow-sm"
          )}
        >
          {plan.badge && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-nurexa-green text-nurexa-navy font-bold text-xs py-1.5 px-4 rounded-full">
              {plan.badge}
            </div>
          )}
          
          <h3 className="text-xl font-bold text-nurexa-navy mb-4">{plan.name}</h3>
          
          <div className="mb-8 flex items-baseline gap-1">
            {plan.isContact ? (
              <span className="text-3xl font-extrabold text-nurexa-navy">{plan.priceLabel}</span>
            ) : (
              <>
                <span className="text-4xl font-extrabold text-nurexa-navy">{plan.price}</span>
                <span className="text-gray-500 font-medium">ر.س / شهر</span>
              </>
            )}
          </div>
          
          <div className="flex-grow">
            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-nurexa-green-light flex items-center justify-center">
                    <Check size={14} className="text-nurexa-green" strokeWidth={3} />
                  </div>
                  <span className="text-sm text-gray-700 leading-tight">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <Link to={plan.isContact ? "/contact" : "/new-client"} className="mt-auto block">
            <Button 
              variant={plan.highlighted ? 'primary' : 'outline'} 
              fullWidth
            >
              {plan.cta}
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

const VoiceAgentPricing = () => {
  return (
    <div className="bg-nurexa-white rounded-[2rem] p-10 md:p-16 border border-nurexa-gray-border shadow-sm max-w-4xl mx-auto text-center">
      <div className="w-20 h-20 bg-nurexa-green-light rounded-3xl mx-auto flex items-center justify-center mb-8">
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-nurexa-green"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path><path d="M14.05 2a9 9 0 0 1 8 7.94"></path><path d="M14.05 6A5 5 0 0 1 18 10"></path></svg>
      </div>
      
      <h3 className="text-3xl md:text-4xl font-extrabold text-nurexa-navy mb-6">خطط مخصصة حسب عدد المكالمات ودقائق الاستخدام</h3>
      <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
        نصمم باقات الوكيل الصوتي بناءً على احتياجاتك الفعلية لضمان أفضل قيمة وعائد على الاستثمار.
      </p>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12 text-right">
        {[
          'عدد دقائق المكالمات', 'عدد الوكلاء', 'التكاملات',
          'عدد الخطوط', 'ربط CRM', 'المكالمات الواردة',
          'المكالمات الصادرة', 'التقارير', 'تسجيل وتحليل المحادثات'
        ].map((factor, idx) => (
          <div key={idx} className="flex items-center gap-3">
            <Check size={20} className="text-nurexa-green flex-shrink-0" />
            <span className="font-semibold text-nurexa-navy">{factor}</span>
          </div>
        ))}
      </div>
      
      <Link to="/new-client">
        <Button size="lg" className="px-12">احصل على عرض سعر</Button>
      </Link>
    </div>
  );
};

const AutomationPricing = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-12">
        <h3 className="text-3xl font-bold text-nurexa-navy mb-4">يتم تحديد السعر حسب تعقيد العمليات والتكاملات المطلوبة.</h3>
        <p className="text-gray-600 text-lg">اختر مستوى الأتمتة الذي يناسب مرحلة نمو شركتك.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
        {['Starter Automation', 'Business Automation', 'Enterprise Automation'].map((tier, idx) => (
          <div key={idx} className="bg-nurexa-white rounded-[2rem] p-8 border border-nurexa-gray-border shadow-sm text-center">
            <div className="w-12 h-12 bg-nurexa-gray-light rounded-full mx-auto flex items-center justify-center mb-6">
              <span className="font-bold text-nurexa-navy">{idx + 1}</span>
            </div>
            <h4 className="text-xl font-bold text-nurexa-navy mb-2">{tier}</h4>
            <p className="text-sm text-gray-500">حزمة مخصصة للمسارات المستهدفة.</p>
          </div>
        ))}
      </div>
      
      <div className="text-center">
        <Link to="/new-client">
          <Button size="lg" className="px-12">اطلب تحليل مجاني للعمليات</Button>
        </Link>
      </div>
    </div>
  );
};
