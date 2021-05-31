export const isEmpty = (val) =>
    val === undefined ||
    val === null ||
    typeof (val) === "string" && val.trim().length === 0 ||
    typeof (val) === "object" && Object.keys(val).length === 0;
