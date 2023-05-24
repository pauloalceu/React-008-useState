import  PropTypes from 'prop-types'

function Item({nome, marca, modelo}) {
    return (
       <>
           <li>{nome}</li>
            <li>{marca}</li>
            <li>{modelo}</li>                        
     </>
      )
 }

Item.propTypes = {
    nome: PropTypes.string.isRequired,
    modelo: PropTypes.number,
}

Item.defaultProps = {
    nome: 'Faltou o nome',
    modelo: 0,
 } 



 export default Item