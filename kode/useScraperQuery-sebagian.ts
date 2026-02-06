export const useScraperQuery = () => {
  const repo = ScraperRepository();
  const queryClient = useQueryClient();
  const { isAuthenticated } = useAuth();

  const query = useQuery<ScraperResponse, Error, Scraper[]>({
    queryKey: scraperKeys.list(),
    queryFn: () => repo.get(),
    select: (response) => mapToScraper(response.data),

    staleTime: 5 * 60 * 1000, // 5 menit
    gcTime: 30 * 60 * 1000,   // 30 menit
    refetchOnMount: false,
    refetchOnWindowFocus: false,
    enabled: isAuthenticated,
  });