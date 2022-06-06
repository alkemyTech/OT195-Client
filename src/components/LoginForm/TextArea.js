import React from "react";


const TextArea = (props) => {

  const {placeholder, name,rows,cols,style} = props;

  

  return (
    <textarea
                    placeholder="Escribe tu consulta:"
                    cols={40}
                    rows={8}
                    name="message"
                >
    </textarea>
  )
}

export default TextArea;
