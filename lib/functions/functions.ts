/**
 * Creates a debounced version of a function.
 * The debounced function delays invoking `fn` until after `delay` milliseconds
 * have elapsed since the last time it was called.
 *
 * @param fn - The function to debounce
 * @param delay - Delay in milliseconds
 * @returns A debounced function with the same parameters as `fn`
 */
export function debounce<T extends (...args: any[]) => void>(
    fn: T,
    delay: number
): (...args: Parameters<T>) => void {
    let timer: ReturnType<typeof setTimeout> | null = null;

    return (...args: Parameters<T>) => {
        // Clear previous timer if function is called again before delay
        if (timer) {
            clearTimeout(timer);
        }

        // Set a new timer
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };
}