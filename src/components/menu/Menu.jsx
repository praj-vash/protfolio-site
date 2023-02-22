import './menu.scss'

export default function Menu({classnm, handlehamburger}) {
  return (
    <div className={'menu '+classnm}>
        <ul>
            <li onClick={handlehamburger}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={handlehamburger}>
                <a href="#portfolio">Portfolio</a>
            </li>
            <li onClick={handlehamburger}>
                <a href="#works">Works</a>
            </li>
            <li onClick={handlehamburger}>
                <a href="#testimonials">Testimonials</a>
            </li>
            <li onClick={handlehamburger}>
                <a href="#contact">Contact</a>
            </li>
        </ul>
    </div>
  )
}
