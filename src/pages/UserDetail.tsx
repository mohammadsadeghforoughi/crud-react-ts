import React, { useEffect, useState } from "react";
import UserList from "../DataFactory";
import { useParams, useHistory } from "react-router-dom";
const UsersDetail: React.FC = () => {
  const params = useParams<{ id: string }>();
  const History = useHistory();
  const [UserID, setUserID] = useState<string>("");
  const [UserDetail, setUserDetail] =
    useState<{
      name: string;
      family: string;
      age: number;
      id: string;
    }>();

  const GoToUsersPage = () => {
    History.push("/users");
  };

  useEffect(() => {
    setUserID(params.id);
  }, []);

  useEffect(() => {
    UserID && setUserDetail(UserList.find((i) => i.id == UserID));
  }, [UserID]);

  return (
    <>
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h3>User {UserID} </h3>
        <div style={{ width: "18rem" }}>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>name:</span>
            <span>{UserDetail?.name}</span>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>family:</span>
            <span>{UserDetail?.family}</span>
          </div>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>age:</span>
            <span>{UserDetail?.age}</span>
          </div>
        </div>
        <button onClick={GoToUsersPage}> {`<= Back to Users List Page`}</button>
      </div>
    </>
  );
};

export default UsersDetail;
