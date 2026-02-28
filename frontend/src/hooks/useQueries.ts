import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import { ServiceType } from '../backend';

export interface QuoteFormData {
  name: string;
  phone: string;
  email: string;
  service: ServiceType;
  message: string;
}

export function useSubmitQuoteRequest() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (data: QuoteFormData) => {
      if (!actor) throw new Error('Backend not available');
      await actor.submitQuoteRequest(data.name, data.phone, data.email, data.service, data.message);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['quoteRequests'] });
    },
  });
}
