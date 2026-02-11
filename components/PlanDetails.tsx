
import React from 'react';
import { FinancialPlan } from '../types';
import { Icons } from '../constants';

interface PlanDetailsProps {
  plan: FinancialPlan;
  onClose: () => void;
}

const PlanDetails: React.FC<PlanDetailsProps> = ({ plan, onClose }) => {
  const handleOpenSource = () => {
    // 映射到用户提供的 Google Drive 外部链接
    const linkMapping: Record<string, string> = {
      'V016': 'https://drive.google.com/file/d/15YRwANY7HeCW15cd9kTbyQrlPNSFjEXi/view?usp=sharing',
      'U163': 'https://drive.google.com/file/d/1jtTTCvNqN7nx4KXB8O0j2bEdrxq9y-8-/view?usp=drive_link',
      'T120': 'https://drive.google.com/file/d/1jtTTCvNqN7nx4KXB8O0j2bEdrxq9y-8-/view?usp=drive_link',
      'D123': 'https://drive.google.com/file/d/1PwxNAOvXNzWsK9TTNaljjbZQQHD9-xpD/view?usp=drive_link',
      'V103': 'https://drive.google.com/file/d/1s_TKm_Lx_I1Yf8x_TkGo000xqzbPelIk/view?usp=sharing',
      'V104': 'https://drive.google.com/file/d/1s_TKm_Lx_I1Yf8x_TkGo000xqzbPelIk/view?usp=sharing',
      'D119': 'https://drive.google.com/file/d/1qqd62a05GP-cZorTMupaY59nXPX0xGl4/view?usp=sharing'
    };

    const url = linkMapping[plan.id];
    if (url) {
      window.open(url, '_blank');
    } else {
      alert(`计划 ${plan.id} 的参考文档链接暂未提供。`);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4 bg-slate-900/60 backdrop-blur-md transition-all animate-in fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-2xl max-h-[90vh] overflow-hidden rounded-3xl md:rounded-[40px] shadow-2xl relative flex flex-col animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 md:px-8 py-5 md:py-6 flex justify-between items-center border-b border-slate-50 shrink-0">
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${plan.color}`}>{plan.id}</span>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 tracking-tight">{plan.name}</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors">
            <Icons.X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 bg-slate-50/10 custom-scrollbar">
          {/* Top Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-blue-50/50 p-6 rounded-[24px] border border-blue-100 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center gap-2 mb-3 text-blue-700 font-bold">
                <Icons.Users className="w-5 h-5" />
                <h3 className="text-sm md:text-base">受众定位</h3>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed font-medium">{plan.audience}</p>
            </div>
            
            <div className="bg-green-50/50 p-6 rounded-[24px] border border-green-100 shadow-sm transition-all hover:shadow-md">
              <div className="flex items-center gap-2 mb-3 text-green-700 font-bold">
                <Icons.CheckCircle className="w-5 h-5" />
                <h3 className="text-sm md:text-base">准入门槛</h3>
              </div>
              <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line font-medium">{plan.qualification}</p>
            </div>
          </div>

          <div className="space-y-6 px-1">
            <div className="flex gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                <Icons.BadgeDollarSign className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-800">财务资助</h4>
                <p className="text-slate-600 text-sm mt-1.5 whitespace-pre-line leading-relaxed font-medium">{plan.details.funding}</p>
              </div>
            </div>

            <div className="flex gap-4 group">
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0 text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-colors">
                <Icons.Bot className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-800">业绩要求</h4>
                <p className="text-slate-600 text-sm mt-1.5 whitespace-pre-line leading-relaxed font-medium">{plan.details.performance}</p>
              </div>
            </div>

            <div className="mt-8 bg-[#fff5f5] p-6 rounded-[24px] border border-red-100 shadow-sm transition-all hover:shadow-md group">
              <div className="flex items-center gap-2 mb-4 text-[#e53e3e] font-bold">
                <Icons.ShieldAlert className="w-5 h-5" />
                <h3 className="text-sm md:text-base">风险提示</h3>
              </div>
              <p className="text-[#c53030] text-xs md:text-sm leading-relaxed whitespace-pre-line font-medium opacity-90">
                {plan.details.clawback}
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 md:px-8 py-5 border-t border-slate-100 flex justify-between items-center bg-white shrink-0">
          <button 
            onClick={handleOpenSource}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold transition-colors text-sm"
          >
            <Icons.FileText className="w-5 h-5" />
            <span>打开原文 (Google Drive)</span>
          </button>
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-slate-900 text-white rounded-2xl text-sm font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-lg shadow-slate-200"
          >
            返回
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;
