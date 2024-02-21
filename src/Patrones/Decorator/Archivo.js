import React, { useState } from 'react';

function Archivo() {
    const [textareaValue, setTextareaValue] = useState('');

    // Definición de clases para el patrón Decorator

    // Interfaz Archivo
    class Archivo {
        constructor(nombre) {
            this.nombre = nombre;
        }

        // Método para mostrar el contenido del archivo
        mostrarContenido() {
            const mensaje = `Contenido del archivo ${this.nombre}:`;
            console.log(mensaje);
            actualizarTextarea(mensaje);
        }
    }

    // Decorador abstracto para funcionalidades adicionales
    class DecoradorArchivo extends Archivo {
        constructor(archivo) {
            super(archivo.nombre);
            this.archivo = archivo;
        }

        // Método para mostrar el contenido utilizando la decoración
        mostrarContenido() {
            this.archivo.mostrarContenido();
        }
    }

    // Decorador concreto: Encriptacion
    class Encriptacion extends DecoradorArchivo {

        // Sobrescribe el método mostrarContenido para agregar encriptación
        mostrarContenido() {
            const mensaje = "Contenido encriptado:";
            console.log(mensaje);
            actualizarTextarea(mensaje);
            super.mostrarContenido(); // Llama al método mostrarContenido de la clase base
        }
    }

    // Decorador concreto: Compresion
    class Compresion extends DecoradorArchivo {

        // Sobrescribe el método mostrarContenido para agregar compresión
        mostrarContenido() {
            const mensaje = "Contenido comprimido:";
            console.log(mensaje);
            actualizarTextarea(mensaje);
            super.mostrarContenido(); // Llama al método mostrarContenido de la clase base
        }
    }

    // Clase para manejar el formato del archivo
    class FormatoArchivo extends DecoradorArchivo {
        constructor(archivo, formato) {
            super(archivo);
            this.formato = formato;
        }

        // Método para guardar el archivo en un formato específico
        guardar() {
            const mensaje =`Guardando archivo en formato ${this.formato}:`;
            console.log(mensaje);
            actualizarTextarea(mensaje);
        }

        // Método para cargar el archivo desde un formato específico
        cargar() {
            const mensaje = `Cargando archivo en formato ${this.formato}:`;
            console.log(mensaje);
            console.log("Contenido cargado:");
            actualizarTextarea(mensaje);
            // Aquí podría haber lógica para leer y cargar el archivo en el formato especificado.
        }
    }

    const ejecutar = () => {
        // Uso del patrón Decorator

        // Creación de un archivo básico
        const archivo = new Archivo("documento.txt");
        archivo.mostrarContenido();

        // Creación de un archivo encriptado
        const archivoEncriptado = new Encriptacion(archivo);
        archivoEncriptado.mostrarContenido();

        // Creación de un archivo encriptado y guardado en formato JSON
        const archivoJSON = new FormatoArchivo(archivoEncriptado, "JSON");
        archivoJSON.guardar(); // Guarda el archivo en formato JSON.

        // Creación de un archivo comprimido
        const archivoComprimido = new Compresion(archivo);
        archivoComprimido.mostrarContenido();

        // Creación de un archivo comprimido y guardado en formato CSV
        const archivoCSV = new FormatoArchivo(archivoComprimido, "CSV");
        archivoCSV.guardar();

        // Creación de un archivo encriptado y comprimido
        const archivoEncriptadoYComprimido = new Compresion(new Encriptacion(archivo));
        archivoEncriptadoYComprimido.mostrarContenido();
    }

    const actualizarTextarea = (mensaje) => {
        setTextareaValue(prevValue => prevValue + mensaje + '\n');
    }

    return (
        <div className="App">
            <ul>
            <div onClick={() => { ejecutar() }}>{'Con patron'}</div>
                <textarea value={textareaValue} rows="15" cols="50" disabled></textarea>
            </ul>
        </div>
    );
}

export default Archivo;
