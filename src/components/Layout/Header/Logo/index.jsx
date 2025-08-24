import { getImagePrefix } from '@/utils/util';
import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
	return (
		<Link href='/'>
			<Image
				src={`${getImagePrefix()}images/logo/STHINMS.jpg`}
				alt='STHINMS logo'
				width={80}
				height={25}
				style={{ width: '60px', height: '60px' }}
				quality={100}
			/>
		</Link>
	);
};

export default Logo;
