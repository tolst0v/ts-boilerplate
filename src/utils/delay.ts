export async function delay(timeout: number): Promise<unknown> {
    return new Promise((resolve: (value: unknown) => void): void => {
        setTimeout((): void => {
            resolve(null)
        }, timeout)
    })
}