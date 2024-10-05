import React, { createContext, useContext, useState, ReactNode } from "react";

interface User {
  name: string;
  dob: Date | null;
  email: string;
  yearOfBirth: number;
  cycleLength: number;
  breastExamDate: string;
}

export interface UserContextType {
  user: User | null;
  setUser: (user: Partial<User>) => void;
}

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

const defaultUser: User = {
  name: "",
  dob: null,
  email: "",
  yearOfBirth: new Date().getFullYear(),
  cycleLength: 28,
  breastExamDate: "",
};

export const UserProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(defaultUser);

  const updateUser = (updates: Partial<User>) => {
    setUser((prevUser) => {
      if (prevUser) {
        return {
          ...prevUser,
          ...updates,
        };
      }
      return prevUser;
    });
  };

  return (
    <UserContext.Provider value={{ user, setUser: updateUser }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
