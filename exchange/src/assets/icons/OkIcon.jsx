export default function OkIcon(props) {
  return (
    <svg
      width={props.size}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <path
        opacity='0.4'
        d='M16.3403 1.9998H7.67031C4.28031 1.9998 2.00031 4.3798 2.00031 7.9198V16.0898C2.00031 19.6198 4.28031 21.9998 7.67031 21.9998H16.3403C19.7303 21.9998 22.0003 19.6198 22.0003 16.0898V7.9198C22.0003 4.3798 19.7303 1.9998 16.3403 1.9998Z'
        fill={props.color}
      />
      <path
        d='M10.8134 15.2479C10.5894 15.2479 10.3654 15.1629 10.1944 14.9919L7.82138 12.6189C7.47938 12.2769 7.47938 11.7229 7.82138 11.3819C8.16338 11.0399 8.71638 11.0389 9.05838 11.3809L10.8134 13.1359L14.9414 9.0079C15.2834 8.6659 15.8364 8.6659 16.1784 9.0079C16.5204 9.3499 16.5204 9.9039 16.1784 10.2459L11.4324 14.9919C11.2614 15.1629 11.0374 15.2479 10.8134 15.2479Z'
        fill={props.color}
      />
    </svg>
  );
}