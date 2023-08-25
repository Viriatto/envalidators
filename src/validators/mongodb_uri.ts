import { makeValidator } from "envalid";

export const mongodb_uri = makeValidator((x) => {
  if (
    /^(mongodb(?:\+srv)?:\/\/(?:\S+:\S+@)?(?:[a-zA-Z0-9.-]+)(?::\d+)?(?:\/[a-zA-Z0-9_%.-]+)*(?:\?[\S]*)?)$/.test(
      x
    )
  )
    return x;
  else throw new Error(`Invalid MongoDB URI "${x}"`);
});
