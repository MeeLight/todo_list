// Assets
import baseBackground from '/background.svg'

// Css
import { css } from '../../../styled-system/css'

interface IProps {}

export default function BaseBackground({}: IProps) {
  const styles = css({
    pos: 'fixed',
    top: '0',
    left: '0',
    w: '[100%]',
    minH: '[100vh]',
    zIndex: '[-1]',
    filter: '[blur(100px)]'
  })

  return (
    <img
      src={baseBackground}
      className={styles}
      alt='bg'
      fetchPriority='high'
    />
  )
}
