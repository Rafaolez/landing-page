import Style from "./css/Input.module.css"
function Input(props)
{
    return(
        <>
            <div>
                <label htmlFor="" className={Style.Label}>{props.textoL}</label>
                <input type={props.TipoInput} name="" id="" className={Style.Input} placeholder={props.DentroTex}/>
            </div>
        </>
    )
}
export default Input;