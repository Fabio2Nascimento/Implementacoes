import React from 'react'

const Index = ({ children }) => {

    let color = null;
    switch (children) {
        case 'Os':
            color = `bg-blue-500`;
            break;
        case 'Gestor':
            color = `bg-orange-500`;
            break;
        case 'Pdv':
            color = `bg-blue-700`;
            break;
        default:
    }
    // bg-[${color}]
    return (
        <a className={`select-none uppercase ${color} rounded-full`}><b>&nbsp;</b><b>&nbsp;</b>C&S {children}<b>&nbsp;</b><b>&nbsp;</b></a>
    )
}


export default Index