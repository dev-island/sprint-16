import { FC, ChangeEvent, ReactNode } from "react";
type Props = {
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  children: ReactNode;
};

const Search: FC<Props> = ({ value, onChange, children }) => {
  return (
    <div>
      <label htmlFor="search">{children}</label>
      <input id="search" type="text" value={value} onChange={onChange} />
    </div>
  );
}

export default Search;
