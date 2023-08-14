export interface Restaurent {
    id:string;
    name: string;
    contactNo1: string;
    contactNo2: string;
    email: string;
    website: string;
    location: string;
    description: string;
    isParkingAvailable: boolean;
    isBYOBAllowed: boolean;
    isAlcoholAvailable: boolean;
    isSmokingAreaAvailable: boolean;
    isOpenInHolidays: boolean;
    isActive: boolean;
    openHours: string;
    openAt: string;
    closeAt: string;
    barCloseAt: string;
  }


export interface PaymentOptions{
    id: string,
    name: string,
    name_casefold: string
}

export interface Cusines{
    id: string,
    name: string,
    name_casefold: string
}

export interface StoreType{
    id: string,
    name: string,
    name_casefold: string
}

export interface DressCode{
    id: string,
    name: string,
    name_casefold: string
}


