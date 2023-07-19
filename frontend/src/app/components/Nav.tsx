
export default function Nav() {
    return( 
        <div className='flex justify-center align-center bg-slate-800 p-2'>
            <ul className='flex gap-2 text-[white]'>
                <li>Home</li>
                <li>About</li>
                <li>Chart</li>
            </ul>
            <h1 className='text-[white] text-2xl ml-auto mr-auto'>My Shitcoin Website</h1>
            <button className='text-[white]'>Buy Now</button>
        </div>
    )
}