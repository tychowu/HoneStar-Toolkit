import React, { useState } from 'react';
import { PLANS, Icons } from '../constants';
import { QuizState, FinancialPlan } from '../types';

interface QuizProps {
  onComplete: (plan: FinancialPlan) => void;
  onCancel: () => void;
}

const Quiz: React.FC<QuizProps> = ({ onComplete, onCancel }) => {
  const [step, setStep] = useState(1);
  const [state, setState] = useState<QuizState>({
    degree: '',
    experience: '',
    income: '',
    visa: ''
  });

  const steps = [
    {
      id: 1,
      question: "您的最高学历是？",
      field: 'degree',
      options: [
        { label: '硕士或以上', value: 'master' },
        { label: '本科', value: 'bachelor' },
        { label: '其他', value: 'other' }
      ]
    },
    {
      id: 2,
      question: "您的全职工作经验年资？",
      field: 'experience',
      options: [
        { label: '3年以上', value: 'senior' },
        { label: '1-3年', value: 'junior' },
        { label: '应届生/少于1年', value: 'fresh' }
      ]
    },
    {
      id: 3,
      question: "您过往平均年收入约为？",
      field: 'income',
      options: [
        { label: '100万 HKD 以上', value: 'high' },
        { label: '50万 - 100万 HKD', value: 'mid' },
        { label: '30万 - 50万 HKD', value: 'low' },
        { label: '不便透露/无固定收入', value: 'none' }
      ]
    },
    {
      id: 4,
      question: "您的签证/身份状态？",
      field: 'visa',
      options: [
        { label: '香港永久居民', value: 'local' },
        { label: 'IANG / 高才通人士', value: 'talents' },
        { label: '其他 (受养人等)', value: 'other' }
      ]
    }
  ];

  const handleSelect = (value: string) => {
    const currentField = steps[step - 1].field as keyof QuizState;
    setState(prev => ({ ...prev, [currentField]: value }));
    
    if (step < steps.length) {
      setStep(step + 1);
    } else {
      calculateResult({ ...state, [currentField]: value });
    }
  };

  const calculateResult = (finalState: QuizState) => {
    // Basic recommendation logic
    let recommended: FinancialPlan;

    if (finalState.degree === 'master' && finalState.income === 'high') {
      recommended = PLANS.find(p => p.id === 'D123') || PLANS[0];
    } else if (finalState.experience === 'senior' && finalState.income === 'mid') {
      recommended = PLANS.find(p => p.id === 'V104') || PLANS[0];
    } else if (finalState.visa === 'talents' || finalState.degree === 'bachelor') {
      recommended = PLANS.find(p => p.id === 'U163') || PLANS[0];
    } else {
      recommended = PLANS.find(p => p.id === 'T120') || PLANS[0];
    }

    onComplete(recommended);
  };

  const currentStep = steps[step - 1];

  return (
    <div className="max-w-xl mx-auto py-12 px-6 bg-white rounded-3xl shadow-sm border border-slate-100 animate-in fade-in slide-in-from-bottom-4">
      <div className="flex justify-between items-center mb-8">
        <div className="flex gap-1">
          {steps.map(s => (
            <div 
              key={s.id} 
              className={`h-1.5 w-8 rounded-full transition-all duration-500 ${s.id <= step ? 'bg-blue-600' : 'bg-slate-100'}`}
            />
          ))}
        </div>
        <button onClick={onCancel} className="text-slate-400 hover:text-slate-600">
          <Icons.X className="w-5 h-5" />
        </button>
      </div>

      <h2 className="text-2xl font-bold text-slate-900 mb-2">{currentStep.question}</h2>
      <p className="text-slate-500 text-sm mb-8">请根据您的真实情况选择，以便我们为您推荐最合适的计划。</p>

      <div className="space-y-4">
        {currentStep.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => handleSelect(opt.value)}
            className="w-full text-left p-5 rounded-2xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/30 hover:shadow-md transition-all group flex items-center justify-between"
          >
            <span className="font-medium text-slate-700 group-hover:text-blue-700">{opt.label}</span>
            <Icons.ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-blue-500 group-hover:translate-x-1 transition-all" />
          </button>
        ))}
      </div>

      <button 
        onClick={() => step > 1 && setStep(step - 1)}
        className={`mt-8 text-sm font-bold text-slate-400 hover:text-slate-600 flex items-center gap-1 ${step === 1 ? 'invisible' : ''}`}
      >
        <Icons.ChevronRight className="w-4 h-4 rotate-180" />
        返回上一步
      </button>
    </div>
  );
};

export default Quiz;