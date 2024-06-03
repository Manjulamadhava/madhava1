import './index.css'

const EventItem = props => {
  const {information, onChanging} = props
  const {id, imageUrl, name, location} = information

  const onClickChanging = () => {
    onChanging(id)
  }
  return (
    <li>
      <button onClick={onClickChanging}>
        <img src={imageUrl} />
      </button>
      <h1>{name}</h1>
      <p>{location}</p>
    </li>
  )
}

export default EventItem
