
export interface PlanDetails {
  desc: string;
  funding: string;
  performance: string;
  clawback: string;
}

export interface FinancialPlan {
  id: string;
  name: string;
  subtitle: string;
  audience: string;
  qualification: string;
  tag: string;
  color: string;
  decorColor: string;
  note: string;
  details: PlanDetails;
}

export type ViewType = 'GRID' | 'QUIZ' | 'COMPARE';

export interface QuizState {
  degree: string;
  experience: string;
  income: string;
  visa: string;
}

export interface Recommendation {
  planId: string;
  score: number;
  reason: string;
}
