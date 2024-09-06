import React from "react";
import "./styles.css";
import { LinkOutlined } from "@ant-design/icons";

interface Attachment {
  title: string;
  url: string;
}

interface EmailAttachmentsProps {
  attachments: Attachment[];
}

const EmailAttachments: React.FC<EmailAttachmentsProps> = ({ attachments }) => {
  return (
    <ul className="email-attachments">
      {attachments.map((attachment, index) => (
        <li key={index}>
          <LinkOutlined />
          <a
            href={attachment.url}
            target="_blank"
            rel="noopener noreferrer"
            className="attachment-link"
          >
            {attachment.title}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default EmailAttachments;
