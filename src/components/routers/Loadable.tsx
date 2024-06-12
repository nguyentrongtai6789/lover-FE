import { lazy, Suspense } from "react";

interface Props {
  [key: string]: any;
}

type LazyComponent = ReturnType<typeof lazy>;

const Loadable = (Component: LazyComponent) => (props: Props) =>
  (
    <Suspense>
      <Component {...props} />
    </Suspense>
  );

export default Loadable;
