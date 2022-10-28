import { useState } from 'react';
import './style.css'


const FormRange = ({register}) => {

    const [rangeValue, setRangeValue] = useState(10000)
    const [rangeValuePorcent, setRangeValuePorcent] = useState(8.9)

    return(
        <>
            <div className="formRangeContainer">
                <div className='titleLabelContainer'>
                    <h2>
                        SIMULADOR DE CRÉDITO
                    </h2>
                </div>
                <div className='labelContainer_1'>
                    <h5>
                        Monto deseado
                    </h5>
                </div>
                <div className='rangeContainer_1'>
                    <input 
                        min={10000} 
                        max={20000} 
                        step={50} 
                        defaultValue={rangeValue}
                        type="range" 
                        className='rangeInput_1' 
                        {...register('montoDeseado')} 
                        onChange={(e) => setRangeValue(e.target.value)}
                    />
                    <h3 className='labelRangeValue'>
                        {rangeValue}
                    </h3>
                </div >
                <div className='labelContainer_2'>
                    <h5>
                        Tasa anual
                    </h5>
                </div>
                <div className='rangeContainer_2'>
                    <input
                        type="range"
                        min={8.9}
                        max={19.25}
                        step={0.5}
                        defaultValue={rangeValuePorcent}
                        className='rangeInput_2'
                        {...register('tasaAnual')}
                        onChange={(e) => setRangeValuePorcent(e.target.value)}
                    />
                    <h3 className='rangeValuePorcentLabel' >
                        {rangeValuePorcent}%
                    </h3>
                </div>
            </div>
        </>
    )
}

export default FormRange