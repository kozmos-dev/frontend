export function getRandomInt(min: number, max: number): number {
    return Math.round(min + (Math.random() * (max - min)));
}

function randomSort() {
    return Math.random() - 0.5;
}

export function convertRemToPixels(rem: number): number {    
    return rem * parseFloat(getComputedStyle(document.documentElement).fontSize);
}

export function range(low: number, high: number): number[] {
    let array: number[] = [];

    for (let i = low; i < high + 1; i++) {
        array[i - low] = i;
    }

    return array;
}
