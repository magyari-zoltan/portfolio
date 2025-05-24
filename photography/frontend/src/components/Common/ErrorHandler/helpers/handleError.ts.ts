import toast from "react-hot-toast";

export function displayError(error: unknown) {
  if (error) {
    console.error(error);

    if (error instanceof Error) {
      toast.error(error.message);
    } else if (typeof error === 'object' && 'status' in error && 'data' in error) {
      toast.error(error.data as string);
    } else {
      toast.error(`An unexpected error occured fetching albums(${error})`);
    }
  }
}
