import Item from './Item';


function list() {
   return (
      <>
      <h1> Minha lista</h1>
      <ul>
          <Item nome="carro 1"   modelo="2009" marca="Ferrari" />
          <Item                  modelo="2002" marca="Ford" />
          <Item nome=" carro 3"                marca="Ford" />
      </ul>
    </>
     )
}

export default list;