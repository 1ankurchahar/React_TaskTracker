import React from "react";
import Button from "./Button";
import PropTypes from "prop-types";

const Header = ({ title, onAdd, showAddTask }) => {
    const onClick = () => {
        console.log("CLICKED");
    };

    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button
                text={showAddTask ? "Close" : "Add"}
                color={showAddTask ? "red" : "green"}
                onClick={onAdd}
            />
        </header>
    );
};

Header.defaultProps = {
    title: "Task Tracker",
};
Header.propTypes = {
    title: PropTypes.string,
};

export default Header;
