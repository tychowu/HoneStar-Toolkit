import React from 'react';
import { FinancialPlan } from '../types';
import { Icons } from '../constants';

interface PlanCardProps {
  plan: FinancialPlan;
  onClick: (plan: FinancialPlan) => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, onClick }) => {
  return (
    <div 
      onClick={() => onClick(plan)}
      className="group relative bg-white rounded-3xl p-6 shadow-sm border border-slate-100 cursor-pointer overflow-hidden flex flex-col h-full hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Increased size of the decorative circle as previously requested */}
      <div className={`absolute top-0 right-0 w-48 h-48 -mr-16 -mt-16 rounded-full opacity-10 transform group-hover:scale-110 transition-transform duration-500 ${plan.decorColor}`} />
      
      <div className="flex justify-between items-start mb-4 relative z-10">
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${plan.color}`}>
          {plan.id}
        </span>
        <span className="text-[10px] font-medium text-slate-400 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
          {plan.tag}
        </span>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
        {plan.name}
      </h3>
      <p className="text-sm text-slate-500 mb-6 font-medium">{plan.subtitle}</p>

      <div className="mt-auto space-y-3 relative z-10">
        <div className="flex items-start gap-3 text-sm text-slate-600">
          <Icons.Users className="w-4 h-4 mt-0.5 text-blue-500 shrink-0" />
          <span className="line-clamp-2 leading-tight">{plan.audience}</span>
        </div>
        
        <div className="flex items-start gap-3 text-sm text-slate-600">
          <Icons.CheckCircle className="w-4 h-4 mt-0.5 text-green-500 shrink-0" />
          <span className="line-clamp-2 leading-tight text-xs">{plan.qualification.split('\n')[0]}...</span>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-50 flex items-center justify-end gap-1 text-blue-600 text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
        <span>了解详情</span>
        <Icons.ChevronRight className="w-3 h-3" />
      </div>
    </div>
  );
};

export default PlanCard;