
interface Props {
  children: string;
  color?: 'primary' | 'secondary' | 'info' | 'danger';
  onClick: () => void;

}

const Button = ({children, color = 'machin', onClick}: Props) => {
  return (
    <button className={'btn btn-' + color} onClick={onClick}>{children}</button>
  )
}

export default Button
