import Stile from "./css/Rodape.module.css"
function Rodape(props)
{
    return(
        <>
            <div className={Stile.DiveMaior}>
                <div className={Stile.DiveREdonda} >
                    <img src={props.Foto} alt="https://www.estrela.com.br/" className={Stile.Img}/>
                </div> 
            </div>
            
        </>
    )
}
export default Rodape;