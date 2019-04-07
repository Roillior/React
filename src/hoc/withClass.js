import React from 'react';

//wrap this as the div for having one component
// const withClass = props => {
//     <div className={props.classes}>
//         {props.children}
//     </div>
// }

//use this in the export default withClass(App, class.App);
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props}/>
        </div>
    );
};

export default withClass;