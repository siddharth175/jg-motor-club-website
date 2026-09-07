import { NextResponse } from "next/server";
import { siteConfig } from "@/config/siteConfig";

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  // If Google Places API Key and Place ID exist in environment, fetch live reviews from Google Places API
  if (apiKey && placeId) {
    try {
      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&fields=name,rating,user_ratings_total,reviews&key=${apiKey}`;
      const res = await fetch(url, { next: { revalidate: 3600 } });
      const data = await res.json();

      if (data.result) {
        return NextResponse.json({
          rating: data.result.rating,
          totalReviews: data.result.user_ratings_total,
          reviews: data.result.reviews.map((r: { author_name: string; rating: number; text: string; relative_time_description: string; profile_photo_url: string }) => ({
            name: r.author_name,
            rating: r.rating,
            comment: r.text,
            date: r.relative_time_description,
            avatar: r.profile_photo_url,
            source: "Google",
          })),
          isLive: true,
        });
      }
    } catch (error) {
      console.error("Error fetching Google Places API:", error);
    }
  }

  // Fallback authentic verified Google reviews dataset for preview & instant demo mode
  return NextResponse.json({
    rating: siteConfig.googleReviews.overallRating,
    totalReviews: siteConfig.googleReviews.totalCount,
    reviews: siteConfig.googleReviews.reviews,
    isLive: false,
  });
}
