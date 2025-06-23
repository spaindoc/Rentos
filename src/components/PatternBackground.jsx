export default function PatternBackground() {
  return (
    <>
      {/* Desktop Pattern */}
      <svg
        className='absolute inset-0 z-0 pointer-events-none w-full max-w-[1080px] 2xl:max-w-[1400px] h-full -translate-x-1/2 left-1/2 top-0 hidden md:block'
        width='1081'
        height='1050'
        viewBox='0 0 1081 1050'
        fill='none'
        preserveAspectRatio='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <line
          opacity='0.5'
          x1='1080.81'
          y1='1049.78'
          x2='1080.81'
          y2='-108.482'
          stroke='url(#paint0_linear_272_253)'
          strokeWidth='0.375'
        />
        <line
          opacity='0.5'
          x1='747.812'
          y1='1045.22'
          x2='747.812'
          y2='-113.038'
          stroke='url(#paint1_linear_272_253)'
          strokeWidth='0.375'
        />
        <line
          opacity='0.5'
          x1='373.812'
          y1='1045.22'
          x2='373.812'
          y2='-132.002'
          stroke='url(#paint2_linear_272_253)'
          strokeWidth='0.375'
        />
        <line
          opacity='0.5'
          x1='0.8125'
          y1='1046'
          x2='0.8125'
          y2='-104.703'
          stroke='url(#paint3_linear_272_253)'
          strokeWidth='0.375'
        />
        <defs>
          <linearGradient
            id='paint0_linear_272_253'
            x1='1081.5'
            y1='-108.482'
            x2='1081.5'
            y2='1049.78'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.0528846' stopColor='#0D0D0D' stopOpacity='1' />
          </linearGradient>
          <linearGradient
            id='paint1_linear_272_253'
            x1='748.5'
            y1='-113.038'
            x2='748.5'
            y2='1045.22'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.0528846' stopColor='#0D0D0D' stopOpacity='1' />
          </linearGradient>
          <linearGradient
            id='paint2_linear_272_253'
            x1='374.5'
            y1='-132.002'
            x2='374.5'
            y2='1045.22'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.0528846' stopColor='#0D0D0D' stopOpacity='1' />
          </linearGradient>
          <linearGradient
            id='paint3_linear_272_253'
            x1='1.5'
            y1='-104.703'
            x2='1.5'
            y2='1046'
            gradientUnits='userSpaceOnUse'
          >
            <stop offset='0.0528846' stopColor='#0D0D0D' stopOpacity='1' />
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
        className='absolute inset-0 z-0 pointer-events-none ml-4  h-full  top-0 block md:hidden'
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
