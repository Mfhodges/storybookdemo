import React from 'react';

/*NOTE: Do i need form ID? */

/**
 * 
 * @param {string} title - text title
 * @param {string} description - text description of form 
 * @param {?} children - components/html rendered within form
 * @param {func} handleSubmit - function invoked on form submit
 *  
 * 
 */

const Form = ({title="",description="",children, handleSubmit}) => {
    return (
        <>
        { title ? (<h1 className="text-lg leading-6 font-medium text-gray-900">{title}</h1>) : null}

        { description ? ( <h3 className="text-sm font-normal leading-5 text-gray-500">{description}</h3>) : null }
        <form  onSubmit={handleSubmit}>
            {children}
        </form>
        </>
    )
}

export default Form;