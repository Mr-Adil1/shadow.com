import React from 'react';
class Loading extends React.Component {
constructor(props) {
    super(props);

    this.state = {
        flex:'d-flex justify-content-center align-items-center position-relative',
    };
}

    render() {
        return <div className={`container vh-100 ${this.state.flex}`}>
              <p className={`text-primary fs-1 ${this.state.flex}`}>
                <span className='loadingball d-block'></span>
                Loading...
              </p>
        </div>;
    }
}

export default Loading;