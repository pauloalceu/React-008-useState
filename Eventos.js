import { useState } from "react";


function Evento ({ valor })
{
   function meuEvento(){
    //document.getElementById("root").append('oi');
    alert(name);
   }

const [name, setName] = useState('Matheus')

  return(
    <form>
    <div>
       <p>Clique para disparar um evento</p>      
       <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
       <button onClick={meuEvento}> Ativar!</button>
    </div>
    </form>
  )
}


export default Evento