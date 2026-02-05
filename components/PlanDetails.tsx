
import React, { useState } from 'react';
import { FinancialPlan } from '../types';
import { Icons } from '../constants';

interface PlanDetailsProps {
  plan: FinancialPlan;
  onClose: () => void;
}

const PlanDetails: React.FC<PlanDetailsProps> = ({ plan, onClose }) => {
  const [showSource, setShowSource] = useState(false);

  // 处理查看源文件的点击
  const handleViewSource = () => {
    if (plan.id === 'V103' || plan.id === 'V104') {
      // 对 V103 和 V104，打开独立的新页面
      // 使用相对路径，Vercel 配置了 cleanUrls 后，不需要写 .html 后缀
      window.open('/v103-source', '_blank');
    } else {
      // 其他计划保持原有的浮层逻辑
      setShowSource(true);
    }
  };

  // 通用页眉 (PDF 风格)
  const DocHeader = ({ title, code, page, total }: { title: string, code: string, page: number, total: number }) => (
    <div className="mb-8 relative">
      <div className="flex justify-between items-start border-b-2 border-slate-900 pb-2 mb-4">
        <h1 className="text-lg md:text-xl font-bold uppercase">{title} (計劃編號: {code})</h1>
        <div className="text-right">
          <div className="text-[10px] font-bold text-red-600">PRUDENTIAL</div>
          <div className="text-[10px] font-bold text-red-600 tracking-tighter leading-none">保 誠 保 險</div>
        </div>
      </div>
      <div className="text-center font-bold text-[10px] bg-slate-100 py-1 uppercase tracking-[0.2em] text-slate-500">
        第 {page} 頁，共 {total} 頁
      </div>
    </div>
  );

  // 通用页脚 (PDF 风格)
  const DocFooter = ({ code, page, total, version = "v.202301" }: { code: string, page: number, total: number, version?: string }) => (
    <div className="flex justify-between items-center text-[9px] border-t pt-2 mt-10 text-slate-400 font-sans italic">
      <span>{code} 財務資助計劃 ({version})</span>
      <span>Page {page} of {total}</span>
    </div>
  );

  // --- 源文件組件: V016 (3頁) ---
  const SourceDocumentV016 = () => (
    <div className="text-[11px] md:text-xs text-slate-800 leading-relaxed font-serif bg-white p-6 md:p-12 shadow-inner space-y-20">
      <section>
        <DocHeader title="2025 PRUVenture 津贴计划" code="V016" page={1} total={3} />
        <div className="space-y-4">
          <section><h3 className="font-bold">1. 生效期</h3><p className="pl-4">1.1. 自 2025 年 4 月 1 日至 12 月 31 日，并视乎配额而定</p></section>
          <section><h3 className="font-bold">2. 款项性质</h3><p className="pl-4">任何及所有融资支付，包括但不限于每月津贴，本质上均为贷款支付。受融资协议、代理协议及其他服务条款约束。</p></section>
          <section><h3 className="font-bold">4. 资格</h3><p className="pl-4">4.1. 申请 KOB/Sign-off/Elite 计划者不符合此计划资格。4.3. 招募经理需为 A+ Leaders Program 毕业生。</p></section>
        </div>
        <DocFooter code="V016" page={1} total={3} />
      </section>
    </div>
  );

  // --- 源文件组件: D123 (5页) ---
  const SourceDocumentD123 = () => (
    <div className="text-[11px] md:text-xs text-slate-800 leading-relaxed font-serif bg-white p-6 md:p-12 shadow-inner space-y-20">
      <section>
        <DocHeader title="2025 高端人才融资计划" code="D123" page={1} total={5} />
        <div className="space-y-4">
          <section><h3 className="font-bold">4. 资格</h3><p className="pl-4">4.1. 硕士学位持有人或以上，具备至少 3 年工作经验。4.2. 平均年收入 (AAI) 至少为 HK$1,000,000。</p></section>
        </div>
        <DocFooter code="D123" page={1} total={5} />
      </section>
    </div>
  );

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-2 md:p-4 bg-slate-900/60 backdrop-blur-md transition-all animate-in fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-4xl max-h-[95vh] md:max-h-[92vh] overflow-hidden rounded-3xl md:rounded-[40px] shadow-2xl relative flex flex-col animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-5 md:px-8 py-4 md:py-6 flex justify-between items-center border-b border-slate-50 bg-white sticky top-0 z-50">
          <div className="flex items-center gap-2 md:gap-4 overflow-hidden">
            <span className="text-sm md:text-lg font-bold text-slate-500 shrink-0">{plan.id}</span>
            <h2 className="text-lg md:text-2xl font-extrabold text-slate-800 tracking-tight truncate">{plan.name}</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors shrink-0">
            <Icons.X className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Content Container */}
        <div className="flex-1 relative overflow-hidden flex flex-col bg-slate-100">
          {/* Main Plan Summary */}
          <div className={`flex-1 overflow-y-auto p-5 md:p-8 space-y-6 md:space-y-8 hide-scrollbar transition-opacity duration-300 ${showSource ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
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

            <div className="space-y-6 pt-2">
              <div className="flex items-center gap-2 mb-4 md:mb-6 text-slate-800">
                <Icons.Briefcase className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                <h3 className="text-lg md:text-xl font-extrabold">计划摘要</h3>
              </div>
              <div className="flex gap-4 md:gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                  <Icons.BadgeDollarSign className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 text-base md:text-lg">财务支持 (Funding)</h4>
                  <p className="text-slate-600 text-[14px] md:text-[15px] mt-1 whitespace-pre-line leading-relaxed">{plan.details.funding}</p>
                </div>
              </div>
              <div className="flex gap-4 md:gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-orange-50 flex items-center justify-center shrink-0 text-orange-600">
                  <Icons.Bot className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 text-base md:text-lg">业绩要求 (Performance)</h4>
                  <p className="text-slate-600 text-[14px] md:text-[15px] mt-1 whitespace-pre-line leading-relaxed">{plan.details.performance}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Source Document View (High Fidelity Overlay) - 仅限 V016 和 D123 */}
          {showSource && (
            <div className="absolute inset-0 z-20 bg-slate-100 flex flex-col animate-in slide-in-from-right duration-300">
              <div className="px-5 md:px-8 py-3 md:py-4 bg-white border-b border-slate-200 flex justify-between items-center shadow-sm relative z-30">
                <div className="flex items-center gap-2 font-bold text-slate-600 text-sm md:text-base">
                  <Icons.FileText className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  <span>{plan.id} 計劃條文源文件</span>
                </div>
                <button 
                  onClick={() => setShowSource(false)}
                  className="px-3 md:px-4 py-1.5 bg-slate-900 text-white rounded-xl text-xs md:text-sm font-bold hover:bg-slate-800 transition-colors"
                >
                  返回摘要
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 md:p-10 hide-scrollbar scroll-smooth">
                <div className="max-w-3xl mx-auto space-y-12 pb-24">
                   {plan.id === 'V016' ? (
                     <SourceDocumentV016 />
                   ) : plan.id === 'D123' ? (
                     <SourceDocumentD123 />
                   ) : (
                     <div className="bg-white p-20 rounded-3xl shadow-xl text-center text-slate-400 font-medium italic">
                        該計劃的源文檔不支持在此視窗顯示，請刷新後點擊查看獨立頁面。
                     </div>
                   )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 md:px-8 py-4 md:py-6 bg-white border-t border-slate-100 flex justify-between items-center sticky bottom-0 z-50">
          <button 
            onClick={handleViewSource}
            className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold transition-colors text-xs md:text-sm group"
          >
            <Icons.Info className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
            <span>查看完整源文件 (高保真還原)</span>
          </button>
          <button 
            onClick={onClose}
            className="flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 bg-[#1e293b] text-white rounded-xl md:rounded-2xl text-sm md:text-base font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-lg"
          >
            返回
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;
