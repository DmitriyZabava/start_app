// Add a fixed delay so you can see the loading state
export function delayFuncyion<T>(promise: Promise<T>): Promise<T> {
    return new Promise<void>(resolve => {
        setTimeout(resolve, 4000);
    }).then(() => promise);
}