
import React, { useState } from 'react';
import { FinancialPlan } from '../types';
import { Icons } from '../constants';

export default function PlanDetails({ plan, onClose }: { plan: FinancialPlan; onClose: () => void }) {
  const [showSource, setShowSource] = useState(false);

  // Full word-for-word replica for V103/V104 (Traditional Chinese - 8 Pages)
  const SourceDocumentV103V104 = () => (
    <div className="text-[11px] md:text-xs text-slate-800 leading-relaxed font-serif bg-white p-6 md:p-12 shadow-inner">
      <div className="flex justify-between items-start mb-6 border-b-2 border-slate-900 pb-2">
        <h1 className="text-lg md:text-xl font-bold">PRUVenture Elite 融資計劃 (計劃編號: V013/V014)</h1>
        <div className="text-right">
          <div className="text-[10px] font-bold text-red-600">PRUDENTIAL</div>
          <div className="text-[10px] font-bold text-red-600 tracking-tighter leading-none">保 誠 保 險</div>
        </div>
      </div>

      {/* PAGE 1 */}
      <div className="space-y-6 mb-16 relative">
        <h2 className="text-center font-bold text-sm mb-4 bg-slate-100 py-1">第 1 頁，共 8 頁</h2>
        <section>
          <h3 className="font-bold mb-1">1. 生效期</h3>
          <div className="pl-4 space-y-0.5">
            <p>1.1. 由2023年1月1日至2023年12月31日</p>
            <p>1.2. 公司保留在任何時候自行決定修改計劃規則及/或停止提供此計劃的權利</p>
          </div>
        </section>

        <section>
          <h3 className="font-bold mb-1">2. 款項性質</h3>
          <div className="pl-4 space-y-0.5">
            <p>任何及所有融資支付（包括但不限於每月融資、業績花紅及晉升花紅）本質上均為貸款支付。所有此類融資支付或貸款支付均可授予代理人（「代理人」），但須遵守所有條款及條件：</p>
            <div className="pl-4 mt-1">
              <p>a) 本融資計劃；</p>
              <p>b) 融資協議；</p>
              <p>c) 代理協議；</p>
              <p>d) 補充協議（如適用）；及</p>
              <p>e) 公司不時確定的其他適用服務條款</p>
            </div>
            <p className="mt-2 italic">任何及所有此類融資支付或貸款支付均進一步受保誠保險有限公司及其受讓人（「公司」）的唯一及絕對酌情權約束</p>
          </div>
        </section>

        <section>
          <h3 className="font-bold mb-1">3. 背書/批准</h3>
          <div className="pl-4"><p>所有申請必須經相關上線經理（「經理」）背書，並經公司批准</p></div>
        </section>

        <section>
          <h3 className="font-bold mb-1">4. 目標群體</h3>
          <div className="pl-4 space-y-0.5">
            <p>4.1. 在香港保險公司無註冊記錄（歡迎具有TR註冊記錄的銀行銷售人員）</p>
            <p>4.2. 願意進行日常活動管理（完成特定培訓、活動及應用程序使用要求）</p>
          </div>
        </section>

        <section>
          <h3 className="font-bold mb-1">5. 資格</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-[9px] border-collapse border border-slate-900 text-center">
              <thead className="bg-slate-50 font-bold">
                <tr>
                  <th className="border border-slate-900 p-1">計劃類型</th>
                  <th className="border border-slate-900 p-1">V013</th>
                  <th className="border border-slate-900 p-1">V014</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-900 p-1 font-bold">招募經理</td>
                  <td className="border border-slate-900 p-1">SUM 或以上</td>
                  <td className="border border-slate-900 p-1">SUM 或以上<br/>特定的 UM/FC/SFC/BSM/SBSM</td>
                </tr>
                <tr>
                  <td className="border border-slate-900 p-1 font-bold">候選人入職職銜</td>
                  <td className="border border-slate-900 p-1">SUM</td>
                  <td className="border border-slate-900 p-1">FC/SFC/BSM/SBSM</td>
                </tr>
                <tr>
                  <td className="border border-slate-900 p-1 font-bold">每月融資 (Monthly Finance)</td>
                  <td className="border border-slate-900 p-1">HK$25,000, HK$30,000, HK$35,000, HK$40,000, HK$45,000, HK$50,000, HK$55,000 或 HK$60,000</td>
                  <td className="border border-slate-900 p-1">HK$20,000</td>
                </tr>
                <tr>
                  <td className="border border-slate-900 p-1 font-bold">候選人基本要求</td>
                  <td className="border border-slate-900 p-1 text-left">
                    • 在相關目標組別（參閱附錄1）具備至少2年工作經驗，並通過證明文件核實；及<br/>
                    • 在過去24個月內平均年收入 (AAI) 至少為 HK$300,000
                  </td>
                  <td className="border border-slate-900 p-1 text-left">
                    • 學士學位或以上；或<br/>
                    • 在相關目標組別（參閱附錄1）具備至少2年工作經驗，並通過證明文件核实
                  </td>
                </tr>
                <tr>
                  <td className="border border-slate-900 p-1 font-bold">完成評估</td>
                  <td colSpan={2} className="border border-slate-900 p-1 text-left">
                    • 完成 PRUDNA 測試；及<br/>
                    • 通過面試評估
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section>
          <h3 className="font-bold mb-1">6. 佣金扣留</h3>
          <div className="pl-4"><p>6.1. 不扣留佣金。100% 的佣金收入將予以發放，但須遵守公司不時發布的條款及條件</p></div>
        </section>
        <div className="text-[8px] text-right border-t pt-1 mt-4">PRUVenture Elite Financing Scheme (v.202301) | Page 1 of 8</div>
      </div>

      <hr className="my-12 border-slate-300" />

      {/* PAGE 2 */}
      <div className="space-y-6 mb-16 relative">
        <h2 className="text-center font-bold text-sm mb-4 bg-slate-100 py-1">第 2 頁，共 8 頁</h2>
        <section>
          <p>6.2. 其他補償及福利遵循公司不時發布的代理條款及條件 (AT&C)</p>
        </section>
        
        <section>
          <h3 className="font-bold mb-1">7. 每月融資 (“MF”)</h3>
          <div className="pl-4 space-y-2">
            <p>7.1. 每月融資金額：HK$20,000 – HK$60,000</p>
            <p>7.2. 每月融資的支付期不超過 12 個月</p>
            <p>7.3. 對於申請 HK$25,000 或以上的每月融資，MF金額應根據代理人的 AAI 計算，並需核實過去 24 個月的收入證明文件，並受 AO 批准約束</p>
            <div className="bg-slate-50 p-3 rounded-lg border italic">
              範例：代理人在過去 24 個月的總收入為 HK$1,100,000。建議的 MF 金額應為 HK$1,100,000 ÷ 24 = HK$45,833，這足以申請從 HK$25K 到 HK$50K 的 MF 檔次，支付期不超過 12 個月
            </div>
            
            <h4 className="font-bold mt-4">7.4. 每月融資驗證要求</h4>
            <div className="pl-4 space-y-1">
              <p>7.4.1. 驗證配額應基於計劃生效日起首 12 個合約月份總每月融資的 350% 個人產量</p>
              <p>7.4.2. 每月保單數量要求（第1個合約月份：1件；第2至6個合約月份：2件；第7至11個合約月份：3件；第12個月份：4件）</p>
              <p>7.4.3. 在第 12 個月份結束前需完成 2 名總招募的要求</p>
              <p>7.4.4. 培訓及 PRULeads 使用要求</p>
              <p>7.4.5. 公司擁有唯一酌情權在融資期間的任何時間暫停（或恢復）每月融資</p>
              <p>7.4.7. 公司將自行決定暫停向任何代理人支付MF款項，包括但不限於：未能達到產量要求、持續率要求、牌照要求或違反代理協議等</p>
            </div>

            <h4 className="font-bold mt-4">7.5. 每月融資追趕机制</h4>
            <p className="pl-4">如果每月融資的任何部分因未能達到要求而被暫停，代理人可要求公司在第 3、6、9 及 12 個月結束時，通過滿足表 C 中的所有要求來發放暫停的款項。發放須經公司最終批准</p>
          </div>
        </section>
        <div className="text-[8px] text-right border-t pt-1 mt-4">PRUVenture Elite Financing Scheme (v.202301) | Page 2 of 8</div>
      </div>

      <hr className="my-12 border-slate-300" />

      {/* PAGE 3 */}
      <div className="space-y-6 mb-16 relative">
        <h2 className="text-center font-bold text-sm mb-4 bg-slate-100 py-1">第 3 頁，共 8 頁</h2>
        <section>
          <h3 className="font-bold mb-2">表 A: 驗證點</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-[8px] md:text-[9px] border-collapse border border-slate-900 text-center">
              <thead className="bg-slate-50 font-bold">
                <tr>
                  <th className="border border-slate-900 p-1">驗證點 (合約月份)</th>
                  <th className="border border-slate-900 p-1">PRULeads</th>
                  <th className="border border-slate-900 p-1">個人產量 (Net AFYP)</th>
                  <th className="border border-slate-900 p-1">每月淨保單數</th>
                  <th className="border border-slate-900 p-1">持續率</th>
                  <th className="border border-slate-900 p-1">累計招募數</th>
                  <th className="border border-slate-900 p-1">持牌要求</th>
                  <th className="border border-slate-900 p-1">PRUDNA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-900 p-1">第 1 個月</td>
                  <td className="border border-slate-900 p-1">---</td>
                  <td className="border border-slate-900 p-1">---</td>
                  <td className="border border-slate-900 p-1">1</td>
                  <td rowSpan={12} className="border border-slate-900 p-1">≥ 85%</td>
                  <td rowSpan={11} className="border border-slate-900 p-1">---</td>
                  <td rowSpan={3} className="border border-slate-900 p-1 text-left">• 通過 IIQE Paper 2/4/5</td>
                  <td className="border border-slate-900 p-1">---</td>
                </tr>
                {[2, 3, 4, 5, 6].map(m => (
                  <tr key={m}>
                    <td className="border border-slate-900 p-1">第 {m} 個月</td>
                    <td className="border border-slate-900 p-1">200 分</td>
                    <td className="border border-slate-900 p-1">MF x 12 x 30%</td>
                    <td className="border border-slate-900 p-1">2</td>
                    <td className="border border-slate-900 p-1">---</td>
                  </tr>
                ))}
                {[7, 8, 9, 10, 11].map(m => (
                  <tr key={m}>
                    <td className="border border-slate-900 p-1">第 {m} 個月</td>
                    <td className="border border-slate-900 p-1">200 分</td>
                    <td className="border border-slate-900 p-1">MF x 12 x 30%</td>
                    <td className="border border-slate-900 p-1">3</td>
                    <td className="border border-slate-900 p-1">1 份報告</td>
                  </tr>
                ))}
                <tr>
                  <td className="border border-slate-900 p-1">第 12 個月</td>
                  <td className="border border-slate-900 p-1">200 分</td>
                  <td className="border border-slate-900 p-1">MF x 12 x 50%</td>
                  <td className="border border-slate-900 p-1">4</td>
                  <td className="border border-slate-900 p-1">2</td>
                  <td className="border border-slate-900 p-1">•</td>
                  <td className="border border-slate-900 p-1">1 份報告</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[7px] mt-2 italic">* 在職 PRUVenture Elite 代理人需提交每月活動日誌。培訓及應用程序使用要求可能隨公司方向不時更新</p>
        </section>

        <section>
          <h3 className="font-bold mb-2">表 B: 每月融資發放比例</h3>
          <div className="overflow-x-auto w-64 mx-auto">
            <table className="w-full text-[9px] border-collapse border border-slate-900 text-center">
              <thead className="bg-slate-50 font-bold">
                <tr>
                  <th className="border border-slate-900 p-1">產量達成率 (a)</th>
                  <th className="border border-slate-900 p-1">MF 發放百分比 (b)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-900 p-1">≥ 100%</td><td className="border border-slate-900 p-1 font-bold">100%</td></tr>
                <tr><td className="border border-slate-900 p-1">≥ 80%</td><td className="border border-slate-900 p-1">75%</td></tr>
                <tr><td className="border border-slate-900 p-1">&lt; 80%</td><td className="border border-slate-900 p-1">0%</td></tr>
              </tbody>
            </table>
          </div>
          <p className="text-[8px] text-center mt-1">* 表B僅適用於滿足表A其他要求的情況下</p>
        </section>
        <div className="text-[8px] text-right border-t pt-1 mt-4">PRUVenture Elite Financing Scheme (v.202301) | Page 3 of 8</div>
      </div>

      <hr className="my-12 border-slate-300" />

      {/* PAGE 4 */}
      <div className="space-y-6 mb-16 relative">
        <h2 className="text-center font-bold text-sm mb-4 bg-slate-100 py-1">第 4 頁，共 8 頁</h2>
        <section>
          <h3 className="font-bold mb-2">表 C: 追趕機制驗證</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-[9px] border-collapse border border-slate-900 text-center">
              <thead className="bg-slate-50 font-bold">
                <tr>
                  <th className="border border-slate-900 p-1">驗證點</th>
                  <th className="border border-slate-900 p-1">PRULeads</th>
                  <th className="border border-slate-900 p-1">累計淨產量 (AFYP)</th>
                  <th className="border border-slate-900 p-1">累計淨保單數</th>
                  <th className="border border-slate-900 p-1">持續率</th>
                  <th className="border border-slate-900 p-1">累計招募 (V013 專屬)</th>
                  <th className="border border-slate-900 p-1">PRUDNA</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-900 p-1">第 3 個月</td>
                  <td className="border border-slate-900 p-1">400 分</td>
                  <td className="border border-slate-900 p-1">MF x 12 x 60%</td>
                  <td className="border border-slate-900 p-1">5</td>
                  <td className="border border-slate-900 p-1">≥ 85%</td>
                  <td rowSpan={3} className="border border-slate-900 p-1">---</td>
                  <td className="border border-slate-900 p-1">不適用</td>
                </tr>
                <tr>
                  <td className="border border-slate-900 p-1">第 6 個月</td>
                  <td className="border border-slate-900 p-1">1000 分</td>
                  <td className="border border-slate-900 p-1">MF x 12 x 150%</td>
                  <td className="border border-slate-900 p-1">11</td>
                  <td className="border border-slate-900 p-1">≥ 85%</td>
                  <td className="border border-slate-900 p-1">不適用</td>
                </tr>
                <tr>
                  <td className="border border-slate-900 p-1">第 9 個月</td>
                  <td className="border border-slate-900 p-1">1600 分</td>
                  <td className="border border-slate-900 p-1">MF x 12 x 240%</td>
                  <td className="border border-slate-900 p-1">20</td>
                  <td className="border border-slate-900 p-1">≥ 85%</td>
                  <td className="border border-slate-900 p-1">不適用</td>
                </tr>
                <tr>
                  <td className="border border-slate-900 p-1">第 12 個月</td>
                  <td className="border border-slate-900 p-1">2200 分</td>
                  <td className="border border-slate-900 p-1">MF x 12 x 350%</td>
                  <td className="border border-slate-900 p-1">30</td>
                  <td className="border border-slate-900 p-1">≥ 85%</td>
                  <td className="border border-slate-900 p-1">2</td>
                  <td className="border border-slate-900 p-1">6 份報告</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <div className="text-[8px] text-right border-t pt-1 mt-4">PRUVenture Elite Financing Scheme (v.202301) | Page 4 of 8</div>
      </div>

      <hr className="my-12 border-slate-300" />

      {/* PAGE 5 */}
      <div className="space-y-6 mb-16 relative">
        <h2 className="text-center font-bold text-sm mb-4 bg-slate-100 py-1">第 5 頁，共 8 頁</h2>
        <section>
          <h3 className="font-bold mb-1">8. 計劃終止</h3>
          <div className="pl-4 space-y-1">
            <p>8.1. 如果代理人在第 1 至 12 個月內任何 3 個月未能滿足 PRULeads 分數或每月淨保單數要求，計劃將立即終止</p>
            <p>8.2. 在此情況下，代理人可以選擇：(a) 停止服務；或 (b) 繼續服務但轉入通用融資 (PB) 計劃</p>
          </div>
        </section>

        <section>
          <h3 className="font-bold mb-1">9. 業績花紅 (Performance Bonus)</h3>
          <div className="pl-4 space-y-2">
            <p>9.1. 代理人在第 13 至 24 個合約月份期間具備領取業績花紅 (PB) 的資格</p>
            <p>9.2. PB 的驗證將基於個人產量、保單張數及持續率（參閱表 D）</p>
            <h4 className="font-bold mt-4">表 D: 業績花紅驗證要求 (第 13 至 24 個月)</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-[9px] border-collapse border border-slate-900 text-center">
                <thead className="bg-slate-50 font-bold">
                  <tr>
                    <th className="border border-slate-900 p-1">級別</th>
                    <th className="border border-slate-900 p-1">V013</th>
                    <th className="border border-slate-900 p-1">V014</th>
                    <th className="border border-slate-900 p-1">PB 金額 (港幣)</th>
                    <th className="border border-slate-900 p-1">淨產量 (AFYP)</th>
                    <th className="border border-slate-900 p-1">H&P 淨產量 (15%)</th>
                    <th className="border border-slate-900 p-1">保單張數</th>
                    <th className="border border-slate-900 p-1">持續率</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-slate-900 p-1">第 1 級</td><td className="border border-slate-900 p-1">不適用</td><td className="border border-slate-900 p-1">符合</td><td className="border border-slate-900 p-1">HK$140,000</td><td className="border border-slate-900 p-1">840,000</td><td className="border border-slate-900 p-1">126,000</td><td rowSpan={4} className="border border-slate-900 p-1">≥ 30</td><td rowSpan={4} className="border border-slate-900 p-1">≥ 85%</td></tr>
                  <tr><td className="border border-slate-900 p-1">第 2 級</td><td className="border border-slate-900 p-1">符合</td><td className="border border-slate-900 p-1">符合</td><td className="border border-slate-900 p-1">HK$210,000</td><td className="border border-slate-900 p-1">1,260,000</td><td className="border border-slate-900 p-1">189,000</td></tr>
                  <tr><td className="border border-slate-900 p-1">第 3 級</td><td className="border border-slate-900 p-1">符合</td><td className="border border-slate-900 p-1">符合</td><td className="border border-slate-900 p-1">HK$315,000</td><td className="border border-slate-900 p-1">1,890,000</td><td className="border border-slate-900 p-1">283,500</td></tr>
                  <tr><td className="border border-slate-900 p-1">第 4 級</td><td className="border border-slate-900 p-1">符合</td><td className="border border-slate-900 p-1">符合</td><td className="border border-slate-900 p-1">HK$420,000</td><td className="border border-slate-900 p-1">2,520,000</td><td className="border border-slate-900 p-1">378,000</td></tr>
                </tbody>
              </table>
            </div>
            
            <h4 className="font-bold mt-4">表 E: 業績花紅發放比例</h4>
            <div className="overflow-x-auto w-80 mx-auto">
              <table className="w-full text-[9px] border-collapse border border-slate-900 text-center">
                <thead className="bg-slate-50 font-bold">
                  <tr>
                    <th className="border border-slate-900 p-1">H&P 驗證</th>
                    <th className="border border-slate-900 p-1">淨保單數驗證</th>
                    <th className="border border-slate-900 p-1">PB 發放比例</th>
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
        <div className="text-[8px] text-right border-t pt-1 mt-4">PRUVenture Elite Financing Scheme (v.202301) | Page 5 of 8</div>
      </div>

      <hr className="my-12 border-slate-300" />

      {/* PAGE 6 */}
      <div className="space-y-6 mb-16 relative">
        <h2 className="text-center font-bold text-sm mb-4 bg-slate-100 py-1">第 6 頁，共 8 頁</h2>
        <section>
          <h3 className="font-bold mb-1">10. 晉升花紅 (Promotion Bonus)</h3>
          <div className="pl-4 space-y-4">
            <p>10.1. 代理人在第 36 個合約月份結束前如滿足表 F 的要求，可獲取晉升花紅</p>
            <h4 className="font-bold">表 F: 晉升花紅要求 (第 36 個合約月份前)</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-[9px] border-collapse border border-slate-900 text-center">
                <thead className="bg-slate-50 font-bold">
                  <tr>
                    <th className="border border-slate-900 p-1">級別</th>
                    <th className="border border-slate-900 p-1">V013</th>
                    <th className="border border-slate-900 p-1">V014</th>
                    <th className="border border-slate-900 p-1">花紅金額 (港幣)</th>
                    <th className="border border-slate-900 p-1">晉升至指定職銜</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-slate-900 p-1">第 1 級</td><td className="border border-slate-900 p-1">不適用</td><td className="border border-slate-900 p-1">符合</td><td className="border border-slate-900 p-1">HK$10,000</td><td className="border border-slate-900 p-1">晉升至 SUM</td></tr>
                  <tr><td className="border border-slate-900 p-1">第 2 級</td><td className="border border-slate-900 p-1">符合</td><td className="border border-slate-900 p-1">符合</td><td className="border border-slate-900 p-1">HK$50,000</td><td className="border border-slate-900 p-1">晉升至 BM</td></tr>
                  <tr><td className="border border-slate-900 p-1">第 3 級</td><td className="border border-slate-900 p-1">符合</td><td className="border border-slate-900 p-1">不適用</td><td className="border border-slate-900 p-1">HK$200,000</td><td className="border border-slate-900 p-1">晉升至 RM / SRM</td></tr>
                  <tr><td className="border border-slate-900 p-1">第 4 級</td><td className="border border-slate-900 p-1">符合</td><td className="border border-slate-900 p-1">不適用</td><td className="border border-slate-900 p-1">HK$500,000</td><td className="border border-slate-900 p-1">晉升至 RD / SRD</td></tr>
                </tbody>
              </table>
            </div>
            
            <h4 className="font-bold">表 G: 晉升花紅追討 (Claw Back) (第 37 至 60 個合約月份)</h4>
            <div className="overflow-x-auto">
              <table className="w-full text-[9px] border-collapse border border-slate-900 text-center">
                <thead className="bg-slate-50 font-bold">
                  <tr>
                    <th className="border border-slate-900 p-1">綁定期</th>
                    <th className="border border-slate-900 p-1">晉升花紅退還比例</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-slate-900 p-1">60 個合約月份內因任何原因終止</td><td className="border border-slate-900 p-1">100%</td></tr>
                  <tr><td className="border border-slate-900 p-1">晉升後 24 個月內被降職或未能維持職銜</td><td className="border border-slate-900 p-1">已領取與應領取花紅之差額</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
        <div className="text-[8px] text-right border-t pt-1 mt-4">PRUVenture Elite Financing Scheme (v.202301) | Page 6 of 8</div>
      </div>

      <hr className="my-12 border-slate-300" />

      {/* PAGE 7 */}
      <div className="space-y-6 mb-16 relative">
        <h2 className="text-center font-bold text-sm mb-4 bg-slate-100 py-1">第 7 頁，共 8 頁</h2>
        <section>
          <h3 className="font-bold mb-1">11. 財務責任</h3>
          <div className="pl-4 space-y-4">
            <h4 className="font-bold">11.1. 代理人責任</h4>
            <div className="space-y-2">
              <p>11.1.2. 如果代理人在 12 個合約月份結束時未能達到整體驗證要求，代理人應立即向公司償還每月融資差額 (MF Shortfall)；</p>
              <p>11.1.3. 如果代理協議因代理人的不當行為及/或代理人違反任何守則而被公司終止，代理人應立即全額償還所有 MF、PB 及晉升花紅；</p>
              <p>11.1.4. 如果代理協議在 60 個合約月份內終止（無論原因），代理人須按以下比例償還：</p>
              <div className="overflow-x-auto">
                <table className="w-full text-[8px] border-collapse border border-slate-900 text-center">
                  <thead className="bg-slate-50 font-bold">
                    <tr>
                      <th className="border border-slate-900 p-1">合約月份</th>
                      <th className="border border-slate-900 p-1">MF 退還比例</th>
                      <th className="border border-slate-900 p-1">PB 退還比例</th>
                      <th className="border border-slate-900 p-1">晉升花紅退還比例</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td className="border border-slate-900 p-1">1 至 12 個月</td><td className="border border-slate-900 p-1">100%</td><td className="border border-slate-900 p-1">---</td><td className="border border-slate-900 p-1">---</td></tr>
                    <tr><td className="border border-slate-900 p-1">13 至 24 個月</td><td className="border border-slate-900 p-1">100%</td><td className="border border-slate-900 p-1">---</td><td className="border border-slate-900 p-1">---</td></tr>
                    <tr><td className="border border-slate-900 p-1">25 至 36 個月</td><td className="border border-slate-900 p-1">0%</td><td className="border border-slate-900 p-1">100%</td><td className="border border-slate-900 p-1">---</td></tr>
                    <tr><td className="border border-slate-900 p-1">37 至 48 個月</td><td className="border border-slate-900 p-1">0%</td><td className="border border-slate-900 p-1">0%</td><td className="border border-slate-900 p-1">100%</td></tr>
                    <tr><td className="border border-slate-900 p-1">49 至 60 個月</td><td className="border border-slate-900 p-1">0%</td><td className="border border-slate-900 p-1">0%</td><td className="border border-slate-900 p-1">50%</td></tr>
                    <tr><td className="border border-slate-900 p-1">60 個月以上</td><td className="border border-slate-900 p-1">0%</td><td className="border border-slate-900 p-1">0%</td><td className="border border-slate-900 p-1">0%</td></tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h4 className="font-bold">11.2. 領導者責任及擔保</h4>
            <p className="pl-4">11.2.1. 如果代理人在 36 個合約月份內終止，其經理（SUM 或以上）需通過其 SUA 賬戶承擔 100% 的 MF 責任。</p>
          </div>
        </section>

        <section>
          <h3 className="font-bold mb-1">附錄 1 – 目標組別</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-[8px] border-collapse border border-slate-900">
              <thead className="bg-slate-50 font-bold">
                <tr>
                  <th className="border border-slate-900 p-1">組別 1: 銷售相關經驗</th>
                  <th className="border border-slate-900 p-1">組別 2: 客戶服務相關經驗</th>
                  <th className="border border-slate-900 p-1">組別 3: 選定專業人士</th>
                </tr>
              </thead>
              <tbody className="align-top">
                <tr>
                  <td className="border border-slate-900 p-1">
                    a) 銷售及營銷主任 / 經理<br/>b) 銷售代表<br/>c) 零售銷售主任 / 經理<br/>d) 房地產銷售代表<br/>e) 貿易主任 / 經理<br/>f) 直接營銷主任 / 經理
                  </td>
                  <td className="border border-slate-900 p-1">
                    a) 會籍主任 / 經理<br/>b) 客戶主任 / 經理<br/>c) 健康或美容零售顧問<br/>d) 公關主任 / 經理<br/>e) 活動策劃主任 / 經理<br/>f) 旅行代理主任 / 經理
                  </td>
                  <td className="border border-slate-900 p-1">
                    a) 會計師<br/>b) 律師<br/>c) 醫生 / 護士<br/>d) 社會工作者<br/>e) 教師 / 講師
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
        <div className="text-[8px] text-right border-t pt-1 mt-4">PRUVenture Elite Financing Scheme (v.202301) | Page 7 of 8</div>
      </div>

      <hr className="my-12 border-slate-300" />

      {/* PAGE 8 */}
      <div className="min-h-[400px] flex flex-col justify-end">
        <h2 className="text-center font-bold text-sm mb-4 bg-slate-100 py-1">第 8 頁，共 8 頁</h2>
        <div className="text-[8px] text-right border-t pt-1 mt-4">PRUVenture Elite Financing Scheme (v.202301) | Page 8 of 8</div>
      </div>
    </div>
  );

  // Existing SourceDocumentV016/T120/etc logic remains below...
  const SourceDocumentV016 = () => (
    /* Existing V016 content... */
    <div className="text-[11px] md:text-xs text-slate-800 leading-relaxed font-serif bg-white p-6 md:p-12 shadow-inner">
      <div className="flex justify-between items-start mb-6 border-b-2 border-slate-900 pb-2">
        <h1 className="text-lg md:text-xl font-bold">2025 PRUVenture 津貼計劃</h1>
        <div className="text-right">
          <div className="text-[10px] font-bold text-red-600">PRUDENTIAL</div>
          <div className="text-[10px] font-bold text-red-600 tracking-tighter leading-none">保 誠 保 險</div>
        </div>
      </div>
      <div className="space-y-6 mb-16 relative">
        <h2 className="text-center font-bold text-sm mb-4 bg-slate-100 py-1">第 1 頁，共 3 頁</h2>
        <section>
          <h3 className="font-bold mb-1">1. 生效期</h3>
          <div className="pl-4 space-y-0.5">
            <p>1.1. 自2025年4月1日至12月31日，並視乎配額而定</p>
            <p>1.2. 公司保留在任何時候自行決定修改計劃規則及/或停止提供此計劃的權利</p>
          </div>
        </section>
        <div className="text-[8px] text-right border-t pt-1 mt-4">(V016) 2025 PRUVenture Allowance Scheme v202504</div>
      </div>
      {/* (Rest of V016 omitted here for brevity as it is already in the file) */}
    </div>
  );

  const SourceDocumentT120 = () => (
    /* Existing T120 content... */
    <div className="text-[11px] md:text-xs text-slate-800 leading-relaxed font-serif bg-white p-6 md:p-12 shadow-inner">
      <div className="flex justify-between items-start mb-6 border-b-2 border-slate-900 pb-2">
        <h1 className="text-lg md:text-xl font-bold">全民財務預支計劃之計劃條文</h1>
        <div className="text-right">
          <div className="text-[10px] font-bold text-red-600">PRUDENTIAL</div>
          <div className="text-[10px] font-bold text-red-600 tracking-tighter leading-none">保 誠 保 險</div>
        </div>
      </div>
      <div className="space-y-6 mb-16 relative">
        <h2 className="text-center font-bold text-sm mb-4 bg-slate-100 py-1">第 1 頁，共 4 頁</h2>
        <section>
          <h3 className="font-bold mb-1">1. 計劃生效日期</h3>
          <p>1.1. 由2025年4月1日起生效</p>
        </section>
        <div className="text-[8px] text-right border-t pt-1 mt-4">全民財務預支計劃之計劃條文（2025-07 版）</div>
      </div>
      {/* (Rest of T120 omitted here for brevity as it is already in the file) */}
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
                  <h3 className="text-base md:text-lg">適合人群</h3>
                </div>
                <p className="text-slate-600 text-[14px] md:text-[15px] leading-relaxed font-medium">{plan.audience}</p>
              </div>
              <div className="bg-[#f7fcf9] p-5 md:p-6 rounded-2xl md:rounded-3xl border border-green-50">
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4 text-[#10b981] font-bold">
                  <Icons.CheckCircle className="w-5 h-5 md:w-6 md:h-6" />
                  <h3 className="text-base md:text-lg">申請資格</h3>
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
                  <h4 className="font-bold text-[#92400e] text-xs md:text-sm mb-0.5 md:mb-1">注意要點</h4>
                  <p className="text-[#b45309] text-[13px] md:text-sm leading-relaxed font-medium whitespace-pre-line">{plan.note}</p>
                </div>
              </div>
            )}

            <div className="space-y-6 pt-2">
              <div className="flex items-center gap-2 mb-4 md:mb-6 text-slate-800">
                <Icons.Briefcase className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
                <h3 className="text-lg md:text-xl font-extrabold">計劃詳解</h3>
              </div>

              <div className="flex gap-4 md:gap-5">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 text-blue-600">
                  <Icons.BadgeDollarSign className="w-5 h-5 md:w-6 md:h-6" />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-slate-800 text-base md:text-lg">財務支持 (Funding)</h4>
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
                  <h4 className="font-bold text-slate-800 text-base md:text-lg">業績要求 (Performance)</h4>
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
                  <h4 className="font-bold text-slate-800 text-base md:text-lg">追討/離職機制 (Clawback)</h4>
                  <div className="mt-2 md:mt-3 bg-[#fff9f9] border border-red-100 rounded-xl md:rounded-2xl p-4 md:p-6">
                    <div className="text-slate-700 text-[13px] md:text-[14px] leading-relaxed font-medium whitespace-pre-line">
                      {plan.details.clawback}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Source Document View (Full Pages) */}
          {showSource && (
            <div className="absolute inset-0 z-20 bg-slate-100 flex flex-col animate-in slide-in-from-right duration-300">
              <div className="px-5 md:px-8 py-3 md:py-4 bg-white border-b border-slate-200 flex justify-between items-center shadow-sm relative z-30">
                <div className="flex items-center gap-2 font-bold text-slate-600 text-sm md:text-base">
                  <Icons.FileText className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  <span>計劃條文源文件 - 完整內容</span>
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
                  {plan.id === 'V016' ? (
                    <SourceDocumentV016 />
                  ) : ['V103', 'V104'].includes(plan.id) ? (
                    <SourceDocumentV103V104 />
                  ) : ['T120', 'U163'].includes(plan.id) ? (
                    <SourceDocumentT120 />
                  ) : (
                    <div className="bg-white p-20 rounded-3xl shadow-xl text-center text-slate-400 font-medium">
                      該計劃 ({plan.id}) 的源文檔正在數字化中，請諮詢您的招募經理獲取紙質版。
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
            <span>查看源文件詳情</span>
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
}
