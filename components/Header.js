import { 
    BadgeCheckIcon,
    CollectionIcon,
    HomeIcon,
    LightningBoltIcon,
    SearchIcon,
    UserIcon
} from '@heroicons/react/outline'
import Image from 'next/image'
import HeaderItem from './HeaderItem'

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
            <div className="flex flex-grow justify-evenly max-w-2xl">
                <HeaderItem title="Home" Icon={HomeIcon} />
                <HeaderItem title="Trending" Icon={LightningBoltIcon} />
                <HeaderItem title="verified" Icon={BadgeCheckIcon} />
                <HeaderItem title="collections" Icon={CollectionIcon} />
                <HeaderItem title="search" Icon={SearchIcon} />
                <HeaderItem title="account" Icon={UserIcon} />
            </div>
            <Image
                className="object-contain"
                src="https://links.papareact.com/ua6"
                width={200}
                height={100}
                alt="Logo"
            />
        </header>
    )
}

export default Header
