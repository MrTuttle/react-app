import { ReactNode } from "react";

interface Props {
  children:ReactNode;
  display: string;
}

const Alert = ( { children, display="show" }: Props) => {
  return (
    <div className={"alert alert-warning alert-dismissible fade " + display} role="alert">{children}
    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
  )
}

export default Alert
