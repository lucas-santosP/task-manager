export function getApiErrorMessage(error: any): string {
  let errorMsg = "Ops, an error occurred... try later";

  if (error && error.response && error.response.data) {
    if (typeof error.response.data === "string") {
      errorMsg = error.response.data;
    } else if (error.response.data.message && typeof error.response.data.message === "string") {
      errorMsg = error.response.data.message;
    }
  }

  return errorMsg;
}
