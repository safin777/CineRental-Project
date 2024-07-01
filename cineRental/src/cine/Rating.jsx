import Star from '../assets/star.svg'
// eslint-disable-next-line react/prop-types
export default function Rating({value}) {
  const stars = Array(value).fill(Star)
  return (
    <>
        {stars.map((star,index) => (
            <img src={star} key={index} width="14" height="14" alt="star" />
        ))}
    </>
  )
}
