class Alert {
    constructor(message: string) {
        alert(message);
    }
}

export function setAlert(message: string) {
    const alert = new Alert(message);
    return alert;
}

class Confirm {
    constructor(message: string) {
        confirm(message);
    }
}

export function setConfirm(message: string) {
    const confirm = new Confirm(message);
    return confirm;
}
