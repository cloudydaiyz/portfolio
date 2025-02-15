import { useContext, createContext, useState } from 'react';

export function useHeaderNav() {
  const [heroVisible, setHeroVisible] = useState(false);
  const [techStackVisible, setTechStackVisible] = useState(false);
  const [projectsVisible, setProjectsVisible] = useState(false);
  const [contactMeVisible, setContactMeVisible] = useState(false);

  return {
    heroVisible,
    setHeroVisible,
    techStackVisible,
    setTechStackVisible,
    projectsVisible,
    setProjectsVisible,
    contactMeVisible,
    setContactMeVisible,
  };
}

const HeaderNavContext = createContext<ReturnType<typeof useHeaderNav> | undefined>(undefined);

export function HeaderNavProvider({ children }: { children: React.ReactNode }) {
  const headerNav = useHeaderNav();
  return <HeaderNavContext.Provider value={headerNav}>{children}</HeaderNavContext.Provider>;
}

export function useHeaderNavContext() {
  const ctx = useContext(HeaderNavContext);
  if (!ctx) throw new Error('Invalid state: Header Nav Context not available.');
  return ctx;
}
