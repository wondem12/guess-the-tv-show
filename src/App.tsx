import { FC } from "react";

import GlobalLayout from "./components/Layout/GlobalLayout";
import Routes from "./routes/Routes";

const App: FC = () => {
  return (
    <>
      <GlobalLayout>
        <Routes />
      </GlobalLayout>
    </>
  );
};

export default App;
