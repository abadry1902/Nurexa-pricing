import React from 'react';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/Button';
import { Mail, Phone, MapPin } from 'lucide-react';

export const Contact = () => {
  return (
    <div className="bg-nurexa-white min-h-screen pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PageHeader 
          title="تواصل معنا" 
          subtitle="نحن هنا للإجابة على استفساراتك ومساعدتك في رحلة التحول الرقمي." 
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-8">
          <div className="bg-nurexa-gray-light p-10 rounded-[2rem] border border-nurexa-gray-border">
            <h3 className="text-2xl font-bold text-nurexa-navy mb-8">أرسل لنا رسالة</h3>
            <form className="space-y-6">
              <div>
                <label className="text-sm font-bold text-nurexa-navy mb-2 block">الاسم</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border border-nurexa-gray-border bg-nurexa-white focus:outline-none focus:ring-2 focus:ring-nurexa-green transition-colors" />
              </div>
              <div>
                <label className="text-sm font-bold text-nurexa-navy mb-2 block">البريد الإلكتروني</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border border-nurexa-gray-border bg-nurexa-white focus:outline-none focus:ring-2 focus:ring-nurexa-green transition-colors" />
              </div>
              <div>
                <label className="text-sm font-bold text-nurexa-navy mb-2 block">الرسالة</label>
                <textarea className="w-full px-4 py-3 rounded-xl border border-nurexa-gray-border bg-nurexa-white focus:outline-none focus:ring-2 focus:ring-nurexa-green transition-colors min-h-[150px] resize-y"></textarea>
              </div>
              <Button type="button" fullWidth>إرسال الرسالة</Button>
            </form>
          </div>
          
          <div className="flex flex-col justify-center gap-10">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-nurexa-green-light rounded-2xl flex items-center justify-center flex-shrink-0">
                <Mail className="text-nurexa-green" size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-nurexa-navy mb-2">البريد الإلكتروني</h4>
                <p className="text-gray-600">contact@nurexa.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-nurexa-green-light rounded-2xl flex items-center justify-center flex-shrink-0">
                <Phone className="text-nurexa-green" size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-nurexa-navy mb-2">رقم الهاتف</h4>
                <p className="text-gray-600">+966 50 000 0000</p>
              </div>
            </div>
            
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-nurexa-green-light rounded-2xl flex items-center justify-center flex-shrink-0">
                <MapPin className="text-nurexa-green" size={24} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-nurexa-navy mb-2">المقر الرئيسي</h4>
                <p className="text-gray-600 leading-relaxed max-w-xs">
                  الرياض، المملكة العربية السعودية<br />
                  طريق الملك فهد، برج الفيصلية
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
