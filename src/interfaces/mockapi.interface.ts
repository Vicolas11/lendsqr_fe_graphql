export interface IMockAPIData {
  id: string;
  userTier: number;
  profile: {
    firstName: string;
    lastName: string;
    lendsqrId: string;
    organization: string;
    username: string;
    email: string;
    status: string;
    gender: string;
    phoneNumber: string;
    avatar: string;
    createdAt: string;
  };
  maritalDetails: {
    maritalStatus: string;
    children: number;
    typeOfResidence: string;
  };
  bankDetails: {
    currency: string;
    bank: string;
    accountNumber: string;
    accountBalance: number;
    bvn: string;
  };
  guarantor: [
    {
      firstName: string;
      lastName: string;
      phoneNumber: string;
      email: string;
      relationship: string;
    },
    {
      firstName: string;
      lastName: string;
      phoneNumber: string;
      email: string;
      relationship: string;
    }
  ];
  socials: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  education: {
    level: string;
    employmentStatus: string;
    sector: string;
    duration: string;
    officeEmail: string;
    loanRepayment: string;
    monthlyIncome: number[];
  };
}
