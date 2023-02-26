import React from "react";
import { useDebounce } from "use-debounce";

interface MemberEntity {
  id: string;
  name: string;
  status: string;
  species: string;
  image: string;
}
export const List = () => {
  const [filter, setFilter] = React.useState("1");
  const [member, setMember] = React.useState<MemberEntity>({
    id: "",
    name: "",
    status: "",
    species: "",
    image: "",
  });
  const [debounceUser] = useDebounce(filter, 1500);
  console.log(member);
  React.useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${filter}`)
      .then((response) => response.json())
      .then(setMember);
  }, [debounceUser]);

  return { filter, setFilter, member };
};
