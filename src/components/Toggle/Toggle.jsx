import { useState, useContext, createContext } from "react";


const ToggleContext = createContext()
export default function Toggle({children}) {
    const [on, setOn] = useState(false)

    function toggle() {
        setOn(on => !on)
    }
    return (
        <ToggleContext.Provider value={{on, toggle}}>
            {children}
        </ToggleContext.Provider>
    )
}

export {ToggleContext}