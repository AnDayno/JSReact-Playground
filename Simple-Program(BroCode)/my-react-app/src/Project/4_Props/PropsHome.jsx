/*
    Props = Read-only properties that are shared between components.
            A parent component can send data to a child component.
            <Component key=value />

    propTypes(Depricated) = a mechanism that ensure that the passed value
                            is of the correct datatype.
                            age: PropTypes.number

    defaultProps(Depricated) = default values for props in case they are not
                   passed from the parent component
                   name: "Guest"
*/
import Student from "./Student";

function PropsHome() {

    return(
        <>
            <Student name="Umi" age={19} isStudent={true}/>
            <Student name="Kitsu" age={21} isStudent={false}/>
            <Student />
        </>
    )
}

export default PropsHome