function filter(listCardsBrand: any, value: string) {
  const filtered = listCardsBrand.filter(
    (card: any) =>
      card.brand.toLowerCase().includes(value.toLowerCase()) ||
      card.name.toLowerCase().includes(value.toLowerCase())
  );
  return filtered[0].value;
}
export default filter;
