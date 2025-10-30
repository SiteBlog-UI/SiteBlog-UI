

/**
 * Clase que define un alert simple, metodo alert.
 * @author marcos tonfor
 *
 * @export
 * @class Alert
 */
export class Alert {    
    /**
     * @author marcos tonfor
     *
     * @constructor
     * @param {string} message - Parametro que recoge 
     * el mensaje a especifícar en un simple metodo alert 
     * javascript declarado en el constructor.
     */
    constructor(message: string) {
        alert(message);
    }
}

/**
 * Metodo que realiza 
 * la instáncia de la clase Alert.
 * @author marcos tonfor
 *
 * @export
 * @function setAlert
 * @param {string} message 
 * @returns {Alert} 
 */
export function setAlert(message: string): Alert {    
    /**
     * @author marcos tonfor
     *
     * @constant alert - Nueva instáncia de Alert.
     * @type {Alert}
     */
    const alert: Alert = new Alert(message);
    return alert;
}


/**
 * Clase que representa un simple metodo confirm.
 * @author marcos tonfor
 *
 * @export
 * @class Confirm
 */
export class Confirm {    
    /**
     * @author marcos tonfor
     *
     * @constructor
     * @param {string} message - Parametro que recoge 
     * el mensaje a especifícar en un simple metodo 
     * confirm javascript declarado en el constructor.
     */
    constructor(message: string) {
        confirm(message);
    }
}


/**
 * Metodo que realiza 
 * la llamada al constructor de la 
 * clase Confirm.
 * @author marcos tonfor
 *
 * @export
 * @function setConfirm
 * @param {string} message 
 * @returns {Confirm} 
 */
export function setConfirm(message: string): Confirm {    
    /**
     * @author marcos tonfor
     *
     * @constant confirm - Nueva instáncia de Confirm.
     * @type {Confirm}
     */
    const confirm: Confirm = new Confirm(message);
    return confirm;
}
