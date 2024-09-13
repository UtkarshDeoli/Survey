import { HashLoader } from "react-spinners"

interface props{
    className?:string
}
function Loader({className}:props) {
  return (
    <div className={className}>
        <HashLoader color="#477BFF"/>
    </div>
  )
}

export default Loader