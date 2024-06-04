import { jwtVerify } from "jose";

export default async function verifyToken(token: string): Promise<boolean> {
    if (!token) return false;
    try {
      const jwtKey = process.env.JWT_PASSWORD  
      await jwtVerify(
        token,
        new TextEncoder().encode(jwtKey,),
        {
          algorithms: ['HS256'],
        },
      );
      return true;
    } catch (error) {
      return false;
    }
  }