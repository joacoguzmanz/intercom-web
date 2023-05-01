import Link from "next/link";

const MenuItem = ({ title, href }) => {
    return (
    <Link href={href} className='inline-block text-white py-2 px-4 bg-gray-800 rounded-lg hover:bg-white/10'>
        {title}
    </Link>
  );
}

export default MenuItem;