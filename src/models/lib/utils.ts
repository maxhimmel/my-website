import { AccessArgs } from "payload";

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
