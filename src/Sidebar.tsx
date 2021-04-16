import React from "react";
import List from "./List";
import News from "./News";

const Sidebar = () => {
   return (
      <List
         title="Hello World, I am learning typescript"
         elements={[<News />, <News />, <News />]}
      ></List>
   );
};

export default Sidebar;
