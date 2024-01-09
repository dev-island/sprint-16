import { FC } from "react";
import Card from "../../../../components/Card";
import { CardTitle, CardFooter, Button, Container } from "../..";
import { StudyData } from "../../../../hooks/useStudy";

export type Props = {
  reset: () => void;
  studyData: StudyData;
};

const Finished: FC<Props> = ({ reset, studyData }) => {
  return (
    <Container>
      <Card>
        <CardTitle>Finished!</CardTitle>
        <div>Stats</div>
        <div>
          <ul>
            {(Object.keys(studyData) as Array<keyof typeof studyData>).map(
              (key) => (
                <li key={key}>
                  {key}: {studyData[key]}
                </li>
              )
            )}
          </ul>
        </div>
        <CardFooter>
          <Button onClick={reset}>Study Again</Button>
        </CardFooter>
      </Card>
    </Container>
  );
};

export default Finished;
