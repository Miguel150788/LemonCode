import React from "react";
import { MyUserContext } from "../List-Principal/list-user-data";

interface Props {
  onShare: (filter: string) => void;
}

export const ListPageComponent: React.FC<Props> = (props) => {
  const { username, changeUsername } = React.useContext(MyUserContext);
  const { onShare } = props;
  const [filter, setFilter] = React.useState(username);
  React.useEffect(() => {
    changeUsername(filter);
  }, [filter]);
  React.useEffect(() => {
    onShare(filter);
  }, []);
  return (
    <>
      <input value={filter} onChange={(e) => setFilter(e.target.value)} />
      <button onClick={() => onShare(filter)}>Pulsar</button>
    </>
  );
};
