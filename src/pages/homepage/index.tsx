import React, { useState } from "react";
import "./styles.css";
import GptQueryForm2 from "../../components/gptQueryForm2";
import ResponseContainer from "../../components/responseContainer";

const Homepage: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState<any | null>(null);

  const onSetResponse = (value: any) => {
    setResponse(value);
  };

  const onSetLoading = (value: boolean) => {
    setLoading(value);
  };

  return (
    <div className="homepage">
      <div className="leftside">
        <h1>Aviatrix Email Insights</h1>
        <div className="form-overflow">
          <GptQueryForm2
            onSetResponse={onSetResponse}
            loading={loading}
            onSetLoading={onSetLoading}
          />
        </div>
      </div>
      <div className="rightside">
        <ResponseContainer response={response} loading={loading} />
      </div>
    </div>
  );
};

export default Homepage;
