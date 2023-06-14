import PropTypes from 'prop-types'

export const FirstApp = ({ title, subTitle, name}) => {

    return (
        <>
            <h1 data-testid="test-title">{ title }</h1>
            <p>{ subTitle }</p>
            <p>{ subTitle }</p>
            <p>{ name }</p>
        </>
    )
}

FirstApp.proptypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string,
}

FirstApp.defaultProps = {
    name: 'Marcos Alarcon',
    title: "No hay titulo",
    subTitle: "No hay subtitulo",
}