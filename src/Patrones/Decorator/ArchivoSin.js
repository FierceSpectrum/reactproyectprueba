import React, { useState } from 'react';

function Sin() {
    const [textareaValue, setTextareaValue] = useState('');

    class Archivo {
        constructor(nombre) {
            this.nombre = nombre;
        }
    
        mostrarContenido() {
            const mensaje = `Contenido del archivo ${this.nombre}:`;
            console.log(mensaje);
            actualizarTextarea(mensaje);
        }
    
        // Métodos adicionales para encriptar, comprimir, guardar en diferentes formatos, etc.
        encriptar() {
            const mensaje = "Contenido encriptado:";
            console.log(mensaje);
            actualizarTextarea(mensaje);
            this.mostrarContenido();
        }
    
        comprimir() {
            const mensaje = "Contenido comprimido:";
            console.log(mensaje);
            actualizarTextarea(mensaje);
            this.mostrarContenido();
        }
    
        guardarEnFormato(formato) {
            const mensaje = `Guardando archivo en formato ${formato}:`;
            console.log(mensaje);
            actualizarTextarea(mensaje);
        }
    
        cargarDesdeFormato(formato) {
            const mensaje = `Cargando archivo en formato ${formato}:`;
            console.log(mensaje);
            console.log("Contenido cargado:");
            actualizarTextarea(mensaje);
            // Lógica para cargar el archivo en el formato especificado.
        }
    }
    
    // Función para actualizar el textarea en lugar de tenerla como una función global
    const actualizarTextarea = (mensaje) => {
        setTextareaValue(prevValue => prevValue + mensaje + '\n');
    }
    
    // Lógica de ejecución
    const ejecutar = () => {
        const archivo = new Archivo("documento.txt");
        archivo.mostrarContenido();
    
        archivo.encriptar();
    
        archivo.guardarEnFormato("JSON");
    
        const archivoComprimido = new Archivo("documento.txt");
        archivoComprimido.comprimir();
    
        archivoComprimido.guardarEnFormato("CSV");
    
        const archivoEncriptadoYComprimido = new Archivo("documento.txt");
        archivoEncriptadoYComprimido.encriptar();
        archivoEncriptadoYComprimido.comprimir();
    }
    
    // Llamada a la función de ejecución

    return (
        <div className="App">
            <ul>
                <div onClick={() => { ejecutar() }}>{'Sin patron'}</div>
                <textarea value={textareaValue} rows="15" cols="50" disabled></textarea>
            </ul>
        </div>
    );
}

export default Sin;
