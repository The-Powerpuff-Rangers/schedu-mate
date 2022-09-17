import './name.scss';


const Name = ({ name }) => {
        
    return (
        <div className='friendName'>
            <div className='__text'>{name}</div>
        </div>
    );
};

export default Name;

{/* <Class
        name={'MATH123'}
        number={'8172839'}
        time={'8:30-10:30 AM'}
        ></Class> */}