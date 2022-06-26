import { useState } from "react"
import useClima from "../hooks/useClima"

const Formulario = () => {

    const [alerta, setAlerta] = useState('')

    const {busqueda, datosBusqueda, consultarClima} = useClima()

    const {ciudad, pais} = busqueda

    const handleSubmit = e => {
        e.preventDefault()
        if(Object.values(busqueda).includes('')) {
            setAlerta('Todos los campos son obligatorios');
            return
        }
        setAlerta('')
        consultarClima(busqueda)
    }

  return (
    <div className="contenedor">
        {alerta && <p>{alerta}</p>}
        <form
            onSubmit={handleSubmit}
        
        >
            <div className="campo2">
                <label htmlFor="ciudad">Ciudad</label>
                <input
                    type="text"
                    id="ciudad"
                    name="ciudad"
                    onChange={datosBusqueda}
                    value={ciudad}
                />
            </div>

            <div className="campo">
                <label htmlFor="pais">País</label>
                <select
                    id="pais"
                    name="pais"
                    onChange={datosBusqueda}
                    value={pais}
                >
                    <option value="">Seleccione un país</option>
                    <option value="DE">Alemania</option>
                    <option value="ES">España</option>
                    <option value="FR">Francia</option>
                    <option value="IT">Italia</option>
                    <option value="PT">Portugal</option>
                    <option value="GB">Reino Unido</option>
                    <option value="UA">Ucrania</option>
                </select>
            </div>

            <input
                type="submit"
                value="Consultar Clima"
            />
        </form>
    </div>
  )
}

export default Formulario