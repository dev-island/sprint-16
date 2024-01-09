import { FC } from "react";
import Card from "../../../../components/Card";
import { Container } from '../..'

const NoCards: FC = () => {
  return (
    <Container>
      <Card>
        <div>
          <h2>There are no cards in this deck</h2>
          <p>
            You can add cards to this deck by clicking the{" "}
            <strong>Add Card</strong> button above.
          </p>
        </div>
      </Card>
    </Container>
  );
};

export default NoCards;
