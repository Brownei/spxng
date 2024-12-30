import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export type NavMobile = {
  selectedNavMobile: "finding-product" | "research-&-insights" | "who-we-are" | "",
}

interface NavMobileState {
  navMobile: NavMobile
  setSelectedNavMobile: (newNavMobile: "finding-product" | "research-&-insights" | "who-we-are" | "") => void
}

export const useNavMobileStore = create<NavMobileState>()(
  persist(
    (set) => ({
      navMobile: {
        selectedNavMobile: "",
      },
      setSelectedNavMobile: (newNavMobile) => set(() => ({
        navMobile: {
          selectedNavMobile: newNavMobile
        }
      })),
    }),
    { name: "selectedNavMobile" }
  )
)



