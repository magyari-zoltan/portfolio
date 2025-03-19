import './TogglerMenu.css'

interface TogglerMenuProps {
  onToggle: () => void
}

const TogglerMenu = ({ onToggle }: TogglerMenuProps) => {
  return (
    <i
      className="fa-solid fa-bars button button-float menu-toggler"
      onClick={onToggle}
    ></i>
  );
}

export default TogglerMenu;
