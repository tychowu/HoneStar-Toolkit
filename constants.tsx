
import React from 'react';
import { FinancialPlan } from './types';

export const PLANS: FinancialPlan[] = [
  {
    id: "V106",
    name: "PRUVenture 叠加计划",
    subtitle: "额外新人津贴叠加包",
    audience: "新手保护期必备、最大化首年收益",
    qualification: "所有新人（上线经理为A+经理）",
    tag: "新手推荐",
    color: "bg-green-100 text-green-700 ring-green-200",
    decorColor: "bg-green-500",
    note: "通常作为叠加包使用，需配合主计划（如T120或U163）的业绩要求。",
    details: {
      desc: "为新人提供额外的津贴支持，通常作为叠加包使用，为前期展业提供额外动力。",
      funding: "1、在标准财务计划（T120/U163）外，提供额外的新人津贴。\n2、具体津贴金额及发放模式参照最新的叠加包通告（通常与首年业绩挂钩）。",
      performance: "1、需同时满足主计划（T120或U163）的所有业绩及单数要求。\n2、额外津贴可能设有独立的月度/季度达标门槛。",
      clawback: "1、若在短时间内（如12-24个月）离职，需退回部分已发放的额外津贴。\n2、具体退回比例参照签署的PRUVenture叠加协议。"
    }
  },
  {
    id: "T120",
    name: "全民财务预支计划—业绩花红",
    subtitle: "稳健起步，阶梯奖励",
    audience: "大众化选择，2025最新政策",
    qualification: "所有新人",
    tag: "经典入门",
    color: "bg-rose-100 text-rose-700 ring-rose-200",
    decorColor: "bg-rose-500",
    note: "支付比例受 H&P 对数及净保单数双重考核。最高可获 270,000 HKD 花红。",
    details: {
      desc: "适合对业绩压力较敏感，希望以较低门槛进入行业的代理人。",
      funding: "业绩花红（PB）分两部分发放：第1-12个月及第13-24个月。\n■ PB (a): 60,000 HKD (业绩 ≥ 52万)\n■ PB (b): 80,000 HKD (业绩 ≥ 65万)\n■ PB (c): 120,000 HKD (业绩 ≥ 91万)\n■ PB (d): 180,000 HKD (业绩 ≥ 130万)\n■ PB (e): 270,000 HKD (业绩 ≥ 195万)",
      performance: "对数要求：\n1. 净销售额 (Net Sales Credit) ≥ 指定级别门槛\n2. H&P 业绩 ≥ 指定级别门槛\n3. 净保单数目 ≥ 20\n4. 续保率 ≥ 85%",
      clawback: "发放比例：\n■ 两者达标: 100% | 仅保单达标: 80% \n■ 仅H&P达标: 50% | 两者均未达标: 40%\n\n36个月内离职或加入竞争对手需全额退还。"
    }
  },
  {
    id: "U163",
    name: "全民财务预支计划",
    subtitle: "现金流最强主流选择",
    audience: "IANG/高才/平稳续签族",
    qualification: "所有新人；IANG 固定预支 15,000/月；普通新人按过往收入核定。",
    tag: "主流选择",
    color: "bg-blue-100 text-blue-700 ring-blue-200",
    decorColor: "bg-blue-500",
    note: "结合每月预支(MF)、季度花红(QB)及业绩花红(PB)。首年对数要求为总预支金额的 400%。",
    details: {
      desc: "目前市场上的主流选择，平衡了预支收入与业绩压力。",
      funding: "1. 每月预支(MF): 10,000 或 15,000 HKD (首年)\n2. 季度花红(QB): 30,000 HKD / 季度 (第二年)\n3. 业绩花红(PB): 对标 T120 级表发放",
      performance: "1. 首年核实点业绩要求：总每月预支金额的 400%\n2. 续保率要求 ≥ 85%\n3. 不能连续2个月无寿险生意\n4. 第二年季度对数要求：总季度花红的 600%",
      clawback: "未达标扣减：\n■ 业绩达标 ≥ 100%: 发放 100%\n■ 业绩达标 80%~100%: 发放 75%\n■ 业绩达标 60%~80%: 发放 50%\n■ 业绩达标 < 60%: 停止发放"
    }
  },
  {
    id: "D123",
    name: "高端人才通行证计划",
    subtitle: "高薪优才专属通道",
    audience: "高学历（硕士以上）、高收入、跨行精英",
    qualification: "硕士以上+3年工作经验，或年收入≥100万，18-55岁。",
    tag: "高端人才",
    color: "bg-purple-100 text-purple-700 ring-purple-200",
    decorColor: "bg-purple-500",
    note: "需展现出符合“高端人才”定义的销售能力，设有季度考核检查点。",
    details: {
      desc: "专为高学历及高收入背景人士设计的优才通道，匹配过往薪资水准。",
      funding: "根据过往收入核算，提供最高可达80%匹配的高额每月固定预支。",
      performance: "业绩要求较高，需展现高客经营能力，设有季度Checkpoints。",
      clawback: "24个月未达整体要求或因不当行为终止，需按比例或全额偿还。"
    }
  },
  {
    id: "V103",
    name: "PRUVenture (标准版)",
    subtitle: "12个月24万起步资助",
    audience: "首次投身保险业，追求系统化成长的新晋精英",
    qualification: "首次入职；大学或以上学历；需全职投入 PRUVenture 学院培训。",
    tag: "精英人才",
    color: "bg-teal-100 text-teal-700 ring-teal-200",
    decorColor: "bg-teal-500",
    note: "申请本计划需严格遵守学院的考勤及课程参与要求。",
    details: {
      desc: "专为希望获得系统化专业培训并有稳定初始资金支持的新人设计。",
      funding: "首 12 个月每月固定预支 20,000 HKD。表现卓越者可获额外达标奖金。",
      performance: "需满足学院每月的业绩及活动量指标（通常要求每月交单并达成指定 FYC）。",
      clawback: "若在资助期内或资助期满后 12 个月内离职，需按相应比例退回已发放的预支款项。"
    }
  },
  {
    id: "V104",
    name: "PRUVenture Elite (高级版)",
    subtitle: "2年48万预支计划",
    audience: "有管理潜力的资深销售、专业人士",
    qualification: "首次入行；2年+专业经验或学士以上；全职要求。",
    tag: "董监高首选",
    color: "bg-indigo-100 text-indigo-700 ring-indigo-200",
    decorColor: "bg-indigo-500",
    note: "申请本计划不符合加入“PRUelite”及MDRT相关奖金资格。",
    details: {
      desc: "针对有潜力的准管理层或资深销售人员，提供极具竞争力的启动资金。",
      funding: "每月固定2万预支（24个月共48万）。第2/3年年终有大额达标花红，总资助可达108万。",
      performance: "每月业绩要求6.5万。两年保单总数需≥24张. H&P占比要求同标准计划。",
      clawback: "4年内离职均有退还比例（前2年100%，第3年60%，第4年40%）。上线经理有连带责任。"
    }
  },
  {
    id: "D119",
    name: "行业启动财务预支计划 (KOB)",
    subtitle: "跨行启动金补偿 (Kick-off Bonus)",
    audience: "律师、会计师等专业人士或极高薪跨行人才",
    qualification: "特定专业背景或极高过往年薪记录。",
    tag: "专业转行",
    color: "bg-amber-100 text-amber-700 ring-amber-200",
    decorColor: "bg-amber-500",
    note: "侧重快速启动，通常为一次性或分阶段的大额启动奖金。",
    details: {
      desc: "为跨行业专业人士提供的转行补偿金，侧重快速进入状态。",
      funding: "基于过往年薪一定比例（20%-50%）计算的一次性大额奖金。",
      performance: "首6个月或首年完成指定高额业绩以解锁或保留奖金。",
      clawback: "24个月内终止委任或不当行为导致终止，需全额退还 KOB。"
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
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><line x1="10" x2="8" y1="9" y2="9"/></svg>
  )
};
