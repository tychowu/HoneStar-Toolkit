
import React from 'react';
import { FinancialPlan } from '../types';
import { Icons } from '../constants';

interface PlanDetailsProps {
  plan: FinancialPlan;
  onClose: () => void;
}

const PlanDetails: React.FC<PlanDetailsProps> = ({ plan, onClose }) => {
  const handleOpenSource = () => {
    if (plan.id === 'V103' || plan.id === 'V104' || plan.id === 'V013' || plan.id === 'V014') {
      // 直接跳转到用户提供的 Notion PDF 链接
      const notionUrl = "https://file.notion.so/f/f/fd3b82bd-c955-484f-acb5-006328f96744/77eca08a-ea87-44f5-ae2b-4dcc6b253dd3/V013_V014pdf.pdf?table=block&id=2fe83a27-f113-8036-8367-f959da7d46d0&spaceId=fd3b82bd-c955-484f-acb5-006328f96744&expirationTimestamp=1770422400000&signature=z_jjJuwUB2MtrwP6tbByKpfC55csMTU6NC5AIqbrx-Q&downloadName=V013+V014pdf.pdf";
      window.open(notionUrl, '_blank');
    } else {
      alert(`计划 ${plan.id} 的原始 PDF 文件正在上传中，请稍后再试。`);
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
        <div className="px-6 md:px-8 py-5 md:py-6 flex justify-between items-center border-b border-slate-50">
          <div className="flex items-center gap-3">
            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase ${plan.color}`}>{plan.id}</span>
            <h2 className="text-xl md:text-2xl font-extrabold text-slate-800 tracking-tight">{plan.name}</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors">
            <Icons.X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 md:p-8 space-y-8 bg-slate-50/30">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2 mb-3 text-blue-600 font-bold">
                <Icons.Users className="w-5 h-5" />
                <h3>适合人群</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">{plan.audience}</p>
            </div>
            <div className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2 mb-3 text-green-600 font-bold">
                <Icons.CheckCircle className="w-5 h-5" />
                <h3>申请资格</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed whitespace-pre-line">{plan.qualification}</p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                <Icons.BadgeDollarSign className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-800">财务支持</h4>
                <p className="text-slate-600 text-sm mt-1 whitespace-pre-line leading-relaxed">{plan.details.funding}</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center shrink-0 text-orange-600">
                <Icons.Bot className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-slate-800">业绩要求</h4>
                <p className="text-slate-600 text-sm mt-1 whitespace-pre-line leading-relaxed">{plan.details.performance}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 md:px-8 py-5 border-t border-slate-100 flex justify-between items-center bg-white">
          <button 
            onClick={handleOpenSource}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-bold transition-colors text-sm"
          >
            <Icons.FileText className="w-5 h-5" />
            <span>打开原文</span>
          </button>
          <button 
            onClick={onClose}
            className="px-8 py-3 bg-slate-900 text-white rounded-2xl text-sm font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-lg"
          >
            返回
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;
