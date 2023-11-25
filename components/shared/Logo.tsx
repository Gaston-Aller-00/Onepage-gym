import Link from 'next/link'
import Image from 'next/image';
// logo enviar al hero
const Logo = () => {
    return ( <Link href="/" type="button" className='text-white '>
       <Image
        className='hover:boxShadow'
        src="/images/logo.png" 
        alt="logo"
        width={80} 
        height={80} 
      />
    </Link> );
}
 
//todo poner logo lindo
export default Logo;