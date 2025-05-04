// src/components/SocialBox.tsx
import Image from 'next/image';
import Link from 'next/link';

interface SocialBoxProps {
  href: string;
  title: string;
  thumbnail: string;
  iconPath: string;
}

export default function SocialBox({ href, title, thumbnail, iconPath }: SocialBoxProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="relative rounded-xl overflow-hidden bg-gradient-to-br dark:from-neutral-800 dark:to-neutral-900 from-neutral-100 to-neutral-50 shadow-neutral-200 dark:shadow-neutral-500 shadow-sm hover:shadow min-h-[200px] grid grid-cols-1"
    >
      <div className="absolute w-full h-full">
        <div className="relative w-full h-full">
          <Image
            src={thumbnail}
            alt={title}
            fill
            className="object-cover opacity-60"
          />
        </div>
      </div>
      <div className="relative p-4 flex items-end">
        <div className="flex gap-4 items-center">
          <div className="relative h-6 w-6">
            <Image
              src={iconPath}
              alt={`${title} icon`}
              width={24}
              height={24}
            />
          </div>
          <span className="text-xl font-semibold text-white drop-shadow">
            {title}
          </span>
        </div>
      </div>
    </Link>
  );
}