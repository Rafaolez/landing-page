import Input from "./Input";
import Style from "./css//CaixabaixoDeTudo.module.css"
function CaixabaixoDeTudo(props)
{
    return(
        <>
            <div className={Style.caixaAzul}>
                <br />
                <br />
                <div className={Style.Caixatexto}>
                    <span className={Style.Texto1}>{props.TextoPORutimp}</span>
                    <br />
                    <span className={Style.Texto2}>{props.Link}</span>
                    <br />
                    <span className={Style.Texto3}>{props.info}</span>
                </div>
                <div className={props.Caixainput}>
                    <Input TipoInput="email" textoL="Email" DentroTex="Email" />
                </div>
                <button className={Style.BtN}>Emviar</button>
            </div>
        </>
    )
}
export default CaixabaixoDeTudo;