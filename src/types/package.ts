export interface TravelPackage {
  id: string;
  title: string;
  destination: "turkey" | "tunisia" | string;
  city: string;
  duration: string;
  price: number;
  childPrice: number;
  badge: string;
  image: string;
  images: string[];
  whatsappMessage: string;
  availableTravelDate: string;
  description: string;
  is_active: boolean;
  airline?: string;
  accommodationType?: string;
  flightDetails?: string;
  transfersDetails?: string;
  guideDetails?: string;
  guidelines?: string;
  inclusions: {
    flight: boolean;
    hotel: boolean;
    transfers: boolean;
    guide: boolean;
  };
}
