import React from 'react';
import classes from './Users.module.css';

const PageSpun = ({ currentPage, p, setCurrentPage, onPageChanged }) => {
    return (
        <span
            className={
                currentPage === p ? classes.selectedPage : classes.page
            }
            onClick={
                currentPage !== p ?
                    () => {
                        setCurrentPage(p)
                        onPageChanged(p)
                    } 
                    :
                    null
            }
        > {p} </span>
    )
}

const Paginator = (props) => {

    const pageRangeLimit = 5;
    return (
        <div className={classes.pages}>
            <div>
                {props.pages.map(p => {
                    if (p === 1 || Math.abs(props.currentPage - p) < pageRangeLimit || p === props.pages.length) {
                        return (
                            <PageSpun p={p}
                                currentPage={props.currentPage}
                                setCurrentPage={props.setCurrentPage}
                                onPageChanged={props.onPageChanged} />
                        )
                    } else if (Math.abs(props.currentPage - p) < pageRangeLimit+1) {
                        return '...'
                    }

                }
                )}
            </div>
        </div>
    );
}

export default Paginator;