interface SubsectionConnectorProps {
  isFirst: boolean;
  isParentActive: boolean;
}

export const SubsectionConnector: React.FC<SubsectionConnectorProps> = ({ isFirst, isParentActive }) => {
  if (isFirst) {
    return (
      <svg
        width="14"
        height="22"
        viewBox="0 0 14 22"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.9998 21.7C13.3864 21.7 13.6998 21.3866 13.6998 21C13.6998 20.6134 13.3864 20.3 12.9998 20.3V21.7ZM0.299802 0V11.9677H1.6998V0H0.299802ZM0.299802 11.9677C0.299802 16.0689 1.3258 18.5893 3.19628 20.0374C5.02413 21.4525 7.49221 21.7 9.9998 21.7V20.3C7.50739 20.3 5.47548 20.0314 4.05332 18.9304C2.6738 17.8623 1.6998 15.8666 1.6998 11.9677H0.299802ZM9.9998 21.7H12.9998V20.3H9.9998V21.7Z"
          fill={isParentActive ? "#D175B6" : "white"}
        />
      </svg>
    );
  }

  return (    <svg
      width="14"
      height="55"
      viewBox="0 0 14 55"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 54.7C13.3866 54.7 13.7 54.3866 13.7 54C13.7 53.6134 13.3866 53.3 13 53.3V54.7ZM0.3 0V44.9677H1.7V0H0.3ZM0.3 44.9677C0.3 49.0689 1.326 51.5893 3.19648 53.0374C5.02432 54.4525 7.49241 54.7 10 54.7V53.3C7.50759 53.3 5.47568 53.0314 4.05352 51.9304C2.674 50.8623 1.7 48.8666 1.7 44.9677H0.3ZM10 54.7H13V53.3H10V54.7Z"
        fill={isParentActive ? "#D175B6" : "white"}
      />
    </svg>
  );
};

export default SubsectionConnector;
