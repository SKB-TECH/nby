"use client";

import { useEffect, useState } from "react";

const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000/api/v1";

export type PublicActivity = {
  id: string;
  title: string;
  type: string;
  description?: string;
  startsAt: string;
  endsAt?: string;
  location?: string;
  posterUrl?: string;
};

export type PublicSermon = {
  id: string;
  title: string;
  preacher?: string;
  youtubeVideoId?: string;
  category?: string;
  preachedAt?: string;
  thumbnailUrl?: string;
  description?: string;
  live: boolean;
};

export type PublicContentEntry = {
  key: string;
  locale: string;
  section: string;
  value: { html?: string; text?: string } | string;
};

export type PublicCampaign = {
  id: string;
  title: string;
  description?: string;
  targetAmount: number;
  currency: string;
  startsAt: string;
  endsAt?: string;
  posterUrl?: string;
};

export type PublicAppointmentSlot = {
  id: string;
  startsAt: string;
  endsAt: string;
  appointmentType?: string;
  capacity: number;
};

export type PublicSiteData = {
  content: PublicContentEntry[];
  sermons: PublicSermon[];
  activities: PublicActivity[];
  campaigns: PublicCampaign[];
};

export async function publicApi<T>(path: string, options: RequestInit = {}) {
  const response = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: { "Content-Type": "application/json", ...options.headers },
  });
  if (!response.ok) {
    const body = await response.json().catch(() => ({}));
    throw new Error(body.message ?? "Le service NBY est momentanément indisponible.");
  }
  return response.json() as Promise<T>;
}

export function usePublicSiteData(locale: string) {
  const [data, setData] = useState<PublicSiteData | null>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    let active = true;
    publicApi<PublicSiteData>(`/public/site-content?locale=${locale}`)
      .then(result => { if (active) setData(result); })
      .catch(() => { if (active) setData(null); })
      .finally(() => { if (active) setLoading(false); });
    return () => { active = false; };
  }, [locale]);
  return { data, loading };
}

export function plainText(html?: string) {
  return (html ?? "").replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

export function contentText(entries: PublicContentEntry[] | undefined, key: string, fallback: string) {
  const entry = entries?.find(item => item.key === key);
  if (!entry) return fallback;
  if (typeof entry.value === "string") return plainText(entry.value) || fallback;
  return plainText(entry.value.text ?? entry.value.html) || fallback;
}
