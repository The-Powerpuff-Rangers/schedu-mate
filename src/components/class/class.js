import './class.scss';


const Class = ({ name, number, time }) => {
        
    return (
        <div className='class'>
            <div className='__text'>{name}</div>
            <div className='__text'>{number}</div>
            <div className='__text'>{time}</div>
        </div>
    );
};

export default Class;

{/* <Class
        name={'MATH123'}
        number={'8172839'}
        time={'8:30-10:30 AM'}
        ></Class> */}