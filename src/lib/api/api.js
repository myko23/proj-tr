import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../utils/axios";

export const useAddClientsMutation = () => {
	const queryClient = useQueryClient();
	return useMutation((body) => api.post("/clients", body), {
		onSuccess: () => {
			queryClient.refetchQueries(["clients"]);
		},
	});
};

export const useDeleteClientsMutation = () => {
	const queryClient = useQueryClient();
	return useMutation((body) => api.delete(`/clients/${body}`), {
		onSuccess: () => {
			queryClient.refetchQueries(["clients"]);
		},
	});
};

export const useAddTimeReportsMutation = () => {
	const queryClient = useQueryClient();
	return useMutation((body) => api.post("/timereports", body), {
		onSuccess: () => {
			queryClient.refetchQueries(["timereports"]);
		},
	});
};
export const useUpdateTimeReportsMutation = () => {
	const queryClient = useQueryClient();
	return useMutation(
		(body) => api.put(`/timereports/${body.id}`, body.content),
		{
			onSuccess: () => {
				queryClient.refetchQueries(["timereports"]);
			},
		}
	);
};
export const useDeleteTimeReportsMutation = () => {
	const queryClient = useQueryClient();
	return useMutation((body) => api.delete(`/timereports/${body}`), {
		onSuccess: () => {
			queryClient.refetchQueries(["timereports"]);
		},
	});
};
