import Link from "next/link"
const loginCard = () => {
  return (
    <div className="max-width bg-green-light h-screen flex items-center justify-center">
      <div className="bg-light items-center w-2/4 h-[80vh] rounded-lg shadow-md grid grid-cols-5 overflow-hidden">

        <div className="left col-span-2 bg-dark h-full">
            
        </div>
        <div className="right col-span-3 h-full">
          <div className="px-10 py-20 border-2 h-full text-center">
            <h1 className="font-medium text-2xl mb-5">Hospital Login</h1>
            <label htmlFor="private_key">Private Key</label>
            <input type="text" name="private_key" id="private_key" className="border-2"/>
            <Link href="/">Login</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default loginCard