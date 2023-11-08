import React from "react";
import "../styles/TopicListItem.scss";

const TopicListItem = ({id, title, fetchPhotosByTopicId}) => {
  return (
    <div className="topic-list__item" onClick={() => fetchPhotosByTopicId(id)}>
      <span>{title}</span>
    </div>
  );
};

export default TopicListItem;
