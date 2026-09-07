"use client";

import React, { useEffect, useState } from "react";
import { siteConfig } from "@/config/siteConfig";
import { Star, ExternalLink, CheckCircle2 } from "lucide-react";

interface GoogleReviewData {
  name: string;
  rating: number;
  comment: string;
  date?: string;
  location?: string;
  avatarUrl?: string;
  googleVerified?: boolean;
}

export const ReviewsSection: React.FC = () => {
  const [reviews, setReviews] = useState<GoogleReviewData[]>(siteConfig.googleReviews.reviews);
  const [overallRating, setOverallRating] = useState(siteConfig.googleReviews.overallRating);
  const [totalCount, setTotalCount] = useState(siteConfig.googleReviews.totalCount);
  const [isLive, setIsLive] = useState(false);

  useEffect(() => {
    // Try to fetch live Google Reviews from API route
    fetch("/api/google-reviews")
      .then((res) => res.json())
      .then((data) => {
        if (data.reviews && data.reviews.length > 0) {
          setReviews(data.reviews);
          if (data.rating) setOverallRating(data.rating);
          if (data.totalReviews) setTotalCount(data.totalReviews.toString());
          if (data.isLive) setIsLive(true);
        }
      })
      .catch((err) => {
        console.log("Using static verified Google reviews fallback:", err);
      });
  }, []);

  return (
    <section id="reviews" className="py-20 lg:py-24 bg-[#08080b] relative overflow-hidden border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header & Google Rating Badge */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-extrabold uppercase tracking-[0.25em] text-[#D4AF37]">
                WHAT OUR CUSTOMERS SAY
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                {isLive ? "Live Google Reviews Sync" : "Verified Google Reviews"}
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-serif tracking-tight uppercase">
              REAL GOOGLE REVIEWS
            </h2>
          </div>

          {/* Google Badge Box */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-[#121218] p-4 rounded-2xl border border-white/10">
            <div className="flex items-center gap-3">
              {/* Google G Icon */}
              <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center font-bold text-slate-900 shadow-md shrink-0">
                <svg className="w-6 h-6" viewBox="0 0 24 24">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                  />
                </svg>
              </div>

              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-lg font-black text-white font-serif">{overallRating}</span>
                  <div className="flex gap-0.5 text-[#D4AF37]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                </div>
                <span className="text-xs text-slate-400 font-medium">
                  Based on {totalCount} Google Reviews
                </span>
              </div>
            </div>

            <a
              href={siteConfig.googleReviews.googlePlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-bold text-black bg-gradient-to-r from-[#D4AF37] via-[#E2C358] to-[#C59B27] hover:scale-105 transition-all shadow-md"
            >
              <span>Write a Google Review</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((t, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#121218] border border-white/10 flex flex-col justify-between hover:border-gold-500/40 transition-all shadow-xl space-y-4 relative group"
            >
              <div className="space-y-3">
                {/* Header with Google Logo Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center font-bold text-xs shadow">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white flex items-center gap-1">
                        {t.name}
                      </h4>
                      <span className="text-[10px] text-slate-400">{t.date || "Verified Customer"}</span>
                    </div>
                  </div>

                  <svg className="w-4 h-4 shrink-0" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                </div>

                {/* 5 Gold Stars */}
                <div className="flex gap-1 text-[#D4AF37]">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>

                {/* Comment */}
                <p className="text-xs text-slate-300 leading-relaxed font-sans italic">
                  &quot;{t.comment}&quot;
                </p>
              </div>

              <div className="pt-2 border-t border-white/5 text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" />
                Verified Google Review
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
