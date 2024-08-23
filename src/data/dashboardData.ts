import {
  badgePercentIcon,
  bankIcon,
  briefcaseIcon,
  chartBarIcon,
  clipboardListIcon,
  coinSolidIcon,
  galaxyIcon,
  guarantorsIcon,
  handshakeIcon,
  piggyBank,
  requestIcon,
  sackIcon,
  scrollIcon,
  slidersIcon,
  tireIcon,
  transactIcon,
  userCheckIcon,
  userCogIcon,
  userIcon,
  userTimesIcon,
  usersActiveIcon,
  usersIcon,
  usersLoanIcon,
  usersSaveIcon,
} from "../assets";
import { IMockAPIData } from "../interfaces/mockapi.interface";
import { formatToMoney } from "../utils/formatmoney.utils";

export const dashData = [
  {
    customers: [
      { id: 1, title: "Users", icon: usersIcon, alt: "Users" },
      { id: 2, title: "Guarantors", icon: guarantorsIcon, alt: "guarantors" },
      { id: 3, title: "Loans", icon: sackIcon, alt: "sack" },
      {
        id: 4,
        title: "Decision Models",
        icon: handshakeIcon,
        alt: "handshake",
      },
      { id: 5, title: "Savings", icon: piggyBank, alt: "piggy-bank" },
      { id: 6, title: "Loan Requests", icon: requestIcon, alt: "request" },
      { id: 7, title: "Whitelist", icon: userCheckIcon, alt: "user-check" },
      { id: 8, title: "Karma", icon: userTimesIcon, alt: "user-times" },
    ],
  },
  {
    businesses: [
      { id: 9, title: "Organization", icon: briefcaseIcon, alt: "briefcase" },
      { id: 10, title: "Loan Products", icon: requestIcon, alt: "request" },
      { id: 11, title: "Savings Products", icon: bankIcon, alt: "bank" },
      {
        id: 12,
        title: "Fees and Charges",
        icon: coinSolidIcon,
        alt: "coins-solid",
      },
      { id: 13, title: "Transactions", icon: transactIcon, alt: "transact" },
      { id: 14, title: "Services", icon: galaxyIcon, alt: "galaxy" },
      {
        id: 15,
        title: "Service Account",
        icon: userCogIcon,
        alt: "user-cog",
      },
      { id: 16, title: "Settlements", icon: scrollIcon, alt: "scroll" },
      { id: 17, title: "Reports", icon: chartBarIcon, alt: "chart-bar" },
    ],
  },
  {
    settings: [
      { id: 18, title: "Preferences", icon: slidersIcon, alt: "sliders" },
      {
        id: 19,
        title: "Fees and Pricing",
        icon: badgePercentIcon,
        alt: "badge-percent",
      },
      {
        id: 20,
        title: "Audit Logs",
        icon: clipboardListIcon,
        alt: "clipboard-list",
      },
      {
        id: 21,
        title: "Systems Messages",
        icon: tireIcon,
        alt: "tire",
      },
    ],
  },
  {
    main: [
      { id: 1, title: "USERS", icon: userIcon, alt: "user", value: 2453 },
      {
        id: 2,
        title: "ACTIVE USERS",
        icon: usersActiveIcon,
        alt: "active",
        value: 2453,
      },
      {
        id: 3,
        title: "USERS WITH LOANS",
        icon: usersLoanIcon,
        alt: "loans",
        value: 12453,
      },
      {
        id: 4,
        title: "USERS WITH SAVINGS",
        icon: usersSaveIcon,
        alt: "save",
        value: 102453,
      },
    ],
  },
  {
    tableData: [
      {
        organisation: "Lendstar",
        username: "Adedeji",
        email: "adedeji@lendsqr.com",
        phone: "08078903721",
        date: "May 15, 2020 10:00 AM",
        status: "Inactive",
      },
      {
        organisation: "Irorun",
        username: "Debby Ogana",
        email: "debby2@irorun.com",
        phone: "08160780928",
        date: "Apr 30, 2020 10:00 AM",
        status: "Pending",
      },
      {
        organisation: "Lendstar",
        username: "Grace Effiom",
        email: "grace@lendstar.com",
        phone: "07060780922",
        date: "Apr 30, 2020 10:00 AM",
        status: "Blacklisted",
      },
      {
        organisation: "Lendstar",
        username: "Tosin Dokunmu",
        email: "tosin@lendsqr.com",
        phone: "07003309226",
        date: "Apr 10, 2020 10:00 AM",
        status: "Pending",
      },
      {
        organisation: "Lendstar",
        username: "Grace Effiom",
        email: "grace@lendstar.com",
        phone: "07060780922",
        date: "Apr 30, 2020 10:00 AM",
        status: "Active",
      },
      {
        organisation: "Lendsqr",
        username: "Tosin Dokunmu",
        email: "tosin@lendsqr.com",
        phone: "08060780900",
        date: "Apr 10, 2022 10:00 AM",
        status: "Active",
      },
      {
        organisation: "Lendstar",
        username: "Grace Effiom",
        email: "grace@lendstar.com",
        phone: "07060780922",
        date: "Apr 30, 2022 10:00 AM",
        status: "Blacklisted",
      },
      {
        organisation: "Lendsqr",
        username: "Tosin Dokunmu",
        email: "tosin@lendsqr.com",
        phone: "08060780900",
        date: "Apr 10, 2020 10:00 AM",
        status: "Inactive",
      },
      {
        organisation: "Lendstar",
        username: "Grace Effiom",
        email: "grace@lendstar.com",
        phone: "07060780922",
        date: "Apr 10, 2020 10:00 AM",
        status: "Inactive",
      },
    ],
  },
];

