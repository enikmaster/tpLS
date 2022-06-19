import { useState } from "react";

const Palavra = (props) => {

    return (
      <div className="word">
          {props.palavraNome}
      </div>
    );
}

export default Palavra;