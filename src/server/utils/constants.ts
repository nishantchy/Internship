export const getJwtSecretKey = (): string => {
  const JWT_SECRET = process.env.JWT_SECRET;
  if (!JWT_SECRET) {
    throw new Error("JWT_SECRET not defined.");
  }
  return JWT_SECRET;
};

export const PROVINCES = [
  { title: "कोशी प्रदेश", value: "koshi" },
  { title: "मधेश प्रदेश", value: "madesh" },
  { title: "बागमती प्रदेश", value: "bagmati" },
  { title: "गण्डकी प्रदेश", value: "gandaki" },
  { title: "लुम्बिनी प्रदेश", value: "lumbini" },
  { title: "कर्णाली प्रदेश", value: "karnali" },
  { title: "सुदुर पश्चिम प्रदेश", value: "sudurpaschim" },
];
