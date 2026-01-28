
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
      className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4 bg-slate-900/60 backdrop-blur-md transition-all animate-in fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-3xl max-h-[95vh] md:max-h-[90vh] overflow-hidden rounded-3xl md:rounded-[40px] shadow-2xl relative flex flex-col animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 md:px-8 py-4 md:py-6 flex justify-between items-center border-b border-slate-50">
          <div className="flex items-center gap-2 md:gap-4 overflow-hidden">
            <span className="text-sm md:text-lg font-bold text-slate-500 shrink-0">{plan.id}</span>
            <h2 className="text-lg md:text-3xl font-extrabold text-slate-800 tracking-tight truncate">{plan.name}</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors shrink-0">
            <Icons.X className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto p-5 md:p-8 space-y-6 md:space-y-8 hide-scrollbar">
          {/* Top Grid: Audience & Qualification */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="bg-[#f8faff] p-5 md:p-6 rounded-2xl md:rounded-3xl border border-blue-50">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 text-[#3b66f5] font-bold">
                <Icons.Users className="w-5 h-5 md:w-6 md:h-6" />
                <h3 className="text-base md:text-lg">适合人群</h3>
              </div>
              <p className="text-slate-600 text-[14px] md:text-[15px] leading-relaxed font-medium">{plan.audience}</p>
            </div>
            <div className="bg-[#f7fcf9] p-5 md:p-6 rounded-2xl md:rounded-3xl border border-green-50">
              <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 text-[#10b981] font-bold">
                <Icons.CheckCircle className="w-5 h-5 md:w-6 md:h-6" />
                <h3 className="text-base md:text-lg">申请资格</h3>
              </div>
              <p className="text-slate-600 text-[14px] md:text-[15px] leading-relaxed font-medium whitespace-pre-line">{plan.qualification}</p>
            </div>
          </div>

          {/* Note Area: 注意要点 */}
          {plan.note && (
            <div className="bg-[#fffdf2] p-4 md:p-6 rounded-2xl border border-[#fef3c7] flex gap-3 md:gap-4">
              <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#f59e0b]">
                <span className="text-[#f59e0b] font-black text-[10px] md:text-xs">!</span>
              </div>
              <div>
                <h4 className="font-bold text-[#92400e] text-xs md:text-sm mb-0.5 md:mb-1">注意要点</h4>
                <p className="text-[#b45309] text-[13px] md:text-sm leading-relaxed font-medium whitespace-pre-line">{plan.note}</p>
              </div>
            </div>
          )}

          {/* Section: 计划详解 */}
          <div className="space-y-6 pt-2 md:pt-4">
            <div className="flex items-center gap-2 mb-4 md:mb-6 text-slate-800">
              <Icons.Briefcase className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
              <h3 className="text-lg md:text-xl font-extrabold">计划详解</h3>
            </div>

            {/* Funding Item */}
            <div className="flex gap-4 md:gap-5">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                <Icons.BadgeDollarSign className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-800 text-base md:text-lg">财务支持 (Funding)</h4>
                <div className="text-slate-600 text-[14px] md:text-[15px] mt-1 md:mt-2 whitespace-pre-line leading-relaxed font-medium space-y-1">
                  {plan.details.funding.split('\n').map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Performance Item */}
            <div className="flex gap-4 md:gap-5">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-orange-50 flex items-center justify-center shrink-0 text-orange-600">
                <Icons.Bot className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-800 text-base md:text-lg">业绩要求 (Performance)</h4>
                <div className="text-slate-600 text-[14px] md:text-[15px] mt-1 md:mt-2 whitespace-pre-line leading-relaxed font-medium space-y-1">
                  {plan.details.performance.split('\n').map((line, idx) => (
                    <div key={idx}>{line}</div>
                  ))}
                </div>
              </div>
            </div>

            {/* Clawback Item - Special Red Box */}
            <div className="flex gap-4 md:gap-5">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-red-50 flex items-center justify-center shrink-0 text-red-600">
                <Icons.ShieldAlert className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-800 text-base md:text-lg">追讨/离职机制 (Clawback)</h4>
                <div className="mt-2 md:mt-3 bg-[#fff9f9] border border-red-100 rounded-xl md:rounded-2xl p-4 md:p-6">
                  <div className="text-slate-700 text-[13px] md:text-[14px] space-y-1.5 md:space-y-2 leading-relaxed font-medium">
                    {plan.details.clawback.split('\n').map((line, idx) => (
                      <div key={idx} className="flex gap-2">
                        <span>{line}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer with two buttons */}
        <div className="px-5 md:px-8 py-4 md:py-6 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
          <button className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold transition-colors text-xs md:text-sm">
            <Icons.Info className="w-4 h-4 md:w-5 md:h-5" />
            <span>查看源文件详情</span>
          </button>
          <button 
            onClick={onClose}
            className="flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 bg-[#1e293b] text-white rounded-xl md:rounded-2xl text-sm md:text-base font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-lg"
          >
            <Icons.ChevronRight className="w-4 h-4 md:w-5 md:h-5 rotate-180" />
            返回
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;
