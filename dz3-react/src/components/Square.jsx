import React from 'react';

class Square extends React.Component
{
    render()
    {
        const { color, onClick } = this.props;

        const style = {
            width: '200px',
            height: '200px',
            backgroundColor: color ? 'blue' : 'red',
        };

        return <div style={style} onClick={onClick}></div>;
    }
}

export default Square;
