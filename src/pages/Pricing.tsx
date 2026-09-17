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
      quota: '700 رسالة / شهر',
      cta: 'ابدأ الآن',
      highlighted: false
    },
    {
      name: 'Growth',
      price: '189',
      quota: '2,300 رسالة / شهر',
      cta: 'ابدأ الآن',
      highlighted: true,
      badge: 'الأكثر اختياراً'
    },
    {
      name: 'Pro',
      price: '499',
      quota: '10,000 رسالة / شهر',
      cta: 'ابدأ الآن',
      highlighted: false
    },
    {
      name: 'Enterprise',
      price: 'مخصص',
      priceLabel: 'تواصل معنا',
      quota: 'حدود استخدام أعلى',
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
            "bg-nurexa-white rounded-[1.5rem] p-6 border flex flex-col relative transition-transform duration-300 hover:-translate-y-2 text-center",
            plan.highlighted ? "border-nurexa-green shadow-lg ring-1 ring-nurexa-green" : "border-nurexa-gray-border shadow-sm"
          )}
        >
          {plan.badge && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-nurexa-green text-nurexa-navy font-bold text-xs py-1.5 px-4 rounded-full whitespace-nowrap">
              {plan.badge}
            </div>
          )}
          
          <h3 className="text-2xl font-bold text-nurexa-navy mb-4 mt-2">{plan.name}</h3>
          
          <div className="mb-6 flex flex-col items-center justify-center gap-1 min-h-[4rem]">
            {plan.isContact ? (
              <span className="text-3xl font-extrabold text-nurexa-navy">{plan.priceLabel}</span>
            ) : (
              <>
                <span className="text-4xl font-extrabold text-nurexa-navy">{plan.price}</span>
                <span className="text-gray-500 font-medium">ر.س / شهر</span>
              </>
            )}
          </div>

          <div className="bg-nurexa-green-light text-nurexa-navy font-bold text-sm py-2 px-4 rounded-xl mb-6 text-center mx-auto w-full max-w-[200px]">
            {plan.quota}
          </div>
          
          <div className="mt-auto pt-2">
            <Link to={plan.isContact ? "/contact" : "/new-client"} className="block">
              <Button 
                variant={plan.highlighted ? 'primary' : 'outline'} 
                fullWidth
                className={cn("font-bold", plan.highlighted ? "shadow-md" : "")}
              >
                {plan.cta}
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

const VoiceAgentPricing = () => {
  const plans = [
    {
      name: 'Starter',
      price: '299',
      quota: '400 دقيقة / شهر',
      cta: 'ابدأ الآن',
      highlighted: false
    },
    {
      name: 'Growth',
      price: '719',
      quota: '1,200 دقيقة / شهر',
      cta: 'اختر هذه الخطة',
      highlighted: false
    },
    {
      name: 'Business',
      price: '1,499',
      quota: '2,500 دقيقة / شهر',
      cta: 'اختر هذه الخطة',
      highlighted: true,
      badge: 'الأكثر اختياراً'
    },
    {
      name: 'Scale',
      price: '2,999',
      quota: '5,000 دقيقة / شهر',
      cta: 'تواصل معنا',
      highlighted: false,
      isContact: true
    },
    {
      name: 'Enterprise',
      price: 'مخصص',
      priceLabel: 'تواصل معنا',
      quota: 'دقائق غير محدودة',
      cta: 'تواصل مع فريق المبيعات',
      highlighted: false,
      isContact: true
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
      {plans.map((plan, index) => (
        <div 
          key={index} 
          className={cn(
            "bg-nurexa-white rounded-[1.5rem] p-6 border flex flex-col relative transition-transform duration-300 hover:-translate-y-2 text-center",
            plan.highlighted ? "border-nurexa-green shadow-lg ring-1 ring-nurexa-green" : "border-nurexa-gray-border shadow-sm"
          )}
        >
          {plan.badge && (
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-nurexa-green text-nurexa-navy font-bold text-xs py-1.5 px-4 rounded-full whitespace-nowrap">
              {plan.badge}
            </div>
          )}
          
          <h3 className="text-2xl font-bold text-nurexa-navy mb-4 mt-2">{plan.name}</h3>
          
          <div className="mb-6 flex flex-col items-center justify-center gap-1 min-h-[4rem]">
            {plan.price === 'مخصص' ? (
              <span className="text-3xl font-extrabold text-nurexa-navy">{plan.price}</span>
            ) : (
              <>
                <span className="text-4xl font-extrabold text-nurexa-navy">{plan.price}</span>
                <span className="text-gray-500 font-medium">ريال / شهر</span>
              </>
            )}
          </div>
          
          <div className="bg-nurexa-green-light text-nurexa-navy font-bold text-sm py-2 px-4 rounded-xl mb-6 text-center mx-auto w-full max-w-[200px]">
            {plan.quota}
          </div>
          
          <div className="mt-auto pt-2">
            <Link to={plan.isContact ? "/contact" : "/new-client"} className="block">
              <Button 
                variant={plan.highlighted ? 'primary' : 'outline'} 
                fullWidth
                className={cn("text-sm font-bold", plan.highlighted ? "shadow-md" : "")}
              >
                {plan.cta}
              </Button>
            </Link>
          </div>
        </div>
      ))}
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
