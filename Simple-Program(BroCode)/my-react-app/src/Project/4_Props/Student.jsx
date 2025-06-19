import PropTypes from 'prop-types'

import styles from './Student.module.css'

 function Student({name = "Guest", age = 0, isStudent = false}) {

    return(
        <div className={styles.student}>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Student: {isStudent ? "Yes" : "No"}</p>
        </div>
    )
 }

 //Not working anymore
Student.propTypes={
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
}

//Not working anymore
Student.defaultProps = {
    name: "Guest",
    age: 0,
    isStudent: false,
}

 export default Student