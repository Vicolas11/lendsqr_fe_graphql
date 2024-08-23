import { IMockAPIData } from "../interfaces/mockapi.interface";

export const searchData = (data: IMockAPIData[], searchTerm: string) =>
  data.filter((item) => {
    return (
      item.profile.organization
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      item.profile.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.profile.username.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.profile.phoneNumber.includes(searchTerm) ||
      item.profile.status.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.profile.createdAt.includes(searchTerm)
    );
  });
