import Spinner from '@/components/Spinner'
import { LazyExoticComponent, Suspense } from 'react'

export default function lazyLoad(Component: LazyExoticComponent<any>) {
  return (
    <Suspense fallback={<Spinner />}>
      <Component />
    </Suspense>
  )
}
