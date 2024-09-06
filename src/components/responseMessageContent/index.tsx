import React from "react";
import { Typography } from "antd";
import "./styles.css";

const { Title, Paragraph } = Typography;

let m =
  "**Initial Pain Points, Challenges, and Key Business Initiatives**\n\n**Pain Points:**\n\n* PwC has struggled with integrating Cisco SD-WAN at scale and has had difficulty integrating it into their cloud network.\n* They have had a hard time moving out of data centers and have been looking for a solution to interconnect their regions and locations.\n* They have built a Palo firewall transit solution in Azure that works, but they are hesitant to migrate away from it.\n\n**Challenges:**\n\n* PwC is looking for a solution that can provide inter-region, inter-cloud connectivity and firewall services forbranches.\n* They are struggling with the scalability of their current solution and are looking for a more robust solution.\n* They are also looking for a solution that can provide access to Azure workloads.\n\n**Key Business Initiatives:**\n\n* PwC is looking to move out of data centers and into the cloud.\n* They are looking for a solution that can provide inter-region, inter-cloud connectivity and firewall services for branches.\n* They are also looking to reduce costs and improve scalability.\n\n**Features and Requests:**\n\n* PwC is requesting that Aviatrix implement BGP modernization efforts to provide more flexibility in how they design with the backbone.\n* They are also requesting that Aviatrix provide access to Azure workloads.\n\n**Current Deployment:**\n\n* Aviatrix has deployed transit, spokes, and Firenet in AWS and GCP.\n* They are expanding into Azure but have had issues with heartburn on that deployment.\n\n**ROI and Impact Expectation:**\n\n* PwC has seen a major win in moving out of data centers by moving firewall services for branches into the cloud using Aviatrix Firenet.\n* They have also seen a benefit in interconnecting regions using the cloud provider as a backbone rather than relying on Cisco SD-WAN.\n\n**Account Health:**\n\n* Aviatrix has been solving the expected problems for PwC, but they have been constantly asking for features.\n* PwC is looking for reassurance that Aviatrix hears their concerns and wants to address them, but it will take time to get there.";

interface Response {
  title: string;
  sections: { [key: string]: string[] };
}

interface ResponseMessageContentProps {
  response: Response;
}

const ResponseMessageContent: React.FC<ResponseMessageContentProps> = ({
  response,
}) => {
  return (
    <div className="response-message-content">
      <Title level={3} className="response-title">
        {response.title}
      </Title>
      <div className="response-content">
        {Object.entries(response.sections).map(
          ([sectionTitle, sectionContent], index) => (
            <div key={index} className="response-section">
              <Title level={5} className="response-section-title">
                {sectionTitle}
              </Title>
              {sectionContent.map((content, idx) => (
                <Paragraph key={idx} className="response-paragraph">
                  {content}
                </Paragraph>
              ))}
            </div>
          )
        )}
        {/* {JSON.parse(m)} */}
        {/* {`${m}`} */}
      </div>
    </div>
  );
};

export default ResponseMessageContent;
