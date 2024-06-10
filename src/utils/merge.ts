import { mergeWith } from "lodash-es";

export const merge = (...objects) => {
  if (objects.length < 2) {
    throw new Error("At least two objects are required to merge");
  }

  return objects.reduce(
    (acc, obj) =>
      mergeWith(acc, obj, (objValue, srcValue) => {
        if (Array.isArray(objValue)) return srcValue;
      }),
    {}
  );
};
