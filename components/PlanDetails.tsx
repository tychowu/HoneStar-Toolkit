
import React, { useState } from 'react';
import { FinancialPlan } from '../types';
import { Icons } from '../constants';

interface PlanDetailsProps {
  plan: FinancialPlan;
  onClose: () => void;
}

const PlanDetails: React.FC<PlanDetailsProps> = ({ plan, onClose }) => {
  const [showSource, setShowSource] = useState(false);

  // Full word-for-word replica of all 4 pages for T120/U163
  const SourceDocument = () => (
    <div className="text-[11px] md:text-xs text-slate-800 leading-relaxed font-serif bg-white p-6 md:p-12 shadow-inner">
      {/* Document Header */}
      <div className="flex justify-between items-start mb-6 border-b-2 border-slate-900 pb-2">
        <h1 className="text-lg md:text-xl font-bold">全民財務預支計劃之計劃條文</h1>
        <div className="text-right">
          <div className="text-[10px] font-bold text-red-600">PRUDENTIAL</div>
          <div className="text-[10px] font-bold text-red-600 tracking-tighter leading-none">保 誠 保 險</div>
        </div>
      </div>

      {/* PAGE 1 */}
      <div className="space-y-6 mb-16 relative">
        <h2 className="text-center font-bold text-sm mb-4 bg-slate-100 py-1">第 1 頁，共 4 頁</h2>
        <section>
          <h3 className="font-bold mb-1">1. 計劃生效日期</h3>
          <div className="pl-4 space-y-0.5">
            <p>1.1. 由2025年4月1日起生效</p>
            <p>1.2. 申請人只可選擇以下第5或6條業績花紅財務計劃或季度花紅財務預支計劃的其中一項</p>
            <p>1.3. 本公司對修訂計劃細則及／或任何時候終止此計劃有唯一及絕對的決定權</p>
          </div>
        </section>

        <section>
          <h3 className="font-bold mb-1">2. 款項的性質</h3>
          <div className="pl-4 space-y-0.5">
            <p>任何及所有財務款項包括但不限於每月預支、季度花紅及業績花紅均屬於貸款款項。所有有關財務款項或貸款款項會按照下列的條款及細則批核予代理人：</p>
            <div className="pl-4 mt-1">
              <p>a) 此財務計劃；</p>
              <p>b) 貸款協議;</p>
              <p>c) 代理協議; 及</p>
              <p>d) 其他由公司不時修訂之適用的服務條款</p>
            </div>
            <p className="mt-2 italic">保誠保險有限公司及其受托人（「公司」）對任何有關之財務款項或貸款有絕對的酌情權</p>
          </div>
        </section>

        <section>
          <h3 className="font-bold mb-1">3. 加簽／批核</h3>
          <div className="pl-4"><p>所有申請必須經由相關上線經理加簽，並經公司批核</p></div>
        </section>

        <section>
          <h3 className="font-bold mb-1">4. 佣金扣減</h3>
          <div className="pl-4 space-y-0.5">
            <p>4.1. 不設佣金扣減。受公司不時修訂之條款及細則約束，賺取之佣金將100%全數發放</p>
            <p>4.2. 其他報酬福利按公司不時修訂的代理人條款細則而定</p>
          </div>
        </section>

        <section>
          <h3 className="font-bold mb-1">5. 全民財務預支計劃－業績花紅財務計劃（業績花紅“PB”)（計劃編號：T120）</h3>
          <div className="pl-4 space-y-4">
            <p>5.1. 代理人如達到下表對數要求，可獲取業績花紅：</p>
            
            <h4 className="font-bold text-[10px] md:text-xs">業績花紅第一部份 (第 1 至 12 個合約月份)</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-[9px] md:text-[10px] border-collapse border border-slate-900 text-center">
                <thead className="bg-slate-50 font-bold">
                  <tr>
                    <th className="border border-slate-900 p-1">對數期</th>
                    <th className="border border-slate-900 p-1">PB 級別</th>
                    <th className="border border-slate-900 p-1">淨銷售額 (港幣)</th>
                    <th className="border border-slate-900 p-1">H&P (港幣)</th>
                    <th className="border border-slate-900 p-1">淨保單數目</th>
                    <th className="border border-slate-900 p-1">續保率</th>
                    <th className="border border-slate-900 p-1">花紅金額 (港幣)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { l: '(a)', s: '>=520,000 但 <650,000', h: '>=78,000', b: '60,000' },
                    { l: '(b)', s: '>=650,000 但 <910,000', h: '>=97,500', b: '80,000' },
                    { l: '(c)', s: '>=910,000 但 <1,300,000', h: '>=136,500', b: '120,000' },
                    { l: '(d)', s: '>=1,300,000 但 <1,950,000', h: '>=195,000', b: '180,000' },
                    { l: '(e)', s: '>=1,950,000', h: '>=292,500', b: '270,000' }
                  ].map((r, i) => (
                    <tr key={i}>
                      {i === 0 && <td rowSpan={5} className="border border-slate-900 p-1">第 1 至 12 個<br/>合約月份</td>}
                      <td className="border border-slate-900 p-1">{r.l}</td>
                      <td className="border border-slate-900 p-1">{r.s}</td>
                      <td className="border border-slate-900 p-1">{r.h}</td>
                      {i === 0 && <td rowSpan={5} className="border border-slate-900 p-1">>=20</td>}
                      {i === 0 && <td rowSpan={5} className="border border-slate-900 p-1">>=85%</td>}
                      <td className="border border-slate-900 p-1 font-bold">{r.b}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p>5.2. 業績花紅（如有）將根據H&P對數要求及淨保單數目要求達標情況按以下百分比發放：</p>
            <div className="overflow-x-auto">
              <table className="w-full text-[9px] md:text-[10px] border-collapse border border-slate-900 text-center">
                <thead className="bg-slate-50 font-bold">
                  <tr>
                    <th className="border border-slate-900 p-1">H&P 對數要求</th>
                    <th className="border border-slate-900 p-1">淨保單數目要求</th>
                    <th className="border border-slate-900 p-1">業績花紅發放比例</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-slate-900 p-1">達標</td><td className="border border-slate-900 p-1">達標</td><td className="border border-slate-900 p-1 font-bold">100%</td></tr>
                  <tr><td className="border border-slate-900 p-1">未達標</td><td className="border border-slate-900 p-1">達標</td><td className="border border-slate-900 p-1">80%</td></tr>
                  <tr><td className="border border-slate-900 p-1">達標</td><td className="border border-slate-900 p-1">未達標</td><td className="border border-slate-900 p-1">50%</td></tr>
                  <tr><td className="border border-slate-900 p-1">未達標</td><td className="border border-slate-900 p-1">未達標</td><td className="border border-slate-900 p-1">40%</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <div className="text-[8px] text-right border-t pt-1 mt-4">全民財務預支計劃之計劃條文（2025-07 版）</div>
      </div>

      <hr className="my-12 border-slate-300" />

      {/* PAGE 2 */}
      <div className="space-y-6 mb-16 relative">
        <h2 className="text-center font-bold text-sm mb-4 bg-slate-100 py-1">第 2 頁，共 4 頁</h2>
        <section>
          <p>5.3. 業績花紅（如有）將分別於第15個合約月份及第27個合約月份發放</p>
        </section>

        <section>
          <h3 className="font-bold mb-1">6. 全民財務預支計劃－季度花紅財務預支計劃（每月預支“MF”＋季度花紅“QB”＋業績花紅“PB”）（計劃編號：U163）</h3>
          <div className="pl-4 space-y-4">
            <div>
              <h4 className="font-bold">6.1. 生效日期及資格</h4>
              <p className="pl-4">6.1.1. 由2025年4月1日起生效</p>
              <p className="pl-4">6.1.2. 申請人的資格須得到公司的審批，公司擁有唯一及絕對的決定權</p>
            </div>

            <div>
              <h4 className="font-bold">6.2. 對數</h4>
              <p className="pl-4">6.2.1. 使用團隊業績對數須得到公司之審批</p>
            </div>

            <div>
              <h4 className="font-bold">6.3. 每月預支(“MF”)</h4>
              <p className="pl-4">6.3.1. 每月預支金額：港幣10,000 或 15,000元</p>
              <p className="pl-4">6.3.2. 每月預支僅在首個合約年份發放，最多發放12個月</p>
              <p className="pl-4">6.3.3. 港幣10,000元的每月預支申請，無須遞交入息證明</p>
              <p className="pl-4">6.3.4. 港幣15,000元的每月預支申請，每月預支金額按照申請人過去24個月的平均年收入除以12個月計算，並須遞交入息證明文件核實 (如申請者持有大學學位，則可豁免收入証明)</p>
            </div>

            <div>
              <h4 className="font-bold">6.4. 每月預支對數要求</h4>
              <p className="pl-4 mb-2">6.4.1. 對數要求（業績）為首12個合約月份總每月預支的400%</p>
              <div className="overflow-x-auto">
                <table className="w-full text-[9px] border-collapse border border-slate-900 text-center">
                  <thead className="bg-slate-50 font-bold">
                    <tr>
                      <th className="border border-slate-900 p-1">首個合約年份核實點</th>
                      <th className="border border-slate-900 p-1">淨銷售額 (港幣)</th>
                      <th className="border border-slate-900 p-1">續保率</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-slate-900 p-1">計劃生效日期起計第1個月月尾</td><td className="border border-slate-900 p-1">0</td><td className="border border-slate-900 p-1">>=85%</td></tr>
                    {[
                      { m: 2, v: '0.3' }, { m: 3, v: '0.6' }, { m: 4, v: '0.9' }, { m: 5, v: '1.2' }, 
                      { m: 6, v: '1.6' }, { m: 7, v: '2.0' }, { m: 8, v: '2.4' }, { m: 9, v: '2.8' },
                      { m: 10, v: '3.2' }, { m: 11, v: '3.6' }, { m: 12, v: '4.0' }
                    ].map(row => (
                      <tr key={row.m}>
                        <td className="border border-slate-900 p-1">計劃生效日期起計第{row.m}個月月尾</td>
                        <td className="border border-slate-900 p-1">首次每月預支金額 x 12 x {row.v}</td>
                        <td className="border border-slate-900 p-1">>=85%</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            <div className="mt-4">
              <h4 className="font-bold">6.4.3. 每月預支金額發放比率</h4>
              <div className="overflow-x-auto">
                <table className="w-full text-[9px] border-collapse border border-slate-900 text-center mt-2">
                  <thead className="bg-slate-50 font-bold">
                    <tr>
                      <th className="border border-slate-900 p-1">對數要求達標比率%</th>
                      <th className="border border-slate-900 p-1">每月預支金額發放比率%</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-slate-900 p-1">>=100%</td><td className="border border-slate-900 p-1">100%</td></tr>
                    <tr><td className="border border-slate-900 p-1">>=80%</td><td className="border border-slate-900 p-1">75%</td></tr>
                    <tr><td className="border border-slate-900 p-1">>=60%</td><td className="border border-slate-900 p-1">50%</td></tr>
                    <tr><td className="border border-slate-900 p-1">&lt;60%</td><td className="border border-slate-900 p-1">0%</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
            
            <p>6.4.4. 公司有絕對權利停止發放每月預支予任何代理人，包括但不限於以下情況：</p>
            <div className="pl-4 space-y-0.5">
              <p>6.4.4.1. 代理人連續2個月沒有簽發壽險生意（以保單目數計算）；及／或</p>
              <p>6.4.4.2. 代理人未能達到上述對數要求；及／或</p>
              <p>6.4.4.3. 代理人未能達到續保率要求；及／或</p>
              <p>6.4.4.4. 代理人違反代理協議條款、公司服務規則條款、未能完成公司指定必修培訓要求</p>
            </div>
          </div>
        </section>
        <div className="text-[8px] text-right border-t pt-1 mt-4">全民財務預支計劃之計劃條文（2025-07 版）</div>
      </div>

      <hr className="my-12 border-slate-300" />

      {/* PAGE 3 */}
      <div className="space-y-6 mb-16 relative">
        <h2 className="text-center font-bold text-sm mb-4 bg-slate-100 py-1">第 3 頁，共 4 頁</h2>
        <section>
          <h4 className="font-bold">6.5. 季度花紅(“QB”)</h4>
          <div className="pl-4 space-y-0.5">
            <p>6.5.1. 季度花紅金額：每季度港幣30,000元</p>
            <p>6.5.2. 季度花紅僅在第二個合約年份發放，最多發放4個季度</p>
            <p>6.5.3. 季度花紅（如有）將分別於第15個、第18個、第21個及第24個合約月份發放</p>
          </div>
        </section>

        <section>
          <h4 className="font-bold">6.6. 季度花紅對數要求</h4>
          <div className="pl-4 mt-2 overflow-x-auto">
            <table className="w-full text-[9px] border-collapse border border-slate-900 text-center">
              <thead className="bg-slate-50 font-bold">
                <tr>
                  <th className="border border-slate-900 p-1">第二個合約年份的合約季度</th>
                  <th className="border border-slate-900 p-1">淨銷售額 Net Sales Credit (港幣)</th>
                  <th className="border border-slate-900 p-1">續保率</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-900 p-1">第一季度季尾</td><td className="border border-slate-900 p-1">港幣 180,000 元</td><td className="border border-slate-900 p-1">>=85%</td></tr>
                <tr><td className="border border-slate-900 p-1">第二季度季尾</td><td className="border border-slate-900 p-1">港幣 360,000 元</td><td className="border border-slate-900 p-1">>=85%</td></tr>
                <tr><td className="border border-slate-900 p-1">第三季度季尾</td><td className="border border-slate-900 p-1">港幣 540,000 元</td><td className="border border-slate-900 p-1">>=85%</td></tr>
                <tr><td className="border border-slate-900 p-1">第四季度季尾</td><td className="border border-slate-900 p-1">港幣 720,000 元</td><td className="border border-slate-900 p-1">>=85%</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h4 className="font-bold">6.7. 業績花紅(“PB”)</h4>
          <div className="pl-4 space-y-2">
            <p>6.7.1. 受本6.7條中提及的條文所規限，就獲取業績花紅的權利及對數規則，請參閲第5.1、5.2及5.3條中的條款與細則</p>
            <p>6.7.3. 業績花紅將按照以下級別提供：</p>
            <div className="overflow-x-auto">
              <table className="w-full text-[9px] border-collapse border border-slate-900 text-center">
                <thead className="bg-slate-50 font-bold">
                  <tr>
                    <th className="border border-slate-900 p-1">已批核的每月預支金額</th>
                    <th className="border border-slate-900 p-1">合資格領取業績花紅之級別</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-slate-900 p-1">港幣10,000元</td><td className="border border-slate-900 p-1">(b) to (e)</td></tr>
                  <tr><td className="border border-slate-900 p-1">港幣15,000元</td><td className="border border-slate-900 p-1">(c) to (e)</td></tr>
                </tbody>
              </table>
            </div>
            <p>6.7.4. 每年最高可獲取業績花紅的金額為港幣270,000元。 在向代理人發放業績花紅前，該業績花紅必須先用以抵銷第一合約年度所發放予代理人的每月預支及用以抵銷第二合約年度所發放予代理人的季度花紅（因應情況而定）</p>
          </div>
        </section>

        <section>
          <h3 className="font-bold mb-1">7. 財務責任</h3>
          <div className="pl-4 space-y-2">
            <h4 className="font-bold">7.1. 代理人之財務責任（只適用於業績花紅財務計劃）</h4>
            <p>代理人須將業績花紅全數償還予公司，若：</p>
            <div className="pl-4">
              <p>7.1.1. 因不當行為及／或違反任何操守守則而終止代理協議；及／或</p>
              <p>7.1.2. 自計劃生效日起三十六（36）個月內，代理人與任何其他不在Prudential plc. 集團內的保險公司或金融機構在香港簽訂任何服務協議（無論直接或間接，及無論作為僱員、代理、保險經紀或牽涉保險銷售的其他身份），或與該保險公司或金融機構登記。</p>
            </div>
          </div>
        </section>
        <div className="text-[8px] text-right border-t pt-1 mt-4">全民財務預支計劃之計劃條文（2025-07 版）</div>
      </div>

      <hr className="my-12 border-slate-300" />

      {/* PAGE 4 */}
      <div className="space-y-6 relative">
        <h2 className="text-center font-bold text-sm mb-4 bg-slate-100 py-1">第 4 頁，共 4 頁</h2>
        <section>
          <h3 className="font-bold mb-1">7.2. 代理人之財務責任（適用於每月財務預支計劃及季度花紅財務預支計劃）</h3>
          <div className="pl-4 space-y-2">
            <p>7.2.1. 如代理人於計劃生效第12個月月尾未能達到整體對數要求，須按比例償還每月預支予公司</p>
            <p>7.2.2. 如代理人於計劃生效第24個月月尾未能達到整體對數要求，須按比例償還季度花紅予公司</p>
            <p>7.2.3. 代理須人全數償還所有每月預支、季度花紅及業績花紅予公司，若：</p>
            <div className="pl-4">
              <p>7.2.3.1. 因不當行為及／或違反任何操守守則而終止代理協議；及／或</p>
              <p>7.2.3.2. 於計劃生效日起首24個月內，不論因任何原因代理協議被終止；或</p>
              <p>7.2.3.3. 自計劃生效日起三十六（36）個月內，代理人與任何其他不在Prudential plc. 集團內的保險公司或金融機構在香港簽訂任何服務協議（無論直接或間接，及無論作為僱員、代理、保險經紀或牽涉保險銷售的其他身份），或與該保險公司或金融機構登記。</p>
            </div>
          </div>
        </section>

        <section>
          <h3 className="font-bold mb-1">7.3. 經理之財務責任及擔保（適用於每月財務預支計劃及季度花紅財務預支計劃）</h3>
          <div className="pl-4 space-y-2">
            <p>7.3.1. 如代理協議於計劃生效日起首 24 個月不論因任何原因被終止，代理人的直屬經理（SUM 或以上）須承擔責任並須向公司全數償還所有已支付予代理人的每月預支及／或季度花紅（因應具體情況而定）。</p>
            <p>7.3.2. 上述之每月預支及／或季度花紅總額（公司已支付給代理人之款項）必須經由其直屬經理之特別戶口（Special Unit Account）償還</p>
          </div>
        </section>

        <div className="mt-8 p-4 bg-slate-50 border rounded-lg text-[10px] text-slate-600">
          <p className="font-bold mb-1">* 注：</p>
          <p>以上內容僅作為現行全民財務預支計劃的摘要。本公司對不时修订全民财务预支计划及相关贷款协议所载详细条款有唯一及绝对的决定权。</p>
          <p className="mt-1">中文譯本，只供參考。中英文本如有歧義，一概以英文正本為準。</p>
        </div>
        <div className="text-[8px] text-right border-t pt-1 mt-4">全民財務預支計劃之計劃條文（2025-07 版）</div>
      </div>
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
                    {plan.details.funding}
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
                    {plan.details.performance}
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
                    <div className="text-slate-700 text-[13px] md:text-[14px] leading-relaxed font-medium whitespace-pre-line">
                      {plan.details.clawback}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Source Document View (Full 4 Pages) */}
          {showSource && (
            <div className="absolute inset-0 z-20 bg-slate-100 flex flex-col animate-in slide-in-from-right duration-300">
              <div className="px-5 md:px-8 py-3 md:py-4 bg-white border-b border-slate-200 flex justify-between items-center shadow-sm relative z-30">
                <div className="flex items-center gap-2 font-bold text-slate-600 text-sm md:text-base">
                  <Icons.FileText className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  <span>全民財務預支計劃之計劃條文 (完整 4 頁)</span>
                </div>
                <button 
                  onClick={() => setShowSource(false)}
                  className="px-3 md:px-4 py-1.5 bg-slate-900 text-white rounded-xl text-xs md:text-sm font-bold hover:bg-slate-800 transition-colors"
                >
                  返回摘要
                </button>
              </div>
              <div className="flex-1 overflow-y-auto p-4 md:p-10 hide-scrollbar scroll-smooth">
                <div className="max-w-3xl mx-auto space-y-8 pb-12">
                   {/* Both T120 and U163 use the same source document */}
                   {['T120', 'U163'].includes(plan.id) ? (
                     <SourceDocument />
                   ) : (
                     <div className="bg-white p-20 rounded-3xl shadow-xl text-center text-slate-400 font-medium">
                        该计划 ({plan.id}) 的源文档正在数字化中，请咨询您的招募经理获取纸质版。
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
