import { Avatar, Navbar, Dropdown } from 'flowbite-react';
import logo from '../assets/logo.png';
import perfil from '../assets/perfil.jpg';

export default function Header() {
  return (
    <Navbar fluid rounded>
      <Navbar.Brand href="https://flowbite.com/">
        <img src={logo} className="mr-3 h-6 sm:h-9" alt="CBMMS Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Intranet
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Dropdown
          arrowIcon={false}
          inline
          label={<Avatar alt="User settings" img={perfil} rounded bordered />}
        >
          <Dropdown.Header>
            <span className="block text-sm">Bonnie Green</span>
            <span className="block truncate text-sm font-medium">
              name@flowbite.com
            </span>
          </Dropdown.Header>
          <Dropdown.Item>Dashboard</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item>Earnings</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item>Sign out</Dropdown.Item>
        </Dropdown>
        <Navbar.Toggle />
      </div>
    </Navbar>
  );
}
