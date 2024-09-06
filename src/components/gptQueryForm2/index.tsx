import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";
import { Button, Form, Input, Select } from "antd";
import React, { useState } from "react";
import { OPTIONS, QUESTIONS, SUBQUESTION_TAGS } from "./../../data/questions";
import "./styles.css";
import { generateResponse } from "../../api/generate";

interface GptQueryForm2Props {
  loading: boolean;
  onSetLoading: (value: boolean) => void;
}

const GptQueryForm2: React.FC<GptQueryForm2Props> = ({
  loading,
  onSetLoading,
}) => {
  const [form] = Form.useForm();
  const [selectedSubQuestions, setSelectedSubQuestions] = useState<any[]>([]);

  const onFinish = async (values: any) => {
    console.log("Received values of form:", values);
    onSetLoading(true);
    // setTimeout(() => {
    //   onSetLoading(false);
    // }, 3000);
    const response = await generateResponse(values);
  };

  const handleQuestionChange = (questionValue: string) => {
    // Find the selected question object
    const selectedQuestion = QUESTIONS.find((q) => q.value === questionValue);

    // If the question has subquestions, set them in the Form List
    if (selectedQuestion?.subQuestions) {
      const initialSubQuestions = selectedQuestion.subQuestions.map((sub) => ({
        question: sub.label,
        tags: sub.tags.map((tag) => tag.value), // Pre-fill the tags
      }));
      setSelectedSubQuestions(initialSubQuestions);
      form.setFieldsValue({ sub_questions: initialSubQuestions });
    } else {
      setSelectedSubQuestions([]);
      form.setFieldsValue({ sub_questions: [] });
    }
  };

  return (
    <Form
      form={form}
      name="dynamic_form_nest_item"
      onFinish={onFinish}
      autoComplete="off"
      layout="vertical"
      className="gptQueryForm"
    >
      {/* Select Question */}
      <Form.Item
        name="query"
        label="Choose a question"
        rules={[{ required: true, message: "Please select a question!" }]}
      >
        <Select
          className="gptQueryFormSelect"
          placeholder="Select a question"
          onChange={handleQuestionChange} // Handle question change
        >
          {QUESTIONS.map((q) => (
            <Select.Option key={q.value} value={q.value}>
              {q.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      {/* Select Option */}
      <Form.Item
        name="company"
        label="Choose an option"
        rules={[{ required: true, message: "Please select an option!" }]}
      >
        <Select placeholder="Select an option" className="gptQueryFormSelect">
          {OPTIONS.map((opt) => (
            <Select.Option key={opt.value} value={opt.value}>
              {opt.label}
            </Select.Option>
          ))}
        </Select>
      </Form.Item>

      {/* Subquestions */}
      <Form.List
        name="sub_questions"
        rules={[
          {
            validator: async (_, sub_questions) => {
              if (!sub_questions || sub_questions.length === 0) {
                return Promise.reject(
                  new Error("Please add at least one subquestion")
                );
              }
            },
          },
        ]}
        initialValue={selectedSubQuestions} // Set the initial value to the subquestions
      >
        {(fields, { add, remove }, { errors }) => (
          <>
            {fields.map(({ key, name, ...restField }) => (
              <div key={key} className="form-list-wrapper">
                {/* Subquestion Input */}
                <Form.Item
                  {...restField}
                  name={[name, "question"]}
                  label="Subquestion"
                  rules={[{ required: true, message: "Missing Subquestion" }]}
                  className="subquestion-item-name"
                >
                  <Input placeholder="Enter subquestion" />
                </Form.Item>

                {/* Tags Multi-Select */}
                <Form.Item
                  {...restField}
                  name={[name, "tags"]}
                  label="Tags"
                  rules={[{ required: true, message: "Please select tags" }]}
                  className="subquestion-item-tags"
                >
                  <Select
                    mode="multiple"
                    placeholder="Select tags"
                    options={SUBQUESTION_TAGS} // All available tags
                    style={{ fontSize: "12px" }}
                  />
                </Form.Item>
                <MinusCircleOutlined onClick={() => remove(name)} />
              </div>
            ))}
            <Form.Item>
              <Button
                type="dashed"
                onClick={() => add()}
                block
                icon={<PlusOutlined />}
                disabled={fields.length >= 5 || loading}
              >
                Add Subquestion
              </Button>
              <Form.ErrorList errors={errors} />
            </Form.Item>
          </>
        )}
      </Form.List>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="cta"
          loading={loading}
        >
          Generate Response
        </Button>
      </Form.Item>
    </Form>
  );
};

export default GptQueryForm2;
