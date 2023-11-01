import { makeValidator } from "envalid";

export default makeValidator((x) => {
  try {
    return new Date(x);
  } catch (_) {
    throw new Error(`Invalid date "${x}"`);
  }
});
