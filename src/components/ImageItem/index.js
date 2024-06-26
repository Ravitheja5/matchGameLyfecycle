import './index.css'

const ImageItem = props => {
  const {imageDetails, onClickIMage} = props
  const {id, imageUrl} = imageDetails
  const onClickImageItem = () => {
    onClickIMage(id)
  }
  return (
    <li className="image-item" onClick={onClickImageItem}>
      <img className="image" src={imageUrl} alt={`item-${id}`} />
    </li>
  )
}

export default ImageItem
