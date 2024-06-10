import axios from 'axios';
import Constants from 'expo-constants';

export interface User {
  id: number;
  name: string;
  email: string;
}

const API_URL = `${Constants.expoConfig?.extra?.apiUrl}/users`;

export const getUsers = async (): Promise<User[]> => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
};

export const addUser = async (name: string, email: string): Promise<User | null> => {
  try {
    const response = await axios.post(API_URL, { name, email });
    return response.data;
  } catch (error) {
    console.error('Error adding user:', error);
    return null;
  }
};

export const deleteUser = async (id: number): Promise<void> => {
  try {
    await axios.delete(`${API_URL}/${id}`);
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};
