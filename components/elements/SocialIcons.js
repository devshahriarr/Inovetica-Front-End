import Link from "next/link";


const SocialIcons = () => {
    return (
        <div className="spilit-socail d-flex align-items-center gap-xxl-16 gap-xl-10 gap-5">
            <Link href="/#">
                FaceBook
            </Link>
            <Link href="/#">
                Twitter
            </Link>
            <Link href="/#">
                Instagram
            </Link>
        </div>
    );
};

export default SocialIcons;