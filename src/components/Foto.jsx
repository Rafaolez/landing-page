import Style from "./css/Foto.module.css"
function Fotinha(props)
{
    return(
        <>
            <div className={Style.caixa}>
                <img src={props.IMG} alt="" Style={{ height: props.Tamanho, width: props.Largura, margintop: props.top}} className={Style.ImG}/>
            </div>
        </>
    )
}
export default Fotinha;

