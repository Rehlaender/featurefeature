// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from './Counter.css';

import {Paragraph} from './Paragraph';
import {Shower} from './Shower';

type Props = {
  addParagraph: () => void,
  deleteParagraph: () => void,
  editParagraph: () => void,
  saveParagraph: () => void,
};

export default class Writer extends Component<Props> {
  props: Props;

  render() {
    const {
      addParagraph,
      deleteParagraph,
      editParagraph,
      saveParagraph,
      paragraphs
    } = this.props;
    const renderedParagraphs = paragraphs.map((paragraph, i) => {
      return (
        <Paragraph
          key={i}
          data={paragraph}
          deleteAction={() => deleteParagraph(paragraph)}
          saveAction={(paragraphOutputData) => saveParagraph(paragraphOutputData)}
          isEditing={paragraph.isEditing}
          words={paragraph.words}
          onClickAction={() => {editParagraph(paragraph)}}
        />
      );
    });
    return (
      <div>
        <h1>feature feature</h1>
        <Shower data={paragraphs} />
        <div className={styles.btnGroup}>
          <button
              className={styles.btn}
              onClick={() => addParagraph()}
              data-tclass="btn"
              type="button">
              +
            </button>
            <Link to="/counter">to counter</Link>
        </div>
        {renderedParagraphs}
      </div>
    );
  }
}
