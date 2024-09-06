export interface SubQuestion {
  question: string;
  tags: string[];
}

export interface GenerateRequestBody {
  query: string;
  company: string;
  sub_questions: SubQuestion[]; // Added sub_questions
  db_table: string;
}

export interface GenerateResponse {
  success: boolean;
  data: any;
}
