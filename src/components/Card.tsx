
interface Props {
    title: string
    description: string
    image: string
    
}
const Card = ({title,description,image}: Props) => {
  return (
    <>
    <div className='max-w-sm rounded overflow-hidden shadow-lg m-5'>
        <img className="w-full h-48 object-cover"  src={image} alt={title}/>
        <div className="p-6">
            <h2 className="text-2xl font-bold mb-2">{title}</h2>
            <p className='text-gray-700 mb-4'>{description}</p>

            <a href='' className='inline-block px-4 py-4 bg-white  font-semibold rounded-lg shadow hover:bg-gray-600 hover:text-white transition duration-200'>Learn More</a>
        </div>
    </div>
    </>
  )
}

export default Card