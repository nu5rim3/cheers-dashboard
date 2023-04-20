type TCategory = "VEG" | "NON" 
type TAvailability = "BREAKFAST" | "LAUNCH" | "DINNER" | "ALL"
type TType = "SNACK" | "MAIN" | "SOUP" | "DESSERT" | "RICE" | "NOODLES" | "SANDWITCH" | "BURGER" | "PASTA" | "PIZZA" | "WRAP" | "STARTER" | "BITE" | "PLATTER" | "SALAD" | "BREAD"
type TAdditions = "CHEESE" | "SPICY" | "NO_CHEESE" | "NO_SPICY" 
// type TOrigin = "SRILANKAN" | "INDIAN" | "CHINEESE" | "MONGOLIAN" | "ITALIAN"| "THAI" | "JAPANESE" | "INDONESIAN"
type TOrigin = "Sri Lankan" |  "Indian" | "Chinese" | "Thai" | "Japanese" | "Mongolian" | "Italian" | "British" | "Indonesian" | "None"
type TPotion = "L" | "M" | "S" 

interface IFood {
    name: string,
    description: string,
    image: File | string,
    potions: TPotion[],
    serves: number | undefined,
    category: TCategory[],
    type: TType,
    price: number | undefined,
    discountAmount: number | undefined,
    origin: TOrigin[],
    availability: TAvailability[],
    additions: TAdditions[],
    isSpecial: boolean,
    isActive: boolean,
}