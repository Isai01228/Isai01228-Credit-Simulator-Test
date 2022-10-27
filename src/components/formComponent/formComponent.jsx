import { useForm } from "react-hook-form";

import './style.css'
const FormComponent = () => {
    const pagoMensual = '$ 880.67'
    const comisionApertura = '$ 348.00'
    const montoDepositado = '$ 9,652.00'
    const TotalPagado = '$ 10,568.00'
    const CAT = '15.71'
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    return(
        <>
        <div className="formContain">
            <form action="" className="creditForm" onSubmit={handleSubmit(onSubmit)}>
                <div id='div-1'>
                    <div className="labelPago">
                        <h5 id="label-1">
                            Pago mensual 
                        </h5>
                    </div>
                    <div className="pagoinput">
                        <input className="firstInput" type="text" defaultValue={pagoMensual} />
                    </div>
                </div>

                <div id='div-2' >
                    <div className="labelComisión">
                        <h5 id="label-2">
                            Comisión de apertura
                        </h5>
                    </div>
                    <div className="comisionInput">
                        <input className="secondInput" type="text" defaultValue={comisionApertura} />
                    </div>
                </div>

                <div id='div-3'>
                    <div className="labelMonto">
                        <h5 id="label-3">
                            Monto neto Depositado
                        </h5>
                    </div>
                    <div className="mensualInput" >
                        <input className="thirdInput" type="text" defaultValue={montoDepositado} />
                    </div>
                </div>

                <div id='div-4' >
                    <div className="labelTotal">
                        <h5 id="label-4" >
                            Total pagado
                        </h5>
                    </div>
                    <div className="totalInput">
                        <input className="fourthInput" type="text" defaultValue={TotalPagado} />
                    </div>
                </div>

                <div id='div-5' >
                    <div className="labelCAT" >
                        <h5 id="label-5" >
                            CAT
                        </h5>
                    </div >
                    <div className="CATInput" >
                        <input className="fifthInput" type="text" defaultValue={CAT} />
                    </div>
                </div>     
            </form>
        </div>
        <div className="buttonContain">
            <button type="submit" className="btnSolicitar" >SOLICITAR MI CREDITO</button>
        </div>
        </>
    )
}

export default FormComponent