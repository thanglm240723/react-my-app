import PropTypes from 'prop-types';

function List2(props) {
    const category = props.category|| "Category";
    const iteamList = props.iteam || [];
    const listIteam = iteamList.map(iteam => (
        <li key={iteam.name}>
            {iteam.name} : <b>{iteam.color}</b> : {iteam.cal}
        </li>
    ));

    return (
        <>
            <h3>{category}</h3>
            <ol>{listIteam}</ol>
        </>
    );
}

List2.propTypes = {
    category: PropTypes.string,
    iteam: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        color: PropTypes.string,
        cal: PropTypes.number
    })),
};

List2.defaultProps = {
    category: "Category",
    iteam: [],
};

export default List2;