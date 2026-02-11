
import React from 'react';
import { FinancialPlan } from './types';

export const PLANS: FinancialPlan[] = [
  {
    id: "V016",
    name: "2025 PRUVenture 津贴计划",
    subtitle: "新人启动基本津贴",
    audience: "初入行新人、寻求稳定启动资金者",
    qualification: "• 首次于保监局登记\n• 经理 (SUM&up) 需为 A+ Leaders Program 毕业生/参与者\n• 不适用于申请 KOB/Sign-off/Elite 或重入代理",
    tag: "启动首选",
    color: "bg-emerald-100 text-emerald-700 ring-emerald-200",
    decorColor: "bg-emerald-500",
    note: "每月津贴发放期不超过 6 个月，需严格执行每月对数要求。",
    details: {
      desc: "专为新人设计的启动津贴计划，提供为期 6 个月的稳定现金流支持。",
      funding: "1、每月津贴金额：10,000 港元。\n2、发放期限：不超过 6 个月。",
      performance: "1、每月 PRULeads 分数达 200 分。\n2、每月 NAFYP 业绩要求：20,000 港元。\n3、持续率 (Persistency) 至少 85%。\n4、首月需完成 1 份 PRUDNA 报告。\n5、6 个月内完成 PRUVenture 人才发展课程（共 10 个模组）。\n6、6 个月内考取 IIQE II/ IV/ V 牌照。",
      clawback: "1、6 个月末未达整体验证要求，需按比例退还。\n2、行为不当导致终止，需全额退还。\n3、36 个月内离职或签署非保诚服务协议，需全额退还。"
    }
  },
  {
    id: "U163",
    name: "U163 全民财务预支计划",
    subtitle: "现金流最强主流选择",
    audience: "平稳续签族",
    qualification: "所有新人\n• 每月预支1万及以下, 无需收入证明\n• 每月预支1万(不含)~1.5万, 需收入证明(有大学学位可免)\n• 每月预支 ≤ 24个月内年均收入/12",
    tag: "主流选择",
    color: "bg-amber-100 text-amber-700 ring-amber-200",
    decorColor: "bg-amber-500",
    note: "1、预支部分无单数要求；\n2、有对数要求，不能连续两个月不交单（以批单算）；\n3、2年内离职（无论原因）或3年内离职（未能晋升为高级业务经理），需退还部分预支。",
    details: {
      desc: "目前市场上的主流选择，平衡了预支收入与业绩压力。",
      funding: "1、持IANG签证入职者，固定预支15000/月；\n2、其他新人可申请8000-15000的预支（不高于10000港币的预支不需要收入证明）。",
      performance: "第一年：月度预支，月度对数：每月预支1.5万（全年18万）；每月业绩要求6万（全年72万）\n第二年：季度预支，季度对数：每个季度预支3万（全年12万）；每季度业绩要求18万（全年72万）\n每年超出72万业绩部分，按照T120的奖赏对标，封顶27万奖赏。",
      clawback: "1、预支部分无单数要求；\n2、有对数要求，不能连续两个月不交单（以批单算）；\n3、2年内离职（无论原因）或3年内离职（未能晋升为高级业务经理），需退还部分预支（具体比例参照合约）。"
    }
  },
  {
    id: "T120",
    name: "T120 业绩花红财务计划",
    subtitle: "稳健起步，阶梯奖励",
    audience: "大众化选择，逐渐被U163替代",
    qualification: "所有新人",
    tag: "经典入门",
    color: "bg-orange-100 text-orange-700 ring-orange-200",
    decorColor: "bg-orange-500",
    note: "有单数要求：大于20张保单（其中H&P医疗及保障类保单占总业绩的15%）。",
    details: {
      desc: "适合对业绩压力较敏感，希望以较低门槛进入行业的代理人。",
      funding: "每年对数，连发两年，每年最高27万；\n1、大于52万业绩，奖赏6万；\n2、大于65万业绩，奖赏8万；\n3、大于91万业绩，奖赏12万；\n4、大于130万业绩，奖赏18万；\n5、大于195万业绩，奖赏27万。\n\n按比例发：\n未达H&P或净保单数，但达到所有其他要求，按比例发：\n• 未达H&P，已达净保单数，80%\n• 已达H&P，未达净保单数，50%\n• H&P或净保单数均未达，40%",
      performance: "有单数要求：大于20张保单\n（其中H&P医疗及保障类保单占总业绩的15%）",
      clawback: "如下则所有融资立即整笔一次全额偿还：\n• 不当行为导致协议终止\n• 36个月内离职或签署非保诚服务协议\n• 业务产出不再符合要求。"
    }
  },
  {
    id: "D123",
    name: "高端人才融资计划",
    subtitle: "高薪优才专属通道",
    audience: "硕士或以上，或高收入销售精英",
    qualification: "• 硕士或以上，且3年工作经验\n• 或硕士或以上，AAI ≥ 75万\n• 或 AAI ≥ 100万",
    tag: "高端人才",
    color: "bg-purple-100 text-purple-700 ring-purple-200",
    decorColor: "bg-purple-500",
    note: "每月预支金额根据 AAI/24 计算，最高可达 80,000/月。",
    details: {
      desc: "2025 Professional Financing Scheme (D123)，专为优才设计的 24 个月融资通道。",
      funding: "1、每月预支 (MF)：20,000 - 80,000 港元。\n2、Route 1: 2万 (硕士+3年经验)\n3、Route 2: 3万 (硕士+AAI 75万)\n4、Route 3: 4万-8万 (AAI 100万及以上)。",
      performance: "1、个人业绩对数要求为总预支额的 325%。\n2、需满足每月 PRULeads 分数及持续率 85% 要求。\n3、24 个月内需完成指定培训及持证要求。",
      clawback: "1、24 个月内离职，需按比例偿还已领取的预支款项。\n2、因违规终止协议，需全额偿还。\n3、36 个月内加入竞争对手，需全额偿还。"
    }
  },
  {
    id: "V103",
    name: "PRUVenture Elite (V013)",
    subtitle: "顶尖管理人才培养 (SUM)",
    audience: "有丰富经验的经理级人才 (SUM)",
    qualification: "• 2年相关行业经验\n• 过去24个月 AAI ≥ 30万\n• 需通过 PRUDNA 及面试",
    tag: "精英 SUM",
    color: "bg-teal-100 text-teal-700 ring-teal-200",
    decorColor: "bg-teal-500",
    note: "每月预支最高可达 60,000，且包含高额 Promotion Bonus。",
    details: {
      desc: "PRUVenture Elite Financing Scheme (V013)，针对 SUM 职级的资深人才计划。",
      funding: "1、每月预支 (MF)：25,000 至 60,000 港元（分多个 Tiers）。\n2、发放期限：不长于 12 个月。",
      performance: "1、业绩对数：首 12 个月个人业绩需达总预支额的 350%。\n2、增员要求：12 个月内需成功招募 2 名新人。\n3、案例数要求：每月需完成 1-4 件保单。",
      clawback: "1、24个月内终止委任，需全额偿还。\n2、37-60个月内终止，需根据比例偿还。详细见 Table G。"
    }
  },
  {
    id: "V104",
    name: "PRUVenture Elite (V014)",
    subtitle: "资深精英启动支持 (FC/UM)",
    audience: "有潜力的销售精英 (FC/SFC/BSM)",
    qualification: "• 学士学位或以上\n• 或至少 2 年相关行业工作经验\n• 首次保监局登记新人",
    tag: "精英 FC/UM",
    color: "bg-indigo-100 text-indigo-700 ring-indigo-200",
    decorColor: "bg-indigo-500",
    note: "固定每月预支 20,000，侧重快速晋升至 SUM。",
    details: {
      desc: "PRUVenture Elite Financing Scheme (V014)，适合高素质新人快速起步。",
      funding: "1、每月预支 (MF)：固定 20,000 港元。\n2、Performance Bonus：第 13-24 个月最高可领取 420,000。\n3、Promotion Bonus：晋升至 SUM 可领 10,000，晋升至 BM 可领 50,000。",
      performance: "1、首 12 个月个人业绩需达 350% 预支额。\n2、12 个月内需完成 10 个培训模组及持证。\n3、持续率需维持在 85% 以上。",
      clawback: "1、24个月内离职退 100% 预支。\n2、详细偿还机制参考 V013/V014 计划手册。"
    }
  },
  {
    id: "D119",
    name: "2025 Kick-off Bonus (D119)",
    subtitle: "跨行优才补偿金计划",
    audience: "金融、法律、会计等专业转行精英",
    qualification: "• 2年金融机构/保险/银行注册经验\n• 过去24个月 AAI ≥ 50万\n• 18-55岁新人",
    tag: "专业转行",
    color: "bg-rose-100 text-rose-700 ring-rose-200",
    decorColor: "bg-rose-500",
    note: "Kick-off Bonus (KOB) 为总 MF (MF x 24) 的 25%。",
    details: {
      desc: "2025 Kick-off Bonus Financing Scheme，为专业人士提供的高额入职补偿。",
      funding: "1、每月预支 (MF)：10,000 - 80,000 港元（24个月）。\n2、KOB 奖金：等于 Initial MF x 24 x 25%，入职即发放 100%。",
      performance: "1、24 个月内业绩对数要求为总预支额的 325%。\n2、Performance Bonus 1 (PB1)：最高可领总 MF 的 50%。\n3、Performance Bonus 2 (PB2)：最高可领总 MF 的 75%。",
      clawback: "1、36 个月内离职需全额偿还 MF 和 KOB。\n2、37-60 个月离职需按比例偿还。详细见计划手册 Page 5。"
    }
  }
];

export const Icons = {
  Logo: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" className={className}>
      <text 
        x="50" 
        y="58" 
        textAnchor="middle" 
        dominantBaseline="middle" 
        fontSize="90" 
        fontFamily="'Ma Shan Zheng', cursive" 
        fill="white"
      >
        诚
      </text>
    </svg>
  ),
  Users: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
  ),
  CheckCircle: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
  ),
  X: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
  ),
  ChevronRight: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="m9 18 6-6-6-6"/></svg>
  ),
  Briefcase: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="14" x="2" y="7" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
  ),
  ShieldAlert: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><line x1="12" x2="12" y1="8" y2="12"/><line x1="12" x2="12.01" y1="16" y2="16"/></svg>
  ),
  BadgeDollarSign: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.77 2 2 0 0 1 0-2.84z"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><line x1="12" x2="12" y1="2" y2="22"/></svg>
  ),
  MessageSquare: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
  ),
  Bot: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="18" height="10" x="3" y="11" rx="2"/><circle cx="12" cy="5" r="2"/><path d="M12 7v4"/><line x1="8" x2="8" y1="16" y2="16"/><line x1="16" x2="16" y1="16" y2="16"/></svg>
  ),
  Info: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>
  ),
  FileText: ({ className }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
  )
};
