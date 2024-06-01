// import { Schema, model, connect } from 'mongoose';

export type UserName = {
  firstName: string;
  middleName: string;
  lastName: string;
};

export type LocalGurdian = {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
};

export type Gurdian = {
  fatherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
  motherName: string;
  motherOccupation: string;
  motherContactNo: string;
};
export type Student = {
  id: string;
  name: UserName;
  gender: 'male' | 'female';
  email: string;
  avatar?: string;
  contactNo: string;
  emergencyContactNo: string;
  bloodGroup?: 'A+' | 'B+' | 'AB+' | 'O+' | 'A-' | 'B-' | 'AB-' | 'O-';
  presentAddress: string;
  permanentAddress: string;
  gurdian: Gurdian;
  localGurdian: LocalGurdian;
  profileImg?: string;
  isActive: 'active' | 'blocked';
};
