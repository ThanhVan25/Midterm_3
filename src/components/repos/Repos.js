import React from 'react';
import PropTypes from 'prop-types';

const Repos = ({ repos }) => {
    return (
        <div className="card">
            <h3>Repositories</h3>
            <ul>
                {repos.map(repo => (
                    <li key={repo.id}>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            {repo.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

Repos.propTypes = {
    repos: PropTypes.array.isRequired
};

export default Repos;
