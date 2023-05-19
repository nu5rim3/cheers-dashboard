export interface AddProfileProps {
    onSubmit: () => void,
}

export interface EditProfileProps {
    onSubmit: () => void,
}

export interface PreviewProfileProps {
    onSubmit: () => void,
}

type TCardOption = 'AMEX'| 'Cheque Gourmet'| 'Discover'| 'MasterCard' | 'Visa'
type TDressCode = 'Casual Dress'
type TCuisines = 'Chinese'|'Indian'|'International'

interface IAddProfile {
    name: string,
    description: string,
    type: string,
    contact: number,
    email: string,
    website: string,
    imageUrl: string,
    location: string,
    isAlcohol: string,
    paymenentOption: TCardOption[],
    dressCode: TDressCode[],
    cuisines: TCuisines[],
    isParking: boolean,
    isByob: boolean,
    isSmokingArea: boolean,
    isPublicHoliday: boolean,
    openTime: string,
    closeTime: string,
}

interface IEditProfile {
    id: string,
    name: string,
    description: string,
    type: string,
    contact: number,
    email: string,
    website: string,
    imageUrl: string,
    location: string,
    isAlcohol: string,
    paymenentOption: TCardOption[],
    dressCode: TDressCode[],
    cuisines: TCuisines[],
    isParking: boolean,
    isByob: boolean,
    isSmokingArea: boolean,
    isPublicHoliday: boolean,
    openTime: string,
    closeTime: string,
}