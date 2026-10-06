import Image from 'next/image';
import { IMG, type ImgKey } from '@/data/images';
export function Photo({ k, alt, className = '', priority = false, sizes = '100vw', zoom = false }: { k: ImgKey; alt: string; className?: string; priority?: boolean; sizes?: string; zoom?: boolean }) {
  return (<div className={`relative overflow-hidden bg-navy ${className}`}>
    <Image src={IMG[k]} alt={alt} fill priority={priority} sizes={sizes} className={`object-cover ${zoom ? 'transition-transform duration-[1400ms] ease-out group-hover:scale-105' : ''}`} />
  </div>);
}
