import React from 'react';
import { connect } from 'dva';
import Top from '../components/yk-header-top/top';
import Main from '../components/Main/Main';
function IndexPage() {
  return (
    <header>
      <Top />,<Main/>
    </header>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
