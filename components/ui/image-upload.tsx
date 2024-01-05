import { GalleryIcon } from '@/assets/icons';
import { InputHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  htmlFor?: string;
}

export const ImageUpload = ({
  label,
  placeholder,
  htmlFor,
  className,
  type,
  ...props
}: InputProps) => (
  <label htmlFor={htmlFor} className='text-[#00156A] text-sm font-medium'>
    <div
      className={twMerge(
        'w-full rounded-[10px] border-none bg-[#F3F3F3] flex flex-col items-center justify-center gap-2 cursor-pointer',
        className
      )}>
      <GalleryIcon />
      <p className='text-[#B9C1D9] font-medium'>{placeholder}</p>
      <input {...props} type='file' className='hidden' />
    </div>
  </label>
);
