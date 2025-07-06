import styles from './Particles.module.scss'

function Particles() {
  return (
    <div className={styles.base}>
      <div className={styles.particles}></div>
      <div className={styles.bigParticles}></div>
      <div className={styles.biggestParticles}></div>
    </div>
  )
}

export default Particles
