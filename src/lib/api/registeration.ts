import axios from "axios";

export const Register = async (registrationData: {
  firstName: string;
  lastName: string;
  email: string;
  companyName: string;
  jobTitle: string;
  companyWebsite: string;
  gender: string;
  hearAboutHub: string;
  interestedIn: string;
  country: string;
  agreeToMarketing: boolean;
}) => {
  const data = await axios.post(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/contact`,
    registrationData
  );
  return data;
};
