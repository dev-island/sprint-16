import { ChangeEvent, useMemo, useState } from "react";
import useAppContext from "../../hooks/useAppContext";
import useFlashCards from "../../hooks/useManageFlashCards";
import Modal from "../Modal";
import Select from "react-select/creatable";
import styled from "styled-components";

type SelectOptionType = { label: string; value: string };

const CardForm = () => {
  const [card, setCard] = useState<{
    question: string;
    answer: string;
    tags: string[];
  }>({
    question: "",
    answer: "",
    tags: [],
  });

  const { toggleCreateModal, flashCardModal } = useAppContext();
  const { createCard, tags } = useFlashCards();

  const options = useMemo(() => {
    return tags.map((t) => ({ label: t, value: t }));
  }, [tags]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCard({ ...card, [name]: value });
  };

  const handleSelect = (selected: readonly SelectOptionType[] | null) => {
    const selectedTags = selected?.map((t) => t.value) || [];
    setCard({ ...card, tags: selectedTags });
  };

  const create = () => {
    createCard(card);
    toggleCreateModal();
  };

  return (
    <Modal isOpen={flashCardModal} close={toggleCreateModal}>
      <h1>Card Form</h1>
      <Form>
        <InputContainer>
          <label htmlFor="question">Question</label>
          <input
            type="text"
            name="question"
            value={card.question}
            onChange={handleChange}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="answer">Answer</label>
          <input
            type="text"
            name="answer"
            value={card.answer}
            onChange={handleChange}
          />
        </InputContainer>
        <Select isMulti options={options} onChange={handleSelect} />
      </Form>
      <div>
        <button onClick={toggleCreateModal}>Close</button>
        <button onClick={create}>Save</button>
      </div>
    </Modal>
  );
};

export default CardForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1.5rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
