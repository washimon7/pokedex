import { useAuth } from "./useAuth"

export const useSignOut = () => {
    const { justSignedOut } = useAuth()

    const doSignOut = () => {
        justSignedOut()
    }
    
    return { doSignOut }
}