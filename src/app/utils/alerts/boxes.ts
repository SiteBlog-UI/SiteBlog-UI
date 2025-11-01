

/**
 * @marcostonfor
 * Clase que define un alert simple,
 * metodo alert.
 *
 *
 * @export
 * @class
 * @name Alert
 */
export class Alert {    
    /**
     * @marcostonfor
     *
     * @constructor
     * @param {string} message
     * @description Parametro que recoge 
     * el mensaje a especifícar en un simple metodo alert 
     * javascript declarado en el constructor.
     * @see
     */
    constructor(message: string) {
        alert(message);
    }
}

/**
 * @marcostonfor
 * Metodo que realiza 
 * la instáncia de la clase Alert.
 * 
 * @export
 * @function
 * @name setAlert
 * @param {string} message 
 * @returns {Alert} 
 */
export function setAlert(message: string): Alert {    
    /**
     * @marcostonfor
     *
     * @constant 
     * @name alert - Nueva instáncia de Alert.
     * @type {Alert}
     * @see {@link Alert}
     */
    const alert: Alert = new Alert(message);
    return alert;
}


/**
 * @marcostonfor
 * Clase que representa un simple metodo confirm.
 * 
 * @export
 * @class
 * @name Confirm
 */
export class Confirm {    
    /**
     * @marcostonfor
     *
     * @constructor
     * @param {string} message
     * @description Parametro que recoge 
     * el mensaje a especifícar en un simple metodo 
     * confirm javascript declarado en el constructor.
     * @see {@link Confirm}
     */
    constructor(message: string) {
        confirm(message);
    }
}


/**
 * @marcostonfor
 * Metodo que realiza 
 * la llamada al constructor de la 
 * clase Confirm.
 *
 * @export
 * @function 
 * @name setConfirm
 * @param {string} message 
 * @returns {Confirm} 
 */
export function setConfirm(message: string): Confirm {    
    /**
     * @author marcos tonfor
     *
     * @constant
     * @name confirm - Nueva instáncia de Confirm.
     * @type {Confirm}
     * @see {@link Confirm}
     */
    const confirm: Confirm = new Confirm(message);
    return confirm;
}
