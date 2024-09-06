import { Modal, Popover, Tag } from "antd";
import React, { useState } from "react";
import "./styles.css";

interface Email {
  Subject: string;
  From: string;
  To: string;
  CC: string;
  BCC: string;
  ReceivedDateTime: string;
  BodyText: string;
}

interface EmailTagsProps {
  formatted_emails: Email[];
}

const EmailTags: React.FC<EmailTagsProps> = ({ formatted_emails }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedEmail, setSelectedEmail] = useState<Email | undefined>(
    undefined
  );

  const openModal = (email: Email) => {
    setSelectedEmail(email);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const content = (
    <p style={{ fontSize: "12px" }}>Click to see the complete email</p>
  );

  return (
    <>
      <div className="email-tags">
        {formatted_emails.map((email, index) => (
          <Popover content={content} trigger="hover" key={index}>
            <Tag className="email-tag" onClick={() => openModal(email)}>
              <div className="tag-content">
                <div className="tag-subject">
                  <b>Subject: </b>
                  {email.Subject}
                </div>
              </div>
            </Tag>
          </Popover>
        ))}
      </div>
      <Modal open={isModalOpen} onCancel={closeModal} footer={null}>
        {selectedEmail && (
          <div className="email-modal-content">
            <p>
              <strong>Subject:</strong> {selectedEmail.Subject}
            </p>
            <p>
              <strong>From:</strong> {selectedEmail.From}
            </p>
            <p>
              <strong>To:</strong> {selectedEmail.To}
            </p>
            <p>
              <strong>CC:</strong> {selectedEmail.CC}
            </p>
            <p>
              <strong>BCC:</strong> {selectedEmail.BCC}
            </p>
            <p>
              <strong>Received DateTime:</strong>{" "}
              {new Date(selectedEmail.ReceivedDateTime).toLocaleString()}
            </p>
            <hr />
            <p>{selectedEmail.BodyText}</p>
          </div>
        )}
      </Modal>
    </>
  );
};

export default EmailTags;
