
import React from 'react';
import { FinancialPlan } from './types';

export const PLANS: FinancialPlan[] = [
  {
    id: "V016",
    name: "PRUVenture 津貼計劃",
    subtitle: "新人啟動基本津貼",
    audience: "初入行新人、尋求穩定啟動資金者",
    qualification: "■ 首次於保監局登記\n■ 經理 (SUM&up) 需為 A+ Leaders Program 畢業生/參與者\n■ 不適用於申請 KOB/Sign-off/Elite 或重入代理",
    tag: "啟動首选",
    color: "bg-green-100 text-green-700 ring-green-200",
    decorColor: "bg-green-500",
    note: "每月津貼發放期不超過 6 個月，需嚴格執行每月對數要求。",
    details: {
      desc: "專為新人設計的啟動津貼計劃，提供為期 6 個月的穩定現金流支持。",
      funding: "1、每月津貼金額：10,000 港元。\n2、發放期限：不超過 6 個月。",
      performance: "1、每月 PRULeads 分數達 200 分。\n2、每月 NAFYP 業績要求：20,000 港元。\n3、持續率 (Persistency) 至少 85%。\n4、首月需完成 1 份 PRUDNA 報告。\n5、6 個月內完成 PRUVenture 人才發展課程（共 10 個模組）。\n6、6 個月內考取 IIQE II/ IV/ V 牌照。",
      clawback: "1、6 個月末未達整體驗證要求，需按比例退還。\n2、行為不當導致終止，需全額退還。\n3、36 個月內離職或簽署非保誠服務協議，需全額退還。"
    }
  },
  {
    id: "U163",
    name: "U163 全民財務預支計劃",
    subtitle: "現金流最強主流選擇",
    audience: "平穩續簽族",
    qualification: "所有新人\n■ 每月預支1萬及以下, 無需收入證明\n■ 每月預支1萬(不含)~1.5万, 需收入證明(有大學學位可免)\n■ 每月預支 ≤ 24個月內年均收入/12",
    tag: "主流選擇",
    color: "bg-blue-100 text-blue-700 ring-blue-200",
    decorColor: "bg-blue-500",
    note: "1、預支部分無單數要求；\n2、有對數要求，不能連續兩個月不交單（以批單算）；\n3、2年內離職（無論原因）或3年內離職（未能晉升為高級業務經理），需退還部分預支。",
    details: {
      desc: "目前市場上的主流選擇，平衡了預支收入與業績壓力。",
      funding: "1、持IANG簽證入職者，固定預支15000/月；\n2、其他新人可申請8000-15000的預支（不高於10000港幣的預支不需要收入證明）。",
      performance: "第一年：月度預支，月度對數：每月預支1.5萬（全年18萬）；每月業績要求6萬（全年72萬）\n\n第二年：季度預支，季度對數：每個季度預支3萬（全年12萬）；每季度業績要求18萬（全年72萬）；\n\n每年超出72萬業績部分，按照T120的獎賞對標，封頂27萬獎賞。",
      clawback: "1、預支部分無單數要求；\n2、有對數要求，不能連續兩個月不交單（以批單算）；\n3、2年內離職（無論原因）或3年內離职（未能晉升為高級業務經理），需退還部分預支（具體比例參照合約）。"
    }
  },
  {
    id: "T120",
    name: "T120 業績花紅財務計劃",
    subtitle: "穩健起步，階梯獎勵",
    audience: "大眾化選擇，逐漸被U163替代",
    qualification: "所有新人",
    tag: "經典入門",
    color: "bg-amber-100 text-amber-700 ring-amber-200",
    decorColor: "bg-amber-500",
    note: "有單數要求：大於20張保單（其中H&P醫療及保障類保單佔總業績的15%）。",
    details: {
      desc: "適合對業績壓力較敏感，希望以較低門檻進入行業的代理人。",
      funding: "每年對數，連發兩年，每年最高27萬；\n1、大於52萬業績，獎賞6萬；\n2、大於65萬業績，獎賞8萬；\n3、大於91萬業績，獎賞12萬；\n4、大於130萬業績，獎赏18萬；\n5、大於195萬業績，獎賞27萬。\n\n按比例發：\n未達H&P或淨保單數，但達到所有其他要求，按比例發：\n■ 未達H&P，已達淨保單數，80%\n■ 已達H&P，未達淨保單數，50%\n■ H&P或淨保單數均未達，40%",
      performance: "有單數要求：大於20張保單\n（其中H&P醫療及保障類保單佔總業績的15%）",
      clawback: "如下則所有融資立即整筆一次全額償還：\n■ 不當行為導致協議終止\n■ 36個月內離職或簽署非保誠服務協議\n■ 業務產出不再符合要求。"
    }
  },
  {
    id: "D123",
    name: "高端人才通行證計劃",
    subtitle: "高薪優才專屬通道",
    audience: "高學歷、高收入、銷售精英",
    qualification: "■ 碩士或以上，至少3年工作經驗\n■ 或碩士或以上，最近24個月年均收入≥75萬\n■ 24個月內年均收入≥100萬，需收入證明\n■ 18-55歲，過往7年未在保誠為顧問",
    tag: "高端人才",
    color: "bg-purple-100 text-purple-700 ring-purple-200",
    decorColor: "bg-purple-500",
    note: "過往7年未在保誠為顧問，且需展現出符合“高端人才”定義的銷售能力。",
    details: {
      desc: "專為高學歷及高收入背景人士設計的優才通道，匹配過往薪資水準。",
      funding: "1、根據過往收入核算，提供較高額度的每月固定預支。\n2、預支通常為12-24個月，具體視乎核批結果。\n3、額度通常匹配過往平均月薪的特定比例（如70%-80%）。",
      performance: "1、業績要求較高，需展現出符合“高端人才”定義的銷售能力。\n2、通常設有季度/半年度的業績考核檢查點（Checkpoint）。\n3、詳情參考內部D123計劃指引。",
      clawback: "1、24個月未達到整體要求，立即按比例向公司償還已領取的每月預支。\n2、若因不當行為導致終止，立即退回全部。\n3、適用於“每月預支”的多付退回機制：12個月結束時未達到總業績要求，應在服務終止後的次月償還。"
    }
  },
  {
    id: "V103",
    name: "PRUVenture Elite 全面財務計劃 (高級)",
    subtitle: "頂尖管理人才培養",
    audience: "管理人才、銷售精英",
    qualification: "要求更高的過往收入證明及管理經驗（具體參照內部指引）",
    tag: "精英人才",
    color: "bg-teal-100 text-teal-700 ring-teal-200",
    decorColor: "bg-teal-500",
    note: "申請本計劃不符合加入“PRUelite”及MDRT相關獎金資格。",
    details: {
      desc: "專為頂尖管理人才設計的全面財務計劃，側重管理與業績雙修。",
      funding: "1、定制化的高額預支方案，通常遠高於普通計劃。\n2、包含月度預支及年度績效花紅（具體金額依據個案審批）。",
      performance: "1、極高的個人業績指標。\n2、團隊管理雙重指標：需在指定時間內組建團隊並達到團隊業績要求。\n3、必須維持極高的繼續率（Persistency Rate）。",
      clawback: "60個月內協議被終止（嚴格執行）：\n■ 1~12個月：退100%預支\n■ 13~24個月：退100%預支\n■ 25~35個月：退100%業績花紅\n■ 37~48個月：退部分業績花紅\n\n融資全額償還觸發點：\n(a)不當行為導致終止；\n(b)24個月末前終止委任；\n(c)25-36個月終止且加入競爭對手。"
    }
  },
  {
    id: "V104",
    name: "PRUVenture Elite 全面財務計劃",
    subtitle: "資深精英啟動支持",
    audience: "一定經驗的管理人才、銷售人員",
    qualification: "■ 首次於保監局登記 (銀行從業不受此限)\n■ 2年及以上指定工作經驗或學士學位以上\n■ 申請人FC/UM, 招募經理UM及以上\n■ 要求全職",
    tag: "董監高首选",
    color: "bg-indigo-100 text-indigo-700 ring-indigo-200",
    decorColor: "bg-indigo-500",
    note: "申請本計劃不符合加入“PRUelite”及MDRT相關獎金資格。",
    details: {
      desc: "針對有潛力的准管理層或資深銷售人員，提供極具競爭力的啟動資金。",
      funding: "1、每月固定預支：20,000港幣（2年共48万）。\n2、第2年年末額外花紅：兩年業績240万(+12万)，288万(+24万)。\n3、第3年年末額外花紅：三年業績336万(+12万)，384万(+24万)，432万(+36万)。\n4、理論最高總收入：108万。",
      performance: "1、對數要求：每月6.5萬業績，每年78萬業績。\n2、兩年累計要求：共156萬業績，且需隔月批單。\n3、單數要求：兩年總保單數超過24張（其中H&P保障類保單需佔15%）。",
      clawback: "1、4年內離職退還機制：2年內(100%), 第3年(60%), 第4年(40%)。\n2、上線經理責任：新人1年內離職，上線經理退Overriding；如新人未退，直屬SUM及以上按比例承擔。"
    }
  },
  {
    id: "D119",
    name: "行業啟動財務預支計劃 KOB",
    subtitle: "跨行補償啟動金",
    audience: "專業背景、高學歷、高收入、銷售精英",
    qualification: "具備特定專業背景（律師、會計師等）或極高過往收入記錄",
    tag: "專業轉行",
    color: "bg-amber-100 text-amber-700 ring-amber-200",
    decorColor: "bg-amber-500",
    note: "Kick-off Bonus，如有融資需立即一次全額償還。",
    details: {
      desc: "為跨行業專業人士提供的轉行補償金，側重快速進入狀態。",
      funding: "1、一次性或分階段的大額啟動獎金 (Lump Sum).\n2、金額基於過往年薪一定比例 (如20%-50%) 計算，作為轉行補償。",
      performance: "1、需在特定時間完成指定業績以“解鎖”獎金。\n2、通常不設月度預支，強調快速啟動。",
      clawback: "立即一次全額償還情況：\n(a)不當行為導致終止；\n(b)24個月末前終止委任；\n(c)與非保誠機構簽任何貸款協議。"
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
