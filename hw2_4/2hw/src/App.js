import Form from "./components/form"
import Table from "./components/table"
import { useState } from "react";
import './style.css'


function App() {
  const [data, setData] = useState({});
  return (
    <div className="wrapper">
      <Form setData={setData} />
      <Table data={data} />
    </div>
  );
}

export default App;
