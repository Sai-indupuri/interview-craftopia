
export type MCQOption = {
  id: string;
  text: string;
  isCorrect?: boolean;
};

export type Question = {
  id: string;
  type: 'mcq' | 'theory';
  text: string;
  options?: MCQOption[];
  points?: number;
};
