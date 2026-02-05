
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
      performance: "第一年：月度预支，月度对数：每月预支1.5万（全年18万）；每月业绩要求6万（全年72万）\n第二年：季度预支，季度对数：每个季度预支3万（全年12万）；每季度业绩要求18万（全年72万）；\n每年超出72万业绩部分，按照T120的奖赏对标，封顶27万奖赏。",
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
    audience: "高学历、高收入、销售精英",
    qualification: "• 硕士或以上，至少3年工作经验\n• 或硕士或以上，最近24个月年均收入≥75万\n• 24个月内年均收入≥100万，需收入证明\n• 18-55岁，过往7年未在保诚为顾问",
    tag: "高端人才",
    color: "bg-purple-100 text-purple-700 ring-purple-200",
    decorColor: "bg-purple-500",
    note: "过往7年未在保诚为顾问，且需展现出符合“高端人才”定义的销售能力。",
    details: {
      desc: "专为高学历及高收入背景人士设计的优才通道，匹配过往薪资水准。",
      funding: "1、根据过往收入核算，提供较高额度的每月固定预支。\n2、预支通常为12-24个月，具体视乎核批结果。\n3、额度通常匹配过往平均月薪的特定比例（如70%-80%）。",
      performance: "1、业绩要求较高，需展现出符合“高端人才”定义的销售能力。\n2、通常设有季度/半年度的业绩考核检查点（Checkpoint）。\n3、详情参考内部D123计划指引。",
      clawback: "1、24个月未达到整体要求，立即按比例向公司偿还已领取的每月预支。\n2、若因不当行为导致终止，立即退回全部。\n3、适用于“每月预支”的多付退回机制：12个月结束时未达到总业绩要求，应在服务终止后的次月偿还。"
    }
  },
  {
    id: "V103",
    name: "PRUVenture Elite 全面财务计划 (高级)",
    subtitle: "顶尖管理人才培养",
    audience: "管理人才、销售精英",
    qualification: "要求更高的过往收入证明及管理经验（具体参照内部指引）",
    tag: "精英人才",
    color: "bg-teal-100 text-teal-700 ring-teal-200",
    decorColor: "bg-teal-500",
    note: "申请本计划不符合加入“PRUelite”及MDRT相关奖金资格。",
    details: {
      desc: "专为顶尖管理人才设计的全面财务计划，侧重管理与业绩双修。",
      funding: "1、定制化的高额预支方案，通常远高于普通计划。\n2、包含月度预支及年度绩效花红（具体金额依据个案审批）。",
      performance: "1、极高的个人业绩指标。\n2、团队管理双重指标：需在指定时间内组建团队并达到团队业绩要求。\n3、必须维持极高的继续率（Persistency Rate）。",
      clawback: "60个月内协议被终止（严格执行）：\n• 1~12个月：退100%预支\n• 13~24个月：退100%预支\n• 25~35个月：退100%业绩花红\n• 37~48个月：退部分业绩花红\n\n融资全额偿还触发点：\n(a)不当行为导致终止；\n(b)24个月末前终止委任；\n(c)25-36个月终止且加入竞争对手。"
    }
  },
  {
    id: "V104",
    name: "PRUVenture Elite 全面财务计划",
    subtitle: "资深精英启动支持",
    audience: "一定经验的管理人才、销售人员",
    qualification: "• 首次于保监局登记 (银行从业不受此限)\n• 2年及以上指定工作经验或学士学位以上\n• 申请人FC/UM, 招募经理UM及以上\n• 要求全职",
    tag: "董监高首选",
    color: "bg-indigo-100 text-indigo-700 ring-indigo-200",
    decorColor: "bg-indigo-500",
    note: "申请本计划不符合加入“PRUelite”及MDRT相关奖金资格。",
    details: {
      desc: "针对有潜力的准管理层或资深销售人员，提供极具竞争力的启动资金。",
      funding: "1、每月固定预支：20,000港币（2年共48万）。\n2、第2年年末额外花红：两年业绩240万(+12万)，288万(+24万)。\n3、第3年年末额外花红：三年业绩336万(+12万)，384万(+24万)，432万(+36万)。\n4、理论最高总收入：108万。",
      performance: "1、对数要求：每月6.5万业绩，每年78万业绩。\n2、两年累计要求：共156万业绩，且需隔月批单。\n3、单数要求：两年总保单数超过24张（其中H&P保障类保单需占15%）。",
      clawback: "1、4年内离职退还机制：2年内(100%), 第3年(60%), 第4年(40%)。\n2、上线经理责任：新人1年内离职，上线经理退Overriding；如新人未退，直属SUM及以上按比例承担。"
    }
  },
  {
    id: "D119",
    name: "行业启动财务预支计划 KOB",
    subtitle: "跨行补偿启动金",
    audience: "专业背景、高学历、高收入、销售精英",
    qualification: "具备特定专业背景（律师、会计师等）或极高过往收入记录",
    tag: "专业转行",
    color: "bg-rose-100 text-rose-700 ring-rose-200",
    decorColor: "bg-rose-500",
    note: "Kick-off Bonus，如有融资需立即一次全额偿还。",
    details: {
      desc: "为跨行业专业人士提供的转行补偿金，侧重快速进入状态。",
      funding: "1、一次性或分阶段的大额启动奖金 (Lump Sum)。\n2、金额基于过往年薪一定比例 (如20%-50%) 计算，作为转行补偿。",
      performance: "1、需在特定时间完成指定业绩以“解锁”奖金。\n2、通常不设月度预支，强调快速启动。",
      clawback: "立即一次全额偿还情况：\n(a)不当行为导致终止；\n(b)24个月末前终止委任；\n(c)与非保诚机构签任何贷款协议。"
    }
  }
];

export const Icons = {
  Logo: ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" fill="currentColor" className={className}>
      <path d="M48,5 L48,42 L52,42 L52,5 L50,0 Z" />
      <path d="M48,5 L38,38 L48,42 Z" opacity="0.8" />
      <path d="M52,5 L62,38 L52,42 Z" opacity="0.8" />
      <path d="M48,95 L48,58 L52,58 L52,95 L50,100 Z" />
      <path d="M48,95 L38,62 L48,58 Z" opacity="0.8" />
      <path d="M52,95 L62,62 L52,58 Z" opacity="0.8" />
      <path d="M5,48 L42,48 L42,52 L5,52 L0,50 Z" />
      <path d="M5,48 L38,38 L42,48 Z" opacity="0.8" />
      <path d="M5,52 L38,62 L42,52 Z" opacity="0.8" />
      <path d="M95,48 L58,48 L58,52 L95,52 L100,50 Z" />
      <path d="M95,48 L62,38 L58,48 Z" opacity="0.8" />
      <path d="M95,52 L62,62 L58,52 Z" opacity="0.8" />
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
