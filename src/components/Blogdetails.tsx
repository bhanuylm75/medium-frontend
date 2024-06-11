export interface Blog {
  "content": string;
  "title": string;
  "id": number
  "author": {
      "name": string
  }
}

const Blogdetails = ({ blog }: {blog: Blog}) => {

  return (
    <div className="container mx-auto p-4">
    <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
    <p className="text-gray-600">by {blog.author.name}</p>
    <div className="prose mb-6">
      <p>{blog.content}</p>
    </div>
    <div className="flex space-x-4">
      <button  className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
      <button  className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
    </div>
  </div>
  )
}

export default Blogdetails