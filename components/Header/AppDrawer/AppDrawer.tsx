import { Drawer } from "@mui/material";

interface Props {
  drawerIsOpen: boolean;
  setDrawerIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const AppDrawer = ({ drawerIsOpen, setDrawerIsOpen }: Props) => {
  return (
    <Drawer open={drawerIsOpen} onClose={() => setDrawerIsOpen(false)}>
      content
    </Drawer>
  );
};
export default AppDrawer;
