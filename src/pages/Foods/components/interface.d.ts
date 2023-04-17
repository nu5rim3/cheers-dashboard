type TCategory = "VEG" | "NON" 
type TAvailability = "BREAKFAST" | "LAUNCH" | "DINNER" | "ALL"
type TType = "SNACK" | "MAIN" | "SOUP" | "DESSERT" | "RICE" | "NOODLES" | "SANDWITCH" | "BURGER" | "PASTA" | "PIZZA" | "WRAP" | "STARTERS" | "BITES" | "PLATTER"
type TAdditions = "CHEESE" | "SPICY" | "NO_CHEESE" | "NO_SPICY" 

interface IFood {
    name: string,
    description: string,
    imageUrl: string,
    potionSize: string,
    serves: number,
    category: TCategory,
    type: TType,
    price: number,
    discountAmount: number,
    availability: TAvailability,
    additions: TAdditions,
    isSpecial: boolean,
    isActive: boolean,
}