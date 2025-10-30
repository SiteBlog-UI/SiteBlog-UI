

/**
 * Description placeholder
 * @date Th-43-2025
 * @author marcos tonfor
 *
 * @export
 * @class Alert
 * @typedef {Alert}
 */
export class Alert {

    
    /**
     * Creates an instance of {CreateElement}.
     * @date Th-44-2025
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
 * Description placeholder
 * @date Th-46-2025
 * @author marcos tonfor
 * @description Metodo que realiza 
 * la instáncia de la clase Alert.
 *
 * @export
 * @function setAlert
 * @param {string} message 
 * @returns {Alert} 
 */
export function setAlert(message: string): Alert {
    
    /**
     * Description placeholder
     * @date Th-49-2025
     * @author marcos tonfor
     *
     * @constant alert - Nueva instáncia de Alert.
     * @type {Alert}
     */
    const alert: Alert = new Alert(message);
    return alert;
}


/**
 * Description placeholder
 * @date Th-51-2025
 * @author marcos tonfor
 *
 * @export
 * @class Confirm
 * @typedef {Confirm}
 */
export class Confirm {
    
    /**
     * Creates an instance of {CreateElement}.
     * @date Th-52-2025
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
 * Description placeholder
 * @date Th-54-2025
 * @author marcos tonfor
 * @description Metodo que realiza 
 * la llamada al constructor de la 
 * clase Confirm.
 *
 * @export
 * @function setConfirm
 * @param {string} message 
 * @returns {Confirm} 
 */
export function setConfirm(message: string): Confirm {
    
    /**
     * Description placeholder
     * @date Th-56-2025
     * @author marcos tonfor
     *
     * @constant confirm - Nueva instáncia de Confirm.
     * @type {Confirm}
     */
    const confirm: Confirm = new Confirm(message);
    return confirm;
}
