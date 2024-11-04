import { EmptyView } from '@/components/shared/empty-view';

export default function NotFound() {
  return (
    <EmptyView
      image='/assets/svgs/404.svg'
      title='Oops! Page not found'
      description='The page you are looking for might have been removed or temporarily
        unavailable'
      buttonTitle='Back to Home Page'
    />
  );
}
