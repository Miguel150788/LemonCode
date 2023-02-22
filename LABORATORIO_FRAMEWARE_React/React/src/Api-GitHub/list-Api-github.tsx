import React from "react";
import { Link } from "react-router-dom";
import { ListPageComponent } from "./list-component";

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}
export const ListPage: React.FC = () => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);

  const hadlendSearch = (manolo: string) => {
    fetch(`https://api.github.com/orgs/${manolo}/members`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Error fecth members");
        }
      })
      .then(setMembers)
      .catch(() => {});
  };
  console.log(members);
  return (
    <>
      <h2>Hello from List page</h2>
      <ListPageComponent onShare={hadlendSearch} />
      <div className="list-user-list-container">
        <span className="list-header">Avatar</span>
        <span className="list-header">Id</span>
        <span className="list-header">Name</span>
        {members.map((member) => (
          <React.Fragment key={member.id}>
            <img src={member.avatar_url} />
            <span>{member.id}</span>
            <Link to={`/detail/${member.login}`}>{member.login}</Link>
          </React.Fragment>
        ))}
      </div>
      <Link to="/listPrincipal">Navigate to list pricipal page</Link>
    </>
  );
};
