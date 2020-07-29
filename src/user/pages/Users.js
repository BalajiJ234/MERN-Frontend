import React from "react";

import UsersList from "../components/UserList";

const User = () => {
  const USERS = [
    {
      id: "u1",
      name: "Balaji",
      image: "https://pbs.twimg.com/profile_images/901381829755715584/BfGEvc5C_400x400.jpg",
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default User;
