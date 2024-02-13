import { EyeIcon, EditIcon, DeleteIcon } from '@/assets/icons';
import { LeadOptionsProps } from '@/models/global-types';


const LeadsOptions = ({ handleViewButton, handleEditButton,  handleDeleteButton }: LeadOptionsProps) => {
  return (
    <div>
      <div className='py-1'>
        <button
          type='button'
          className='flex justify-start items-center md:pl-2 lg:pl-4 outline-none'
          onClick={handleViewButton}>
          <div>
            <EyeIcon />
          </div>
          <div className=' text-gray-700 leading-trim font-semibold md:text-[12px] lg:text-[16px] block md:px-2 lg:px-4 py-2 text-sm'>
            View Details
          </div>
        </button>
        <button
          type='button'
          className='menu-item flex justify-start items-center md:pl-2 lg:pl-4'
          onClick={handleEditButton}>
          <div>
            <EditIcon />
          </div>
          <div className=' text-gray-700 leading-trim font-semibold md:text-[12px] lg:text-[16px] block md:pl-2 lg:pl-4 py-2 text-sm'>
            Edit
          </div>
        </button>
        <button
          className='flex justify-start items-center md:pl-2 lg:pl-4 outline-none'
          type='button'
          onClick={handleDeleteButton}>
          <div>
            <DeleteIcon />
          </div>
          <div className=' text-gray-700 leading-trim font-semibold md:text-[12px] lg:text-[16px] block md:pl-2 lg:pl-4 py-2 text-sm'>
            Delete
          </div>
        </button>
      </div>
    </div>
  );
};

export default LeadsOptions;
