
import React, { useState, useEffect } from 'react';
import { FinancialPlan } from '../types';
import { Icons } from '../constants';
import { marked } from 'marked';

interface PlanDetailsProps {
  plan: FinancialPlan;
  onClose: () => void;
}

const PlanDetails: React.FC<PlanDetailsProps> = ({ plan, onClose }) => {
  const [showSource, setShowSource] = useState(false);
  const [markdownContent, setMarkdownContent] = useState<string>('');

  const getSourceMarkdown = (id: string) => {
    switch (id) {
      case 'T120':
        return `
# 全民財務預支計劃之計劃條文
### 業績花紅財務計劃 (T120) - 2025-07 版

## 1. 計劃生效日期
1.1. 由2025年4月1日起生效。

## 2. 款項性質
任何及所有財務款項包括但不限於每月預支、季度花紅及業績花紅均屬於**貸款款項**。

## 5. 業績花紅財務計劃 (PB)
代理人如達到下表對數要求，可獲取業績花紅：

### 業績花紅級別表 (第 1 至 24 個月)
| PB 級別 | 淨銷售額 (Net Sales Credit) | H&P (港幣) | 淨保單數目 | 續保率 | 花紅金額 |
| :--- | :--- | :--- | :--- | :--- | :--- |
| (a) | >=520,000 | >=78,000 | >=20 | >=85% | 60,000 |
| (b) | >=650,000 | >=97,500 | >=20 | >=85% | 80,000 |
| (c) | >=910,000 | >=136,500 | >=20 | >=85% | 120,000 |
| (d) | >=1,300,000 | >=195,000 | >=20 | >=85% | 180,000 |
| (e) | >=1,950,000 | >=292,500 | >=20 | >=85% | 270,000 |

### 5.2. 發放比例
PB 將根據 H&P 及淨保单數目達標情況按以下百分比發放：
- **兩者均達標**: 100%
- **未達 H&P，保單數達標**: 80%
- **已達 H&P，未達保單數**: 50%
- **兩者均未達標**: 40%

## 7. 財務責任
代理人須全數償還業績花紅，若自計劃生效日起 36 個月內離職或加入其他金融機構。
        `;
      case 'U163':
        return `
# 全民財務預支計劃之計劃條文
### 季度花紅財務預支計劃 (U163) - 2025-07 版

## 6. 計劃概要
包含每月預支("MF") + 季度花紅("QB") + 業績花紅("PB")。

## 6.3. 每月預支 ("MF")
- 每月預支金額：港幣 10,000 或 15,000 元。
- 僅在首個合約年份發放，最多 12 個月。
- 10k 預支無須入息證明。

## 6.4. 每月預支對數要求
- **對數要求 (業績)**：首 12 個合約月總每月預支的 **400%**。
- **發放比率**：
  - >=100% 達標: 100% 發放
  - >=80% 達標: 75% 發放
  - >=60% 達標: 50% 發放
  - <60% 達标: 0% 發放

## 6.5. 季度花紅 ("QB")
- 金額：每季度港幣 30,000 元。
- 僅在第二個合約年份發放，最多 4 個季度。
- **對數要求**：第二個合約年份總季度花紅的 **600%**。

## 7.2. 財務責任
若代理人於計劃生效第 12/24 個月未能達到整體對數要求，須按比例償還已發放之預支/花紅。
        `;
      case 'V104':
        return `
# PRUVenture Elite 融资计划
### 方案代码：V013 / V014

## 1. 计划详情
为精英人才提供为期两年的财务支持，旨在培养未来的管理人才。

## 5. 资格要求
| 方案类型 | V013 (Elite) | V014 (Elite) |
| :--- | :--- | :--- |
| **金额** | 2.5w - 6w | 2w |
| **背景要求** | 至少2年专业经验 | 学士学位或2年经验 |

## 7. 月度融资 (MF)
- 最多发放 12 个月。
- 验证要求：首 12 个月内达成总 MF 金额的 **350%** 个人业绩。

## 11. 财务责任 (Clawback)
若在计划生效日起 **60 个合约月**内离职，需按比例偿还所有融资款项。
        `;
      default:
        return "该计划的源文件暂未上线。";
    }
  };

  useEffect(() => {
    const content = getSourceMarkdown(plan.id);
    // Use an async IIFE to handle marked.parse which can return string or Promise<string>
    const parseContent = async () => {
      try {
        const html = await marked.parse(content);
        setMarkdownContent(html);
      } catch (err) {
        console.error('Markdown parsing error:', err);
      }
    };
    parseContent();
  }, [plan.id]);

  const handleViewSource = () => {
    if (['T120', 'U163', 'V104'].includes(plan.id)) {
      setShowSource(true);
    } else {
      alert('该计划的源文件暂未上线，请咨询您的招募经理。');
    }
  };

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
          <div className="flex items-center gap-3 md:gap-4 overflow-hidden">
            <span className="text-sm md:text-lg font-bold text-slate-500 shrink-0">{plan.id}</span>
            <h2 className="text-lg md:text-3xl font-extrabold text-slate-800 tracking-tight truncate">{plan.name}</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors shrink-0">
            <Icons.X className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>

        {/* Content Container */}
        <div className="flex-1 relative overflow-hidden flex flex-col">
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
                  <h4 className="font-bold text-slate-800 text-base md:text-lg">风险提示 (Risk)</h4>
                  <div className="mt-2 md:mt-3 bg-[#fff9f9] border border-red-100 rounded-xl md:rounded-2xl p-4 md:p-6">
                    <div className="text-slate-700 text-[13px] md:text-[14px] leading-relaxed font-medium">
                      {plan.details.clawback}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {showSource && (
            <div className="absolute inset-0 z-20 bg-white flex flex-col animate-in slide-in-from-right duration-300">
              <div className="px-5 md:px-8 py-3 md:py-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center shadow-sm relative z-30">
                <div className="flex items-center gap-2 font-bold text-slate-600 text-sm md:text-base truncate">
                  <Icons.FileText className="w-4 h-4 md:w-5 md:h-5 shrink-0 text-blue-600" />
                  <span>计划条文 ({plan.id}) - 2025-07 版</span>
                </div>
                <button 
                  onClick={() => setShowSource(false)}
                  className="px-3 md:px-4 py-1.5 bg-slate-900 text-white rounded-xl text-xs md:text-sm font-bold hover:bg-slate-800 transition-colors shrink-0"
                >
                  返回摘要
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-6 md:p-10 hide-scrollbar bg-slate-50">
                <div className="bg-white p-6 md:p-12 rounded-2xl md:rounded-[32px] shadow-xl border border-slate-200 mx-auto max-w-2xl min-h-full">
                  <div 
                    className="prose prose-slate prose-sm md:prose-base max-w-none text-slate-700 font-medium leading-relaxed prose-headings:text-slate-900 prose-headings:font-extrabold prose-table:border prose-table:border-slate-200 prose-th:bg-slate-50 prose-th:p-2 prose-td:p-2 prose-td:border-t prose-td:border-slate-100"
                    dangerouslySetInnerHTML={{ __html: markdownContent }}
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-5 md:px-8 py-4 md:py-6 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
          <button 
            onClick={handleViewSource}
            className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold transition-colors text-xs md:text-sm group"
          >
            <Icons.Info className="w-4 h-4 md:w-5 md:h-5 group-hover:scale-110 transition-transform" />
            <span>查看源文档</span>
          </button>
          <button 
            onClick={onClose}
            className="flex items-center gap-2 px-6 md:px-8 py-2.5 md:py-3 bg-[#1e293b] text-white rounded-xl md:rounded-2xl text-sm md:text-base font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-lg"
          >
            关闭详情
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;
