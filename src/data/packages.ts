export interface TravelPackage {
  id: string;
  title: string;
  destination: "turkey" | "tunisia";
  city: string;
  duration: string;
  hotelStars: number;
  hotelName: string;
  price: number; // in EGP
  inclusions: {
    flight: boolean;
    hotel: boolean;
    transfers: boolean;
    guide: boolean;
  };
  badge: "طيران مباشر" | "الأكثر مبيعاً" | "عرض لفترة محدودة" | "عائلي مميز";
  image: string;
  whatsappMessage: string;
}

export const packages: TravelPackage[] = [
  {
    id: "istanbul-classic",
    title: "رحلة إسطنبول الكلاسيكية - قلب التاريخ التركي",
    destination: "turkey",
    city: "إسطنبول",
    duration: "٥ ليالي / ٦ أيام",
    hotelStars: 4,
    hotelName: "فندق جراند أوزتانيك 4* (تقسيم)",
    price: 24500,
    inclusions: {
      flight: true,
      hotel: true,
      transfers: true,
      guide: true
    },
    badge: "الأكثر مبيعاً",
    image: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "مرحباً لو كوست هوليدايز، أود الاستفسار وحجز رحلة إسطنبول الكلاسيكية (24,500 جنيه)"
  },
  {
    id: "antalya-beach",
    title: "سحر شواطئ أنطاليا - متعة الاستجمام العائلي",
    destination: "turkey",
    city: "أنطاليا",
    duration: "٦ ليالي / ٧ أيام",
    hotelStars: 5,
    hotelName: "منتجع رامادا بلازا 5* (شامل كلياً)",
    price: 29900,
    inclusions: {
      flight: true,
      hotel: true,
      transfers: true,
      guide: false
    },
    badge: "طيران مباشر",
    image: "https://images.unsplash.com/photo-1542051841857-5f90071e7989?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "مرحباً لو كوست هوليدايز، أود الاستفسار وحجز رحلة شواطئ أنطاليا (29,900 جنيه)"
  },
  {
    id: "turkey-combo",
    title: "الثنائية الرائعة - إسطنبول وأنطاليا معاً",
    destination: "turkey",
    city: "إسطنبول & أنطاليا",
    duration: "٧ ليالي / ٨ أيام",
    hotelStars: 4,
    hotelName: "فنادق مختارة بعناية 4* في المدينتين",
    price: 34800,
    inclusions: {
      flight: true,
      hotel: true,
      transfers: true,
      guide: true
    },
    badge: "عرض لفترة محدودة",
    image: "/turkey-combo.png",
    whatsappMessage: "مرحباً لو كوست هوليدايز، أود الاستفسار وحجز العرض الثنائي إسطنبول وأنطاليا معاً (34,800 جنيه)"
  },
  {
    id: "tunis-hammamet",
    title: "رحلة تونس الخضراء وياسمين الحمامات",
    destination: "tunisia",
    city: "تونس العاصمة & الحمامات",
    duration: "٥ ليالي / ٦ أيام",
    hotelStars: 4,
    hotelName: "فندق المرادي الحمامات 4* (إقامة كاملة)",
    price: 21900,
    inclusions: {
      flight: true,
      hotel: true,
      transfers: true,
      guide: true
    },
    badge: "الأكثر مبيعاً",
    image: "/tunisia-hammamet.png",
    whatsappMessage: "مرحباً لو كوست هوليدايز، أود حجز رحلة تونس الخضراء وياسمين الحمامات (21,900 جنيه)"
  },
  {
    id: "hammamet-luxury",
    title: "جوهرة البحر المتوسط - استجمام الحمامات الفاخر",
    destination: "tunisia",
    city: "الحمامات",
    duration: "٦ ليالي / ٧ أيام",
    hotelStars: 5,
    hotelName: "فندق رويال ياسمين الحمامات 5*",
    price: 26400,
    inclusions: {
      flight: true,
      hotel: true,
      transfers: true,
      guide: false
    },
    badge: "عائلي مميز",
    image: "https://images.unsplash.com/photo-1534447677768-be436bb09401?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "مرحباً لو كوست هوليدايز، أود الاستفسار عن رحلة استجمام الحمامات الفاخر (26,400 جنيه)"
  },
  {
    id: "tunis-discovery",
    title: "اكتشاف قرطاج وسيدي بوسعيد الأسطورية",
    destination: "tunisia",
    city: "تونس العاصمة",
    duration: "٤ ليالي / ٥ أيام",
    hotelStars: 4,
    hotelName: "فندق كارلتون تونس العاصمة 4*",
    price: 19800,
    inclusions: {
      flight: true,
      hotel: true,
      transfers: true,
      guide: true
    },
    badge: "طيران مباشر",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    whatsappMessage: "مرحباً لو كوست هوليدايز، أود حجز رحلة اكتشاف قرطاج وسيدي بوسعيد الأسطورية (19,800 جنيه)"
  }
];
