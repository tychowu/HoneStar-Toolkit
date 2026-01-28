
import React from 'react';
import { FinancialPlan } from '../types';
import { Icons } from '../constants';

interface PlanCardProps {
  plan: FinancialPlan;
  onClick: (plan: FinancialPlan) => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, onClick }) => {
  const getGradient = (id: string) => {
    switch (id) {
      case 'V106': return 'from-green-50 to-white';
      case 'V103': return 'from-teal-50 to-white';
      case 'U163': return 'from-blue-50 to-white';
      case 'D123': return 'from-purple-50 to-white';
      case 'V104': return 'from-indigo-50 to-white';
      case 'D119': return 'from-amber-50 to-white';
      case 'T120': return 'from-rose-50 to-white';
      default: return 'from-slate-50 to-white';
    }
  };

  return (
    <div 
      onClick={() => onClick(plan)}
      className={`group relative bg-gradient-to-bl ${getGradient(plan.id)} rounded-2xl md:rounded-3xl p-5 md:p-6 shadow-sm border border-slate-100 cursor-pointer overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-blue-200/40 sm:hover:-translate-y-2 transition-all duration-500`}
    >
      {/* Decorative Circles */}
      <div className={`absolute top-0 right-0 w-32 md:w-48 h-32 md:h-48 -mr-12 -mt-12 md:-mr-16 md:-mt-16 rounded-full opacity-10 transform group-hover:scale-125 transition-transform duration-700 ${plan.decorColor}`} />
      
      <div className="flex justify-between items-start mb-3 md:mb-4 relative z-10">
        <span className={`px-2.5 py-0.5 md:px-3 md:py-1 rounded-full text-[9px] md:text-[10px] font-bold uppercase tracking-wider ${plan.color}`}>
          {plan.id}
        </span>
        <span className="text-[10px] md:text-xs font-bold text-slate-500 bg-white/80 backdrop-blur-sm px-2 md:px-2.5 py-0.5 md:py-1 rounded-lg border border-slate-200 shadow-sm">
          {plan.tag}
        </span>
      </div>

      <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
        {plan.name}
      </h3>
      <p className="text-xs md:text-sm text-slate-500 mb-4 md:mb-6 font-medium">{plan.subtitle}</p>

      <div className="mt-auto space-y-2.5 md:space-y-3 relative z-10">
        <div className="flex items-start gap-2.5 md:gap-3 text-xs md:text-sm text-slate-600">
          <Icons.Users className="w-4 h-4 mt-0.5 text-blue-500 shrink-0" />
          <span className="line-clamp-2 leading-tight font-medium">{plan.audience}</span>
        </div>
        
        <div className="flex items-start gap-2.5 md:gap-3 text-xs md:text-sm text-slate-600">
          <Icons.CheckCircle className="w-4 h-4 mt-0.5 text-green-500 shrink-0" />
          <span className="line-clamp-1 leading-tight text-[11px] md:text-xs font-medium">{plan.qualification.split('\n')[0]}</span>
        </div>
      </div>
    </div>
  );
};

export default PlanCard;
