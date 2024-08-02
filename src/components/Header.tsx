import ThemeSwitcher from "@/components/ThemeSwitcher";

import Menu from "@/components/Menu";

import { Menu as MenuIcon } from "lucide-react";

const Header = () => {
  return (
    <header className="flex items-center justify-between gap-4 p-4 border-b">
      <ThemeSwitcher />

      <Menu>
        <MenuIcon size={24} />
      </Menu>
    </header>
  );
};

export default Header;
