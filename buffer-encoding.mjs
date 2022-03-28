const buffer = Buffer.from("Aaa", "utf8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));

const bufferBase64 = Buffer.from("QWFh", "base64");
console.info(bufferBase64.toString("utf8"));