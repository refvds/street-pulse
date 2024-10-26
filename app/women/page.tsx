import { Filters } from '@/components/shared/filters';
import { SortButtons } from '@/components/shared/sort-buttons';

export default function WomenPage() {
  return (
    <div className=' max-w-[1237px] flex '>
      <Filters audience='Women' />
      <div>
        <h2></h2>
        <SortButtons />
      </div>
    </div>
  );
}
