import './title.css'
const titile = ({title, subtitle}) => {
  return (
    <div className="title">
        <p>{title}</p>
        <h2>{subtitle}</h2>
    </div>
  )
}

export default titile