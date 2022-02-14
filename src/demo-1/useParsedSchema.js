export default function useParsesSchema(schema) {
  console.log({ schema });
  let parsedSchema = schema.map((n) => {
    return Array.isArray(n) ? n : [n];
  });
  return { parsedSchema };
}
