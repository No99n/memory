export const shuffle = (array) => {
    let currentIndex = array.length, randomIndex;
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = 
        [array[randomIndex], array[currentIndex]]

    }
        return array; 
}

export const duplicateArray = (array) => array.reduce((rec, current) => rec.concat([current, current]), [])
export const createIconsArray = (initialCount) => {
    const cardsIcon = [
        'compass',
        'cloud',
        'play',
        'heart',
        'diamond',
        'car',
        'anchor',
        'bolt',
        'leaf',
        'paper-plane',
        'bicycle',
        'building',
        'anchor',
        'book',
        'leaf',
        'diamond',
        'paper-plane',
        'bicycle',
    ]

    switch (initialCount) {
        case 10:
            return cardsIcon.slice(0, 5)
        case 16:
            return cardsIcon.slice(0, 8)
        case 20:
            return cardsIcon.slice(0, 10)
        case 30:
            return cardsIcon.slice(0, 15)
        case 40:
            return cardsIcon.slice(0, 20)
        default:
            break;
    }
}