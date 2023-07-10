import React from 'react'

export default class Error extends React.Component{
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }
    
    static getDerivedStateFromError(error) {
        return { hasError: true };
    }
    
    render() {
        if (this.state.hasError) {
            return <h1>Ha ocurrido un error en el Aplicativo.</h1>;
        }
        // Caso contrario retornamos los componentes hijos
        return this.props.children;
    }
}
