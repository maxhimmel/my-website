export function validateURL(value: any) {
  if (!value) {
    return "This field is required";
  }

  try {
    new URL(value);
    return true;
  } catch (_) {
    return "Invalid URL format";
  }
}
