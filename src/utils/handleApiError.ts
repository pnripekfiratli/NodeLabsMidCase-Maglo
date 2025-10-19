import toast from "react-hot-toast";

export function handleApiError(error: any) {
  if (error.response) {
    const apiError = error.response.data;

    if (apiError.details && Array.isArray(apiError.details)) {
      const messages = apiError.details.map((d: any) => d.message).join("\n");
      toast.error(messages);
    }
    else if (apiError.message) {
      toast.error(apiError.message);
    }
    else {
      toast.error("An unexpected error occurred");
    }
  } else if (error.request) {
    toast.error("No response from server. Please try again later.");
  } else {
    toast.error("Network error or server not responding");
  }
}
