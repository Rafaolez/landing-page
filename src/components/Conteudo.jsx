import Style from "./css/Conteudo.module.css"
function Conteudo(props)
{
    return(
        <>
            <div className={Style.caixamaior}> 
                <div className={Style.DivAzulTexto}>
                    <span className={Style.Texto}>{props.Texto}</span>
                </div> 
                <div>
                    <img src={props.Fotos} alt="" className={Style.Foto}/>
                </div>           
            </div>
        </>
    )
}
export default Conteudo;