import { IMockAPIData } from "../interfaces/mockapi.interface";

interface IFilterData {
  data: IMockAPIData[];
  organization?: string;
  email?: string;
  username?: string;
  phone?: string;
  status?: string;
  date?: string;
}

export const filteredData = ({
  data,
  organization,
  email,
  username,
  phone,
  status,
  date,
}: IFilterData) => {
  return data.filter((item) => {
    let formatDateValue = "";

    if (date) {
      formatDateValue = new Date(date).toISOString().split("T")[0];
    }

    // Check each field if it's defined or present in the parameters
    const matchesOrganization =
      !organization ||
      item.profile.organization
        .toLowerCase()
        .includes(organization.toLowerCase());

    const matchesEmail =
      !email || item.profile.email.toLowerCase().includes(email.toLowerCase());

    const matchesUsername =
      !username ||
      item.profile.username.toLowerCase().includes(username.toLowerCase());

    const matchesPhoneNumber =
      !phone || item.profile.phoneNumber.includes(phone);

    const matchesStatus =
      !status || item.profile.status.toLowerCase() === status.toLowerCase();

    const matchesDate =
      !date || item.profile.createdAt.split("T")[0] === formatDateValue;

    return (
      matchesOrganization &&
      matchesEmail &&
      matchesUsername &&
      matchesPhoneNumber &&
      matchesStatus &&
      matchesDate
    );
  });
};
