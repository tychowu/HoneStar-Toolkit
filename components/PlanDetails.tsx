import React, { useState } from 'react';
import { FinancialPlan } from '../types';
import { Icons } from '../constants';

interface PlanDetailsProps {
  plan: FinancialPlan;
  onClose: () => void;
}

const PlanDetails: React.FC<PlanDetailsProps> = ({ plan, onClose }) => {
  const [showSource, setShowSource] = useState(false);

  const handleViewSource = () => {
    if (plan.id === 'V103' || plan.id === 'V104') {
      setShowSource(true);
    } else {
      alert('该计划的源文件暂未上线，请咨询您的招募经理。');
    }
  };

  const SOURCE_CONTENT = `
# PRUVenture Elite 融资计划
（方案代码：V013 / V014）

## 第1页，共8页

### 1. 有效期
1.1. 自2023年1月1日起至2023年12月31日止。
1.2. 公司保留随时自行决定修改本计划规则和/或停止提供本计划的权利。

### 2. 款项性质
所有融资款项（包括但不限于月度融资、绩效奖金及晋升奖金）本质上均为贷款。此类融资或贷款款项的发放须符合以下全部条款与条件：
a) 本融资计划；
b) 融资协议；
c) 代理协议；
d) 补充协议（如适用）；
e) 公司不时制定的其他适用服务条款。

此外，所有此类融资或贷款款项的发放亦完全由保诚香港有限公司及其受让人（以下简称“公司”）自行酌情决定。

### 3. 推荐/审批
所有申请必须经相关上级主管（“主管”）推荐，并须获得公司批准。

### 4. 目标人群
4.1. 在香港任何保险公司无注册记录者（持有TR注册记录的银行销售人员除外，可接受）。
4.2. 愿意进行日常活动管理（完成指定培训、活动及应用程序使用要求）。

### 5. 资格要求
| 方案类型 | V013 | V014 |
| :--- | :--- | :--- |
| **招募主管** | SUM 或以上 | SUM 或以上 |
| **候选人入职职级** | SUM | FC / SFC / BSM / SBSM |
| **月度融资金额** | 港币25,000 至 60,000 | 港币20,000 |
| **候选人基本要求** | • 至少2年工作经验；• AAI不低于港币30万元 | • 拥有学士学位或以上；或• 至少2年工作经验 |

---

## 第2页，共8页

### 7. 月度融资（“MF”）
7.1. MF 金额：港币20,000 至 60,000。
7.2. MF 最多发放12个月。
7.3. 若申请 MF 港币25,000 或以上，需收入证明。

#### 7.4. MF 验证要求
7.4.1. 首12个合约月内需达成总 MF 金额350%的个人业绩。
7.4.2. 月度保单件数要求：第1个月1件，后续逐步增加。

---

## 第5页，共8页

### 9. 绩效奖金（PB）
9.1. 代理人可在第13至24个合约月期间获得PB。

### 10. 晋升奖金
10.1. 截至第36个合约月末满足晋升要求可获最高 500,000 HKD 奖金。

---

## 第7页，共8页

### 11. 财务责任
若在计划生效日起 60 个合约月内离职，需按比例偿还融资款项。
  `;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md transition-all animate-in fade-in"
      onClick={onClose}
    >
      <div 
        className="bg-white w-full max-w-3xl max-h-[90vh] overflow-hidden rounded-[40px] shadow-2xl relative flex flex-col animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-8 py-6 flex justify-between items-center border-b border-slate-50">
          <div className="flex items-center gap-4">
            <span className="text-lg font-bold text-slate-500">{plan.id}</span>
            <h2 className="text-3xl font-extrabold text-slate-800 tracking-tight">{plan.name}</h2>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors">
            <Icons.X className="w-6 h-6" />
          </button>
        </div>

        {/* Content Container */}
        <div className="flex-1 relative overflow-hidden flex flex-col">
          {/* Main Plan Details */}
          <div className={`flex-1 overflow-y-auto p-8 space-y-8 hide-scrollbar transition-opacity duration-300 ${showSource ? 'opacity-0' : 'opacity-100'}`}>
            {/* Top Grid: Audience & Qualification */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-[#f8faff] p-6 rounded-3xl border border-blue-50">
                <div className="flex items-center gap-3 mb-4 text-[#3b66f5] font-bold">
                  <Icons.Users className="w-6 h-6" />
                  <h3 className="text-lg">适合人群</h3>
                </div>
                <p className="text-slate-600 text-[15px] leading-relaxed font-medium">{plan.audience}</p>
              </div>
              <div className="bg-[#f7fcf9] p-6 rounded-3xl border border-green-50">
                <div className="flex items-center gap-3 mb-4 text-[#10b981] font-bold">
                  <Icons.CheckCircle className="w-6 h-6" />
                  <h3 className="text-lg">申请资格</h3>
                </div>
                <p className="text-slate-600 text-[15px] leading-relaxed font-medium whitespace-pre-line">{plan.qualification}</p>
              </div>
            </div>

            {/* Note Area: 注意要点 */}
            {plan.note && (
              <div className="bg-[#fffdf2] p-6 rounded-2xl border border-[#fef3c7] flex gap-4">
                <div className="w-6 h-6 rounded-full bg-white flex items-center justify-center shrink-0 border border-[#f59e0b]">
                  <span className="text-[#f59e0b] font-black text-xs">!</span>
                </div>
                <div>
                  <h4 className="font-bold text-[#92400e] text-sm mb-1">注意要点</h4>
                  <p className="text-[#b45309] text-sm leading-relaxed font-medium whitespace-pre-line">{plan.note}</p>
                </div>
              </div>
            )}

            {/* Section: 计划详解 */}
            <div className="space-y-6 pt-4">
              <div className="flex items-center gap-2 mb-6 text-slate-800">
                <Icons.Briefcase className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-extrabold">计划详解</h3>
              </div>

              {/* Funding Item */}
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                  <Icons.BadgeDollarSign className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 text-lg">财务支持 (Funding)</h4>
                  <div className="text-slate-600 text-[15px] mt-2 whitespace-pre-line leading-relaxed font-medium space-y-1 text-wrap break-words">
                    {plan.details.funding.split('\n').map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Performance Item */}
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center shrink-0 text-orange-600">
                  <Icons.Bot className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 text-lg">业绩要求 (Performance)</h4>
                  <div className="text-slate-600 text-[15px] mt-2 whitespace-pre-line leading-relaxed font-medium space-y-1">
                    {plan.details.performance.split('\n').map((line, idx) => (
                      <div key={idx}>{line}</div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Clawback Item - Special Red Box */}
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center shrink-0 text-red-600">
                  <Icons.ShieldAlert className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 text-lg">追讨/离职机制 (Clawback)</h4>
                  <div className="mt-3 bg-[#fff9f9] border border-red-100 rounded-2xl p-6">
                    <div className="text-slate-700 text-[15px] space-y-2 leading-relaxed font-medium">
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

          {/* Source Document Viewer Overlay */}
          {showSource && (
            <div className="absolute inset-0 z-20 bg-white flex flex-col animate-in slide-in-from-right duration-300">
              <div className="px-8 py-4 bg-slate-50 border-b border-slate-200 flex justify-between items-center">
                <div className="flex items-center gap-2 font-bold text-slate-600">
                  <Icons.FileText className="w-5 h-5" />
                  <span>融资计划官方文档 (V013/V014)</span>
                </div>
                <button 
                  onClick={() => setShowSource(false)}
                  className="px-4 py-1.5 bg-white border border-slate-200 rounded-xl text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors"
                >
                  返回摘要
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-10 hide-scrollbar">
                <div className="prose max-w-none text-slate-700 font-medium whitespace-pre-wrap leading-relaxed">
                  {SOURCE_CONTENT}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer with two buttons */}
        <div className="px-8 py-6 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
          <button 
            onClick={handleViewSource}
            className="flex items-center gap-2 text-slate-500 hover:text-blue-600 font-bold transition-colors"
          >
            <Icons.Info className="w-5 h-5" />
            <span>查看源文件详情</span>
          </button>
          <button 
            onClick={onClose}
            className="flex items-center gap-2 px-8 py-3 bg-[#1e293b] text-white rounded-2xl text-base font-bold hover:bg-slate-800 transition-all active:scale-95 shadow-lg"
          >
            <Icons.ChevronRight className="w-5 h-5 rotate-180" />
            返回
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanDetails;