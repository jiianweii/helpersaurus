import Logo from "./Logo";
import Menu from "./Menu";

export default function Navigation() {
  return (
    <div className="flex justify-between items-center lg:px-12 md:px-8 px-4 py-4">
      <Logo />
      <Menu />
    </div>
  );
}
