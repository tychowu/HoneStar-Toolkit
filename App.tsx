
import React, { useState, useMemo } from 'react';
import { PLANS, Icons } from './constants';
import { FinancialPlan, ViewType } from './types';
import PlanCard from './components/PlanCard';
import PlanDetails from './components/PlanDetails';
import AdvisorChat from './components/AdvisorChat';
import Quiz from './components/Quiz';

const App: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState<FinancialPlan | null>(null);
  const [view, setView] = useState<ViewType>('GRID');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPlans = useMemo(() => {
    return PLANS.filter(p => 
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.audience.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tag.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleQuizComplete = (plan: FinancialPlan) => {
    setView('GRID');
    setSelectedPlan(plan);
  };

  return (
    <div className="min-h-screen pb-32">
      {/* Navigation Header */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-red-600 rounded-xl flex items-center justify-center text-white p-1.5 shadow-lg shadow-red-200">
              <Icons.Logo className="w-full h-full" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-900 tracking-tight leading-none text-base">保诚招募 Pro</span>
              <span className="text-[10px] text-slate-400 font-medium">诚星区域 @ 星火家族</span>
            </div>
          </div>
          <div className="flex bg-slate-100 p-1 rounded-xl">
            <button 
              onClick={() => setView('GRID')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${view === 'GRID' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
            >
              计划库
            </button>
            <button 
              onClick={() => setView('COMPARE')}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${view === 'COMPARE' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-500 hover:text-slate-700'}`}
            >
              方案对比
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      {view !== 'QUIZ' && (
        <header className="pt-16 pb-8 px-6 max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-widest mb-6 border border-red-100 animate-pulse">
            2025 新人招募专属工具
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 mb-6 tracking-tight leading-tight">
            开启您的<span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-500">财富管理事业</span>
          </h1>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
            选择一份支持，更选择一个未来。通过我们的智能工具，快速匹配最符合您背景的保诚财务资助计划。
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button 
              onClick={() => setView('QUIZ')}
              className="w-full sm:w-auto px-8 py-4 bg-red-600 text-white rounded-2xl font-bold shadow-xl shadow-red-100 hover:bg-red-700 hover:-translate-y-0.5 active:scale-95 transition-all flex items-center justify-center gap-2"
            >
              <Icons.BadgeDollarSign className="w-5 h-5" />
              智能匹配我的计划
            </button>
            
            <div className="relative w-full sm:w-96 group">
              <input 
                type="text" 
                placeholder="搜索方案关键词..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-slate-200 rounded-2xl px-6 py-4 pl-12 shadow-sm focus:outline-none focus:ring-2 focus:ring-red-500/10 focus:border-red-500 transition-all text-sm font-medium"
              />
              <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-red-500 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </header>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 relative z-10">
        {view === 'QUIZ' ? (
          <Quiz onComplete={handleQuizComplete} onCancel={() => setView('GRID')} />
        ) : view === 'GRID' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 animate-in fade-in duration-500">
            {filteredPlans.length > 0 ? (
              filteredPlans.map(plan => (
                <PlanCard key={plan.id} plan={plan} onClick={setSelectedPlan} />
              ))
            ) : (
              <div className="col-span-full py-20 text-center bg-white rounded-3xl border border-dashed border-slate-200">
                <Icons.Info className="w-12 h-12 text-slate-200 mx-auto mb-4" />
                <p className="text-slate-400 font-medium">未找到匹配的计划，换个关键词试试？</p>
                <button onClick={() => setSearchQuery('')} className="mt-4 text-red-600 text-sm font-bold">清除搜索条件</button>
              </div>
            )}
          </div>
        ) : (
          <div className="overflow-x-auto bg-white rounded-3xl shadow-sm border border-slate-100 animate-in fade-in duration-500">
            <table className="w-full min-w-[1000px] text-left border-collapse">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="p-6 text-sm font-bold text-slate-900 sticky left-0 bg-slate-50 z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">属性字段</th>
                  {PLANS.map(p => (
                    <th key={p.id} className="p-6 text-sm font-bold text-slate-900 border-l border-slate-100 min-w-[240px]">
                      <div className="flex items-center gap-2">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] ${p.color}`}>{p.id}</span>
                        {p.name}
                      </div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 font-bold text-slate-700 sticky left-0 bg-white z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">受众定位</td>
                  {PLANS.map(p => <td key={p.id} className="p-6 text-slate-600 leading-relaxed border-l border-slate-50">{p.audience}</td>)}
                </tr>
                <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 font-bold text-slate-700 sticky left-0 bg-white z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">准入门槛</td>
                  {PLANS.map(p => <td key={p.id} className="p-6 text-slate-600 leading-relaxed border-l border-slate-50 whitespace-pre-line">{p.qualification}</td>)}
                </tr>
                <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 font-bold text-slate-700 sticky left-0 bg-white z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">财务资助</td>
                  {PLANS.map(p => <td key={p.id} className="p-6 text-slate-600 leading-relaxed border-l border-slate-50 whitespace-pre-line">{p.details.funding}</td>)}
                </tr>
                <tr className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                  <td className="p-6 font-bold text-slate-700 sticky left-0 bg-white z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">业绩要求</td>
                  {PLANS.map(p => <td key={p.id} className="p-6 text-slate-600 leading-relaxed border-l border-slate-50 whitespace-pre-line">{p.details.performance}</td>)}
                </tr>
                <tr>
                  <td className="p-6 font-bold text-red-700 sticky left-0 bg-red-50/30 z-10 shadow-[2px_0_5px_rgba(0,0,0,0.02)]">风险提示</td>
                  {PLANS.map(p => <td key={p.id} className="p-6 text-red-600 font-medium leading-relaxed border-l border-slate-50 bg-red-50/10 whitespace-pre-line">{p.details.clawback}</td>)}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </main>

      {/* Floating UI */}
      {selectedPlan && <PlanDetails plan={selectedPlan} onClose={() => setSelectedPlan(null)} />}
      <AdvisorChat />
      
      {/* Footer */}
      <footer className="mt-20 py-16 border-t border-slate-100 bg-white/50 backdrop-blur-sm relative z-10">
        <div className="max-w-7xl mx-auto px-6">
           <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
             <div className="max-w-xs">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-red-600 rounded-lg flex items-center justify-center text-white p-1.5 shadow-md">
                    <Icons.Logo className="w-full h-full" />
                  </div>
                  <span className="font-bold text-slate-900 tracking-tight">保诚财务计划 Pro</span>
                </div>
                <p className="text-sm text-slate-400 leading-relaxed">
                  诚星区域星火家族专属数字工具，致力于用科技助力每一位代理人的职业腾飞。
                </p>
             </div>
             <div className="grid grid-cols-2 sm:grid-cols-3 gap-8">
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-900 text-sm">新人频道</h4>
                  <ul className="text-sm text-slate-500 space-y-2">
                    <li><a href="#" className="hover:text-red-600 transition-colors">入职必读</a></li>
                    <li><a href="#" className="hover:text-red-600 transition-colors">财务计划概览</a></li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-900 text-sm">成长支持</h4>
                  <ul className="text-sm text-slate-500 space-y-2">
                    <li><a href="#" className="hover:text-red-600 transition-colors">星火学院</a></li>
                    <li><a href="#" className="hover:text-red-600 transition-colors">MDRT 路径</a></li>
                  </ul>
                </div>
             </div>
           </div>
           <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="text-slate-400 text-xs font-medium">
              © 2025 保诚香港诚星区域 @ 星火家族. 保留所有权利.
            </div>
            <div className="flex gap-6 text-xs font-bold text-slate-400">
              <a href="#" className="hover:text-slate-600 transition-colors">隐私政策</a>
              <a href="#" className="hover:text-slate-600 transition-colors">法律声明</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
