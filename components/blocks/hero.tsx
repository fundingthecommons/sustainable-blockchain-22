import * as React from "react";
import { TinaMarkdown } from "tinacms/dist/rich-text";
import { Section } from "../section";
import { Buttons } from "../buttons";

const BG1 = () => {
  return (
    <div className="absolute -z-2 top-0 left-1/2 transform -translate-x-3/4">
      <svg width="1974" height="1875" viewBox="0 0 1974 1875" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1561.5 0H0V1875H1973.5L1561.5 0Z" fill="url(#paint0_linear_1494_295)"/>
        <defs>
          <linearGradient id="paint0_linear_1494_295" x1="726" y1="-546" x2="1363.02" y2="390.128" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ABE8FB"/>
            <stop offset="1" stopColor="#EFFBFF"/>
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}
const BG2 = () => {
  return (
    <svg width="100%" height="100%">
      <defs>
        <pattern id="trees" x="0" y="0" width="65" height="180" patternUnits="userSpaceOnUse">
          <svg width="49" height="164" viewBox="0 0 49 164" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M46.9003 13.3L26.3003 1.39995C25.2003 0.799951 23.8002 0.799951 22.7002 1.39995L2.10022 13.3C1.00022 13.9 0.300293 15.1 0.300293 16.4V52.7999C0.300293 54.0999 1.00022 55.3 2.10022 55.9L17.7002 64.9V60L4.60022 52.4V16.7L24.6002 5.19995L44.6002 16.7V52.4L31.5002 60V64.9L47.1002 55.9C48.2002 55.3 48.9003 54.0999 48.9003 52.7999V16.4C48.7003 15.1 48.0003 13.9 46.9003 13.3Z" fill="#cbf6c6"/>
            <path d="M37.3003 23.2999V18.4999L26.7002 24.5999V12.4999H22.4003V24.5999L11.7002 18.4999V23.2999L22.4003 29.4999V37.0999L11.7002 30.9999V35.7999L22.4003 41.9999V49.5999L11.7002 43.3999V48.2999L22.4003 54.4999V78.5999H26.7002V54.4999L37.3003 48.2999V43.3999L26.7002 49.5999V41.9999L37.3003 35.7999V30.9999L26.7002 37.0999V29.4999L37.3003 23.2999Z" fill="#cbf6c6"/>
            <path d="M46.9003 110.5L26.3003 98.5999C25.2003 97.9999 23.8002 97.9999 22.7002 98.5999L2.10022 110.5C1.00022 111.1 0.300293 112.3 0.300293 113.6V137.4C0.300293 138.7 1.00022 139.9 2.10022 140.5L17.7002 149.5V144.6L4.60022 137V114L24.6002 102.5L44.6002 114V137L31.5002 144.6V149.5L47.1002 140.5C48.2002 139.9 48.9003 138.7 48.9003 137.4V113.6C48.7003 112.3 48.0003 111.1 46.9003 110.5Z" fill="#cbf6c6"/>
            <path d="M37.3003 120.5V115.6L26.7002 121.8V109.7H22.4003V121.8L11.7002 115.6V120.5L22.4003 126.7V134.3L11.7002 128.1V133L22.4003 139.2V163.5H26.7002V139.2L37.3003 133V128.1L26.7002 134.3V126.7L37.3003 120.5Z" fill="#cbf6c6"/>
          </svg>
        </pattern>
      </defs>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#trees)"></rect>
    </svg>
  )
}
const Logo = () => {
  return (
    <svg className="md:w-full" width="500" viewBox="0 0 500 192" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M3.93091 139.113H11.419V174.72H30.5898V181.721H3.93091V139.113Z" fill="#2B6188"/>
      <path d="M55.6228 138.99H62.1985L80.2121 181.721H72.2456L67.8062 170.824H49.6145L45.1751 181.721H37.6313L55.645 138.99H55.6228ZM52.4629 163.823H64.9356L58.727 148.663L52.4629 163.823Z" fill="#2B6188"/>
      <path d="M78.5308 139.113H113.635V146.114H99.8267V181.721H92.3386V146.114H78.5308V139.113Z" fill="#2B6188"/>
      <path d="M129.922 138.99H136.498L154.512 181.721H146.545L142.106 170.824H123.914L119.475 181.721H111.931L129.945 138.99H129.922ZM126.762 163.823H139.235L133.027 148.663L126.762 163.823Z" fill="#2B6188"/>
      <path d="M161.898 139.113H169.442L183.984 159.014L197.859 139.113H204.913V181.721H197.491V150.923L184.04 169.856H182.949L169.375 151.112V181.732H161.887V139.124L161.898 139.113Z" fill="#2B6188"/>
      <path d="M368.893 138.623C378.629 138.623 383.135 147.394 383.135 160.417C383.135 173.439 378.751 182.21 369.016 182.21C359.28 182.21 354.596 173.439 354.596 160.417C354.596 147.394 359.102 138.623 368.893 138.623ZM369.016 175.688C373.889 175.688 375.714 170.935 375.714 160.406C375.714 149.876 373.767 145.19 368.904 145.19C364.042 145.19 362.095 150.121 362.095 160.406C362.095 170.69 364.465 175.688 369.027 175.688H369.016Z" fill="#2B6188"/>
      <path d="M320.334 176.122C327.266 169.31 338.037 159.448 338.037 151.167C338.037 147.761 336.145 145.624 332.618 145.624C329.58 145.624 327.389 147.75 326.476 151.345L320.635 148.73C321.792 142.519 326.654 138.623 333.408 138.623C341.497 138.623 345.458 144.099 345.458 149.765C345.458 161.697 332.74 172.471 329.391 175.209H347.093V181.721H320.323V176.122H320.334Z" fill="#2B6188"/>
      <path d="M390.872 176.122C397.804 169.31 408.574 159.448 408.574 151.167C408.574 147.761 406.683 145.624 403.156 145.624C400.118 145.624 397.926 147.75 397.014 151.345L391.173 148.73C392.33 142.519 397.192 138.623 403.946 138.623C412.035 138.623 415.996 144.099 415.996 149.765C415.996 161.697 403.278 172.471 399.929 175.209H417.631V181.721H390.861V176.122H390.872Z" fill="#2B6188"/>
      <path d="M427.197 176.122C434.129 169.31 444.899 159.448 444.899 151.167C444.899 147.761 443.008 145.624 439.481 145.624C436.443 145.624 434.251 147.75 433.339 151.345L427.498 148.73C428.655 142.519 433.517 138.623 440.271 138.623C448.36 138.623 452.321 144.099 452.321 149.765C452.321 161.697 439.603 172.471 436.254 175.209H453.956V181.721H427.186V176.122H427.197Z" fill="#2B6188"/>
      <path d="M283.815 143.516L265.075 132.757C264.069 132.182 262.822 132.179 261.816 132.757L243.076 143.516C242.07 144.095 241.446 145.169 241.446 146.322V167.841C241.446 168.995 242.07 170.072 243.076 170.647L257.256 178.787V174.365L245.295 167.498V146.662L263.444 136.243L281.593 146.662V167.504L269.635 174.371V178.793L283.815 170.653C284.821 170.078 285.446 169.001 285.446 167.847V146.325C285.446 145.172 284.821 144.095 283.815 143.519V143.516Z" fill="#6BAAD8"/>
      <path d="M275.091 152.608V148.186L265.37 153.768V142.797H261.521V153.768L251.8 148.186V152.608L261.521 158.189V165.072L251.8 159.49V163.912L261.521 169.493V191.468H265.37V169.493L275.091 163.912V159.49L265.37 165.072V158.189L275.091 152.608Z" fill="#6BAAD8"/>
      <path d="M1.92822 67.2811C4.29815 67.1587 9.96149 66.9806 14.2229 66.9806C24.3813 66.9806 28.2199 71.6109 28.2199 77.5101C28.2199 82.3852 25.7833 85.4795 22.1338 87.1936V87.3161C26.3284 88.3512 29.6219 91.579 29.6219 97.2333C29.6219 106.004 22.8125 110.011 13.8001 110.011C9.90586 110.011 4.43167 109.889 1.93935 109.711V67.2811H1.92822ZM9.4163 74.1598V84.9341H14.4677C17.9391 84.9341 20.7986 83.1644 20.7986 79.2687C20.7986 75.796 18.1172 73.9706 14.1005 73.9706C12.3982 73.9706 10.7515 74.0262 9.4163 74.1486V74.1598ZM9.4163 91.4455V102.71C10.4511 102.832 12.2202 103.01 14.3453 103.01C19.3967 103.01 22.1338 100.884 22.1338 96.866C22.1338 93.2709 19.3967 91.4455 14.7125 91.4455H9.4163Z" fill="#2B6188"/>
      <path d="M37.466 67.1587H44.4645V99.3593C44.4645 102.465 45.1988 103.8 46.8344 103.8C47.9248 103.8 48.8372 103.311 49.6939 102.71L51.1514 108.063C49.5715 109.343 47.2016 110.379 43.9082 110.379C39.7135 110.379 37.4548 107.818 37.4548 102.22V67.1587H37.466Z" fill="#2B6188"/>
      <path d="M68.8647 81.7063C77.9327 81.7063 83.7741 87.8503 83.7741 96.0758C83.7741 104.301 77.9327 110.445 68.8647 110.445C59.7967 110.445 53.9553 104.301 53.9553 96.0758C53.9553 87.8503 59.7967 81.7063 68.8647 81.7063ZM68.8647 103.923C73.1818 103.923 76.3528 100.817 76.3528 96.0758C76.3528 91.3342 73.1261 88.2844 68.8647 88.2844C64.6033 88.2844 61.4434 91.3231 61.4434 96.0758C61.4434 100.829 64.6033 103.923 68.8647 103.923Z" fill="#2B6188"/>
      <path d="M113.893 105.693C111.579 108.798 107.44 110.445 103 110.445C94.1215 110.445 88.1577 104.724 88.1577 96.0758C88.1577 88.1063 93.9991 81.7063 102.333 81.7063C106.839 81.7063 110.789 82.8639 113.348 85.4239L110.066 90.9669C107.996 88.9634 105.749 88.2844 103.256 88.2844C99.362 88.2844 95.6458 91.2674 95.6458 96.0758C95.6458 100.884 99.4176 103.923 103.557 103.923C106.539 103.923 108.853 102.52 110.611 100.573L113.893 105.681V105.693Z" fill="#2B6188"/>
      <path d="M119.501 67.1587H126.499V109.766H119.501V67.1587ZM134.956 94.9182L146.46 109.766H137.459L126.633 95.4636L136.424 82.3741H145.248L134.967 94.9182H134.956Z" fill="#2B6188"/>
      <path d="M173.164 105.693C170.849 108.798 166.71 110.445 162.271 110.445C153.392 110.445 147.428 104.724 147.428 96.0758C147.428 88.1063 153.27 81.7063 161.603 81.7063C166.109 81.7063 170.059 82.8639 172.618 85.4239L169.336 90.9669C167.267 88.9634 165.019 88.2844 162.527 88.2844C158.633 88.2844 154.916 91.2674 154.916 96.0758C154.916 100.884 158.688 103.923 162.827 103.923C165.809 103.923 168.123 102.52 169.881 100.573L173.164 105.681V105.693Z" fill="#2B6188"/>
      <path d="M178.771 67.1587H185.77V84.8673C187.539 83.1644 190.454 81.8844 193.614 81.8844C200.312 81.8844 204.874 85.2903 204.874 93.8719V109.755H197.875V94.7846C197.875 90.7109 195.628 88.4514 191.789 88.4514C189.542 88.4514 187.35 89.3641 185.77 90.9446V109.755H178.771V67.1587Z" fill="#2B6188"/>
      <path d="M212.362 84.3331C214.732 82.9306 218.448 81.7174 222.042 81.7174C230.131 81.7174 232.99 85.858 232.99 93.1039V109.777H226.904V106.616C225.447 108.687 222.52 110.145 218.815 110.145C213.831 110.145 210.237 107.039 210.237 101.741C210.237 95.7196 214.676 92.8591 220.217 92.8591C222.654 92.8591 225.091 93.6493 226.426 94.6288C226.604 90.0653 225.391 87.5721 221.319 87.5721C218.159 87.5721 216.145 88.5515 214.142 89.4643L212.373 84.3553L212.362 84.3331ZM226.415 101.741V98.9363C225.202 98.0236 223.611 97.6007 221.608 97.6007C219.294 97.6007 217.224 98.6915 217.224 101.007C217.224 103.077 218.927 104.234 221.118 104.234C224.034 104.234 225.558 102.954 226.415 101.741Z" fill="#2B6188"/>
      <path d="M244.851 68.4387C246.854 68.4387 248.868 70.0193 248.868 72.5125C248.868 75.3174 246.865 76.8979 244.851 76.8979C242.481 76.8979 240.467 75.3174 240.467 72.5125C240.467 70.0193 242.47 68.4387 244.851 68.4387ZM241.202 82.3741H248.2V109.766H241.202V82.3741Z" fill="#2B6188"/>
      <path d="M257.023 82.3853H264.022V85.1234C265.669 83.3536 268.584 81.8955 271.866 81.8955C278.564 81.8955 283.126 85.1234 283.126 93.705V109.777H276.127V94.9293C276.127 90.5439 273.88 88.4737 269.986 88.4737C267.616 88.4737 265.669 89.4531 264.022 91.0893V109.777H257.023V82.3853Z" fill="#2B6188"/>
      <path d="M302.964 78.2448C302.964 71.8559 307.949 66.5021 316.227 66.5021C321.456 66.5021 325.84 68.2718 328.399 71.0656L324.383 76.6642C322.313 74.6607 320.244 73.5032 316.839 73.5032C313.123 73.5032 310.875 75.3954 310.875 78.1891C310.875 87.0156 330.168 84.2107 330.168 98.4022C330.168 105.581 323.904 110.457 315.927 110.457C310.452 110.457 304.066 108.086 301.996 103.756L306.258 98.647C308.75 101.875 312.767 103.455 316.049 103.455C319.576 103.455 322.258 101.686 322.258 98.4689C322.258 90.0654 302.964 92.1357 302.964 78.2559V78.2448Z" fill="#2B6188"/>
      <path d="M361.567 109.777H354.569V106.427C352.922 108.431 350.062 110.445 345.801 110.445C340.449 110.445 336.188 106.973 336.188 99.1256V82.3853H343.186V97.6675C343.186 101.318 344.588 103.934 348.416 103.934C350.73 103.934 352.978 102.654 354.557 100.584V82.3853H361.556V109.777H361.567Z" fill="#2B6188"/>
      <path d="M410.913 109.778H403.914V93.705C403.914 90.2991 402.512 88.4737 399.23 88.4737C396.615 88.4737 394.546 89.7537 393.567 91.6348C393.567 92.0577 393.622 93.0372 393.622 93.6383V109.766H386.624V93.2042C386.624 90.3436 385.044 88.4514 382.062 88.4514C379.57 88.4514 377.556 89.5422 376.343 91.3676V109.755H369.344V82.363H376.343V85.4017C378.29 83.209 381.517 81.8733 384.921 81.8733C389.116 81.8733 391.92 83.7655 392.888 86.2587C394.835 83.6987 397.873 81.8733 402.134 81.8733C407.119 81.8733 410.902 84.3665 410.902 91.8574V109.755L410.913 109.778Z" fill="#2B6188"/>
      <path d="M459.602 109.778H452.603V93.705C452.603 90.2991 451.202 88.4737 447.919 88.4737C445.305 88.4737 443.235 89.7537 442.256 91.6348C442.256 92.0577 442.312 93.0372 442.312 93.6383V109.766H435.313V93.2042C435.313 90.3436 433.733 88.4514 430.751 88.4514C428.259 88.4514 426.245 89.5422 425.032 91.3676V109.755H418.034V82.363H425.032V85.4017C426.979 83.209 430.206 81.8733 433.611 81.8733C437.805 81.8733 440.609 83.7655 441.577 86.2587C443.524 83.6987 446.562 81.8733 450.823 81.8733C455.808 81.8733 459.591 84.3665 459.591 91.8574V109.755L459.602 109.778Z" fill="#2B6188"/>
      <path d="M471.407 68.4387C473.41 68.4387 475.424 70.0193 475.424 72.5125C475.424 75.3174 473.421 76.8979 471.407 76.8979C469.037 76.8979 467.023 75.3174 467.023 72.5125C467.023 70.0193 469.026 68.4387 471.407 68.4387ZM467.758 82.3741H474.756V109.766H467.758V82.3741Z" fill="#2B6188"/>
      <path d="M482.967 74.772H489.966V82.3853H498.789V88.9634H489.966V98.9475C489.966 101.93 490.945 103.878 493.248 103.878C495.14 103.878 496.475 103.021 497.443 102.298L499.568 107.718C497.921 109.054 495.006 110.401 491.479 110.401C485.271 110.401 482.956 106.383 482.956 99.3816V74.7942L482.967 74.772Z" fill="#2B6188"/>
      <path d="M1.74998 11.7427C1.74998 5.35378 6.73461 0 15.0127 0C20.2421 0 24.6259 1.76975 27.185 4.56351L23.1683 10.1622C21.0988 8.15867 19.0293 7.0011 15.6246 7.0011C11.9084 7.0011 9.66086 8.89329 9.66086 11.687C9.66086 20.5136 28.9541 17.7087 28.9541 31.9001C28.9541 39.0793 22.6899 43.9544 14.7123 43.9544C9.23806 43.9544 2.8515 41.5836 0.781982 37.2539L5.0434 32.1449C7.53572 35.3728 11.5524 36.9533 14.8346 36.9533C18.3617 36.9533 21.0432 35.1836 21.0432 31.9669C21.0321 23.5522 1.74998 25.6225 1.74998 11.7427Z" fill="#2B6188"/>
      <path d="M60.3417 43.2755H53.3432V39.9252C51.6965 41.9287 48.837 43.9433 44.5756 43.9433C39.2238 43.9433 34.9624 40.4706 34.9624 32.6236V15.8833H41.9609V31.1655C41.9609 34.8163 43.3628 37.432 47.1903 37.432C49.5046 37.432 51.7522 36.152 53.3321 34.0817V15.8833H60.3306V43.2755H60.3417Z" fill="#2B6188"/>
      <path d="M67.2178 23.5522C67.2178 18.1984 71.6017 15.2155 77.2539 15.2155C82.55 15.2155 85.9547 17.1076 87.6571 18.6882L85.0424 23.6747C83.3956 22.3946 80.5362 21.059 77.621 21.059C75.4959 21.059 74.2164 22.2166 74.2164 23.4298C74.2164 27.9933 89.0034 25.5001 89.0034 35.1725C89.0034 40.593 84.6196 43.9433 77.9326 43.9433C72.8812 43.9433 67.7742 41.2052 66.4946 39.2574L69.8993 34.6939C71.546 36.4636 75.685 38.0998 78.4221 38.0998C80.4249 38.0998 82.016 37.2428 82.016 35.5398C82.016 31.0987 67.229 33.5363 67.229 23.5522H67.2178Z" fill="#2B6188"/>
      <path d="M94.5443 8.28113H101.543V15.8944H110.366V22.4725H101.543V32.4566C101.543 35.4396 102.522 37.3874 104.825 37.3874C106.717 37.3874 108.052 36.5304 109.02 35.8069L111.145 41.2275C109.498 42.5631 106.583 43.9099 103.056 43.9099C96.8475 43.9099 94.5332 39.8918 94.5332 32.8907V8.28113H94.5443Z" fill="#2B6188"/>
      <path d="M117.42 17.8311C119.79 16.4287 123.506 15.2155 127.1 15.2155C135.189 15.2155 138.049 19.356 138.049 26.602V43.2755H131.963V40.1144C130.505 42.1847 127.579 43.6428 123.874 43.6428C118.889 43.6428 115.295 40.5374 115.295 35.2393C115.295 29.2177 119.735 26.3571 125.276 26.3571C127.712 26.3571 130.149 27.1474 131.484 28.1269C131.662 23.5633 130.449 21.0701 126.377 21.0701C123.217 21.0701 121.203 22.0496 119.201 22.9623L117.431 17.8534L117.42 17.8311ZM131.473 35.2393V32.4344C130.26 31.5217 128.669 31.0987 126.666 31.0987C124.352 31.0987 122.283 32.1895 122.283 34.5047C122.283 36.5749 123.985 37.7325 126.177 37.7325C129.092 37.7325 130.616 36.4525 131.473 35.2393Z" fill="#2B6188"/>
      <path d="M149.921 1.94788C151.923 1.94788 153.937 3.52841 153.937 6.02165C153.937 8.82654 151.935 10.4071 149.921 10.4071C147.551 10.4071 145.537 8.82654 145.537 6.02165C145.537 3.52841 147.54 1.94788 149.921 1.94788ZM146.271 15.8833H153.27V43.2755H146.271V15.8833Z" fill="#2B6188"/>
      <path d="M162.093 15.8833H169.091V18.6214C170.738 16.8517 173.653 15.3936 176.935 15.3936C183.634 15.3936 188.195 18.6214 188.195 27.203V43.2755H181.197V28.4274C181.197 24.042 178.949 21.9717 175.055 21.9717C172.685 21.9717 170.738 22.9512 169.091 24.5874V43.2755H162.093V15.8833Z" fill="#2B6188"/>
      <path d="M195.683 17.8311C198.053 16.4287 201.77 15.2155 205.363 15.2155C213.452 15.2155 216.312 19.356 216.312 26.602V43.2755H210.226V40.1144C208.768 42.1847 205.842 43.6428 202.137 43.6428C197.152 43.6428 193.558 40.5374 193.558 35.2393C193.558 29.2177 197.998 26.3571 203.539 26.3571C205.975 26.3571 208.412 27.1474 209.747 28.1269C209.925 23.5633 208.713 21.0701 204.64 21.0701C201.48 21.0701 199.466 22.0496 197.464 22.9623L195.695 17.8534L195.683 17.8311ZM209.736 35.2393V32.4344C208.523 31.5217 206.932 31.0987 204.93 31.0987C202.615 31.0987 200.546 32.1895 200.546 34.5047C200.546 36.5749 202.248 37.7325 204.44 37.7325C207.355 37.7325 208.879 36.4525 209.736 35.2393Z" fill="#2B6188"/>
      <path d="M223.488 0.667847H230.487V17.5862C232.189 16.2506 234.804 15.2154 237.73 15.2154C245.886 15.2154 250.748 21.059 250.748 29.1509C250.748 38.1554 244.729 43.9433 235.115 43.9433C230.609 43.9433 225.992 42.4852 223.488 40.9047V0.667847ZM230.487 24.4093V36.0406C232.011 37.0201 233.524 37.4431 235.471 37.4431C239.855 37.4431 243.26 34.5825 243.26 29.6517C243.26 24.4204 240.033 21.8047 236.083 21.8047C233.647 21.8047 231.644 23.0847 230.487 24.4204V24.4093Z" fill="#2B6188"/>
      <path d="M256.834 0.667847H263.833V32.8685C263.833 35.9739 264.567 37.3095 266.203 37.3095C267.293 37.3095 268.206 36.8198 269.062 36.2187L270.52 41.5725C268.94 42.8525 266.57 43.8877 263.277 43.8877C259.082 43.8877 256.823 41.3276 256.823 35.729V0.667847H256.834Z" fill="#2B6188"/>
      <path d="M298.525 40.5374C295.788 42.8526 291.894 43.9434 288.055 43.9434C279.232 43.9434 273.335 38.2223 273.335 29.5738C273.335 21.6044 278.809 15.2043 287.821 15.2043C294.875 15.2043 300.784 20.2576 300.784 27.9265C300.784 29.6295 300.661 30.6646 300.361 31.6998H280.589C281.201 35.8403 284.483 38.0887 288.8 38.0887C292.149 38.0887 294.942 36.8755 296.533 35.5955L298.536 40.5263L298.525 40.5374ZM280.333 27.025H293.785C293.841 23.6747 291.538 21.059 287.521 21.059C283.504 21.059 281.068 23.4298 280.344 27.025H280.333Z" fill="#2B6188"/>
    </svg>
  )
}
const SbsIcon = () => {
  return (
    <svg width="197" height="216" viewBox="0 0 197 216" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1489_3930)">
        <path d="M185.315 112.019V160.799L153.522 179.271L151.887 176.423C151.318 175.427 149.879 175.427 149.31 176.423L140.287 192.16C139.717 193.156 140.427 194.407 141.576 194.407H159.63C160.779 194.407 161.498 193.156 160.919 192.16L159.369 189.452L192.059 170.454C195.104 168.677 197 165.377 197 161.833V112.009H185.315V112.019Z" fill="white"/>
        <path d="M16.2798 159.962V109.246H19.5395C20.6883 109.246 21.4075 107.995 20.8284 106.999L11.8059 91.262C11.2362 90.2655 9.79783 90.2655 9.22809 91.262L0.205616 107.008C-0.364126 108.005 0.345717 109.255 1.49454 109.255H4.59543V161.006C4.59543 164.55 6.49146 167.859 9.54565 169.626L51.7533 194.153L57.6001 183.962L16.2798 159.953V159.962Z" fill="white"/>
        <path d="M152.542 33.3537L143.519 17.6169C142.949 16.6204 141.511 16.6204 140.941 17.6169L139.391 20.3243L106.691 1.32549C103.637 -0.441846 99.8451 -0.451246 96.8002 1.32549L53.8174 26.3126L59.6549 36.4935L101.75 12.0329L133.544 30.5053L131.909 33.3537C131.34 34.3502 132.05 35.6005 133.198 35.6005H151.253C152.401 35.6005 153.121 34.3502 152.542 33.3537Z" fill="white"/>
        <path d="M162.899 68.691L106.019 35.6381C102.964 33.8708 99.1816 33.8614 96.1274 35.6381L39.2466 68.691C36.1924 70.4677 34.2964 73.7674 34.2964 77.3114V143.417C34.2964 146.961 36.1924 150.27 39.2466 152.038L82.2855 177.044V163.459L45.9808 142.364V78.3549L101.068 46.3455L156.156 78.3549V142.383L119.86 163.478V177.062L162.899 152.056C165.954 150.289 167.85 146.98 167.85 143.436V77.3208C167.85 73.7768 165.954 70.4677 162.899 68.7004V68.691Z" fill="white"/>
        <path d="M136.42 96.6205V83.0365L106.915 100.183V66.4818H95.2308V100.183L65.7256 83.0365V96.6205L95.2308 113.767V134.91L65.7256 117.763V131.347L95.2308 148.494V216H106.915V148.494L136.42 131.347V117.763L106.915 134.91V113.767L136.42 96.6205Z" fill="white"/>
      </g>
      <defs>
        <clipPath id="clip0_1489_3930">
          <rect width="197" height="216" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  )
}

export const Hero = ({ data, parentField = ""  }) => {
  return (
    <Section className="mb-40" background={data.background} navigationLabel={data.navigationLabel}>
      <div id="canopy" className="absolute -z-2 left-1/2 top-0 right-0">
        <div className="pattern"></div>
        <div className="absolute w-full h-40 bg-gradient-to-b from-black opacity-70"></div>
      </div>
      <div className="absolute inset-0 -z-2">
        <div
          className="absolute top-0 left-1/2 transform -translate-x-1/2"
          style={{ width: "3000px", bottom: "-900px", clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 20%)" }}
        >
          <BG1 />
          <div className="absolute -z-1 inset-0"
            style={{
              background: "rgb(230 250 228)",
              inset: "0 -2000px 0 1100px",
              clipPath: "polygon(0% 50%, 100% -30%, 100% 100%, 0% 100%)"
            }}>
            <BG2 />
          </div>
        </div>
      </div>
      <div className="relative max-w-desktop-full mx-auto pt-36 pb-28 pr-20 pl-20 sm:p-8 sm:pt-24 min-h-0 text-left">
        <div className="absolute right-36 top-36 md:hidden">
          <SbsIcon />
        </div>
        <div className="mr-auto w-1/2 md:w-3/5">
          <div className="text-left">
            <Logo />
            {data.headline && <h1 className="hidden" data-tinafield={`${parentField}.headline`}>{data.headline}</h1>}
            {data.subhead && <h2 className="mt-8 mb-10 text-3xl text-accent2 sm:text-xl" data-tinafield={`${parentField}.subhead`}>{data.subhead}</h2>}
            {data.body?.children && (
              <div className="text" data-tinafield={`${parentField}.body`}>
                <TinaMarkdown content={data.body} />
              </div>
            )}
            {data.buttons && (
              <Buttons
                buttons={data.buttons}
                className={`flex-col items-start order-4`}
                parentField={`${parentField}.buttons`}
              />
            )}
          </div>
        </div>
        <div className="relative">
          {data.label && (
            <div className="absolute -bottom-80 mb-4 right-0 ml-auto w-128 px-12 sm:w-full sm:pl-12 sm:pr-0 sm:-bottom-72 sm:mb-0">
              <h4 className="font-bold text-5xl text-primary text-right sm:text-2xl" data-tinafield={`${parentField}.label`}>{data.label}</h4>
            </div>
          )}
        </div>
      </div>
    </Section>
  );
};
