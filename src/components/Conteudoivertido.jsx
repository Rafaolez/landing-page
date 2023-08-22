import Style from "./css/Conteudo.module.css"
function Conteudoivertido(props)
{
    return(
        <>
            <div className={Style.caixamaior}> 
                <div>
                    <img src={props.Imagem} alt="" className={Style.Foto}/>
                </div>  
                <div className={Style.DivAzulTexto}>
                    <span className={Style.Texto}>{props.Texto}</span>
                </div>          
            </div>
        </>
    )
}
export default Conteudoivertido;