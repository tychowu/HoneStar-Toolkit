
import React from 'react';
import { FinancialPlan } from '../types';
import { Icons } from '../constants';

interface PlanCardProps {
  plan: FinancialPlan;
  onClick: (plan: FinancialPlan) => void;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan, onClick }) => {
  // 定义基于计划颜色的渐变背景
  const getGradient = (id: string) => {
    switch (id) {
      case 'V106': return 'from-green-50 to-white';
      case 'V103': return 'from-teal-50 to-white';
      case 'U163': return 'from-blue-50 to-white';
      case 'D123': return 'from-purple-50 to-white';
      case 'V104': return 'from-indigo-50 to-white';
      case 'D119': return 'from-amber-50 to-white';
      case 'T120': return 'from-amber-50 to-white';
      default: return 'from-slate-50 to-white';
    }
  };

  return (
    <div 
      onClick={() => onClick(plan)}
      className={`group relative bg-gradient-to-bl ${getGradient(plan.id)} rounded-3xl p-6 shadow-sm border border-slate-100 cursor-pointer overflow-hidden flex flex-col hover:shadow-2xl hover:shadow-blue-200/40 hover:-translate-y-2 transition-all duration-500`}
    >
      {/* 装饰圆形 */}
      <div className={`absolute top-0 right-0 w-48 h-48 -mr-16 -mt-16 rounded-full opacity-10 transform group-hover:scale-125 transition-transform duration-700 ${plan.decorColor}`} />
      
      <div className="flex justify-between items-start mb-4 relative z-10">
        <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${plan.color}`}>
          {plan.id}
        </span>
        {/* 加大标签字号 */}
        <span className="text-xs font-bold text-slate-500 bg-white/80 backdrop-blur-sm px-2.5 py-1 rounded-lg border border-slate-200 shadow-sm">
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
          <span className="line-clamp-2 leading-tight font-medium">{plan.audience}</span>
        </div>
        
        <div className="flex items-start gap-3 text-sm text-slate-600">
          <Icons.CheckCircle className="w-4 h-4 mt-0.5 text-green-500 shrink-0" />
          <span className="line-clamp-2 leading-tight text-xs font-medium">{plan.qualification.split('\n')[0]}...</span>
        </div>
      </div>
      
      {/* 移除了底部的“了解详情”文字以缩减高度 */}
    </div>
  );
};

export default PlanCard;
