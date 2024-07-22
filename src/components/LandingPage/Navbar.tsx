import { Badge, Button, Navbar as DaisyNavbar, Indicator } from 'react-daisyui';
import { FiBell } from 'react-icons/fi';

const Navbar = () => {
  return (
    <DaisyNavbar className="bg-neutral text-neutral-content shadow-lg">
      <DaisyNavbar.Start></DaisyNavbar.Start>
      <DaisyNavbar.Center>
        <Button color="ghost" className="normal-case text-xl">
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
