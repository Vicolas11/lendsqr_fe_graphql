import { IUserData, IUserDataAlt } from "../interfaces/userdata.interface";

export const userData: (IUserData | IUserDataAlt)[] = [
  {
    title: "Personal Information",
    data: [
      { subtitle: "full name", value: "Grace Effiom" },
      { subtitle: "phone number", value: "07060780922" },
      { subtitle: "email address", value: "grace@email.com" },
      { subtitle: "bvn", value: "07060780922" },
      { subtitle: "gender", value: "Female" },
      { subtitle: "marital status", value: "Single" },
      { subtitle: "children", value: "None" },
      { subtitle: "type of residence", value: "Parent's Apartment" },
    ],
  },
  {
    title: "Educational and Employment",
    data: [
      { subtitle: "level of education", value: "B.Sc" },
      { subtitle: "employment status", value: "Employed" },
      { subtitle: "sector of employment", value: "FinTech" },
      { subtitle: "duration of employment", value: "2 years" },
      { subtitle: "office email", value: "grace@lendsqr.com" },
      { subtitle: "monthly income", value: "₦200,000.00 - ₦400,000.00" },
      { subtitle: "loan repayment", value: "40,000" },
    ],
  },
  {
    title: "Socials",
    data: [
      { subtitle: "Twitter", value: "@grace_effiom" },
      { subtitle: "facebook", value: "Grace Effiom" },
      { subtitle: "instagram", value: "@grace_effiom" },
    ],
  },
  {
    title: "Guarantor",
    data: [
      {
        gurantor: [
          { subtitle: "full name", value: "Debby Ogana" },
          { subtitle: "phone number", value: "07060780922" },
          { subtitle: "email address", value: "debby@email.com" },
          { subtitle: "relationship", value: "sister" },
        ],
      },
      {
        gurantor: [
          { subtitle: "full name", value: "Samuel Ogana" },
          { subtitle: "phone number", value: "09060780782" },
          { subtitle: "email address", value: "samuel@email.com" },
          { subtitle: "relationship", value: "brother" },
        ],
      },
    ],
  },
];
