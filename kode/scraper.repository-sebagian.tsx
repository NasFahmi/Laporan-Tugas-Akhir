
import axiosClient from "@/lib/axios";
import type { ScraperDeleteResponse, ScraperResponse } from "../types/scraper";
import type { AnalyzeABSAResponse } from "../types/absa";

export const ScraperRepository = () => ({

  get: async (): Promise<ScraperResponse> => {
    try {
      const response = await axiosClient.get<ScraperResponse>(
        "/scraping/results"
      );
      console.log('Get response:', response.data);
      return response.data;
    } catch (error) {
      console.error('Download error:', error);
      throw error;
    }
  },