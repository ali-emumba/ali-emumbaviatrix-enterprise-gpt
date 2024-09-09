export const QUESTIONS = [
  {
    value: "q1",
    label: "How did our offering address their needs better than competitors?",
    subQuestions: [
      {
        value: "sub1",
        label: "What were the offering from Aviatrix for pwc?",
        tags: [
          { value: "decision-criteria", label: "Decision Criteria" },
          { value: "other", label: "Other" },
        ],
      },
      {
        value: "sub2",
        label: "What were PWC's key needs or pain points?",
        tags: [
          { value: "identified-pain", label: "Identified Pain" },
          { value: "decision-criteria", label: "Decision Criteria" },
        ],
      },
      {
        value: "sub3",
        label: "How did Aviatrix offering specifically address PWC's needs?",
        tags: [
          { value: "metrics", label: "Metrics" },
          { value: "decision-criteria", label: "Decision Criteria" },
        ],
      },
      {
        value: "sub4",
        label: "In what ways did Aviatrix solution outperform competitors?",
        tags: [
          { value: "decision-criteria", label: "Decision Criteria" },
          { value: "competition", label: "Competition" },
        ],
      },
    ],
  },
  {
    value: "q2",
    label:
      "How exactly was the customer's organization mapped out? Who were the key decision-makers and influencers involved in the buying process along the way?",
    subQuestions: [
      {
        value: "sub1",
        label:
          "How is PWC's organization set up? Which departments were involved in the buying process?",
        tags: [
          { value: "decision-process", label: "Decision Process" },
          { value: "champion", label: "Champion" },
        ],
      },
      {
        value: "sub2",
        label:
          "Who made the final purchase decision? What are their roles or titles?",
        tags: [
          { value: "economic-buyer", label: "Economic Buyer" },
          { value: "decision-process", label: "Decision Process" },
        ],
      },
      {
        value: "sub3",
        label: "Who influenced the buying decision? How did they contribute?",
        tags: [
          { value: "champion", label: "Champion" },
          { value: "decision-process", label: "Decision Process" },
        ],
      },
      {
        value: "sub4",
        label:
          "Who was involved at each stage of the buying process, and what did they do?",
        tags: [
          { value: "decision-process", label: "Decision Process" },
          { value: "champion", label: "Champion" },
          { value: "economic-buyer", label: "Economic Buyer" },
        ],
      },
    ],
  },
  {
    value: "q3",
    label:
      "What was our value proposition that specifically addressed the customer's challenges and aligned with their strategic goals? How did we solve them? What were the use-cases?",
    subQuestions: [
      {
        value: "sub1",
        label:
          "What was Aviatrix value proposition that specifically adressed pwc's challenges?",
        tags: [
          { value: "identified-pain", label: "Identified Pain" },
          { value: "decision-criteria", label: "Decision Criteria" },
        ],
      },
      {
        value: "sub2",
        label:
          "How did the Aviartrix value proposition align with the pwc's strategic goals?",
        tags: [
          { value: "decision-criteria", label: "Decision Criteria" },
          { value: "economic-buyer", label: "Economic Buyer" },
        ],
      },
      {
        value: "sub3",
        label: "How did Aviatrix solve the problems pwc was facing?",
        tags: [
          { value: "metrics", label: "Metrics" },
          { value: "identified-pain", label: "Identified Pain" },
        ],
      },
      {
        value: "sub4",
        label: "What were the use cases provided to Aviatrix by pwc?",
        tags: [
          { value: "decision-process", label: "Decision Process" },
          { value: "decision-criteria", label: "Decision Criteria" },
        ],
      },
    ],
  },
  {
    value: "q4",
    label:
      "What was the customer's overall business goals and strategic direction when we first engaged?",
    subQuestions: [
      {
        value: "sub1",
        label: "What was the work that pwc wanted to be done?",
        tags: [
          { value: "decision-criteria", label: "Decision Criteria" },
          { value: "other", label: "Other" },
        ],
      },
      {
        value: "sub2",
        label:
          "What were pwc's business goals during the period when Aviatrix engaged?",
        tags: [
          { value: "decision-criteria", label: "Decision Criteria" },
          { value: "economic-buyer", label: "Economic Buyer" },
        ],
      },
      {
        value: "sub3",
        label: "What key performance indicators (KPIs) did pwc aim to improve?",
        tags: [
          { value: "metrics", label: "Metrics" },
          { value: "decision-criteria", label: "Decision Criteria" },
        ],
      },
      {
        value: "sub4",
        label: "What competitive advantages was pwc seeking to gain?",
        tags: [
          { value: "decision-criteria", label: "Decision Criteria" },
          { value: "competition", label: "Competition" },
        ],
      },
    ],
  },
  {
    value: "q5",
    label:
      "What were their identified initial pain points, challenges, and key business initiatives?",
    subQuestions: [
      {
        value: "sub1",
        label:
          "What challenges has pwc faced since the start of the conversation?",
        tags: [
          { value: "decision-criteria", label: "Decision Criteria" },
          { value: "identified-pain", label: "Identified Pain" },
        ],
      },
      {
        value: "sub2",
        label:
          "What are some key business initiatives that were identified by pwc in its early years?",
        tags: [
          { value: "decision-criteria", label: "Decision Criteria" },
          { value: "economic-buyer", label: "Economic Buyer" },
        ],
      },
      {
        value: "sub3",
        label: "What were pwc's business challenges in the initial years?",
        tags: [
          { value: "identified-pain", label: "Identified Pain" },
          { value: "other", label: "Other" },
        ],
      },
      {
        value: "sub4",
        label: "How has pwc overcome those initial pain points and challenges?",
        tags: [
          { value: "identified-pain", label: "Identified Pain" },
          { value: "metrics", label: "Metrics" },
        ],
      },
      {
        value: "sub5",
        label:
          "What were the identified pain points for pwc during our conversation with them?",
        tags: [
          { value: "identified-pain", label: "Identified Pain" },
          { value: "decision-criteria", label: "Decision Criteria" },
        ],
      },
    ],
  },
];

export const OPTIONS = [{ value: "PWC", label: "PWC" }];

export const SUBQUESTION_TAGS = [
  { value: "metrics", label: "Metrics" },
  { value: "economic-buyer", label: "Economic Buyer" },
  { value: "decision-criteria", label: "Decision Criteria" },
  { value: "decision-process", label: "Decision Process" },
  { value: "paper-process", label: "Paper Process" },
  { value: "identified-pain", label: "Identified Pain" },
  { value: "champion", label: "Champion" },
  { value: "competition", label: "Competition" },
  {
    value: "security-and-compliance-risks",
    label: "Security and Compliance Risks",
  },
  { value: "other", label: "Other" },
];
