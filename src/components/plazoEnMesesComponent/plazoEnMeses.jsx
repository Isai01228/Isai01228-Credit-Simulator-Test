import './style.css'

const PlazoEnMeses = ({register, errors}) => {
    return (
        <>
        <hr />
        <div className="plazoContainer">
            <div className='plazoLabelContainer'>
                <h5>
                    Plazo en meses
                </h5>
            </div>
            <div className='btnsContainer'>
                <input
                id='btnRadio'
                {...register("plazoEnMeses", {required: true})}
                aria-invalid={errors.plazoEnMeses ? "true" : "false"}
                type="radio"
                value="12"
                />
                <input
                {...register("plazoEnMeses", {required: true})}
                aria-invalid={errors.plazoEnMeses ? "true" : "false"}
                type="radio"
                value="24"
                />
                <input
                {...register("plazoEnMeses", {required: true})}
                aria-invalid={errors.plazoEnMeses ? "true" : "false"}
                type="radio"
                value="36"
                />
                {errors.plazoEnMeses?.type === 'required' && <p className='InputAlert' role="alert">Plazo en meses requerido</p>}
            </div>
        </div>
        <hr />
        </>
    )
}

export default PlazoEnMeses