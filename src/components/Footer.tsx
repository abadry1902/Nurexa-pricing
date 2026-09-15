import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../assets/images/regenerated_image_1789466897167.png';

export const Footer = () => {
  return (
    <footer className="bg-nurexa-navy text-nurexa-white py-12 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center mb-6">
              <img 
                src={logoImage} 
                alt="Nurexa" 
                className="h-12 w-auto" 
                referrerPolicy="no-referrer"
              />
            </Link>
            <p className="text-gray-400 max-w-sm text-sm leading-relaxed">
              شريكك الأنسب في تصميم وبناء أنظمة الذكاء الاصطناعي التي تحسن العمليات، تؤتمت المهام، وتدعم نمو أعمالك.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-4">روابط سريعة</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-400 hover:text-nurexa-green transition-colors text-sm">عن نيوريكسا</Link></li>
              <li><Link to="/solutions" className="text-gray-400 hover:text-nurexa-green transition-colors text-sm">الحلول</Link></li>
              <li><Link to="/pricing" className="text-gray-400 hover:text-nurexa-green transition-colors text-sm">الأسعار</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">تواصل معنا</h4>
            <ul className="space-y-2">
              <li><Link to="/contact" className="text-gray-400 hover:text-nurexa-green transition-colors text-sm">اتصل بنا</Link></li>
              <li><Link to="/new-client" className="text-gray-400 hover:text-nurexa-green transition-colors text-sm">عميل جديد</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Nurexa Digital Solutions. جميع الحقوق محفوظة.</p>
          <div className="flex space-x-4 space-x-reverse mt-4 md:mt-0">
            <a href="#" className="hover:text-nurexa-white transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-nurexa-white transition-colors">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
