import { User } from "../models/user.model";
import { hashPassword, comparePassword } from "../utils/hash.util";
import { generateToken } from "../utils/jwt.util";

export const registerUser = async (
  name: string,
  email: string,
  password: string
) => {
  const exists = await User.findOne({ email });
  if (exists) throw new Error("Email já cadastrado");

  const hashed = await hashPassword(password);
  const user = await User.create({
    name,
    email,
    password: hashed,
    role: "user",
  });

  return { id: user._id, name: user.name, email: user.email };
};

export const loginUser = async (email: string, password: string) => {
  const user = await User.findOne({ email });
  if (!user) throw new Error("Usuário não encontrado");
  const valid = await comparePassword(password, user.password);
  if (!valid) throw new Error("Senha inválida");
  const token = generateToken({
    id: user._id,
    email: user.email,
    name: user.name,
    role: user.role,
  });
  return { token };
};
