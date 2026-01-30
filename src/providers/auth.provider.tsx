"use client"
import { useEffect } from "react"
import { LoginResponsePayload, refreshAuthToken } from "@/repositories/r_auth"
import useAuthStore from "@/store/s_auth"

type AuthProviderProps = {
  children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }: AuthProviderProps) => {
  const { onLoginStore, onLogOutStore } = useAuthStore()

  useEffect(() => {
    refreshAuthToken()
      .then((res: LoginResponsePayload) => {
        onLoginStore({ name: res.name.trim(), email: res.email, role: res.role })
      })
      .catch(() => {
        onLogOutStore()
        localStorage.removeItem("token_key")
      })
  }, [onLoginStore, onLogOutStore])

  return <>{children}</>
}
