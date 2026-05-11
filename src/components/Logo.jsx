import logoImage from '../assets/logo.png';

export const Logo = () => {
  return (
    <div className="flex items-center justify-center">
      <img
        src={logoImage}
        alt="Alpha Legal Assistant Logo"
        className="h-15 w-20 rounded-xl object-contain"
      />
    </div>
  );
};

export default Logo;