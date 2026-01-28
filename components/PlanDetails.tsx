import React from 'react';
import { FinancialPlan } from '../types';
import { Icons } from '../constants';

interface PlanDetailsProps {
  plan: FinancialPlan;
  onClose: () => void;
}

const PlanDetails: React.FC<PlanDetailsProps> = ({ plan, onClose }) => {
  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md transition-all animate-in fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-3xl shadow-2xl relative flex flex-col animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 md:p-8 flex justify-between items-start border-b border-slate-100">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <span className={`px-3 py-1 rounded-full text-xs font-bold ${plan.color}`}>
                {plan.id}
              </span>
              <h2 className="text-2xl font-bold text-slate-900">{plan.name}</h2>
            </div>
            <p className="text-slate-500 font-medium">{plan.subtitle}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors">
            <Icons.X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 hide-scrollbar">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50/50 p-5 rounded-2xl border border-blue-100">
              <div className="flex items-center gap-2 mb-3 text-blue-700 font-bold text-sm">
                <Icons.Users className="w-4 h-4" />
                <h3>适合人群</h3>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed">{plan.audience}</p>
            </div>
            <div className="bg-green-50/50 p-5 rounded-2xl border border-green-100">
              <div className="flex items-center gap-2 mb-3 text-green-700 font-bold text-sm">
                <Icons.CheckCircle className="w-4 h-4" />
                <h3>申请资格</h3>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">{plan.qualification}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0 text-blue-600">
                <Icons.BadgeDollarSign className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">财务支持 (Funding)</h4>
                <p className="text-slate-600 text-sm mt-1 whitespace-pre-line leading-relaxed">{plan.details.funding}</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center shrink-0 text-indigo-600">
                <Icons.Briefcase className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-slate-900">业绩要求 (Performance)</h4>
                <p className="text-slate-600 text-sm mt-1 whitespace-pre-line leading-relaxed">{plan.details.performance}</p>
              </div>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <div className="flex items-center gap-3 mb-3 text-blue-700 font-bold">
                <Icons.ShieldAlert className="w-5 h-5" />
                <h4>关键：追讨/离职机制 (Clawback)</h4>
              </div>
              <p className="text-blue-900/80 text-sm leading-relaxed whitespace-pre-line bg-white/50 p-4 rounded-xl">
                {plan.details.clawback}
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button 
            onClick={onClose}
            className="px-8 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-bold hover:bg-blue-700 transition-all active:scale-95"
          >
            关闭详情
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;