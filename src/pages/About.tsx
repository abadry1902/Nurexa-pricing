import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Target, Lightbulb, TrendingUp, Users } from 'lucide-react';

export const About = () => {
  const processSteps = [
    { num: '01', title: 'نفهم نشاطك' },
    { num: '02', title: 'نحلل العمليات' },
    { num: '03', title: 'نصمم الحل' },
    { num: '04', title: 'نربط الأنظمة' },
    { num: '05', title: 'نطلق ونختبر' },
    { num: '06', title: 'نحسن ونوسع' },
  ];

  return (
    <div className="bg-nurexa-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader 
          title="عن نيوريكسا" 
          subtitle="Right Partner for Every Solution." 
        />

        <div className="py-12 md:py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl font-bold text-nurexa-navy mb-6">من نحن</h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              نحن في نيوريكسا نساعد الشركات على تصميم، بناء، وتشغيل أنظمة ذكاء اصطناعي ذكية ومترابطة. 
              هدفنا هو تحسين العمليات التشغيلية، أتمتة المهام المتكررة، ودعم النمو المستدام والملموس للأعمال.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              نقدم مزيجاً فريداً من الاستشارات التقنية المتقدمة والتنفيذ العملي، مما يجعلنا الشريك 
              المثالي لرحلة التحول الرقمي الخاصة بك.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-nurexa-gray-light p-8 rounded-3xl border border-nurexa-gray-border">
              <div className="w-12 h-12 bg-nurexa-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Target className="text-nurexa-green" size={24} />
              </div>
              <h3 className="text-xl font-bold text-nurexa-navy mb-3">رؤيتنا</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                تمكين الشركات في المنطقة من استغلال أقصى طاقات الذكاء الاصطناعي لتحقيق كفاءة تشغيلية غير مسبوقة.
              </p>
            </div>
            <div className="bg-nurexa-gray-light p-8 rounded-3xl border border-nurexa-gray-border mt-0 sm:mt-12">
              <div className="w-12 h-12 bg-nurexa-white rounded-2xl flex items-center justify-center mb-6 shadow-sm">
                <Lightbulb className="text-nurexa-green" size={24} />
              </div>
              <h3 className="text-xl font-bold text-nurexa-navy mb-3">لماذا نيوريكسا</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                حلول مصممة خصيصاً، فهم عميق للسوق المحلي، وفريق من الخبراء يرافقك في كل خطوة.
              </p>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="py-20 border-t border-nurexa-gray-border">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-nurexa-navy mb-4">كيف نعمل</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">منهجية واضحة وعملية تضمن انتقالك السلس نحو الأتمتة الذكية.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 relative">
            {/* Connecting line for desktop */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-nurexa-gray-border -translate-y-1/2 z-0"></div>
            
            {processSteps.map((step, index) => (
              <div key={index} className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-16 bg-nurexa-white border-2 border-nurexa-gray-border rounded-full flex items-center justify-center text-nurexa-navy font-bold text-xl shadow-sm mb-4">
                  {step.num}
                </div>
                <h4 className="text-lg font-semibold text-nurexa-navy text-center">{step.title}</h4>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
