export interface ErrorObject {
    error: {
        message: string;
    };
}

export function mountErrorObject(errMessage: string): ErrorObject {
    return {
        error: {
            message: errMessage,
        },
    };
}
