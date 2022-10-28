import { useForm } from "react-hook-form";
import PlazoEnMeses from "../plazoEnMesesComponent/plazoEnMeses";
import FormRange from "../formRangeComponent/formRange";
import { useState } from "react";
import './style.css'

const FormComponent = () => {

    const defaultValues = {
        montoDeseado:10000,
        plazoEnMeses: 24,
        tasaAnual: 8.9
    }

    const commissionForOpening = 348
    const CAT = '15.71%'

    const [formState, setFormState] = useState(defaultValues)
    const [monthAmountInput, setMonthAmountInput] = useState(0)
    const [commissionInput, setCommissionInput] = useState(0)
    const [totalPayInput, setTotalPayInput] = useState(0)
    const { register, handleSubmit,formState: { errors } } = useForm(0);
    
    const onSubmit = data =>{
        setFormState(data)
        console.log(formState, data);
        monthPay()
        netAmounth()
        totalPay()
    }
    const {montoDeseado, plazoEnMeses, tasaAnual} = formState;

    const monthPay = () => {
        const monthAmount = (montoDeseado/plazoEnMeses) + tasaAnual
        setMonthAmountInput(monthAmount.toFixed(2));
    }

    const netAmounth = () => {
        const res = (montoDeseado * plazoEnMeses) - commissionForOpening
        setCommissionInput(res)
    }

    const totalPay = () => {
        const res = (commissionForOpening + tasaAnual + montoDeseado)
        setTotalPayInput(res)
    }
    return(
        <>
        <form onSubmit={handleSubmit(onSubmit)}>
            <FormRange register={register} errors={errors} />
            <PlazoEnMeses  register={register} errors={errors} />
        </form>
        <div className="formContain">
            <div action="" className="creditForm">
                <div id='div-1'>
                    <div className="labelPago">
                        <h5 id="label-1">
                            Pago mensual 
                        </h5>
                    </div>
                    <div className="pagoinput">
                        <input className="firstInput"  value={`$ ${monthAmountInput}`} type="text" readOnly />
                    </div>
                </div>

                <div id='div-2' >
                    <div className="labelComisión">
                        <h5 id="label-2">
                            Comisión de apertura
                        </h5>
                    </div>
                    <div className="comisionInput">
                        <input className="secondInput" value={`$ ${commissionForOpening}`} type="text" readOnly/>
                    </div>
                </div>

                <div id='div-3'>
                    <div className="labelMonto">
                        <h5 id="label-3">
                            Monto neto Depositado
                        </h5>
                    </div>
                    <div className="mensualInput" >
                        <input className="thirdInput" value={`$ ${commissionInput}`} type="text" readOnly/>
                    </div>
                </div>

                <div id='div-4' >
                    <div className="labelTotal">
                        <h5 id="label-4" >
                            Total pagado
                        </h5>
                    </div>
                    <div className="totalInput">
                        <input className="fourthInput" value={`$ ${totalPayInput}`} type="text" readOnly />
                    </div>
                </div>

                <div id='div-5' >
                    <div className="labelCAT" >
                        <h5 id="label-5" >
                            CAT
                        </h5>
                    </div >
                    <div className="CATInput" >
                        <input className="fifthInput" value={CAT} type="text" readOnly />
                    </div>
                </div>     
            </div>
        </div>
        <div className="buttonContain">
            <button type="submit" className="btnSolicitar" onClick={handleSubmit(onSubmit)} >SOLICITAR MI CREDITO</button>
        </div>
        </>
    )
}

export default FormComponent