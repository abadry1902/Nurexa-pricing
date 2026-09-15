import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader';
import { Button } from '../components/Button';
import { CheckCircle2, ChevronLeft, ChevronRight, Upload, X } from 'lucide-react';
import { cn } from '../components/Button';

export const NewClient = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  
  // State for form data
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    jobTitle: '',
    email: '',
    phone: '',
    country: '',
    cities: [] as string[],
    website: '',
    industry: '',
    companySize: '',
    employeesCount: '',
    
    products: '',
    targetAudience: '',
    businessType: '',
    channels: [] as string[],
    
    agentGoals: [] as string[],
    
    language: '',
    tone: '',
    workingHours: '',
    is247: '',
    
    dataSources: [] as string[],
    
    integrations: [] as string[],
    
    scenarios: '',
    restrictions: '',
    policies: '',
    
    expectedCustomers: '',
    expectedChats: '',
    expectedCalls: '',
    avgCallDuration: '',
    teamSize: '',
    files: [] as File[]
  });

  const totalSteps = 8;

  const handleNext = () => {
    if (step < totalSteps) setStep(step + 1);
  };

  const handlePrev = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxArray = (field: keyof typeof formData, value: string) => {
    setFormData(prev => {
      const current = prev[field] as string[];
      if (current.includes(value)) {
        return { ...prev, [field]: current.filter(item => item !== value) };
      } else {
        return { ...prev, [field]: [...current, value] };
      }
    });
  };

  const handleFilesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const newFiles = Array.from(e.target.files);
      setFormData(prev => ({
        ...prev,
        files: [...prev.files, ...newFiles]
      }));
    }
  };

  const handleRemoveFile = (index: number) => {
    setFormData(prev => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');
    
    try {
      const webhookUrl = "https://script.google.com/macros/s/AKfycbzLgo34nx1kO8HvH1ePJlm1ky-QbUuR6Lee4SsJzfCRWbvwaghs8rzMdrP4htdm6kP18A/exec";
      
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'text/plain;charset=utf-8', // Using text/plain avoids CORS preflight issues
        },
        body: JSON.stringify({
          ...formData,
          timestamp: new Date().toISOString()
        })
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      setIsSuccess(true);
    } catch (error) {
      console.error('Submission error:', error);
      setErrorMessage('حدث خطأ أثناء إرسال البيانات. يرجى التحقق من اتصالك بالإنترنت والمحاولة مرة أخرى.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <div className="bg-nurexa-gray-light min-h-screen flex items-center justify-center p-4">
        <div className="bg-nurexa-white rounded-[2rem] p-12 max-w-xl w-full text-center border border-nurexa-gray-border shadow-sm">
          <div className="w-24 h-24 bg-nurexa-green-light rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 size={48} className="text-nurexa-green" />
          </div>
          <h2 className="text-3xl font-bold text-nurexa-navy mb-4">تم استلام بياناتك بنجاح</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            فريق نيوريكسا سيقوم بمراجعة المعلومات والتواصل معك في أقرب وقت لتقديم الحل الأنسب لعملك.
          </p>
          <Button onClick={() => window.location.href = '/'} size="lg">العودة للرئيسية</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-nurexa-gray-light min-h-screen pb-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-12">
        <div className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-nurexa-navy mb-4">خلينا نفهم نشاطك بشكل أفضل</h1>
          <p className="text-gray-600 text-lg">جاوب على الأسئلة التالية عشان نقدر نصمم لك وكيل ذكاء اصطناعي مناسب لطبيعة عملك.</p>
        </div>

        {/* Progress bar */}
        <div className="mb-10">
          <div className="flex justify-between mb-2">
            <span className="text-sm font-semibold text-nurexa-navy">الخطوة {step} من {totalSteps}</span>
            <span className="text-sm font-medium text-gray-500">{Math.round((step / totalSteps) * 100)}%</span>
          </div>
          <div className="w-full bg-nurexa-gray-border rounded-full h-2">
            <div 
              className="bg-nurexa-green h-2 rounded-full transition-all duration-300"
              style={{ width: `${(step / totalSteps) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-nurexa-white rounded-[2rem] p-8 md:p-12 border border-nurexa-gray-border shadow-sm">
          <form 
            onSubmit={handleSubmit} 
            onKeyDown={(e) => {
              if (e.key === 'Enter' && e.target instanceof HTMLInputElement) {
                e.preventDefault();
              }
            }}
          >
            {step === 1 && (
              <Step1Data formData={formData} handleChange={handleChange} />
            )}
            {step === 2 && (
              <Step2Business formData={formData} handleChange={handleChange} handleCheckboxArray={handleCheckboxArray} />
            )}
            {step === 3 && (
              <Step3Goals formData={formData} handleCheckboxArray={handleCheckboxArray} />
            )}
            {step === 4 && (
              <Step4Agent formData={formData} handleChange={handleChange} />
            )}
            {step === 5 && (
              <Step5Sources formData={formData} handleCheckboxArray={handleCheckboxArray} handleFilesChange={handleFilesChange} handleRemoveFile={handleRemoveFile} />
            )}
            {step === 6 && (
              <Step6Integrations formData={formData} handleCheckboxArray={handleCheckboxArray} />
            )}
            {step === 7 && (
              <Step7Scenarios formData={formData} handleChange={handleChange} />
            )}
            {step === 8 && (
              <Step8Volume formData={formData} handleChange={handleChange} />
            )}

            {errorMessage && (
              <div className="mt-6 p-4 bg-red-50 text-red-600 rounded-xl border border-red-100 font-semibold text-center">
                {errorMessage}
              </div>
            )}

            <div className="mt-12 flex justify-between items-center pt-8 border-t border-nurexa-gray-border">
              <Button 
                type="button" 
                variant="ghost" 
                onClick={(e) => { e.preventDefault(); handlePrev(); }} 
                disabled={step === 1 || isSubmitting}
                className={step === 1 ? 'opacity-0' : ''}
              >
                <ChevronRight size={20} className="ml-2" />
                السابق
              </Button>

              {step < totalSteps ? (
                <Button key="next-btn" type="button" onClick={(e) => { e.preventDefault(); handleNext(); }} disabled={isSubmitting}>
                  التالي
                  <ChevronLeft size={20} className="mr-2" />
                </Button>
              ) : (
                <Button key="submit-btn" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'جاري الإرسال...' : 'إرسال البيانات'}
                </Button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// --- Form Steps Components ---

const Input = ({ label, ...props }: any) => (
  <div className="flex flex-col gap-2 mb-5">
    <label className="text-sm font-bold text-nurexa-navy">{label}</label>
    <input 
      className="px-4 py-3 rounded-xl border border-nurexa-gray-border bg-nurexa-gray-light focus:bg-nurexa-white focus:outline-none focus:ring-2 focus:ring-nurexa-green transition-colors"
      {...props} 
    />
  </div>
);

const Textarea = ({ label, ...props }: any) => (
  <div className="flex flex-col gap-2 mb-5">
    <label className="text-sm font-bold text-nurexa-navy">{label}</label>
    <textarea 
      className="px-4 py-3 rounded-xl border border-nurexa-gray-border bg-nurexa-gray-light focus:bg-nurexa-white focus:outline-none focus:ring-2 focus:ring-nurexa-green transition-colors min-h-[120px] resize-y"
      {...props} 
    />
  </div>
);

const Select = ({ label, options, ...props }: any) => (
  <div className="flex flex-col gap-2 mb-5">
    <label className="text-sm font-bold text-nurexa-navy">{label}</label>
    <select 
      className="px-4 py-3 rounded-xl border border-nurexa-gray-border bg-nurexa-gray-light focus:bg-nurexa-white focus:outline-none focus:ring-2 focus:ring-nurexa-green transition-colors"
      {...props}
    >
      <option value="" disabled>اختر...</option>
      {options.map((opt: string) => (
        <option key={opt} value={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

const TagInput = ({ label, tags, onChange, placeholder }: any) => {
  const [inputValue, setInputValue] = useState('');
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (inputValue.trim() && !tags.includes(inputValue.trim())) {
        onChange([...tags, inputValue.trim()]);
        setInputValue('');
      }
    }
  };
  const removeTag = (tagToRemove: string) => {
    onChange(tags.filter((tag: string) => tag !== tagToRemove));
  };
  return (
    <div className="flex flex-col gap-2 mb-5">
      <label className="text-sm font-bold text-nurexa-navy">{label}</label>
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map((tag: string) => (
          <span key={tag} className="bg-nurexa-green-light text-nurexa-green px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
            {tag}
            <button type="button" onClick={() => removeTag(tag)} className="hover:text-nurexa-navy focus:outline-none"><X size={14}/></button>
          </span>
        ))}
      </div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder || "اكتب واضغط Enter لإضافة مدينة/فرع"}
        className="px-4 py-3 rounded-xl border border-nurexa-gray-border bg-nurexa-gray-light focus:bg-nurexa-white focus:outline-none focus:ring-2 focus:ring-nurexa-green transition-colors"
      />
    </div>
  );
};

const CheckboxOption = ({ label, checked, onChange }: any) => (
  <label className={cn(
    "flex items-center gap-3 p-4 rounded-xl border cursor-pointer transition-all",
    checked ? "bg-nurexa-green-light border-nurexa-green" : "border-nurexa-gray-border bg-nurexa-white hover:bg-nurexa-gray-light"
  )}>
    <input 
      type="checkbox" 
      className="hidden" 
      checked={checked} 
      onChange={onChange} 
    />
    <div className={cn(
      "w-5 h-5 rounded flex items-center justify-center border transition-colors",
      checked ? "bg-nurexa-green border-nurexa-green text-nurexa-navy" : "border-gray-300"
    )}>
      {checked && <CheckCircle2 size={16} />}
    </div>
    <span className={cn("font-medium", checked ? "text-nurexa-navy" : "text-gray-600")}>{label}</span>
  </label>
);


const Step1Data = ({ formData, handleChange }: any) => (
  <div>
    <h2 className="text-2xl font-bold text-nurexa-navy mb-8">بيانات الشركة</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
      <Input label="الاسم" name="name" value={formData.name} onChange={handleChange} required />
      <Input label="اسم الشركة" name="company" value={formData.company} onChange={handleChange} required />
      <Input label="المسمى الوظيفي" name="jobTitle" value={formData.jobTitle} onChange={handleChange} />
      <Input label="البريد الإلكتروني" type="email" name="email" value={formData.email} onChange={handleChange} required />
      <Input label="رقم الجوال" type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
      <Input label="الدولة" name="country" value={formData.country} onChange={handleChange} />
      <TagInput 
        label="المدينة/الفروع" 
        tags={formData.cities} 
        onChange={(cities: string[]) => handleChange({ target: { name: 'cities', value: cities } } as any)} 
      />
      <Input label="الموقع الإلكتروني" type="url" name="website" value={formData.website} onChange={handleChange} />
      <Input label="مجال النشاط" name="industry" value={formData.industry} onChange={handleChange} />
      <Select label="حجم الشركة" name="companySize" value={formData.companySize} onChange={handleChange} options={['صغيرة', 'متوسطة', 'كبيرة', 'مؤسسة ضخمة']} />
      <Input label="عدد الموظفين" type="number" name="employeesCount" value={formData.employeesCount} onChange={handleChange} />
    </div>
  </div>
);

const Step2Business = ({ formData, handleChange, handleCheckboxArray }: any) => {
  const channels = ['Website', 'WhatsApp', 'Phone', 'Instagram', 'Facebook', 'Email', 'Other'];
  return (
    <div>
      <h2 className="text-2xl font-bold text-nurexa-navy mb-8">طبيعة النشاط</h2>
      <Textarea label="ما هي المنتجات أو الخدمات التي تقدمها؟" name="products" value={formData.products} onChange={handleChange} />
      <Input label="من هم عملاؤك؟" name="targetAudience" value={formData.targetAudience} onChange={handleChange} />
      <Select label="هل نشاطك B2B أم B2C؟" name="businessType" value={formData.businessType} onChange={handleChange} options={['B2B', 'B2C', 'كلاهما']} />
      
      <div className="mt-8">
        <label className="text-sm font-bold text-nurexa-navy mb-4 block">ما أهم القنوات التي يتواصل معك العملاء من خلالها؟</label>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {channels.map(channel => (
            <CheckboxOption 
              key={channel} 
              label={channel} 
              checked={formData.channels.includes(channel)} 
              onChange={() => handleCheckboxArray('channels', channel)} 
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const Step3Goals = ({ formData, handleCheckboxArray }: any) => {
  const goals = ['خدمة العملاء', 'المبيعات', 'الرد على الاستفسارات', 'حجز المواعيد', 'تأهيل العملاء', 'متابعة العملاء', 'استقبال الشكاوى', 'الدعم الفني', 'المكالمات', 'أتمتة العمليات'];
  return (
    <div>
      <h2 className="text-2xl font-bold text-nurexa-navy mb-8">الهدف من الوكيل</h2>
      <label className="text-sm font-bold text-nurexa-navy mb-4 block">اختر الأهداف المطلوبة (يمكنك اختيار أكثر من واحد):</label>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {goals.map(goal => (
          <CheckboxOption 
            key={goal} 
            label={goal} 
            checked={formData.agentGoals.includes(goal)} 
            onChange={() => handleCheckboxArray('agentGoals', goal)} 
          />
        ))}
      </div>
    </div>
  );
};

const Step4Agent = ({ formData, handleChange }: any) => (
  <div>
    <h2 className="text-2xl font-bold text-nurexa-navy mb-8">معلومات الوكيل</h2>
    <Select label="ما اللهجة أو اللغة المطلوبة؟" name="language" value={formData.language} onChange={handleChange} options={['عربي', 'سعودي', 'مصري', 'إنجليزي', 'أكثر من لغة']} />
    <Select label="ما شخصية الوكيل المطلوبة؟" name="tone" value={formData.tone} onChange={handleChange} options={['Professional', 'Friendly', 'Sales-focused', 'Customer Service', 'Custom']} />
    <Input label="ما أوقات العمل المطلوبة؟" name="workingHours" value={formData.workingHours} onChange={handleChange} placeholder="مثال: من 9 صباحاً إلى 5 مساءً" />
    <Select label="هل يعمل 24/7؟" name="is247" value={formData.is247} onChange={handleChange} options={['نعم', 'لا']} />
  </div>
);

const Step5Sources = ({ formData, handleCheckboxArray, handleFilesChange, handleRemoveFile }: any) => {
  const sources = ['Website', 'PDF files', 'Word files', 'Excel files', 'Google Drive', 'FAQ', 'Product Catalog', 'CRM', 'ERP', 'Existing knowledge base'];
  return (
    <div>
      <h2 className="text-2xl font-bold text-nurexa-navy mb-8">البيانات والمصادر</h2>
      <label className="text-sm font-bold text-nurexa-navy mb-4 block">ما المصادر التي يجب أن يتعلم منها الوكيل؟</label>
      <div className="grid grid-cols-2 gap-4 mb-8">
        {sources.map(source => (
          <CheckboxOption 
            key={source} 
            label={source} 
            checked={formData.dataSources.includes(source)} 
            onChange={() => handleCheckboxArray('dataSources', source)} 
          />
        ))}
      </div>
      
      <label className="border-2 border-dashed border-nurexa-gray-border rounded-2xl p-8 flex flex-col items-center justify-center text-center hover:bg-nurexa-gray-light transition-colors cursor-pointer w-full">
        <Upload size={32} className="text-gray-400 mx-auto mb-3" />
        <span className="text-sm font-bold text-nurexa-navy mb-1 block w-full">رفع ملفات إضافية (اختياري)</span>
        <span className="text-xs text-gray-500 block w-full">PDF, DOCX, XLSX حتى 10MB</span>
        <input 
          type="file" 
          multiple 
          accept=".pdf,.docx,.xlsx" 
          onChange={handleFilesChange} 
          className="hidden" 
        />
      </label>

      {formData.files && formData.files.length > 0 && (
        <div className="mt-4 space-y-2">
          {formData.files.map((file: File, index: number) => (
            <div key={`${file.name}-${index}`} className="flex items-center justify-between p-3 bg-nurexa-gray-light rounded-xl border border-nurexa-gray-border">
              <span className="text-sm font-medium text-nurexa-navy truncate flex-1" dir="ltr">{file.name}</span>
              <button 
                type="button" 
                onClick={() => handleRemoveFile(index)} 
                className="text-gray-500 hover:text-red-500 transition-colors focus:outline-none p-1 mr-2 shrink-0"
                title="إزالة الملف"
              >
                <X size={18} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Step6Integrations = ({ formData, handleCheckboxArray }: any) => {
  const integrations = ['WhatsApp', 'CRM', 'ERP', 'Shopify', 'WooCommerce', 'Google Sheets', 'Google Drive', 'Email', 'Calendar', 'Custom API', 'Other'];
  return (
    <div>
      <h2 className="text-2xl font-bold text-nurexa-navy mb-8">التكاملات</h2>
      <label className="text-sm font-bold text-nurexa-navy mb-4 block">ما هي الأنظمة التي تستخدمها حالياً وترغب في ربطها؟</label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {integrations.map(integration => (
          <CheckboxOption 
            key={integration} 
            label={integration} 
            checked={formData.integrations.includes(integration)} 
            onChange={() => handleCheckboxArray('integrations', integration)} 
          />
        ))}
      </div>
    </div>
  );
};

const Step7Scenarios = ({ formData, handleChange }: any) => (
  <div>
    <h2 className="text-2xl font-bold text-nurexa-navy mb-8">أهم السيناريوهات</h2>
    <Textarea label="اكتب أهم 5 مواقف أو أسئلة تتوقع أن يتعامل معها الوكيل." name="scenarios" value={formData.scenarios} onChange={handleChange} />
    <Textarea label="هل هناك أي شيء ممنوع على الوكيل قوله أو فعله؟" name="restrictions" value={formData.restrictions} onChange={handleChange} />
    <Textarea label="هل هناك قواعد أو سياسات خاصة يجب أن يلتزم بها؟" name="policies" value={formData.policies} onChange={handleChange} />
  </div>
);

const Step8Volume = ({ formData, handleChange }: any) => (
  <div>
    <h2 className="text-2xl font-bold text-nurexa-navy mb-8">حجم الاستخدام</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
      <Input label="عدد العملاء المتوقع شهرياً" type="number" name="expectedCustomers" value={formData.expectedCustomers} onChange={handleChange} />
      <Input label="عدد المحادثات المتوقع" type="number" name="expectedChats" value={formData.expectedChats} onChange={handleChange} />
      <Input label="عدد المكالمات المتوقع" type="number" name="expectedCalls" value={formData.expectedCalls} onChange={handleChange} />
      <Input label="متوسط مدة المكالمة (بالدقائق)" type="number" name="avgCallDuration" value={formData.avgCallDuration} onChange={handleChange} />
      <Input label="عدد الموظفين الذين سيستخدمون النظام" type="number" name="teamSize" value={formData.teamSize} onChange={handleChange} />
    </div>
  </div>
);
