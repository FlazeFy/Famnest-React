"use client"
import { useEffect } from "react"
import { LoginResponsePayload, refreshAuthToken } from "@/repositories/r_auth"
import useAuthStore from "@/store/s_auth"
import useFamilyStore from "@/store/s_family"

type AuthProviderProps = {
  children: React.ReactNode
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }: AuthProviderProps) => {
  const { onLoginStore, onLogOutStore } = useAuthStore()
  const { onFamilyStore } = useFamilyStore()

  useEffect(() => {
    refreshAuthToken()
      .then((res: LoginResponsePayload) => {
        // Store local data
        localStorage.setItem('token_key', res.token)

        // Store global state data
        onLoginStore({ name: res.name, email: res.email, role: res.role })
        onFamilyStore(res.family)
      })
      .catch(() => {
        onLogOutStore()
        localStorage.removeItem("token_key")
      })
  }, [onLoginStore, onLogOutStore])

  return <>{children}</>
}
