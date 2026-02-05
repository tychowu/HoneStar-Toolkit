import React from 'react';
import ReactDOM from 'react-dom/client';

const SourcePage = () => {
  const Header = ({ page }: { page: number }) => (
    <div className="flex justify-between items-start border-b-2 border-slate-900 pb-2 mb-8">
      <div className="flex flex-col">
        <h1 className="text-xl font-bold uppercase tracking-tight">PRUVenture Elite 融资计划 (计划编号: V013/V014)</h1>
      </div>
      <div className="text-right">
        <div className="text-xs font-bold text-red-600 leading-none">PRUDENTIAL</div>
        <div className="text-xs font-bold text-red-600 tracking-tighter">保 诚 保 险</div>
      </div>
    </div>
  );

  const Footer = ({ page }: { page: number }) => (
    <div className="mt-auto pt-4 border-t border-slate-200 flex justify-between items-center text-[10px] text-slate-400 font-sans">
      <span>PRUVenture Elite Financing Scheme (v.202301)</span>
      <span className="font-bold">第 {page} 页，共 8 页</span>
    </div>
  );

  return (
    <div className="min-h-screen py-10 px-4 md:px-0">
      <div className="max-w-[840px] mx-auto space-y-12">
        {/* 工具栏 */}
        <div className="no-print bg-white p-4 rounded-2xl shadow-sm border border-slate-200 flex justify-between items-center sticky top-4 z-50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/></svg>
            </div>
            <div>
              <h2 className="font-bold text-slate-900 text-sm">V013/V014 计划源文件</h2>
              <p className="text-xs text-slate-500">简体中文还原版 • 共 8 页</p>
            </div>
          </div>
          <button 
            onClick={() => window.print()}
            className="px-5 py-2 bg-slate-900 text-white rounded-xl text-sm font-bold hover:bg-slate-800 transition-all flex items-center gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9V2h12v7"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect width="12" height="8" x="6" y="14"/></svg>
            打印 / 另存为 PDF
          </button>
        </div>

        {/* PAGE 1 */}
        <div className="pdf-page bg-white p-12 md:p-16 aspect-[1/1.414] flex flex-col page-break serif-font text-[13px] leading-relaxed">
          <Header page={1} />
          <div className="space-y-6">
            <section>
              <h2 className="font-bold text-base mb-2">1. 生效期</h2>
              <div className="pl-4">
                <p>1.1. 自 2023 年 1 月 1 日至 2023 年 12 月 31 日，并视乎配额而定。</p>
                <p>1.2. 本公司保留随时自行决定修改计划规则及/或停止提供此计划的权利。</p>
              </div>
            </section>
            <section>
              <h2 className="font-bold text-base mb-2">2. 款项性质</h2>
              <p className="pl-4">任何及所有融资支付（包括但不限于每月融资、业绩花红及晋升花红）本质上均为贷款支付。所有此类融资支付或贷款支付均可授予代理人（“代理人”），但须遵守以下所有条款及条件：</p>
              <div className="pl-8 mt-2 space-y-1">
                <p>a) 在本融资计划中；</p>
                <p>b) 在融资协议中；</p>
                <p>c) 代理协议；及</p>
                <p>d) 补充协议（如适用）</p>
                <p>e) 公司不时确定的其他适用服务条款。</p>
              </div>
              <p className="pl-4 mt-2">任何及所有此类融资支付或贷款支付均进一步受保诚保险有限公司及其受让人（“公司”）的唯一及绝对酌情决定权约束。</p>
            </section>
            <section>
              <h2 className="font-bold text-base mb-2">3. 背书/批准</h2>
              <p className="pl-4">所有申请必须由相关的上级经理（“经理”）背书，并受公司的批准约束。</p>
            </section>
            <section>
              <h2 className="font-bold text-base mb-2">4. 目标客群</h2>
              <p className="pl-4">4.1. 在香港任何保险公司均无登记记录（欢迎具备 TR 登记记录的银行销售人员）。</p>
              <p>4.2. 愿意接受日常活动管理（完成特定培训、活动及应用程序使用要求）。</p>
            </section>
            <section>
              <h2 className="font-bold text-base mb-2">5. 资格</h2>
              <table className="w-full border-collapse border border-slate-900 text-center text-[11px] mb-4">
                <thead className="bg-slate-50 font-bold">
                  <tr>
                    <th className="border border-slate-900 p-2">计划类型</th>
                    <th className="border border-slate-900 p-2">V013</th>
                    <th className="border border-slate-900 p-2">V014</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-900 p-2 font-bold">招募经理</td>
                    <td className="border border-slate-900 p-2">SUM 或以上</td>
                    <td className="border border-slate-900 p-2">指定的 UM/FC/SFC/BSM/SBSM</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-900 p-2 font-bold">候选人入职职衔</td>
                    <td className="border border-slate-900 p-2">SUM</td>
                    <td className="border border-slate-900 p-2">FC/SFC/BSM/SBSM</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-900 p-2 font-bold">每月融资</td>
                    <td className="border border-slate-900 p-2">HK$25,000, HK$30,000, HK$35,000,<br/>HK$40,000, HK$45,000, HK$50,000,<br/>HK$55,000 或 HK$60,000</td>
                    <td className="border border-slate-900 p-2">HK$20,000</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-900 p-2 font-bold text-left">候选人基本要求</td>
                    <td className="border border-slate-900 p-2 text-left text-[10px]">
                      • 至少 2 年相关目标组别的工作经验（参见附录 1），且已核实相关证明文件；及<br/>
                      • 过去连续 24 个月的平均年收入 (“AAI”) 至少为 HK$300,000。
                    </td>
                    <td className="border border-slate-900 p-2 text-left text-[10px]">
                      • 学士学位或以上；<br/>
                      或<br/>
                      至少 2 年相关目标组别的工作经验（参见附录 1），且已核实相关证明文件。
                    </td>
                  </tr>
                </tbody>
              </table>
            </section>
          </div>
          <Footer page={1} />
        </div>

        {/* PAGE 2 */}
        <div className="pdf-page bg-white p-12 md:p-16 aspect-[1/1.414] flex flex-col page-break serif-font text-[13px] leading-relaxed">
          <Header page={2} />
          <div className="space-y-6">
            <section>
              <h2 className="font-bold text-base mb-2">7. 每月融资 (“MF”)</h2>
              <div className="pl-4 space-y-3">
                <p>7.1. 每月融资金额：HK$20,000 – HK$60,000。</p>
                <p>7.2. 每月融资的发放期不超过 12 个月。</p>
                <p>7.3. 如申请每月融资 HK$25,000 或以上，每月融资金额应根据代理人的 AAI 计算，并需核实过去 24 个月的收入证明文件，且需经 AO 批准。</p>
                <div className="bg-slate-50 p-4 border border-dashed border-slate-300 rounded-lg">
                  <p className="font-bold underline mb-1 italic">示例：</p>
                  <p>该代理人过去 24 个月的总收入为 HK$1,100,000。建议的每月融资金额应为 HK$1,100,000 ÷ 24 = HK$45,833，即符合申请 HK$25K 至 HK$50K 的每月融资级别，发放期不超过 12 个月。</p>
                </div>
              </div>
            </section>
            <section>
              <h2 className="font-bold text-base mb-2">7.4. 每月融资验证要求</h2>
              <div className="pl-4 space-y-2">
                <p>7.4.1. 验证配额应基于自计划生效日起首 12 个合约月内总每月融资额的 350%。</p>
                <p>7.4.2. 每月单数要求（第 1 个合约月：1 张；第 2 至 6 个合约月：每月 2 张；第 7 至 11 个合约月：每月 3 张；第 12 个月：4 张）。</p>
                <p>7.4.3. 在第 12 个月结束前完成 2 名毛招募 (Gross Recruits) 的招募要求。</p>
                <p>7.4.4. 培训及 PRULeads 使用要求。</p>
                <p>7.4.5. 公司有权在融资期内随时自行决定暂停（或恢复）每月融资的发放，前提是需根据表 A 中列出的验证点对代理人的产出进行评估。</p>
              </div>
            </section>
            <section>
              <h2 className="font-bold text-base mb-2">7.5. 每月融资追补 (Catch Up)</h2>
              <p className="pl-4">若因代理人未能达到第 2.1.2 条中的任何要求而导致每月融资发放被暂停，代理人可申请恢复发放，前提是需在自计划生效日起的第 3、6、9 及 12 个月结束时达到表 C 中列出的所有要求。恢复发放需经公司最终批准。</p>
            </section>
          </div>
          <Footer page={2} />
        </div>

        {/* PAGE 3 (Table A) */}
        <div className="pdf-page bg-white p-12 md:p-16 aspect-[1/1.414] flex flex-col page-break serif-font text-[13px] leading-relaxed">
          <Header page={3} />
          <h2 className="font-bold text-base mb-4 underline uppercase">Table A: 验证要求详情表</h2>
          <table className="w-full border-collapse border border-slate-900 text-center text-[9px]">
            <thead className="bg-slate-100 font-bold italic">
              <tr>
                <th className="border border-slate-900 p-1">验证点</th>
                <th className="border border-slate-900 p-1">PRULeads</th>
                <th className="border border-slate-900 p-1">月度个人产出 (净 AFYP)</th>
                <th className="border border-slate-900 p-1">每月单数</th>
                <th className="border border-slate-900 p-1">持续率</th>
                <th className="border border-slate-900 p-1">招募要求</th>
                <th className="border border-slate-900 p-1">持牌要求</th>
                <th className="border border-slate-900 p-1">PRUDNA</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-slate-900 p-1">第 1 个月结束</td><td className="border border-slate-900 p-1">---</td><td className="border border-slate-900 p-1">---</td><td className="border border-slate-900 p-1">1</td><td rowSpan={12} className="border border-slate-900">≥ 85%</td><td rowSpan={11} className="border border-slate-900">---</td><td rowSpan={12} className="border border-slate-900 text-left p-1">• 通过 IIQE 卷 2/4/5<br/>• 完成培训要求</td><td className="border border-slate-900 p-1">---</td></tr>
              {[2,3,4,5,6,7,8,9,10,11].map(m => (
                <tr key={m}>
                  <td className="border border-slate-900 p-1">第 {m} 个月结束</td>
                  <td className="border border-slate-900 p-1">200 分</td>
                  <td className="border border-slate-900 p-1">MF x 12 x 30%</td>
                  <td className="border border-slate-900 p-1">{m <= 6 ? 2 : 3}</td>
                  <td className="border border-slate-900 p-1">{m >= 7 ? '1 份报告' : '---'}</td>
                </tr>
              ))}
              <tr>
                <td className="border border-slate-900 p-1">第 12 个月结束</td>
                <td className="border border-slate-900 p-1">200 分</td>
                <td className="border border-slate-900 p-1 font-bold">MF x 12 x 50%</td>
                <td className="border border-slate-900 p-1">4</td>
                <td className="border border-slate-900 p-1 font-bold">2 (累计)</td>
                <td className="border border-slate-900 p-1">1 份报告</td>
              </tr>
            </tbody>
          </table>
          <p className="mt-4 text-[10px] italic">* 在职 PRUVenture Elite 代理人需提交月度活动日志。培训及 App 使用要求可能会随公司方向不时更新。</p>
          <h2 className="font-bold text-base mt-8 mb-4 underline uppercase">Table B: 产出达成比例与融资支付比例</h2>
          <table className="w-2/3 border-collapse border border-slate-900 text-center text-[11px]">
            <thead className="bg-slate-50 font-bold">
              <tr>
                <th className="border border-slate-900 p-2">产出达成比例 (a)</th>
                <th className="border border-slate-900 p-2">每月融资支付百分比 (b)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-slate-900 p-2">≥ 100%</td><td className="border border-slate-900 p-2">100%</td></tr>
              <tr><td className="border border-slate-900 p-2">≥ 80%</td><td className="border border-slate-900 p-2">75%</td></tr>
              <tr><td className="border border-slate-900 p-2">&lt; 80%</td><td className="border border-slate-900 p-2">0%</td></tr>
            </tbody>
          </table>
          <Footer page={3} />
        </div>

        {/* PAGE 4 (Table C) */}
        <div className="pdf-page bg-white p-12 md:p-16 aspect-[1/1.414] flex flex-col page-break serif-font text-[13px] leading-relaxed">
          <Header page={4} />
          <h2 className="font-bold text-base mb-4 underline uppercase">Table C: 追补验证要求 (Catch Up)</h2>
          <table className="w-full border-collapse border border-slate-900 text-center text-[10px]">
            <thead className="bg-slate-100 font-bold">
              <tr>
                <th className="border border-slate-900 p-2">验证点</th>
                <th className="border border-slate-900 p-2">PRULeads</th>
                <th className="border border-slate-900 p-2">累计净 AFYP</th>
                <th className="border border-slate-900 p-2">累计单数</th>
                <th className="border border-slate-900 p-2">持续率</th>
                <th className="border border-slate-900 p-2">招募要求 (仅限 V013)</th>
                <th className="border border-slate-900 p-2">PRUDNA</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-slate-900 p-2">第 3 个月结束</td><td className="border border-slate-900 p-2">400 分</td><td className="border border-slate-900 p-2">MF x 12 x 60%</td><td className="border border-slate-900 p-2">5</td><td rowSpan={4} className="border border-slate-900 font-bold">≥ 85%</td><td rowSpan={3} className="border border-slate-900">N/A</td><td className="border border-slate-900 p-2">N/A</td></tr>
              <tr><td className="border border-slate-900 p-2">第 6 个月结束</td><td className="border border-slate-900 p-2">1000 分</td><td className="border border-slate-900 p-2">MF x 12 x 150%</td><td className="border border-slate-900 p-2">11</td><td className="border border-slate-900 p-2">N/A</td></tr>
              <tr><td className="border border-slate-900 p-2">第 9 个月结束</td><td className="border border-slate-900 p-2">1600 分</td><td className="border border-slate-900 p-2">MF x 12 x 240%</td><td className="border border-slate-900 p-2">20</td><td className="border border-slate-900 p-2">N/A</td></tr>
              <tr><td className="border border-slate-900 p-2">第 12 个月结束</td><td className="border border-slate-900 p-2">2200 分</td><td className="border border-slate-900 p-2">MF x 12 x 350%</td><td className="border border-slate-900 p-2">30</td><td className="border border-slate-900 p-2 font-bold">2 名</td><td className="border border-slate-900 p-2 font-bold">6 份报告</td></tr>
            </tbody>
          </table>
          <Footer page={4} />
        </div>

        {/* PAGE 5 (Bonus) */}
        <div className="pdf-page bg-white p-12 md:p-16 aspect-[1/1.414] flex flex-col page-break serif-font text-[13px] leading-relaxed">
          <Header page={5} />
          <section className="space-y-6">
            <h2 className="font-bold text-base mb-2">9. 业绩花红 (“PB”)</h2>
            <div className="pl-4 space-y-4">
              <p>9.1. 代理人有资格根据以下验证表在第 13 至 24 个合约月期间获得业绩花红。</p>
              <p>9.2. 业绩花红的发放基于个人产出（包括净 AFYP、H&P 净 AFYP、单数及持续率）。</p>
              <h3 className="font-bold underline">Table D – 业绩花红验证要求 (第 13-24 个月)</h3>
              <table className="w-full border-collapse border border-slate-900 text-center text-[10px]">
                <thead className="bg-slate-50 font-bold">
                  <tr>
                    <th className="border border-slate-900 p-2">级别</th>
                    <th className="border border-slate-900 p-2">V013</th>
                    <th className="border border-slate-900 p-2">V014</th>
                    <th className="border border-slate-900 p-2">花红金额</th>
                    <th className="border border-slate-900 p-2">净 AFYP</th>
                    <th className="border border-slate-900 p-2">H&P 净 AFYP<br/>(占净 AFYP 15%)</th>
                    <th className="border border-slate-900 p-2">单数</th>
                    <th className="border border-slate-900 p-2">持续率</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-slate-900 p-2">第 1 级</td><td className="border border-slate-900 p-2 text-red-500 font-bold">不适用</td><td className="border border-slate-900 p-2">符合</td><td className="border border-slate-900 p-2">HK$140,000</td><td className="border border-slate-900 p-2">840,000</td><td className="border border-slate-900 p-2">126,000</td><td rowSpan={4} className="border border-slate-900 font-bold">≥ 30</td><td rowSpan={4} className="border border-slate-900 font-bold">≥ 85%</td></tr>
                  <tr><td className="border border-slate-900 p-2">第 2 级</td><td className="border border-slate-900 p-2">符合</td><td className="border border-slate-900 p-2">符合</td><td className="border border-slate-900 p-2">HK$210,000</td><td className="border border-slate-900 p-2">1,260,000</td><td className="border border-slate-900 p-2">189,000</td></tr>
                  <tr><td className="border border-slate-900 p-2">第 3 级</td><td className="border border-slate-900 p-2">符合</td><td className="border border-slate-900 p-2">符合</td><td className="border border-slate-900 p-2">HK$315,000</td><td className="border border-slate-900 p-2">1,890,000</td><td className="border border-slate-900 p-2">283,500</td></tr>
                  <tr><td className="border border-slate-900 p-2">第 4 级</td><td className="border border-slate-900 p-2">符合</td><td className="border border-slate-900 p-2">符合</td><td className="border border-slate-900 p-2">HK$420,000</td><td className="border border-slate-900 p-2">2,520,000</td><td className="border border-slate-900 p-2">378,000</td></tr>
                </tbody>
              </table>
              <h3 className="font-bold underline mt-6">Table E – 业绩花红发放百分比</h3>
              <table className="w-full border-collapse border border-slate-900 text-center text-[11px]">
                <thead className="bg-slate-50 font-bold italic">
                  <tr>
                    <th className="border border-slate-900 p-2">H&P 验证</th>
                    <th className="border border-slate-900 p-2">单数验证</th>
                    <th className="border border-slate-900 p-2">相关 PB 发放比例</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-slate-900 p-2">达成</td><td className="border border-slate-900 p-2">达成</td><td className="border border-slate-900 p-2 font-bold">100%</td></tr>
                  <tr><td className="border border-slate-900 p-2 text-red-600">未达成</td><td className="border border-slate-900 p-2">达成</td><td className="border border-slate-900 p-2">80%</td></tr>
                  <tr><td className="border border-slate-900 p-2">达成</td><td className="border border-slate-900 p-2 text-red-600">未达成</td><td className="border border-slate-900 p-2">50%</td></tr>
                  <tr><td className="border border-slate-900 p-2 text-red-600">未达成</td><td className="border border-slate-900 p-2 text-red-600">未达成</td><td className="border border-slate-900 p-2">40%</td></tr>
                </tbody>
              </table>
            </div>
          </section>
          <Footer page={5} />
        </div>

        {/* PAGE 7 (Liability) */}
        <div className="pdf-page bg-white p-12 md:p-16 aspect-[1/1.414] flex flex-col page-break serif-font text-[13px] leading-relaxed">
          <Header page={7} />
          <section className="space-y-6">
            <h2 className="font-bold text-base mb-2 underline">11. 财务责任 (Financial Responsibility)</h2>
            <div className="pl-4 space-y-4">
              <p>11.1.2. 代理人若未能达到自生效日起 12 个合约月内的整体验证要求，须向公司偿还每月融资缺口。</p>
              <p className="font-bold italic">MF 缺口 = (MF x 12 个月 x 实际净 AFYP ÷ 目标净 AFYP) - 过去 12 个月已支付的总 MF</p>
              <p>11.1.4. 代理人若因任何原因在 60 个月内离职，须按以下比例偿还融资款项：</p>
              <table className="w-full border-collapse border border-slate-900 text-center text-[10px]">
                <thead className="bg-slate-100 font-bold">
                  <tr>
                    <th className="border border-slate-900 p-2">合约月份 (自生效日起计)</th>
                    <th className="border border-slate-900 p-2">每月融资 (MF) 偿还比例</th>
                    <th className="border border-slate-900 p-2">业绩花红 (PB) 偿还比例</th>
                    <th className="border border-slate-900 p-2">晋升花红 偿还比例</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-slate-900 p-2">1 至 12 个月内</td><td className="border border-slate-900 p-2">100%</td><td className="border border-slate-900 p-2">---</td><td className="border border-slate-900 p-2">---</td></tr>
                  <tr><td className="border border-slate-900 p-2">13 至 24 个月内</td><td className="border border-slate-900 p-2">100%</td><td className="border border-slate-900 p-2">---</td><td className="border border-slate-900 p-2">---</td></tr>
                  <tr><td className="border border-slate-900 p-2">25 至 36 个月内</td><td className="border border-slate-900 p-2">0%</td><td className="border border-slate-900 p-2 font-bold">100%</td><td className="border border-slate-900 p-2">---</td></tr>
                  <tr><td className="border border-slate-900 p-2">37 至 48 个月内</td><td className="border border-slate-900 p-2">0%</td><td className="border border-slate-900 p-2">0%</td><td className="border border-slate-900 p-2 font-bold">100%</td></tr>
                  <tr><td className="border border-slate-900 p-2">49 至 60 个月内</td><td className="border border-slate-900 p-2">0%</td><td className="border border-slate-900 p-2">0%</td><td className="border border-slate-900 p-2 font-bold">50%</td></tr>
                  <tr><td className="border border-slate-900 p-2">超过 60 个月</td><td className="border border-slate-900 p-2">0%</td><td className="border border-slate-900 p-2">0%</td><td className="border border-slate-900 p-2">0%</td></tr>
                </tbody>
              </table>
            </div>
            <h2 className="font-bold text-base mt-6 mb-2 underline">附录 1 – 目标组别</h2>
            <div className="grid grid-cols-3 gap-4 text-[10px]">
              <div className="border border-slate-200 p-3 rounded-lg">
                <h4 className="font-bold border-b pb-1 mb-2">组别 1: 销售相关</h4>
                <p>• 销售及市场主任/经理</p>
                <p>• 销售代表</p>
                <p>• 零售销售主任/经理</p>
                <p>• 房地产销售代表</p>
              </div>
              <div className="border border-slate-200 p-3 rounded-lg">
                <h4 className="font-bold border-b pb-1 mb-2">组别 2: 客户服务</h4>
                <p>• 会籍主任/经理</p>
                <p>• 客户服务主任/经理</p>
                <p>• 公关/活动策划</p>
                <p>• 旅游/酒店从业员</p>
              </div>
              <div className="border border-slate-200 p-3 rounded-lg">
                <h4 className="font-bold border-b pb-1 mb-2">组别 3: 专业人士</h4>
                <p>• 会计师 / 律师</p>
                <p>• 医生 / 护士</p>
                <p>• 社会工作者</p>
                <p>• 教师 / 讲师</p>
              </div>
            </div>
          </section>
          <Footer page={7} />
        </div>

        {/* PAGE 8 (Closing) */}
        <div className="pdf-page bg-white p-12 md:p-16 aspect-[1/1.414] flex flex-col page-break serif-font text-[13px] leading-relaxed">
          <Header page={8} />
          <div className="flex-1 flex flex-col items-center justify-center text-slate-200 uppercase tracking-widest font-bold border-4 border-dashed border-slate-50 rounded-[40px]">
            <span className="text-4xl opacity-20">--- 文档结束 ---</span>
          </div>
          <Footer page={8} />
        </div>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<SourcePage />);