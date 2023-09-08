import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters/animateLetters'
import './contact.scss'
import {motion} from 'framer-motion' 
import { IoMdMail } from 'react-icons/io'


const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const pathVariants = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: { 
        duration: 2,
        ease: "easeInOut",
      }
    }
  };
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  return (
    <div className="page-container contact-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={['C', 'o', 'n', 't', 'a', 'c', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>

        <p className='animate__animated animate__fadeIn'>
          Thank You for visiting my portfolio website. <br />I am actively
          seeking opportunities as <strong>Software Engineer</strong>,{' '}
          <strong>Backend Developer</strong>,
          <strong> Full Stack Engineer</strong>. <br />
          I am dedicated in enhancing my skill set and adopting new technologies
          to make valuable contributions to your organization. Looking forward
          to hearing from you and exploring exciting opportunities together.
          <br />
          Feel free to get in touch with me!
        </p>
        <div className="connect animate__animated animate__fadeIn">
          <h4 className='animate__animated animate__fadeIn'>Connect with me: </h4>
          <h5 className='animate__animated animate__fadeIn'>kingsuk2k@gmail.com</h5>
          <IoMdMail size={'2.5vw'} />
        </div>
      </div>
      <div className="contact-img">
        <motion.svg
          width="585"
          height="389"
          viewBox="0 0 785 589"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          
          initial = "hidden"
          animate = "visible"
        >
          <motion.path
            d="M542.825 172.118C488.653 121.258 425.185 108.128 408.415 105.449C419.717 74.9198 437.173 29.5363 441.52 22.8209C444.332 22.4672 447.164 22.3049 449.997 22.3352C462.319 22.3352 488.703 24.8975 526.908 42.0963C582.083 66.9317 596.747 94.8651 599.656 101.698L542.825 172.118Z"
            fill="white"
            variants={pathVariants}
          />
          <motion.path
            d="M449.997 25.6847C462.052 25.6847 487.901 28.2134 525.487 45.1443C575.329 67.6183 591.43 92.7384 595.71 101.229L542.508 167.228C516.192 143.508 485.466 125.218 452.087 113.404C439.364 108.817 426.291 105.272 412.996 102.803C425.486 69.1925 439.062 34.5939 443.627 25.9526C445.115 25.8187 447.255 25.6847 450.03 25.6847H449.997ZM450.03 18.986C446.633 18.9146 443.237 19.1501 439.882 19.6894C435.969 20.9956 403.867 108.179 403.867 108.179C403.867 108.179 480.059 115.966 543.177 177.041L603.368 102.317C603.368 102.317 593.336 68.3887 528.129 39.0485C489.957 21.8497 463.356 18.9525 449.897 18.9525L450.03 18.986Z"
            fill="#A0C6F4"
            variants={pathVariants}
          />
          <motion.path
            d="M415.019 114.961C415.019 114.961 489.941 122.531 536.087 164.984"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
            variants={pathVariants}
          />
          <motion.path
            d="M479.691 111.294L507.647 56.8671L536.372 113.622L479.691 111.294Z"
            fill="#A0C6F4"
            variants={pathVariants}
          />
          <motion.path
            d="M485.125 110.523L513.081 56.0967L541.805 112.851L485.125 110.523Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
            variants={pathVariants}
          />
          <motion.path variants={pathVariants}
            d="M458.909 15.6701C458.909 15.6701 542.942 23.3066 595.108 85.4033"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M501.828 256.856C497.214 253.506 494.188 251.179 494.188 251.179C495.458 249.504 515.672 227.917 527.376 210.534C527.376 210.534 503.701 258.246 501.828 256.856Z"
            fill="white"
          />
          <motion.path variants={pathVariants}
            d="M215.435 99.6547C217.692 103.423 218.678 101.915 225.182 101.329C231.686 100.743 240.949 105.583 244.193 113.605C247.436 121.626 246.45 122.866 244.694 123.87C242.939 124.875 230.449 126.382 229.947 128.894"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M383.92 507.369L378.085 497.505L357.419 532.02L362.837 536.207L383.92 507.369Z"
            fill="#F9865F"
          />
          <motion.path variants={pathVariants}
            d="M246.667 421.878C246.667 421.878 235.95 404.444 240.548 395.887L274.723 399.554L246.667 421.878Z"
            fill="#F9865F"
          />
          <motion.path variants={pathVariants}
            d="M246.667 421.878L248.707 426.6L242.404 451.251C242.005 452.774 242.044 454.378 242.514 455.879C242.984 457.381 243.867 458.72 245.062 459.742L276.312 413.471C277.744 411.341 278.371 408.77 278.08 406.219C277.789 403.668 276.599 401.305 274.723 399.554L267.734 393.057L246.667 421.878Z"
            fill="black"
          />
          <motion.path variants={pathVariants}
            d="M229.948 128.961C239.729 128.727 252.135 128.107 249.644 120.588C247.152 113.069 237.94 94.5136 216.789 100.09C216.789 100.09 209.349 106.303 218.645 117.49C227.941 128.677 229.948 128.961 229.948 128.961Z"
            fill="#2A1E33"
          />
          <motion.path variants={pathVariants}
            d="M279.472 399.889C279.472 399.889 262.752 350.487 276.897 328.8C288.601 310.898 326.688 340.003 331.905 343.872L359.175 294.603C359.175 294.603 352.888 285.761 337.439 277.103C321.99 268.445 258.137 242.521 228.125 289.947C217.04 307.465 216.873 382.674 238.157 411.495L279.472 399.889Z"
            fill="#3B3B5F"
          />
          <motion.path variants={pathVariants}
            d="M279.472 399.889C279.472 399.889 262.752 350.487 276.897 328.8C288.601 310.897 326.688 340.003 331.905 343.872"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M359.175 294.603C346.769 307.682 310.002 371.386 301.726 401.782C290.674 442.51 294.837 476.288 355.63 542.454L385.007 499.582C385.007 499.582 364.341 468.165 368.287 438.541C373.872 395.686 404.318 354.137 419.717 327.778L359.175 294.603Z"
            fill="#3B3B5F"
          />
          <motion.path variants={pathVariants}
            d="M363.84 300.129L412.712 338.563L427.325 316.323L363.84 300.129Z"
            fill="#8C3C6C"
          />
          <motion.path variants={pathVariants}
            d="M644.599 259.736C652.223 261.377 658.03 264.286 662.021 268.461C666.017 272.648 664.211 274.825 662.757 276.098C661.302 277.37 655.667 275.913 650.768 271.559C645.87 267.205 644.599 259.736 644.599 259.736Z"
            fill="#FF8A66"
          />
          <motion.path variants={pathVariants}
            d="M494.188 251.179C495.458 249.504 515.672 227.917 527.376 210.534C527.376 210.534 562.739 250.224 566.584 251.514C568.005 251.982 576.616 251.865 587.451 251.765C605.642 251.564 629.835 251.38 635.186 254.076C643.713 258.329 648.829 260.473 650.952 266.452C653.076 272.43 653.929 276.332 648.829 276.684C642.86 277.119 639.031 269.432 639.031 269.432C633.409 272.457 627.555 275.027 621.526 277.119C621.526 277.119 576.198 294.737 545.902 286.213C537.659 283.885 494.188 251.179 494.188 251.179Z"
            fill="#F9865F"
          />
          <motion.path variants={pathVariants}
            d="M219.431 92.638C215.552 94.1285 213.178 95.9036 215.435 99.6549C217.692 103.406 218.678 101.916 225.182 101.33C231.686 100.743 240.949 105.583 244.193 113.605C247.436 121.627 246.45 122.866 244.694 123.871C242.939 124.875 230.449 126.383 229.948 128.895C229.446 131.407 234.964 138.792 246.517 138.306L249.259 137.804C249.259 137.804 273.452 161.467 276.964 164.967C280.475 168.467 306.19 185.934 320.435 189.484C331.203 192.18 353.039 188.714 366.147 186.135C372.517 184.879 376.848 183.857 376.848 183.857C376.848 183.857 367 166.089 364.993 138.792C364.993 138.792 341.452 142.577 325.802 146.026C325.802 146.026 289.286 125.629 271.53 116.603C271.53 116.603 256.014 97.5783 248.757 95.0663C241.501 92.5543 224.681 90.6452 219.431 92.638Z"
            fill="#F9865F"
          />
          <motion.path variants={pathVariants}
            d="M366.08 186.218C372.45 184.962 376.781 183.941 376.781 183.941C376.781 183.941 364.86 168.869 362.87 141.605C362.87 141.605 357.486 147.416 359.158 162.873C361.265 182.4 366.08 186.218 366.08 186.218Z"
            fill="white"
          />
          <motion.path variants={pathVariants}
            d="M362.368 138.541C362.368 138.541 362.703 171.917 371.631 185.833L374.825 184.544C374.825 184.544 332.774 233.829 319.164 266.033C316.941 271.308 406.492 328.599 419.717 327.795C419.717 327.795 463.356 261.093 478.237 241.315L494.288 253.775C494.288 253.775 525.738 221.855 527.426 210.535C527.426 210.535 497.046 173.508 472.251 162.656C447.455 151.804 425.068 133.249 398.366 133.835C375.259 134.187 362.368 138.541 362.368 138.541Z"
            fill="#471C36"
          />
          <motion.path variants={pathVariants}
            d="M494.221 253.774L478.187 241.315L480.745 234.348L494.221 253.774Z"
            fill="white"
          />
          <motion.path variants={pathVariants}
            d="M518.632 121.827C515.823 130.586 507.714 155.89 498.668 159.005C489.623 162.12 480.277 158.218 480.277 158.218L470.646 163.141C469.576 166.373 461.968 169.153 452.154 169.539C444.881 169.823 440.45 160.462 442.607 153.696C443.593 150.581 447.288 135.275 447.288 135.275C447.288 135.275 455.08 106.538 462.336 100.609C469.593 94.6809 476.247 88.786 495.391 96.5398C524.551 108.396 518.632 121.827 518.632 121.827Z"
            fill="#F9865F"
          />
          <motion.path variants={pathVariants}
            d="M460.497 123.083C459.21 128.442 453.642 139.194 449.98 137.251C446.319 135.309 445.048 130.385 447.623 120.923C450.198 111.461 452.354 89.992 459.644 86.1235C466.934 82.255 470.161 86.7599 470.161 86.7599C470.161 86.7599 466.934 71.085 476.381 68.9247C476.381 68.9247 479.591 67.4342 478.304 78.1689C479.554 75.2171 481.754 72.7685 484.553 71.212C487.352 69.6555 490.59 69.0803 493.753 69.5778C505.457 70.8673 509.62 87.413 509.62 87.413C509.959 86.0464 510.769 84.8434 511.907 84.0162C513.044 83.189 514.437 82.7907 515.84 82.8914C521.207 82.8914 529.366 90.8461 527.426 99.6381C527.426 99.6381 541.153 95.3342 548.443 106.337C555.733 117.339 554.88 129.33 537.291 134.053C518.899 138.993 519.067 117.507 516.274 114.71C513.482 111.913 510.489 108.698 500.19 112.567C489.89 116.435 479.156 105.047 479.156 105.047C479.156 105.047 477.484 118.796 475.729 120.119C473.973 121.442 470.579 123.134 471.432 116.686C472.284 110.239 473.371 110.875 472.719 109.167C472.067 107.459 469.175 102.016 463.072 106.806C456.217 112.064 460.497 123.083 460.497 123.083Z"
            fill="#2A1E33"
          />
          <motion.path variants={pathVariants}
            d="M463.423 125.461C459.327 122.112 456.484 115.949 460.079 109.887C463.674 103.825 469.576 103.004 471.365 105.298C473.154 107.593 473.856 111.461 472.167 116.05"
            stroke="#2A1E33"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M362.853 536.207L364.893 540.913L358.59 565.564C358.191 567.086 358.23 568.691 358.7 570.192C359.17 571.694 360.053 573.033 361.248 574.055L392.464 527.783C393.897 525.654 394.524 523.083 394.232 520.532C393.941 517.981 392.751 515.618 390.876 513.867L383.887 507.369L362.853 536.207Z"
            fill="black"
          />
          <motion.path variants={pathVariants}
            d="M470.161 86.7597C470.161 86.7597 467.753 78.9724 460.581 76.9126"
            stroke="#2A1E33"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M318.094 263.672L404.67 142.543"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M440.366 151.017C437.24 155.086 435.819 172.57 450.181 173.692C458.372 174.508 466.61 172.696 473.706 168.517"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M248.674 95.1499C248.674 95.1499 258.572 108.263 260.127 112.935"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M619.252 271.04C619.252 271.04 625.939 276.483 639.031 269.365C643.796 266.803 640.402 260.758 634.35 262.265C628.297 263.772 621.141 261.511 621.141 261.511"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M646.873 260.49C646.873 260.49 653.21 267.909 653.042 272.313"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M553.509 259.686C553.509 259.686 559.244 252.033 566.584 251.514"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M311.657 158.469C311.657 158.469 315.001 148.019 325.735 146.11"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M340.733 317.027L327.926 341.494C327.926 341.494 285.725 413.019 300.054 459.239"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M378.118 399.085L419.634 327.795C419.634 327.795 474.057 248.734 479.624 237.664L498.836 202.077"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M323.913 271.275C323.913 271.275 397.764 325.199 419.65 327.795"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M362.368 138.541C362.368 138.541 362.368 172.386 371.414 186.252"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M525.002 205.175C522.678 219.109 491.863 248.399 491.863 248.399"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M295.004 378.872C297.424 378.872 299.385 376.908 299.385 374.484C299.385 372.061 297.424 370.097 295.004 370.097C292.585 370.097 290.624 372.061 290.624 374.484C290.624 376.908 292.585 378.872 295.004 378.872Z"
            fill="white"
          />
          <motion.path variants={pathVariants}
            d="M706.379 468.852L703.954 452.055L718.25 461.584L710.776 463.208L706.379 468.852Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M231.954 182.099C204.851 158.134 160.059 217.87 323.913 408.011C418.463 517.702 492.783 527.532 502.815 489.367C520.872 420.906 455.665 403.607 479.942 430.418C515.221 469.405 615.556 477.644 690.344 441.27C764.129 405.365 718.768 349.616 714.187 346.35"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M691.582 445.306C694.001 445.306 695.962 443.342 695.962 440.919C695.962 438.495 694.001 436.531 691.582 436.531C689.162 436.531 687.201 438.495 687.201 440.919C687.201 443.342 689.162 445.306 691.582 445.306Z"
            fill="white"
          />
          <motion.path variants={pathVariants}
            d="M627.779 476.773L757.742 403.389"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M234.663 190.037C237.082 190.037 239.043 188.072 239.043 185.649C239.043 183.226 237.082 181.261 234.663 181.261C232.243 181.261 230.282 183.226 230.282 185.649C230.282 188.072 232.243 190.037 234.663 190.037Z"
            fill="white"
          />
          <motion.path variants={pathVariants}
            d="M346.468 104.394C351.667 104.394 355.881 100.173 355.881 94.9656C355.881 89.7585 351.667 85.5372 346.468 85.5372C341.269 85.5372 337.055 89.7585 337.055 94.9656C337.055 100.173 341.269 104.394 346.468 104.394Z"
            fill="#FF6D66"
          />
          <motion.path variants={pathVariants}
            d="M175.792 23.1059C174.971 23.1026 174.168 23.3433 173.484 23.7977C172.8 24.252 172.266 24.8995 171.949 25.6581C171.633 26.4166 171.548 27.2522 171.706 28.059C171.865 28.8657 172.258 29.6073 172.837 30.1898C173.417 30.7723 174.155 31.1695 174.96 31.3312C175.765 31.4928 176.6 31.4115 177.358 31.0977C178.117 30.7838 178.766 30.2515 179.222 29.5682C179.678 28.8848 179.922 28.0812 179.922 27.2591C179.922 26.1605 179.487 25.1066 178.713 24.3282C177.939 23.5498 176.889 23.1103 175.792 23.1059Z"
            fill="#A0C6F4"
          />
          <motion.path variants={pathVariants}
            d="M729.87 537.53C732.151 537.53 734 535.678 734 533.394C734 531.109 732.151 529.257 729.87 529.257C727.589 529.257 725.74 531.109 725.74 533.394C725.74 535.678 727.589 537.53 729.87 537.53Z"
            fill="#FAD8B0"
          />
          <motion.path variants={pathVariants}
            d="M655.985 346.333L611.494 325.45C610.709 325.062 610.051 324.459 609.594 323.712C609.138 322.964 608.902 322.103 608.915 321.227C608.927 320.35 609.187 319.496 609.664 318.761C610.141 318.027 610.816 317.443 611.611 317.077L694.307 280.636C694.886 280.379 695.513 280.247 696.146 280.247C696.779 280.247 697.406 280.379 697.985 280.636L754.833 305.053L655.985 346.333Z"
            fill="#2A1E33"
          />
          <motion.path variants={pathVariants}
            d="M653.293 277.672C653.393 296.093 656.035 346.334 656.035 346.334L754.883 304.986L752.659 235.069C752.63 234.077 752.356 233.108 751.863 232.248C751.369 231.388 750.671 230.664 749.83 230.14C748.989 229.616 748.031 229.309 747.043 229.245C746.055 229.182 745.066 229.364 744.165 229.777L659.078 268.629C657.342 269.412 655.871 270.684 654.844 272.289C653.817 273.895 653.278 275.765 653.293 277.672Z"
            fill="#121212"
          />
          <motion.path variants={pathVariants}
            d="M655.985 346.333L754.833 304.986L752.609 235.068C752.609 235.068 751.957 227.432 744.115 229.776"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M703.82 296.076L710.492 280.284"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M710.492 296.076L717.163 280.284"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M193.599 468.4C195.879 468.4 197.728 466.548 197.728 464.263C197.728 461.979 195.879 460.127 193.599 460.127C191.318 460.127 189.469 461.979 189.469 464.263C189.469 466.548 191.318 468.4 193.599 468.4Z"
            fill="#FF6D66"
          />
          <motion.path variants={pathVariants}
            d="M542.257 490.556C545.433 490.556 548.008 487.976 548.008 484.795C548.008 481.613 545.433 479.034 542.257 479.034C539.08 479.034 536.505 481.613 536.505 484.795C536.505 487.976 539.08 490.556 542.257 490.556Z"
            fill="#FF6D66"
          />
          <motion.path variants={pathVariants}
            d="M236.468 525.707C252.84 533.243 270.667 537.073 288.684 536.927C289.019 536.93 289.349 537.003 289.653 537.142C289.957 537.281 290.229 537.483 290.45 537.734C290.671 537.985 290.836 538.281 290.935 538.6C291.035 538.92 291.065 539.258 291.025 539.59L287.414 568.26C287.342 568.758 287.113 569.219 286.761 569.578C286.41 569.936 285.953 570.173 285.457 570.253C278.134 571.643 248.674 575.696 226.57 556.856C226.234 556.567 225.986 556.189 225.856 555.765C225.726 555.341 225.718 554.889 225.835 554.461L233.124 527.114C233.225 526.782 233.398 526.477 233.63 526.219C233.862 525.962 234.148 525.759 234.467 525.625C234.786 525.49 235.131 525.428 235.477 525.442C235.823 525.457 236.161 525.547 236.468 525.707Z"
            fill="#FFF7DC"
          />
          <motion.path variants={pathVariants}
            d="M239.06 534.08C239.06 534.08 251.8 552.016 256.348 554.595C260.896 557.174 285.441 542.504 285.441 542.504"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M268.37 552.117L281.762 565.899"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M249.761 549.454L234.094 553.724"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M646.505 186.402H631.541V201.391H646.505V186.402Z"
            fill="#FFE1C0"
          />
          <motion.path variants={pathVariants}
            d="M633.564 388.518L638.011 396.239L642.459 403.959H633.564H624.686L629.116 396.239L633.564 388.518Z"
            fill="#A0C6F4"
          />
          <motion.path variants={pathVariants}
            d="M274.004 46.7521L275.175 11.718C275.041 8.36868 276.378 7.41411 278.385 6.96195C287.882 4.86861 316.84 -1.57885 348.157 7.71556C352.219 8.92132 352.086 11.0649 352.019 13.0075L350.899 46.4004C350.817 47.0244 350.606 47.6244 350.279 48.1617C349.951 48.6989 349.515 49.1616 348.999 49.5197C348.482 49.8779 347.896 50.1236 347.279 50.2411C346.661 50.3586 346.026 50.3452 345.415 50.2019C334.032 48.8374 322.567 48.2778 311.106 48.5272C300.082 48.4801 289.074 49.3709 278.201 51.1899C275.091 51.776 273.921 49.4985 274.004 46.7521Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M284.571 41.728L302.863 20.2922L323.094 40.3045C316.105 37.9432 284.571 41.728 284.571 41.728Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M314.048 30.1393L328.829 18.2827L341.285 27.1919L341.753 41.1084L323.077 40.2041"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M292.472 18.6138C292.642 16.9298 291.178 15.4027 289.203 15.2028C287.228 15.0028 285.489 16.2058 285.319 17.8898C285.149 19.5738 286.613 21.101 288.588 21.3009C290.563 21.5009 292.302 20.2978 292.472 18.6138Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M627.461 501.776L639.717 524.451C641.004 526.477 640.553 527.633 639.432 528.671C634.182 533.544 618.182 548.382 594.774 554.176C591.748 554.93 591.029 553.506 590.36 552.25L578.656 530.631C578.479 530.202 578.393 529.742 578.403 529.279C578.412 528.816 578.518 528.359 578.713 527.939C578.908 527.519 579.188 527.144 579.535 526.837C579.882 526.531 580.288 526.3 580.729 526.159C588.468 522.794 595.956 518.877 603.134 514.436C610.204 510.402 616.917 505.769 623.197 500.587C624.869 498.912 626.541 500.001 627.461 501.776Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M622.646 508.96L618.984 529.375L598.72 524.2C603.986 523.061 622.646 508.96 622.646 508.96Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M608.183 527.248L603.184 540.276L591.982 539.255L586.514 530.58L598.703 524.2"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M629.443 527.599C630.77 526.992 631.429 525.585 630.915 524.458C630.4 523.331 628.908 522.91 627.581 523.517C626.254 524.124 625.595 525.53 626.109 526.658C626.624 527.785 628.116 528.206 629.443 527.599Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M567.771 114.626L617.58 152.809C617.839 153.009 618.135 153.155 618.451 153.239C618.767 153.323 619.096 153.343 619.42 153.298C619.744 153.252 620.056 153.143 620.337 152.975C620.618 152.808 620.863 152.586 621.057 152.323L628.581 142.107C628.951 141.598 629.11 140.966 629.026 140.342C628.942 139.718 628.621 139.151 628.13 138.758L579.024 99.3866C578.763 99.1785 578.464 99.0256 578.143 98.9371C577.821 98.8486 577.486 98.8264 577.156 98.8718C576.826 98.9172 576.509 99.0293 576.223 99.2013C575.938 99.3733 575.69 99.6016 575.496 99.8723L567.27 111.26C566.9 111.776 566.746 112.417 566.84 113.045C566.933 113.673 567.267 114.24 567.771 114.626Z"
            fill="white"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M571.45 112.918L583.521 121.409L590.661 112.885L578.572 102.786L571.45 112.918Z"
            fill="#FF6D66"
          />
          <motion.path variants={pathVariants}
            d="M588.069 124.725L600.174 134.337L606.662 126.349L594.473 116.452L588.069 124.725Z"
            fill="#FAD8B0"
          />
          <motion.path variants={pathVariants}
            d="M604.237 138.021L616.326 146.512L622.077 139.11L610.641 129.514L604.237 138.021Z"
            fill="#A0C6F4"
          />
          <motion.path variants={pathVariants}
            d="M667.171 61.2378L678.523 156.694C678.575 157.196 678.727 157.683 678.97 158.126C679.213 158.568 679.542 158.957 679.938 159.27C680.335 159.582 680.789 159.812 681.276 159.945C681.762 160.077 682.271 160.111 682.77 160.043L701.998 157.397C702.963 157.268 703.839 156.767 704.441 156.001C705.044 155.235 705.325 154.264 705.225 153.294L695.912 57.2689C695.861 56.7616 695.708 56.27 695.461 55.8237C695.215 55.3775 694.881 54.986 694.479 54.6728C694.078 54.3597 693.617 54.1315 693.124 54.002C692.632 53.8725 692.118 53.8445 691.615 53.9196L670.364 57.0344C669.388 57.1759 668.506 57.6957 667.909 58.4819C667.312 59.2681 667.046 60.2578 667.171 61.2378Z"
            fill="white"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M672.972 63.4652L676.567 85.8053L693.521 84.5493L691.665 60.4843L672.972 63.4652Z"
            fill="#FF6D66"
          />
          <motion.path variants={pathVariants}
            d="M677.788 94.3459L680.179 117.908L695.862 116.502L693.688 92.554L677.788 94.3459Z"
            fill="#91BA83"
          />
          <motion.path variants={pathVariants}
            d="M680.48 126.332L684.074 148.672L698.336 147.098L696.614 124.272L680.48 126.332Z"
            fill="#FAD8B0"
          />
          <motion.path variants={pathVariants}
            d="M642.392 81.5684L673.825 174.127C673.953 174.504 674.154 174.852 674.417 175.15C674.681 175.449 675.001 175.692 675.359 175.865C675.717 176.038 676.105 176.137 676.502 176.158C676.899 176.179 677.296 176.121 677.671 175.986L697.367 168.886C698.094 168.62 698.691 168.083 699.033 167.388C699.376 166.692 699.438 165.891 699.206 165.151L669.695 71.6879C669.571 71.2998 669.37 70.9409 669.104 70.6328C668.838 70.3248 668.512 70.0739 668.147 69.8955C667.781 69.717 667.383 69.6147 666.977 69.5947C666.57 69.5746 666.164 69.6372 665.783 69.7788L644.181 77.8004C643.447 78.0655 642.847 78.6102 642.512 79.3158C642.177 80.0214 642.134 80.831 642.392 81.5684Z"
            fill="white"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M648.762 83.2597L656.921 104.377L673.24 99.6045L666.435 76.4438L648.762 83.2597Z"
            fill="#A0C6F4"
          />
          <motion.path variants={pathVariants}
            d="M659.897 112.466L667.12 135.024L682.168 130.368L675.079 107.392L659.897 112.466Z"
            fill="#F9865F"
          />
          <motion.path variants={pathVariants}
            d="M669.16 143.196L677.319 164.297L690.946 159.775L684.526 137.804L669.16 143.196Z"
            fill="#FAD8B0"
          />
          <motion.path variants={pathVariants}
            d="M405.472 198.477H246.718C241.657 198.477 237.555 202.586 237.555 207.654V229.174C237.555 234.242 241.657 238.351 246.718 238.351H405.472C410.532 238.351 414.635 234.242 414.635 229.174V207.654C414.635 202.586 410.532 198.477 405.472 198.477Z"
            fill="#7595EC"
          />
          <motion.path variants={pathVariants}
            d="M345.983 210.216H259.441C257.77 210.216 256.415 211.573 256.415 213.247C256.415 214.922 257.77 216.279 259.441 216.279H345.983C347.654 216.279 349.009 214.922 349.009 213.247C349.009 211.573 347.654 210.216 345.983 210.216Z"
            fill="white"
          />
          <motion.path variants={pathVariants}
            d="M257.284 224.149H404.402"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M182.008 123.451L184.511 126.196C185.02 126.753 185.286 127.49 185.252 128.245C185.218 128.999 184.886 129.709 184.33 130.218L180.231 133.968C179.675 134.477 178.939 134.744 178.186 134.71C177.433 134.676 176.724 134.343 176.215 133.786L173.712 131.041L182.008 123.451Z"
            fill="#91BA83"
          />
          <motion.path variants={pathVariants}
            d="M159.465 118.115L171.272 131.061C171.882 131.73 172.918 131.777 173.587 131.166L181.746 123.7C182.415 123.089 182.462 122.051 181.851 121.382L170.045 108.436C169.435 107.767 168.398 107.72 167.73 108.331L159.57 115.797C158.902 116.408 158.855 117.446 159.465 118.115Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M147.134 176.941H132.304V190.505H147.134V176.941Z"
            fill="#FF6D66"
          />
          <motion.path variants={pathVariants}
            d="M132.304 168.215V176.94H123.442"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M635.771 23.7589H620.94V37.3237H635.771V23.7589Z"
            fill="#FAD8B0"
          />
          <motion.path variants={pathVariants}
            d="M620.94 15.0339V23.759H612.079"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M219.531 107.609C65.7089 43.7709 -52.6006 166.725 237.237 354.991C260.06 369.829 295.071 375.087 295.071 375.087"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M78.0982 116.284C80.5176 116.284 82.4788 114.32 82.4788 111.897C82.4788 109.474 80.5176 107.509 78.0982 107.509C75.6789 107.509 73.7177 109.474 73.7177 111.897C73.7177 114.32 75.6789 116.284 78.0982 116.284Z"
            fill="white"
          />
          <motion.path variants={pathVariants}
            d="M50.2096 87.7981L55.0082 83.176L66.0265 89.5063L71.5775 106.638L54.6403 99.5375L50.2096 87.7981Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M55.0082 83.176L50.2096 87.798L47.5177 84.5324L52.1156 80.1113L55.0082 83.176Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M71.5776 106.638L60.5592 94.5303"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M98.1954 414.074L110.133 475.768C110.197 476.089 110.324 476.394 110.505 476.665C110.687 476.936 110.921 477.169 111.193 477.349C111.465 477.53 111.77 477.655 112.09 477.717C112.41 477.779 112.74 477.777 113.059 477.711L125.465 475.065C126.087 474.932 126.632 474.562 126.988 474.035C127.343 473.507 127.481 472.862 127.371 472.235L116.771 410.155C116.714 409.827 116.59 409.514 116.408 409.235C116.227 408.956 115.99 408.717 115.714 408.532C115.437 408.348 115.126 408.221 114.799 408.16C114.472 408.1 114.136 408.106 113.812 408.179L100.118 411.227C99.8051 411.287 99.507 411.408 99.2409 411.584C98.9748 411.76 98.7459 411.986 98.5674 412.251C98.3888 412.515 98.264 412.812 98.2002 413.125C98.1364 413.438 98.1347 413.76 98.1954 414.074Z"
            fill="white"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M102.125 415.246L105.535 429.631L116.504 428.007L114.163 412.416L102.125 415.246Z"
            fill="#FF6D66"
          />
          <motion.path variants={pathVariants}
            d="M106.739 435.141L109.414 450.364L119.563 448.706L117.005 433.198L106.739 435.141Z"
            fill="#FAD8B0"
          />
          <motion.path variants={pathVariants}
            d="M110.016 455.84L113.41 470.225L122.623 468.501L120.433 453.73L110.016 455.84Z"
            fill="#A0C6F4"
          />
          <motion.path variants={pathVariants}
            d="M440.467 568.662L490.961 555.131L492.9 560.607L441.821 573.887L440.467 568.662Z"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M433.444 561.595L434.916 566.184"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M432.023 564.592L436.287 563.119"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M431.003 579.129L433.745 587.804"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M428.663 584.622L436.253 582.21"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M419.45 564.827L423.045 576.315"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M415.889 571.978L426.522 568.578"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M72.1794 19.1032L40.2278 4.65078L41.5487 1L73.7009 15.8208L72.1794 19.1032Z"
            stroke="white"
            stroke-width="0.67"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M72.8315 25.7684L74.0186 22.754"
            stroke="white"
            stroke-width="0.67"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M74.8378 24.8139L71.9955 23.7589"
            stroke="white"
            stroke-width="0.67"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M81.5258 17.6964L83.7829 12.0361"
            stroke="white"
            stroke-width="0.67"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M85.0704 15.8377L80.1213 13.8616"
            stroke="white"
            stroke-width="0.67"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M81.4589 30.0389L84.4685 22.5532"
            stroke="white"
            stroke-width="0.67"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M86.3411 27.8449L79.3856 25.0817"
            stroke="white"
            stroke-width="0.67"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M191.643 289.478C169.104 273.234 146.967 247.98 156.681 222.039C156.681 222.039 172.214 211.673 196.809 224.635L221.421 237.664L191.643 289.478Z"
            fill="url(#paint0_linear_16_174)"
          />
          <motion.path variants={pathVariants}
            d="M181.427 397.712C171.278 392.906 128.007 370.331 120.299 331.764C113.611 298.471 139.092 253.54 151.833 233.678C151.013 260.021 177.431 282.328 190.171 291.505C201.012 299.489 212.974 305.821 225.667 310.295L181.427 397.712Z"
            fill="white"
          />
          <motion.path variants={pathVariants}
            d="M149.893 241.516C152.652 259.033 165.994 277.17 188.7 293.548C198.945 301.121 210.202 307.215 222.139 311.651L180.34 394.38C167.566 388.016 129.829 366.48 122.79 331.278C116.955 302.022 136.751 263.22 149.927 241.516H149.893ZM156.715 222.04C156.715 222.04 108.813 286.883 117.875 332.266C126.937 377.65 182.614 400.928 182.614 400.928L229.212 308.821C214.649 303.479 205.186 299.125 191.676 289.378C169.138 273.134 147.001 247.88 156.715 221.939V222.04Z"
            fill="url(#paint1_linear_16_174)"
          />
          <motion.path variants={pathVariants}
            d="M144.091 259.719C145.496 268.154 148.824 276.151 153.818 283.087C158.811 290.024 165.336 295.712 172.883 299.71"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M186.794 309.022L212.793 322.972"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M147.803 296.93C147.803 296.93 156.163 315.536 183.082 327.627"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M126.435 299.711C126.435 299.711 127.372 319.254 140.363 325.769"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M156.163 231.82C156.163 231.82 153.755 256.94 191.642 289.479"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M170.091 236.475C170.091 236.475 182.162 235.537 199.802 248.566"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M113.243 316.558C112.474 329.001 114.029 374.099 179.236 402.87"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M529.684 291.471L502.029 346.987C502.029 346.987 520.789 353.903 506.125 375.456C506.125 375.456 540.802 389.858 563.491 352.463C586.18 315.067 529.684 291.471 529.684 291.471Z"
            fill="url(#paint2_linear_16_174)"
          />
          <motion.path variants={pathVariants}
            d="M466.382 461.148C452.388 461.148 437.624 455.421 422.459 444.117L474.191 358.24L504.972 377.649L505.172 377.733C510.552 379.711 516.245 380.698 521.976 380.647C531.697 380.707 541.191 377.701 549.112 372.056L511.292 436.949C511.208 437.067 494.923 461.199 466.382 461.199V461.148Z"
            fill="white"
          />
          <motion.path variants={pathVariants}
            d="M475.027 361.757L503.45 379.693L503.818 379.927L504.203 380.078C509.89 382.184 515.912 383.239 521.976 383.193C528.943 383.219 535.838 381.77 542.207 378.939L509.202 435.493C508.132 437.067 492.816 458.637 466.399 458.637C453.508 458.637 439.865 453.529 425.787 443.447L475.027 361.757ZM563.491 352.446C550.667 373.58 534.031 378.169 521.976 378.169C516.572 378.214 511.204 377.289 506.125 375.439L473.371 354.79L419.216 444.754C437.307 458.72 453.14 463.744 466.399 463.744C496.679 463.744 513.465 438.256 513.465 438.256L563.491 352.53V352.446Z"
            fill="url(#paint3_linear_16_174)"
          />
          <motion.path variants={pathVariants}
            d="M502.029 346.986C502.029 346.986 522.661 354.288 506.125 375.456"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M472.719 352.848C472.719 352.848 500.825 378.637 516.375 378.453C531.924 378.269 550.182 374.585 560.933 355.996"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M476.18 386.207C476.18 386.207 495.458 403.355 517.027 397.846"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M496.428 411.83C496.428 411.83 506.543 419.416 520.688 412.231"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M449.88 422.414C449.88 422.414 473.288 445.675 509.988 430.335"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M462.587 399.722C462.587 399.722 472.117 406.554 478.086 408.732"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M534.432 307.581C534.432 307.581 555.75 314.565 558.308 342.749"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M545.149 342.398C545.149 342.398 554.964 357.62 538.378 372.826"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M421.122 440.567C421.122 440.567 474.625 507.687 513.499 429.196"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M34.7438 274.138H47.2168"
            stroke="#FF6D66"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M729.87 123.803H742.343"
            stroke="#FF6D66"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M395.223 38.0605H407.713"
            stroke="#FAD8B0"
            stroke-miterlimit="10"
          />
          <motion.path variants={pathVariants}
            d="M753.696 188.63L765.968 190.84"
            stroke="#FAD8B0"
            stroke-miterlimit="10"
          />
          <motion.path variants={pathVariants}
            d="M263.504 500.503H275.994"
            stroke="#A0C6F4"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <motion.path variants={pathVariants}
            d="M780.581 348.829C782.862 348.829 784.711 346.977 784.711 344.692C784.711 342.408 782.862 340.556 780.581 340.556C778.3 340.556 776.451 342.408 776.451 344.692C776.451 346.977 778.3 348.829 780.581 348.829Z"
            fill="#91BA83"
          />
          <motion.path variants={pathVariants}
            d="M4.12979 150.18C6.41061 150.18 8.25959 148.328 8.25959 146.043C8.25959 143.759 6.41061 141.907 4.12979 141.907C1.84897 141.907 0 143.759 0 146.043C0 148.328 1.84897 150.18 4.12979 150.18Z"
            fill="#91BA83"
          />
          <defs>
            <linearGradient
              id="paint0_linear_16_174"
              x1="150.244"
              y1="250.024"
              x2="229.354"
              y2="250.297"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#AA367C" />
              <stop offset="1" stop-color="#4A2FBD" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_16_174"
              x1="109.878"
              y1="301.97"
              x2="242.514"
              y2="302.276"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#AA367C" />
              <stop offset="1" stop-color="#4A2FBD" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_16_174"
              x1="497.955"
              y1="330.243"
              x2="576.769"
              y2="330.466"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#AA367C" />
              <stop offset="1" stop-color="#4A2FBD" />
            </linearGradient>
            <linearGradient
              id="paint3_linear_16_174"
              x1="410.422"
              y1="402.211"
              x2="580.551"
              y2="403.021"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#AA367C" />
              <stop offset="1" stop-color="#4A2FBD" />
            </linearGradient>
          </defs>
        </motion.svg>
      </div>
    </div>
  )
}

export default Contact
