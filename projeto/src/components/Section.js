function Section (props) {

    const {label, data, onDataChangeMais, onDataChangeMenos} = props;

    return (
        <div className="input-group">
            <label for="men">{label}</label>
            <input type="number" id="men" value={data} className="input-valid"/>
            <div className="button-group">
                <button className="input-group__button--small" onClick={onDataChangeMenos} >-</button>
                <button className="input-group__button--small" onClick={onDataChangeMais}>+</button>
            </div>
        </div>
    );
}


export default Section;



