export function mountErrorObject(errMessage: string) {
    return {
        error: {
            message: errMessage,
        },
    };
}
