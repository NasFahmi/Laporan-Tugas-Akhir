export const useLoginMutation = (options?: {
  onSuccess?: (data: LoginResponse) => void;
  onError?: (error: AxiosError) => void;
}) => {
  const repo = loginRepository();

  return useMutation<LoginResponse, AxiosError, LoginPayload>({
    mutationFn: repo.login,
    onSuccess: options?.onSuccess,
    onError: options?.onError,
  });
};
