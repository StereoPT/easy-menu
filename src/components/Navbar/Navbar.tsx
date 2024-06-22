import {
  Badge,
  Button,
  Navbar as DaisyNavbar,
  Dropdown,
  Indicator,
} from 'react-daisyui';
import { FiBell, FiMenu } from 'react-icons/fi';

const Navbar = () => {
  return (
    <DaisyNavbar className="bg-neutral text-neutral-content">
      <DaisyNavbar.Start>
        <Dropdown>
          <Button tag="label" color="ghost" shape="circle" tabIndex={0}>
            <FiMenu size={20} />
          </Button>
          <Dropdown.Menu className="menu-sm w-52 mt-3 z-[1] bg-neutral">
            <Dropdown.Item>Homepage</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </DaisyNavbar.Start>
      <DaisyNavbar.Center>
        <Button tag="a" color="ghost" className="normal-case text-xl" href="#">
          Easy-Menu
        </Button>
      </DaisyNavbar.Center>
      <DaisyNavbar.End>
        <Button color="ghost" shape="circle">
          <Indicator>
            <Badge
              size="xs"
              color="primary"
              className={Indicator.Item.className()}
            />
            <FiBell size={20} />
          </Indicator>
        </Button>
      </DaisyNavbar.End>
    </DaisyNavbar>
  );
};

export default Navbar;
