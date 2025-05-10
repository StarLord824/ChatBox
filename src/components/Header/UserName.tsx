
export default function UserName (props: { username: string }) {
    return (
        <div className='flex justify-center items-center text-white'>
            <h1 className='text-2xl font-bold'>{props.username}</h1>
        </div>
    )
}
