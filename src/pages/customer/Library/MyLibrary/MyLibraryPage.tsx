import PageWrapper from 'components/PageWrapper';
import React from 'react';
import FilesComponent from 'components/Library/FilesComponent';
import ShareDataModal from 'components/Library/SharePopup';
import { FakeData } from './FakeData';
import 'components/Library/style.scss';

const moduleTitle = 'My Library';

function MyLibraryPage() {
  return (
    <PageWrapper pageTitle={moduleTitle} icon="fas fa-folder-open">
      <div className="mai-div">
        <ShareDataModal active shared={false} />
        {FakeData.map((f, i) => (
          <FilesComponent key={i} f={f} />
        ))}
      </div>
    </PageWrapper>
  );
}
export default React.memo(MyLibraryPage);