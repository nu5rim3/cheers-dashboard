import { Dayjs } from 'dayjs';

export interface ProfileProps {
    id?: string,
    onSubmit: () => void,
}

export interface EditProfileProps {
    onSubmit: () => void,
}

export interface PreviewProfileProps {
    onSubmit: () => void,
}

type TCardOption = 'All' | 'AMEX'| 'Cheque Gourmet'| 'Discover'| 'MasterCard' | 'Visa' | 'None'
type TDressCode = 'Casual Dress' | 'All'
type TCuisines = 'Chinese'|'Indian'|'International' | 'Local' | 'None'
type TStoreType = 'Restaurant' | 'Pub' | 'Bar' | 'None'

interface IAddProfile {
    name: string,
    description: string,
    type: TStoreType[],
    contact: number,
    email: string,
    website: string,
    imageLogo: File | null,
    imageLocation: File[] | null,
    location: string,
    isAlcohol: boolean,
    paymenentOption: TCardOption[],
    dressCode: TDressCode[],
    cuisines: TCuisines[],
    isParking: boolean,
    isByob: boolean,
    isSmokingArea: boolean,
    isPublicHoliday: boolean,
    openTime: Dayjs,
    closeTime: Dayjs,
    barCloseTime: Dayjs,
    isActive: boolean,
}

interface IEditProfile {
    id: string,
    name: string,
    description: string,
    type: string[],
    contact: number,
    email: string,
    website: string,
    imageLogoUrl: string,
    imageLocationUrl: string[],
    location: string,
    isAlcohol: boolean,
    paymenentOption: TCardOption[],
    dressCode: TDressCode[],
    cuisines: TCuisines[],
    isParking: boolean,
    isByob: boolean,
    isSmokingArea: boolean,
    isPublicHoliday: boolean,
    openTime: string,
    closeTime: string,
    barCloseTime: string,
    isActive: boolean,
}