import { container } from '../constants/styles/modules/auth/AuthLayout.module.scss';

export default function AuthLayout({ children }) {
  return <main className={container}>{children}</main>;
}
