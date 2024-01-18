import { FC } from "react";
import useManageFlashCards from "../../hooks/useManageFlashCards";
// View stats for your cards
const StatsView: FC = () => {
  const { totalCards, stats } = useStats();

  return <div>Stats Page</div>;
};

export default StatsView;
