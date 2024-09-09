export interface SubQuestion {
  question: string;
  tags: string[];
}

export interface GenerateRequestBody {
  query: string;
  company: string;
  sub_questions: SubQuestion[];
  db_table: string;
}

export interface GenerateResponse {
  success: boolean;
  data: GptResponse;
}

export interface FormattedEmail {
  BCC: string | "No BCC Addresses";
  CC: string | "No CC Addresses";
  "Received DateTime": string;
  "Body Text": string;
  Subject: string;
  To: string[];
  From: string;
  Attachments: string[];
}

export interface GptResponse {
  formatted_emails: FormattedEmail[];
  response: string;
  s3_attachment_links: string[];
}
