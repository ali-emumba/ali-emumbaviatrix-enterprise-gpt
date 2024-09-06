import React, { useState } from "react";
import "./styles.css";
import GptQueryForm2 from "../../components/gptQueryForm2";
import ResponseContainer from "../../components/responseContainer";

const Homepage: React.FC = () => {
  const [loading, setLoading] = useState(false);

  const onSetLoading = (value: boolean) => {
    setLoading(value);
  };

  return (
    <div className="homepage">
      <div className="leftside">
        <h1>Aviatrix Enterprise GPT</h1>
        <GptQueryForm2 loading={loading} onSetLoading={onSetLoading} />
      </div>
      <div className="rightside">
        <ResponseContainer loading={loading} />
      </div>
    </div>
  );
};

export default Homepage;
