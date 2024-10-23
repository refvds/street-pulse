import { Filters } from '@/components/shared/filters';
import { SortButtons } from '@/components/sort-buttons';

export default function WomenPage() {
  return (
    <div className=' max-w-[1237px] flex '>
      <Filters />
      <div>
        <h2></h2>
        <SortButtons />
      </div>
    </div>
  );
}
