import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({ title }) => {
    // const onClick = () => {
    //     console.log('Click')
    // }

    return (
        <header >
            <h1>{ 'To-do-list'}</h1>
            {/* <text='To-do-list'  /> */}

        </header>
    )
}
// line 11 onClick={onClick}
Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}
//block css
const headingStyle = {
    color: 'purple',

}
export default Header