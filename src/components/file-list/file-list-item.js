import React from 'react';
import FileIcon from 'components/file-list/file-icon';

const FileListItem = (props) => {
  function handleClick(event) {
    event.preventDefault();
    props.fileSelectAction(props.hash, props.mimetype, props.filename);
  }

  return (
    <tr>
      <td>
        <FileIcon mimetype={props.mimetype} />
        <a href="#noop" onClick={handleClick}> {props.filename} </a>
      </td>
      <td>
        <span> {props.size}B </span>
      </td>
      <td>
        <span> {props.mimetype} </span>
      </td>
    </tr>
  );
};

FileListItem.propTypes = {
  filename : React.PropTypes.string,
  hash     : React.PropTypes.string, // ???
  mimetype : React.PropTypes.string,
  size     : React.PropTypes.number // ???
};

export default FileListItem;
