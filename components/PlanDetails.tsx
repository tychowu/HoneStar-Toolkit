
import React, { useState } from 'react';
import { FinancialPlan } from '../types';
import { Icons } from '../constants';

interface PlanDetailsProps {
  plan: FinancialPlan;
  onClose: () => void;
}

const PlanDetails: React.FC<PlanDetailsProps> = ({ plan, onClose }) => {
  const [showSource, setShowSource] = useState(false);

  // 全面复刻 T120 PDF 第 1 页内容
  const t120Source = (
    <div className="text-[11px] md:text-xs text-slate-800 leading-relaxed font-serif">
      <div className="flex justify-between items-start mb-6 border-b-2 border-slate-900 pb-2">
        <h1 className="text-lg md:text-xl font-bold">全民財務預支計劃之計劃條文</h1>
        <div className="text-right">
          <div className="text-[10px] font-bold text-red-600">PRUDENTIAL</div>
          <div className="text-[10px] font-bold text-red-600 tracking-tighter leading-none">保 誠 保 險</div>
        </div>
      </div>

      <div className="space-y-5">
        <section>
          <h2 className="font-bold mb-1">1. 計劃生效日期</h2>
          <div className="pl-4 space-y-0.5">
            <p>1.1. 由2025年4月1日起生效</p>
            <p>1.2. 申請人只可選擇以下第5或6條業績花紅財務計劃或季度花紅財務預支計劃的其中一項</p>
            <p>1.3. 本公司對修訂計劃細則及／或任何時候終止此計劃有唯一及絕對的決定權</p>
          </div>
        </section>

        <section>
          <h2 className="font-bold mb-1">2. 款項的性質</h2>
          <div className="pl-4 space-y-0.5">
            <p>任何及所有財務款項包括但不限於每月預支、季度花紅及業績花紅均屬於貸款款項。所有有關財務款項或貸款款項會按照下列的條款及細則批核予代理人：</p>
            <div className="pl-4">
              <p>a) 此財務計劃；</p>
              <p>b) 貸款協議;</p>
              <p>c) 代理協議; 及</p>
              <p>d) 其他由公司不時修訂之適用的服務條款</p>
            </div>
            <p className="mt-2">保誠保險有限公司及其受托人（「公司」）對任何有關之財務款項或貸款有絕對的酌情權</p>
          </div>
        </section>

        <section>
          <h2 className="font-bold mb-1">3. 加簽／批核</h2>
          <div className="pl-4">
            <p>所有申請必須經由相關上線經理加簽，並經公司批核</p>
          </div>
        </section>

        <section>
          <h2 className="font-bold mb-1">4. 佣金扣減</h2>
          <div className="pl-4 space-y-0.5">
            <p>4.1. 不設佣金扣減。受公司不時修訂之條款及細則約束，賺取之佣金將100%全數發放</p>
            <p>4.2. 其他報酬福利按公司不時修訂的代理人條款細則而定</p>
          </div>
        </section>

        <section>
          <h2 className="font-bold mb-1">5. 全民財務預支計劃－業績花紅財務計劃（業績花紅“PB”)（計劃編號：T120）</h2>
          <div className="pl-4 space-y-2">
            <p>5.1. 代理人如達到下表對數要求，可獲取業績花紅：</p>
            
            <div className="mt-4">
              <h3 className="font-bold mb-2">業績花紅第一部份</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-[10px] border-collapse border border-slate-900 text-center">
                  <thead className="bg-slate-50 font-bold">
                    <tr>
                      <th className="border border-slate-900 p-1">對數期</th>
                      <th className="border border-slate-900 p-1">PB 級別</th>
                      <th className="border border-slate-900 p-1">淨銷售額<br/>Net Sales Credit (港幣)</th>
                      <th className="border border-slate-900 p-1">H&P<br/>(港幣)</th>
                      <th className="border border-slate-900 p-1">淨保單數目</th>
                      <th className="border border-slate-900 p-1">續保率</th>
                      <th className="border border-slate-900 p-1">花紅金額<br/>(港幣)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { l: '(a)', s: '>=520,000 但 <650,000', hp: '>=78,000', b: '60,000' },
                      { l: '(b)', s: '>=650,000 但 <910,000', hp: '>=97,500', b: '80,000' },
                      { l: '(c)', s: '>=910,000 但 <1,300,000', hp: '>=136,500', b: '120,000' },
                      { l: '(d)', s: '>=1,300,000 但 <1,950,000', hp: '>=195,000', b: '180,000' },
                      { l: '(e)', s: '>=1,950,000', hp: '>=292,500', b: '270,000' }
                    ].map((r, i) => (
                      <tr key={i}>
                        {i === 0 && <td rowSpan={5} className="border border-slate-900 p-1">第 1 至 12 個合<br/>約月份</td>}
                        <td className="border border-slate-900 p-1">{r.l}</td>
                        <td className="border border-slate-900 p-1">{r.s}</td>
                        <td className="border border-slate-900 p-1">{r.hp}</td>
                        {i === 0 && <td rowSpan={5} className="border border-slate-900 p-1">>=20</td>}
                        {i === 0 && <td rowSpan={5} className="border border-slate-900 p-1">>=85%</td>}
                        <td className="border border-slate-900 p-1">{r.b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4">
              <h3 className="font-bold mb-2">業績花紅第二部份</h3>
              <div className="overflow-x-auto">
                <table className="w-full text-[10px] border-collapse border border-slate-900 text-center">
                  <thead className="bg-slate-50 font-bold">
                    <tr>
                      <th className="border border-slate-900 p-1">對數期</th>
                      <th className="border border-slate-900 p-1">PB 級別</th>
                      <th className="border border-slate-900 p-1">淨銷售額<br/>Net Sales Credit (港幣)</th>
                      <th className="border border-slate-900 p-1">H&P<br/>(港幣)</th>
                      <th className="border border-slate-900 p-1">淨保单数目</th>
                      <th className="border border-slate-900 p-1">續保率</th>
                      <th className="border border-slate-900 p-1">花紅金額<br/>(港幣)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[
                      { l: '(a)', s: '>=520,000 但 <650,000', hp: '>=78,000', b: '60,000' },
                      { l: '(b)', s: '>=650,000 但 <910,000', hp: '>=97,500', b: '80,000' },
                      { l: '(c)', s: '>=910,000 但 <1,300,000', hp: '>=136,500', b: '120,000' },
                      { l: '(d)', s: '>=1,300,000 但 <1,950,000', hp: '>=195,000', b: '180,000' },
                      { l: '(e)', s: '>=1,950,000', hp: '>=292,500', b: '270,000' }
                    ].map((r, i) => (
                      <tr key={i}>
                        {i === 0 && <td rowSpan={5} className="border border-slate-900 p-1">第 13 至 24 個<br/>合約月份</td>}
                        <td className="border border-slate-900 p-1">{r.l}</td>
                        <td className="border border-slate-900 p-1">{r.s}</td>
                        <td className="border border-slate-900 p-1">{r.hp}</td>
                        {i === 0 && <td rowSpan={5} className="border border-slate-900 p-1">>=20</td>}
                        {i === 0 && <td rowSpan={5} className="border border-slate-900 p-1">>=85%</td>}
                        <td className="border border-slate-900 p-1">{r.b}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <p className="mt-4">5.2. 業績花紅（如有）將根據H&P對數要求及淨保單數目要求達標情況按以下百分比發放：</p>
            
            <div className="mt-2">
              <table className="w-full text-[10px] border-collapse border border-slate-900 text-center">
                <thead className="bg-slate-50 font-bold">
                  <tr>
                    <th className="border border-slate-900 p-1">H&P 對數要求</th>
                    <th className="border border-slate-900 p-1">淨保單數目要求</th>
                    <th className="border border-slate-900 p-1">業績花紅發放比例</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-slate-900 p-1">達標</td><td className="border border-slate-900 p-1">達標</td><td className="border border-slate-900 p-1">100%</td></tr>
                  <tr><td className="border border-slate-900 p-1">未達標</td><td className="border border-slate-900 p-1">達標</td><td className="border border-slate-900 p-1">80%</td></tr>
                  <tr><td className="border border-slate-900 p-1">達標</td><td className="border border-slate-900 p-1">未達標</td><td className="border border-slate-900 p-1">50%</td></tr>
                  <tr><td className="border border-slate-900 p-1">未達標</td><td className="border border-slate-900 p-1">未達標</td><td className="border border-slate-900 p-1">40%</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>

      <div className="mt-12 pt-4 border-t border-slate-300 flex justify-between items-end text-[9px] text-slate-500 italic">
        <div>全民財務預支計劃之計劃條文（2025-07 版）</div>
        <div>第 1 頁，共 4 頁</div>
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
              <div className="flex-1 overflow-y-auto p-4 md:p-10 hide-scrollbar bg-slate-100">
                <div className="bg-white p-6 md:p-12 rounded-xl md:rounded-[32px] shadow-xl border border-slate-200 mx-auto max-w-2xl min-h-full">
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
