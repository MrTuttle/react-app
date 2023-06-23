
interface Props {
  children: string;
  color?: 'primary' | 'secondary' | 'info' | 'danger';
  onClick: () => void;

}

const Button = ({children, color = 'danger', onClick}: Props) => {
  return (
    <button className={'btn btn-outline-' + color} onClick={onClick}>{children}</button>
  )
}

export default Button
