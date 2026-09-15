import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { MessageSquare, PhoneCall, Zap, Building2 } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export const Solutions = () => {
  const solutions = [
    {
      icon: <MessageSquare size={32} className="text-nurexa-green" />,
      title: 'وكيل نصي بالذكاء الاصطناعي',
      subtitle: 'Text AI Agent',
      description: 'وكيل ذكي يمكن ربطه بالموقع أو قنوات التواصل للرد على العملاء، خدمة العملاء، المبيعات، التأهيل، الحجز والاستفسارات.',
      link: '/pricing?tab=text'
    },
    {
      icon: <PhoneCall size={32} className="text-nurexa-green" />,
      title: 'وكيل صوتي بالذكاء الاصطناعي',
      subtitle: 'Voice AI Agent',
      description: 'وكيل صوتي ذكي يتحدث مع العملاء بشكل طبيعي، يستقبل المكالمات، يجيب على الأسئلة، يؤهل العملاء ويسجل نتائج المحادثات.',
      link: '/pricing?tab=voice'
    },
    {
      icon: <Zap size={32} className="text-nurexa-green" />,
      title: 'أتمتة بالذكاء الاصطناعي',
      subtitle: 'AI Automation',
      description: 'ربط الأنظمة وأتمتة العمليات المتكررة وتقليل العمل اليدوي باستخدام سير عمل مدعوم بالذكاء الاصطناعي (AI Workflows).',
      link: '/pricing?tab=automation'
    },
    {
      icon: <Building2 size={32} className="text-nurexa-green" />,
      title: 'التحول الرقمي',
      subtitle: 'Digital Transformation',
      description: 'استراتيجيات متكاملة لتحديث البنية التحتية لشركتك، دمج التقنيات الحديثة، وإعادة هندسة العمليات لمواكبة المستقبل.',
      link: '/new-client'
    }
  ];

  return (
    <div className="bg-nurexa-gray-light min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <PageHeader 
          title="الحلول التي نقدمها" 
          subtitle="مجموعة متكاملة من الحلول الذكية المصممة للارتقاء بأداء أعمالك وتحسين تجربة عملائك." 
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-nurexa-white rounded-[2rem] p-10 border border-nurexa-gray-border shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="w-16 h-16 bg-nurexa-green-light rounded-2xl flex items-center justify-center mb-8">
                {solution.icon}
              </div>
              <h3 className="text-2xl font-bold text-nurexa-navy mb-2">{solution.title}</h3>
              <p className="text-sm font-semibold text-nurexa-green mb-6 uppercase tracking-wider">{solution.subtitle}</p>
              <p className="text-gray-600 leading-relaxed mb-8 min-h-[80px]">
                {solution.description}
              </p>
              <Link to={solution.link}>
                <Button variant="outline" className="w-full sm:w-auto">اكتشف المزيد</Button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
