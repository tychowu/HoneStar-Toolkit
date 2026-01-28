
import React, { useState } from 'react';
import { FinancialPlan } from '../types';
import { Icons } from '../constants';

interface PlanDetailsProps {
  plan: FinancialPlan;
  onClose: () => void;
}

const PlanDetails: React.FC<PlanDetailsProps> = ({ plan, onClose }) => {
  const [showSource, setShowSource] = useState(false);

  // OCR Source Content for T120 (Page 1 of PDF)
  const t120Source = (
    <div className="space-y-6 text-slate-700">
      <section>
        <h4 className="font-bold text-slate-900 border-b pb-2 mb-3">1. 計劃生效日期</h4>
        <p className="text-xs leading-relaxed">1.1. 由2025年4月1日起生效</p>
        <p className="text-xs leading-relaxed">1.2. 申請人只可選擇以下第5或6條業績花紅財務計劃或季度花紅財務預支計劃的其中一項</p>
      </section>
      
      <section>
        <h4 className="font-bold text-slate-900 border-b pb-2 mb-3">5. 業績花紅財務計劃 (PB) (T120)</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-[10px] border-collapse border border-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="border p-1">對數期</th>
                <th className="border p-1">PB 級別</th>
                <th className="border p-1">淨銷售額 (HKD)</th>
                <th className="border p-1">H&P (HKD)</th>
                <th className="border p-1">花紅金額 (HKD)</th>
              </tr>
            </thead>
            <tbody>
              {[
                { level: '(a)', sales: '>=52萬', hp: '>=7.8萬', bonus: '60,000' },
                { level: '(b)', sales: '>=65萬', hp: '>=9.75萬', bonus: '80,000' },
                { level: '(c)', sales: '>=91萬', hp: '>=13.65萬', bonus: '120,000' },
                { level: '(d)', sales: '>=130萬', hp: '>=19.5萬', bonus: '180,000' },
                { level: '(e)', sales: '>=195萬', hp: '>=29.25萬', bonus: '270,000' },
              ].map((row, i) => (
                <tr key={i} className="text-center">
                  {i === 0 && <td rowSpan={5} className="border p-1">第1-12个月</td>}
                  <td className="border p-1">{row.level}</td>
                  <td className="border p-1">{row.sales}</td>
                  <td className="border p-1">{row.hp}</td>
                  <td className="border p-1 font-bold">{row.bonus}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-[10px] text-slate-500">* 淨保單數目需 ≥20，續保率需 ≥85%</p>
      </section>

      <section>
        <h4 className="font-bold text-slate-900 border-b pb-2 mb-3">5.2. 發放比例</h4>
        <div className="overflow-x-auto">
          <table className="w-full text-[10px] border-collapse border border-slate-200 text-center">
            <thead className="bg-slate-50">
              <tr>
                <th className="border p-1">H&P 對數要求</th>
                <th className="border p-1">淨保單數目要求</th>
                <th className="border p-1">發放比例</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border p-1">達標</td><td className="border p-1">達標</td><td className="border p-1 font-bold">100%</td></tr>
              <tr><td className="border p-1">未達標</td><td className="border p-1">達標</td><td className="border p-1">80%</td></tr>
              <tr><td className="border p-1">達標</td><td className="border p-1">未達標</td><td className="border p-1">50%</td></tr>
              <tr><td className="border p-1">未達標</td><td className="border p-1">未達標</td><td className="border p-1">40%</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      <div className="p-4 bg-slate-50 rounded-lg text-[10px] text-slate-500 italic">
        * 以上內容節選自《全民財務預支計劃之計劃條文》(2025-07版) 第1頁。
      </div>
    </div>
  );

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

        {/* Content Container */}
        <div className="flex-1 relative overflow-hidden flex flex-col">
          {/* Main Plan Details */}
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

            <div className="space-y-6 pt-2">
              <div className="flex items-center gap-2 mb-4 md:mb-6 text-slate-800">
                <Icons.Briefcase className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                <h3 className="text-lg md:text-xl font-extrabold">计划详解</h3>
              </div>

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

              <div className="flex gap-4 md:gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-red-50 flex items-center justify-center shrink-0 text-red-600">
                  <Icons.ShieldAlert className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 text-base md:text-lg">追讨/离职机制 (Clawback)</h4>
                  <div className="mt-2 md:mt-3 bg-[#fff9f9] border border-red-100 rounded-xl md:rounded-2xl p-4 md:p-6">
                    <div className="text-slate-700 text-[13px] md:text-[14px] leading-relaxed font-medium">
                      {plan.details.clawback}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Source Document View (Simulated PDF Content) */}
          {showSource && (
            <div className="absolute inset-0 z-20 bg-white flex flex-col animate-in slide-in-from-right duration-300">
              <div className="px-5 md:px-8 py-3 md:py-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center shadow-sm relative z-30">
                <div className="flex items-center gap-2 font-bold text-slate-600 text-sm md:text-base">
                  <Icons.FileText className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  <span>计划条文 ({plan.id}) - 2025-07 版</span>
                </div>
                <button 
                  onClick={() => setShowSource(false)}
                  className="px-3 md:px-4 py-1.5 bg-slate-900 text-white rounded-xl text-xs md:text-sm font-bold hover:bg-slate-800 transition-colors"
                >
                  返回摘要
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-6 md:p-10 hide-scrollbar bg-slate-50">
                <div className="bg-white p-6 md:p-12 rounded-2xl md:rounded-[32px] shadow-xl border border-slate-200 mx-auto max-w-2xl min-h-full">
                  {plan.id === 'T120' ? t120Source : (
                    <div className="text-center py-20 text-slate-400 font-medium">
                      该计划的源文档正在数字化中，请咨询您的招募经理获取纸质版。
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 md:px-8 py-4 md:py-6 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
          <button 
            onClick={() => setShowSource(true)}
            className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold transition-colors text-xs md:text-sm group"
          >
            <Icons.Info className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
            <span>查看源文件详情</span>
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
