export default function PatternBackground() {
  return (
    <>
      {/* Desktop Pattern */}
      <svg
        className='absolute inset-0 z-0 pointer-events-none w-full max-w-[1600px] h-full -translate-x-1/2 left-1/2 top-0 hidden md:block'
        viewBox='0 0 1561 1404'
        fill='none'
        preserveAspectRatio='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <line
          opacity='0.5'
          x1='1560.49'
          y1='1399.71'
          x2='1560.49'
          y2='-144.64'
          stroke='url(#paint0_linear)'
          strokeWidth='0.5'
        />
        <line
          opacity='0.5'
          x1='1067.75'
          y1='1393.63'
          x2='1067.75'
          y2='-150.716'
          stroke='url(#paint1_linear)'
          strokeWidth='0.5'
        />
        <line
          opacity='0.5'
          x1='532.75'
          y1='1368.35'
          x2='532.75'
          y2='-175.999'
          stroke='url(#paint2_linear)'
          strokeWidth='0.5'
        />
        <line
          opacity='0.5'
          x1='0.75'
          y1='1403.71'
          x2='0.75'
          y2='-140.639'
          stroke='url(#paint3_linear)'
          strokeWidth='0.5'
        />
        <defs>
          <linearGradient
            id='paint0_linear'
            x1='1561.24'
            y1='-144.64'
            x2='1561.24'
            y2='1399.71'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.05' stopColor='#0D0D0D' stopOpacity='1' />
          </linearGradient>
          <linearGradient
            id='paint1_linear'
            x1='1068.5'
            y1='-150.716'
            x2='1068.5'
            y2='1393.63'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.05' stopColor='#0D0D0D' stopOpacity='1' />
          </linearGradient>
          <linearGradient
            id='paint2_linear'
            x1='533.5'
            y1='-175.999'
            x2='533.5'
            y2='1368.35'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.05' stopColor='#0D0D0D' stopOpacity='1' />
          </linearGradient>
          <linearGradient
            id='paint3_linear'
            x1='1.5'
            y1='-140.639'
            x2='1.5'
            y2='1403.71' ///
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.05' stopColor='#0D0D0D' stopOpacity='1' />
          </linearGradient>
        </defs>
      </svg>

      {/* Mobile Pattern */}
      <svg
        width='182'
        height='1159'
        viewBox='0 0 182 1159'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
        className='absolute inset-0 z-0 pointer-events-none ml-4  h-full top-0 block md:hidden'
      >
        <line
          opacity='0.5'
          x1='0.736572'
          y1='1157.01'
          x2='0.736572'
          y2='-34.2732'
          stroke='url(#paint1_linear_mobile)'
          strokeOpacity='0.8'
          strokeWidth='0.5'
        />
        <line
          opacity='0.5'
          y1='-0.25'
          x2='1189.15'
          y2='-0.25'
          transform='matrix(-0.00198 -0.999998 1 -0.0000456 181.987 1158.59)'
          stroke='url(#paint0_linear_mobile)'
          strokeOpacity='0.8'
          strokeWidth='0.5'
        />
        <defs>
          <linearGradient
            id='paint0_linear_mobile'
            x1='1189.15'
            y1='0.5'
            x2='0'
            y2='0.5'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.03' stopColor='#0D0D0D' stopOpacity='1' />
          </linearGradient>
          <linearGradient
            id='paint1_linear_mobile'
            x1='1.48657'
            y1='-34.2732'
            x2='1.48657'
            y2='1157.01'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.03' stopColor='#0D0D0D' stopOpacity='1' />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}
