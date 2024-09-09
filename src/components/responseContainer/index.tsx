import React from "react";
import "./styles.css";
import ResponseMessageContent from "../responseMessageContent";
import EmailTags from "../emailTags";
// import EmailAttachments from "../emailAttachments";
import { Spin } from "antd";
import { GptResponse } from "../../types/apiTypes";

// const response = {
//   title: "Initial Pain Points, Challenges, and Key Business Initiatives",
//   sections: {
//     PainPoints: [
//       "The company is facing challenges in upending their current Azure architecture to insert Aviatrix without a compelling driver.",
//       "The company sees no value in making changes to their current Azure setup.",
//       "The way Aviatrix captures revenue is at odds with how PWC is using them today.",
//     ],
//     Challenges: [
//       "The company is struggling to find a compelling driver to justify changes to their current Azure architecture.",
//       "The company is hesitant to make changes to their current setup without a clear benefit.",
//     ],
//     KeyBusinessInitiative: [
//       "The company is focused on delivering new requests and expanding their Azure workloads.",
//       "The company views Aviatrix as a strategic partner, but is looking for a compelling driver to justify changes to their current setup.",
//       "The company is seeking a solution that aligns with their current Azure architecture and provides a clear ROI.",
//     ],
//     TechnicalDetails: [
//       "The company is currently using Azure and is looking to expand their workloads.",
//       "The company is using Aviatrix, but is looking for a way to integrate them more seamlessly into their current setup.",
//       "The company is seeking a solution that provides a clear ROI and aligns with their current Azure architecture.",
//     ],
//     RelevantContext: [
//       "The conversation is focused on the company's use of Aviatrix and their desire to expand their Azure workloads.",
//       "The company is seeking a solution that provides a clear ROI and aligns with their current Azure architecture.",
//       "The company views Aviatrix as a strategic partner, but is looking for a compelling driver to justify changes to their current setup.",
//     ],
//   },
// };

// const formatted_emails = [
//   {
//     Subject:
//       "Declined: Aviatrix / PWC Sync up on GCP & Terraform @ Mon Jan 31, 2022 3pm - 4pm (EST) (Gene Leyfer)",
//     From: "milan.r.thaker@pwc.com",
//     To: "gleyfer@aviatrix.com",
//     CC: "No CC Addresses",
//     BCC: "No BCC Addresses",
//     ReceivedDateTime: "2022-01-31T18:01:07Z",
//     BodyText:
//       "milan.r.thaker@pwc.com has declined this invitation... [rest of the email body]",
//   },
//   {
//     Subject:
//       "GCP Roadmap and Architecture Design Walkthrough for various Operations Groups",
//     From: "nirmala.kakkuppi@pwc.com",
//     To: "ahmad.hamilton@pwc.com, ... [list of recipients]",
//     CC: "No CC Addresses",
//     BCC: "No BCC Addresses",
//     ReceivedDateTime: "2022-12-20T22:52:54Z",
//     BodyText:
//       "Agenda will include GCP Scope of work/Timelines and SAFe delivery model... [rest of the email body]",
//   },
// ];

// const s3_attachment_links = [
//   {
//     title:
//       "Global IFS Aviatrix SRT Revalidation Findings Report - Sep 02, 2021 (97)",
//     url: "https://aviatrix-outlook-ingestion.s3.amazonaws.com/PWC_Json_MetaData_Attachments/attachments/Global_IFS_Aviatrix_SRT%20Revalidation%20Findings%20Report_Sep%2002%2C%202021%5B97%5D.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQFLZDXG5N2FUPDWC%2F20240905%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20240905T133056Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=b1c64b7cff7e86daac455574be6f241406383fbcea0c23fcedc07352488b6255",
//   },
//   {
//     title:
//       "Global IFS Aviatrix SRT Revalidation Findings Report - Sep 23, 2021",
//     url: "https://aviatrix-outlook-ingestion.s3.amazonaws.com/PWC_Json_MetaData_Attachments/attachments/Global_IFS_Aviatrix_SRT%20Revalidation%20Findings%20Report_Sep%2023%2C%202021.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQFLZDXG5N2FUPDWC%2F20240905%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20240905T133056Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=7e97a5f467dc093025f11fa4f2581b9c3c5c22e0eecd2d020d29d1bdc7320adc",
//   },
//   {
//     title: "PWC Ops Meeting Slides",
//     url: "https://aviatrix-outlook-ingestion.s3.amazonaws.com/PWC_Json_MetaData_Attachments/attachments/PWC%20Ops%20Meeting%20Slides.pptx?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQFLZDXG5N2FUPDWC%2F20240905%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20240905T133056Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=c240385c2ba8464d3615a273926729f5278579ecd519479a9f22c8aa7f8265e7",
//   },
//   {
//     title: "WAN Sponsorship Guide 2022",
//     url: "https://aviatrix-outlook-ingestion.s3.amazonaws.com/PWC_Json_MetaData_Attachments/attachments/WAN%20Sponsorship%20Guide%202022.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQFLZDXG5N2FUPDWC%2F20240905%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20240905T133056Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=c791cf6a5e93ee6cdf8b976aba48b15eba93e7aeb9cfdc40abca9d471ac3bc11",
//   },
//   {
//     title: "Partner-Going to Cloud-Hammad-v1 (Read-Only)",
//     url: "https://aviatrix-outlook-ingestion.s3.amazonaws.com/PWC_Json_MetaData_Attachments/attachments/Partner-Going%20to%20cloud-Hammad-v1%20%20-%20%20Read-Only.pptx?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQFLZDXG5N2FUPDWC%2F20240905%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20240905T133056Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=a9286d0a33bc9814588cf3703914874e4508b4927b453247fbfad551354c645a",
//   },
//   {
//     title:
//       "Global IFS Aviatrix SRT Revalidation Findings Report - Sep 02, 2021",
//     url: "https://aviatrix-outlook-ingestion.s3.amazonaws.com/PWC_Json_MetaData_Attachments/attachments/Global_IFS_Aviatrix_SRT%20Revalidation%20Findings%20Report_Sep%2002%2C%202021.pdf?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQFLZDXG5N2FUPDWC%2F20240905%2Fus-east-2%2Fs3%2Faws4_request&X-Amz-Date=20240905T133056Z&X-Amz-Expires=3600&X-Amz-SignedHeaders=host&X-Amz-Signature=ab6862bf5113193de6945b38ce5fb831d1cb251b72b97befd4807de229a42395",
//   },
// ];

interface ResponseContainerProps {
  loading: boolean;
  response?: GptResponse;
}

const ResponseContainer: React.FC<ResponseContainerProps> = ({
  loading,
  response,
}) => {
  return (
    <div className="response-container">
      {loading ? (
        <Spin size="large" />
      ) : (
        response && (
          <>
            {/* <h3>Response</h3> */}
            <ResponseMessageContent response={response.response} />
            <h3>{`Context Emails (${response.formatted_emails.length})`}</h3>
            <EmailTags
              formatted_emails={response.formatted_emails}
              // attachments={response.s3_attachment_links}
            />
            {/* <h3>Context Attachments</h3>
            <EmailAttachments attachments={response.s3_attachment_links} /> */}
          </>
        )
      )}
    </div>
  );
};

export default ResponseContainer;
