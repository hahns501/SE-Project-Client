export const switchState = () => {
    return {
        type: 'switch'
    };
};

export const setTrue = () => {
    return {
        type: 'setTrue'
    };
};

export const setFalse = () => {
    sessionStorage.clear();

    return {
        type: 'setFalse'
    }
}