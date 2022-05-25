import React, { useState } from "react";
import InitPage from "./initPage";

const Page = () => {
  const [page, setPage] = useState(0);
  const [name, setName] = useState();
  
  const SwitchPage = () => {
    switch (page) {
      case 0:
        return <InitPage setPage={setPage} />;
      case 1:
        return "hola mundo ";
    }
  };
  return (
    <div>
      <SwitchPage />
    </div>
  );
};

export default Page;
