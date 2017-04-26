import React from 'react';
import ContestPreview from './ContestPreview';
import PropTypes from 'prop-types';

const ContestList = ({contests, onContestClick}) => (
    <div className="ContestList" key={contests.id}>
          {Object.keys(contests).map(contestID =>
              <ContestPreview 
                key={contests.id}
                onClick={onContestClick}
                {...contests[contestID]} />
          )}
    </div>
        );
ContestList.propTypes = {
    contests: PropTypes.object,
    onContestClick: PropTypes.func.isRequired,
};
        
export default ContestList;