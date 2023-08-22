import Stile from "./css/Rodape2.module.css"
function Rodape(props)
{
    return(
        <>
            <div className={Stile.DiveREdonda} >
                    <img src={props.Foto} alt="https://www.estrela.com.br/" className={Stile.Img}/>
                </div> 
            <div className={Stile.DiveMaior}>
                
            </div>
            
        </>
    )
}
export default Rodape;