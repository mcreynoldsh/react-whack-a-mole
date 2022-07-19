import './Mole.css'
import MoleIcon from './Mole.svg'

function Mole(props) {
  if(props.dens.isMoleVisible){
    return (
      <div className="den">
        <img onClick = {props.handleClick} src={MoleIcon} className="Mole" alt="Mole" />
      </div>
    )
  }
  else{
    return (
      <div>
        
      </div>
    )
  }
}

export default Mole
