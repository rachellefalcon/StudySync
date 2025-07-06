import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define what kind of data you'll store
type SignUpData = {
  email?: string;
  phone?: string;
  password?: string;
  fullName?: string;
  birthday?: string;
  gender?: string;
  school?: string;
  major?: string;
  classes?: string[];
  preferences?: string[];
  profilePicture?: string; // base64 or URL
};

// Context type
type SignUpContextType = {
  formData: SignUpData;
  updateForm: (newData: Partial<SignUpData>) => void;
};

// Create Context with default (undefined)
const SignUpContext = createContext<SignUpContextType | undefined>(undefined);

// Provider component
export const SignUpProvider = ({ children }: { children: ReactNode }) => {
  const [formData, setFormData] = useState<SignUpData>({});

  const updateForm = (newData: Partial<SignUpData>) => {
    setFormData((prev) => ({ ...prev, ...newData }));
  };

  return (
    <SignUpContext.Provider value={{ formData, updateForm }}>
      {children}
    </SignUpContext.Provider>
  );
};

// Custom hook
export const useSignUp = () => {
  const context = useContext(SignUpContext);
  if (!context) {
    throw new Error('useSignUp must be used within a SignUpProvider');
  }
  return context;
};
