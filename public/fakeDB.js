const addToLS = id => {
    let LSdata = getLSdata();
    const quantity = LSdata[id];
    if (!quantity) {
        LSdata[id] = 1;
    }
    else {
        const newQuantity = quantity + 1;
        LSdata[id] = newQuantity;
    }
    localStorage.setItem('LS-data', JSON.stringify(LSdata));
}

const removeFromLS = id => {
    const LSdata = getLSdata();
    if (id in LSdata) {
        delete LSdata[id];
        localStorage.setItem('LS-data', JSON.stringify(LSdata));
    }
}

const getLSdata = () => {
    let LSdata = {};

    const storedCart = localStorage.getItem('LS-data');
    if (storedCart) {
        LSdata = JSON.parse(storedCart);
    }
    return LSdata;
}

const deleteLSdata = () => {
    localStorage.removeItem('LS-data');
}

export {
    addToLS,
    removeFromLS,
    getLSdata,
    deleteLSdata
}