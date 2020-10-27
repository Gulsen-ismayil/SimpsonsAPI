
const Simpsons = ({simpsons}) => {
    return (
      <div>
        <h2>{simpsons.character}</h2>
        <img src={simpsons.image} alt={simpsons.character} />
        <p><strong>{simpsons.quote}</strong></p>
      </div>
    )
  }
  



export default Simpsons;