import type { NextPage } from 'next';
import { titleStyle, containerStyle } from '../styles/styles.css';

const InlineStyle: NextPage = () => {
  return (
    <div className={containerStyle}>
      <h1 className={titleStyle}>This is using Inline Style</h1>
    </div>
  );
};

export default InlineStyle;