export const dropdownInput = [
  {
    label: "Username",
    type: "text",
    name: "username",
  },
  {
    label: "Email",
    type: "email",
    name: "email",
  },
  {
    label: "Date",
    type: "text",
    name: "date",
  },
  {
    label: "Phone Number",
    type: "tel",
    name: "phone",
  },
];

export const navTitle = [
  "General Details",
  "Documents",
  "Bank Details",
  "Loans",
  "Savings",
  "App and System",
];

export const UserDataFunc = (userdetails: IMockAPIData) => {
  const { profile, bankDetails, guarantor, socials, education } = userdetails;
  const { firstName, lastName, phoneNumber, email, gender } = profile;
  const { bvn, currency } = bankDetails;
  const {
    level,
    employmentStatus,
    sector,
    duration,
    officeEmail,
    monthlyIncome,
    loanRepayment,
  } = education;
  const { facebook, instagram, twitter } = socials;

  return [
    {
      title: "Personal Information",
      data: [
        { subtitle: "full name", value: `${firstName} ${lastName}` },
        { subtitle: "phone number", value: `${phoneNumber}` },
        { subtitle: "email address", value: `${email}` },
        { subtitle: "bvn", value: `${bvn}` },
        { subtitle: "gender", value: `${gender}` },
        { subtitle: "marital status", value: "Single" },
        { subtitle: "children", value: "None" },
        { subtitle: "type of residence", value: "Parent's Apartment" },
      ],
    },
    {
      title: "Educational and Employment",
      data: [
        { subtitle: "level of education", value: `${level}` },
        { subtitle: "employment status", value: `${employmentStatus}` },
        { subtitle: "sector of employment", value: `${sector}` },
        { subtitle: "duration of employment", value: `${duration}` },
        { subtitle: "office email", value: `${officeEmail}` },
        {
          subtitle: "monthly income",
          value: `${currency}${formatToMoney(
            monthlyIncome[0]
          )} - ${currency}${formatToMoney(monthlyIncome[1])}`,
        },
        {
          subtitle: "loan repayment",
          value: `${formatToMoney(+loanRepayment)}`,
        },
      ],
    },
    {
      title: "Socials",
      data: [
        { subtitle: "Twitter", value: `${twitter}` },
        { subtitle: "facebook", value: `${facebook}` },
        { subtitle: "instagram", value: `${instagram}` },
      ],
    },
    {
      title: "Guarantor",
      data: guarantor.map((dt) => ({
        gurantor: [
          { subtitle: "full name", value: `${dt.firstName} ${dt.lastName}` },
          { subtitle: "phone number", value: `${dt.phoneNumber}` },
          { subtitle: "email address", value: `${dt.email}` },
          { subtitle: "relationship", value: `${dt.relationship}` },
        ],
      })),
    },
  ];
};

export const columnTitle = [
  "Organisation",
  "Username",
  "Email",
  "Phone number",
  "Date Joined",
  "Status",
];
