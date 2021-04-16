import React from "react";

interface Props {
   title: string;
   elements: React.ReactNode[];
}

const List: React.FC<Props> = ({ title, elements }) => {
   return (
      <div>
         <h3>{title}</h3>
         {elements.map((el) => (
            <h4>{el}</h4>
         ))}
      </div>
   );
};

export default List;
