import { createClient } from "@/lib/supabase";
import { useQuery } from "@tanstack/react-query";
import { TravelPackage } from "@/types/package";

const supabase = createClient();

function mapDbRow(row: Record<string, unknown>): TravelPackage {
  return {
    id: row.id as string,
    title: row.title as string,
    destination: row.destination as string,
    city: row.city as string,
    duration: row.duration as string,
    price: row.price as number,
    childPrice: row.child_price as number,
    inclusions: {
      flight: row.flight as boolean,
      hotel: row.hotel as boolean,
      transfers: row.transfers as boolean,
      guide: row.guide as boolean,
    },
    badge: row.badge as string,
    image: row.image as string,
    images: (row.images as string[]) ?? [],
    whatsappMessage: row.whatsapp_message as string,
    availableTravelDate: row.available_travel_date as string,
    description: (row.description as string) || "",
    is_active: row.is_active as boolean,
    airline: row.airline as string,
    accommodationType: row.accommodation_type as string,
    flightDetails: row.flight_details as string,
    transfersDetails: row.transfers_details as string,
    guideDetails: row.guide_details as string,
    guidelines: row.guidelines as string,
  };
}

export function usePackages(includeInactive = false) {
  return useQuery({
    queryKey: ["packages", { includeInactive }],
    queryFn: async () => {
      let query = supabase.from("packages").select("*");
      
      if (!includeInactive) {
        query = query.eq("is_active", true);
      }
      
      const { data, error } = await query.order("sort_order", { ascending: true });

      if (error) {
        console.error("Supabase packages fetch error:", error);
        throw error;
      }

      if (!data) {
        return [];
      }
      return data.map(mapDbRow);
    },
  });
}

export function useSiteSettings() {
  return useQuery({
    queryKey: ["site_settings"],
    queryFn: async () => {
      const { data, error } = await supabase.from("site_settings").select("*");
      if (error) return {};
      const settings: Record<string, string> = {};
      for (const row of data ?? []) {
        settings[row.key] = row.value;
      }
      return settings;
    },
  });
}
