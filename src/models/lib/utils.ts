import { AccessArgs, TextFieldValidation } from "payload";

export const validateURL: TextFieldValidation = (value, options) => {
  if (!value && options.required) {
    return "This field is required";
  } else if (!value) {
    return true;
  }

  try {
    new URL(value as string);
    return true;
  } catch (_) {
    return "Invalid URL format";
  }
};

export function isAdminOrSelf(args: AccessArgs) {
  if (isAdmin(args)) {
    return true;
  }

  if (args.req.user) {
    return {
      email: {
        equals: args.req.user.email,
      },
    };
  }

  return false;
}

export function isAdmin(args: AccessArgs) {
  return args.req.user?.role === "admin";
}
